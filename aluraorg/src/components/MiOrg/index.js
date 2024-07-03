import { useState } from "react"
import "./MiOrg.css"

const MiOrg = () => {

    const [mostrarForm, actualizarMostrarForm] = useState(true);

    const manejarClick = () => {
        actualizarMostrarForm(!mostrarForm)
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={manejarClick}/>
    </section>
}

export default MiOrg