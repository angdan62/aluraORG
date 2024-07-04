import { useState } from "react";
import "./CampoTexto.css"

const CampoTexto = (props) => {

    //Guardar los datos de los inputs mediante estados

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const placeholderModificado = `${props.placeholder}...`;
    return <div className="campo-texto">
        <label>{props.titulo.toUpperCase()}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor} 
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto