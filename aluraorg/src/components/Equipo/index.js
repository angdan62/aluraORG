import "./Equipo.css"
import Colaborador from "../Colaborador"

const Equipo = (props) => {

    //DESESTRUCTURACIÓN -> TOMAR LOS DATOS DE UN PROPS Y SEPARARLO EN VARIABLES
    const {colorPrimario, colorSecundario, titulo} = props.datos;
    const { colaboradores } = props; 

    const colorFondo = {
        backgroundColor: colorSecundario
    }
    const colorTitulo = {
        borderColor: colorPrimario
    }

    return <>
    {   colaboradores.length > 0 && 
        <section className="equipo"style={ colorFondo}>
            <h3 style={colorTitulo} >{titulo}</h3>
            <div className="colaboradores">
            {
                colaboradores.map((colaborador, index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                />)
            }
            </div>
        </section>
    }</>
}

export default Equipo