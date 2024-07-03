import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = () =>{

    const manejarEnvio = (e) => {
        e.preventDefault();
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresa el nombre" required /> 
            <CampoTexto titulo="Puesto" placeholder="Ingresa el puesto" required /> 
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required /> 
            <ListaOpciones />
            <Boton texto="Crear" />
        </form>
    </section>
}

export default Formulario