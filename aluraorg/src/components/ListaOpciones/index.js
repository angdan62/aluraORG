import "./ListaOpciones.css"

const ListaOpciones = () => {

    
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    return <div className="lista-opciones">
        <label>EQUIPOS</label>
        <select>
            {/* DOS MANERAS DE USAR EL MAP */}
            {/* { equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)} */}
            { equipos.map( (equipo, index) => {
                return <option key={index}>{equipo}</option>
            })}
        </select>
    </div>

}
export default ListaOpciones