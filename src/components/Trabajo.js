import React from 'react'
import {
    Link,
} from "react-router-dom";

const Trabajo = ({ data, numberPagination }) => {


    return (

        <Link to={'/project/' + numberPagination + "/" + data.proyecto?.slug} >
    
            <div className="trabajo" id="trabajo" style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.658), rgba(0, 0, 0, 0)), url(' + data.imagen?.url_imagen + ')' }}>

                <div className="titulo">
                    {data.proyecto?.nombre}
                </div>

                <div className="numero_paginacion">
                    <span>{numberPagination} / {data.total_posts}</span>
                </div>

            </div>

        </Link>

    )
}

export default Trabajo
