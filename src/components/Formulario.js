import axios from 'axios';
import React, { useState } from 'react';

const Formulario = () => {

    const [Inputs, setInputs] = useState({
        nombre: "",
        email: "",
        interes: "",
        mensaje: ""
    });


    const [mensajeError, setMensajeError] = useState("");
    const [envioCorrecto, setEnvioCorrecto] = useState(false);

    const contactarme = (e) => {
        e.preventDefault();

        if (Inputs.nombre.trim() === "" || Inputs.email.trim() === "" || Inputs.interes.trim() === "" || Inputs.mensaje.trim() === "") {

            setEnvioCorrecto(false);

            setMensajeError('Todos los campos son obligatorios');

            return;
        }

        if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(Inputs.email)) {

            setEnvioCorrecto(false);

            setMensajeError('El valor del campo email es incorrecto');

            return;

        }

        // ENVIAR FORMULARIO
        console.log('enviando...');

        axios({
            method: "POST",
            url: "https://api.telegram.org/bot5048855545:AAHyMzs5PPIkU9oHemIiit3hxhIjcRO77mA/sendMessage",
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            data: {
                "chat_id": "968002075",
                "text": Inputs
            }
        })
            .then(response => {

                setMensajeError("");
                setEnvioCorrecto(true);
                setInputs({
                    nombre: "",
                    email: "",
                    interes: "",
                    mensaje: ""
                });

                console.log(JSON.stringify(response.data));
            })

            .catch(err => {
                //console.log("error in request", err);
            });

    }


    function handleChange(evt) {
        /*
          evt.target es el elemento que ejecuto el evento
          name identifica el input y value describe el valor actual
        */
        const { target } = evt;
        const { name, value } = target;
        /*
          Este snippet:
          1. Clona el estado actual
          2. Reemplaza solo el valor del
             input que ejecutó el evento
        */
        const newValues = {
            ...Inputs,
            [name]: value,
        };
        // Sincroniza el estado de nuevo
        setInputs(newValues);
    }

    return (
        <form className="contactame" onSubmit={contactarme} id='contactame'>

            <div className="titulo">
                Contáctame {"( )"} {"{"}
            </div>
    
            <div className="input">
                <label htmlFor="nombre">Tu nombre es</label>
                <input type="text" value={Inputs.nombre} onChange={handleChange} name="nombre" placeholder="tu nombre" id="nombre" />
            </div>

            <div className="input">
                <label htmlFor="email">Mi email es</label>
                <input type="text" value={Inputs.email} onChange={handleChange} name="email" placeholder="nombre@email.com" id="email" />
            </div>

            <div className="input">
                <label htmlFor="interes">Estoy interesado en </label>
                <input type="text" value={Inputs.interes} onChange={handleChange} name="interes" placeholder="website" id="interes" />
            </div>

            <div className="textarea">
                <label htmlFor="mensaje">Quiero dejarte este mensaje</label>
                <br />
                <textarea name="mensaje" value={Inputs.mensaje} onChange={handleChange} id="mensaje" placeholder="Hola !!!"></textarea>
            </div>

            {mensajeError ?
                <div className='mensaje_error animate__animated animate__bounceIn'>
                    <i className="fas fa-exclamation-triangle"></i>  {mensajeError}
                </div>

                : ""}

            {envioCorrecto ?

                <div className='mensaje_envio_correcto animate__animated animate__bounceIn'>
                    <i className="fas fa-check-circle"></i> Tu mensaje fue enviado con exicto, te estare RESPONDIENDO  ante de las 24 horas.
                </div>

                : ""}

            <button type="submit" className="btn_enviar">Contactar</button>

            <div className="cierre_de_parentesis">

                {"}"}
            </div>
        </form>
    )
}

export default Formulario
