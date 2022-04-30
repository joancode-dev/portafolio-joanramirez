import React, { useEffect, useState } from 'react'
import './Project.css'
import {
    Navigate, Link, useParams,
} from "react-router-dom";
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Project = () => {

    const { number, slug } = useParams();

    const [project, setProject] = useState({});
    
    const [imagenes, setImagenes] = useState([]);

    const [url, setUrl] = useState('');

    const [totalPost, SetTotalPost] = useState(1);

    useEffect(() => {
        async function GetDetailProject() {
            await axios({
                method: "GET",
                url: "https://api.joanramirez.dev/api/get-detail-proyecto.php?slug=" + slug,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                }
            })
                .then(res => {
                    setProject(res.data.proyecto);
                    setImagenes(res.data.imagenes);
                })

                .catch(err => {
                    //   console.log("error in request", err);
                });
        }
        GetDetailProject();

    }, [slug]);


    const paginacion = (numberPost) => {

        axios({
            method: "GET",
            url: "https://api.joanramirez.dev/api/get-proyecto.php?pagination=" + numberPost,
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            }
        })
            .then(res => {

                if (!res.data.proyecto) {
                    setUrl('/');
                }

                SetTotalPost(res.data.total_posts);

                setUrl("/project/" + numberPost + "/" + res.data.proyecto.slug);

                // Limpiar link de la url
                setUrl("");
            })

            .catch(err => {
                //   console.log("error in request", err);
            });
    }

    useEffect(() => {
        paginacion(number);
    }, [number])

    return (
        <>

            <Helmet>
                <title>{"Joan Ramirez - " + project.nombre}</title>
                <script src="/js/index.js"></script>
            </Helmet>

            {url ?
                <Navigate to={url} />
                : ""}


            {/*<!--Cursor-->*/}
            <div className="cursor">
                <div className="circulo" id="circulo"></div>
                <div className="puntero" id="puntero"></div>
            </div>

            <div className='contenedor_detail '>
                <div className='imagenes'>

                    {imagenes.map((imagen, index) =>
                        <img src={imagen.url_imagen} alt='imagen 1' key={index} />
                    )}

                </div>

                <div className='items'>
                    <nav>
                        <ul className='left'>
                            <li className='btn_exit'>
                                <Link to="/"><i className="fas fa-times"></i></Link>
                            </li>
                        </ul>

                        <ul className='right'>
                            {Number(number) === 1 ?
                                <i className="fas fa-chevron-left" style={{ color: "grey", cursor: 'default' }}></i>
                                :
                                <i onClick={() => paginacion((Number(number) - 1))} className="fas fa-chevron-left"></i>}


                            <span>{number}<span>/</span>{totalPost}</span>

                            {totalPost === Number(number) ?
                                <i className="fas fa-chevron-right" style={{ color: "grey", cursor: 'default' }}></i>
                                :
                                <i onClick={() => paginacion((Number(number) + 1))} className="fas fa-chevron-right"></i>}

                        </ul>
                    </nav>

                    <div className='hashtags'>
                        <p>{project.hashtags}</p>
                    </div>

                    <h2 className='titulo_proyecto_detail'>{project.nombre}
                    </h2>

                    <div className='descripcion_proyecto_detail' dangerouslySetInnerHTML={{ __html: project.descripcion }}>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Project
