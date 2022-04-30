import React from 'react'

const Navegacion = () => {

    const menu_toggle = () => {
        document.getElementById("menu_toggle").classList.toggle("menu-toggeled");
        document.getElementById("navegacion").classList.toggle("navegacion_open");
    }
    return (
        <>
            <div className="menu-toggle" id="menu_toggle" onClick={() => menu_toggle()} style={{ display: 'none' }}>
                <span></span><span></span><span></span><span></span>
            </div>

            <div className="navegacion" id="navegacion">
                <nav>
                    <ul>
                        <li><a href="#inicio">.Inicio {"( )"}</a></li>
                        <li><a href="#trabajos">.Trabajos {"( )"}</a></li>
                        <li><a href="#informacion">.Información {"( )"}</a></li>
                        <li><a href="#contactame">.Contáctame {"( )"}</a></li>
                    </ul>
                </nav>

                <div className="redes_sociales">
                    <a href="https://api.whatsapp.com/send?phone=+18297691694&text=Hola Joan Ramirez, Necesito de tu servicios." target="_blank" rel="noopener noreferrer" title="Whatsapp" className="red-social red-telefono"><i className="fab fa-whatsapp"></i></a>
                    <a href="mailto: joanramirez.dev@hotmail.com" target="_blank" rel="noopener noreferrer" title="Email" className="red-social red-email"><i className="fas fa-envelope"></i></a>
                    <a href="https://github.com/joan-ramirez" target="_blank" rel="noopener noreferrer" title="Github" className="red-social red-github"><i className="fab fa-github"></i></a>
                    <a href="https://codepen.io/joan-ramirez-dev" target="_blank" rel="noopener noreferrer" title="codepen" className="red-social red-codepen"><i class="fa-brands fa-codepen"></i></a>
                    <a href="https://www.instagram.com/joanramirez.dev" target="_blank" rel="noopener noreferrer" title="Instagram" className="red-social red-instagram"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/in/joan-ramirez-dev" target="_blank" rel="noopener noreferrer" title="Linkeding" className="red-social red-linkedin"><i className="fab fa-linkedin-in"></i></a>
                </div>

            </div>
        </>
    )
}

export default Navegacion
