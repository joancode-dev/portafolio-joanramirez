import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Formulario from './Formulario'
import Navegacion from './Navegacion'
import Particles from './Particles'
import Trabajo from './Trabajo'
import { Helmet } from "react-helmet";


const Principal = () => {

    const [numberPagination, setNumberPagination] = useState(1);

    const [data, setData] = useState({});

    useEffect(() => {

        async function GetPost() {
            await axios({
                method: "GET",
                url: "https://api.joanramirez.dev/api/get-proyecto.php?pagination=" + numberPagination,
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest',
                }
            })
                .then(res => {
                    setData(res.data);
        
                })

                .catch(err => {
                    console.log("error in request", err);
                });
        }
        GetPost();

    }, [numberPagination]);

    const paginacionPost = ($number) => {

        // Agregar animacion cuando se muestre un nuevo post
        document.getElementById('trabajo').classList.add('animate__animated', 'animate__pulse');

        // Eliminar la animacion despues de 1 minuto
        setTimeout(() => {
            document.getElementById('trabajo').classList.remove('animate__animated', 'animate__pulse');
        }, 1000);

        setNumberPagination($number);
    }

    return (
        <>

            <Helmet>
                <title>Joan Ramírez - Desarrollador Full Stack</title>
                <script src="/js/index.js"></script>
                <script src="/js/hover-img-3d-effect.js"></script>
                <script src="/js/particles.js"></script>
            </Helmet>

            {/*<!--Cursor-->*/}
            <div className="cursor">
                <div className="circulo" id="circulo"></div>
                <div className="puntero" id="puntero"></div>
            </div>

            <Particles />

            <div className="contenedor-page">

                <Navegacion />

                <div className="pages" id="pages">

                    <section className="home" id='inicio'>




                        <div>
                            <h1 className="nombre ">
                                Joan Ramirez <br />

                                <div className="slogan">Desarrollador FullStack</div>
                            </h1>

                            <div className="stacks">
                                <div className="stack">Websites</div>
                                <div className="stack">Mobile Apps</div>
                                <div className="stack">UX / UI</div>
                                <div className="etc">... y mucho más</div>
                            </div>

                        </div>




                    </section>


                    <section className='sobre_mi'>
                        <img src={'mi-foto.jpg'} alt='Foto de perfil' />

                        <div>
                            <h2>Sobre mi</h2>

                            <div className='mi_info'>
                                <i className="fa-solid fa-location-dot"></i> República Dominicana, Santo Domingo Este.
                            </div>

                            <br />
                            <div className='mi_info'>
                                <i className="fa-solid fa-cake-candles"></i> 01/09/2002
                            </div>

                            <p>
                                Actualmente creo, diseño, actualizo y mantengo páginas y aplicaciones móvil avanzados tanto en el lado del servidor (Back-end) como en el lado del cliente (Front-end, UX/UI).
                                Continuamente aprendiendo y adquiriendo nuevas habilidades en función a las actuales y futuras demandas y tendencias tecnológicas en el campo del diseño y desarrollo de aplicaciones web y movil en general.
                                Apasionado con el trabajo que realizo, ofreciendo en cada proyecto total atención, dedicación, personalización y calidad al cliente.
                            </p>

                            {/*<!--Button descargar curriculum-->*/}
                            <a href="curriculum-vitae.pdf" target="_blank" rel="noopener noreferrer">
                                <div className='btn_descargar_curriculum'>
                                    <i className="fas fa-download"></i>  Descargar curriculum vitae
                                </div>
                            </a>

                        </div>

                    </section>


                    <section className="trabajos" id="trabajos">
                        {numberPagination > 1
                            ?
                            <div className="boton_left" onClick={() => paginacionPost((numberPagination - 1))}>
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            :
                            <div className="boton_left_disable boton_left">
                                <i className="fas fa-chevron-left"></i>
                            </div>}

                        <Trabajo data={data} numberPagination={numberPagination} />

                        {numberPagination < data.total_posts ?

                            <div className="boton_right" onClick={() => paginacionPost((numberPagination + 1))}>
                                <i className="fas fa-chevron-right"></i>
                            </div>

                            :
                            <div className="boton_right_disable boton_right">
                                <i className="fas fa-chevron-right"></i>
                            </div>}

                    </section>

                    <section className="acerca-de" id='informacion'>

                        <div className="habilidades">

                            <div className="titulo">
                                Habilidades {"( )"} {"{"}
                            </div>

                            <br />
                            <div className="habilidad">
                                <div className="texto">Html5</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">Css3</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">SASS/Less</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">Bootstrap</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">Java Script</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">jQuery</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">Php</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">Laravel</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">MySQL</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">React.js</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">React Native</div>
                                <div className="punto"></div>
                            </div>
                            <br /> <br />
                            <div className="habilidad">
                                <div className="texto">Photoshop</div>
                                <div className="punto"></div>
                            </div>
                            <br />
                            <div className="cierre_de_parentesis">
                                {"}"}
                            </div>

                        </div>

                        <div className="linea"></div>

                        <div className="habilidades-right">

                            <div className="habilidades">

                                <div className="titulo">
                                    Educación {"( )"}  {"{"}
                                </div>

                                <br />

                                <div className="habilidad">
                                    <div className="punto"></div>
                                    <div className="texto">2018 - Actualidad: Aprendiendo de forma Autodidacta</div>
                                </div> <br /> <br />
                                <div className="habilidad">
                                    <div className="punto"></div>
                                    <div className="texto">2021 - Actualidad: Cursando El Técnico en desarrollo de Software en el Itla. </div>
                                </div>


                                <br />
                                <div className="cierre_de_parentesis">
                                    {"}"}
                                </div>

                            </div>

                            <Formulario />

                        </div>

                    </section>

                </div>

            </div>
        </>
    )
}

export default Principal