import './App.css';
import Header from "./components/Header/Header.js"
import Formulario from './components/Formulario/Formulario.js';
import MiOrg from './components/MiOrg/index.js';
import Equipo from './components/Equipo/index.js';
import { useState } from 'react';
import Footer from './components/Footer/index.jsx';



function App() {

    const [mostrarFormulario, actualizarMostrar] = useState(false);
    
    //CONST UTILIZADO PARA INICIALIZAR LISTA DE COLABORADORES VACIA
    // const [colaboradores, actualizarColaboradores] = useState([])

    //CONST UTILIZADO PARA INICIALIZAR LISTA DE COLABORADORES CON DATOS INICALES
    const [colaboradores, actualizarColaboradores] = useState([{
      equipo: "Front End",
      foto: "https://github.com/angdan62.png",
      nombre: "Angel Villa",
      puesto: "Ingeniero"
    },{
      equipo: "Devops",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor en Alura Latam"
    },{
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },{
      equipo: "Data Science",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e instructor"
    },{
      equipo: "Front End",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev. FullStack"
    }])

    const cambiarMostrar = () => {
      actualizarMostrar(!mostrarFormulario);
    }

    //REGISTRAR COLABORADORES, esta funcion debe agegarse en el componente,
    // a donde se mandaran los datos, en este caso al formulario

    const registrarColaborador = (colaborador) => {
      //SPREAD OPERATOR, son los 3 puntos antes del arreglo, nos dice que estaremos 
      // trabajando con una COPIA del arreglo
      actualizarColaboradores([...colaboradores, colaborador])
    }

  //LISTA CON DATOS DE EQUIPOS DE TRABAJOS Y SUS PROPIEDADES

  const listaEquipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]

  return (
    <div>
      <Header />
      
      {/* { mostrarFormulario === true ?  <Formulario /> : <div></div>} */}
      {/* { mostrarFormulario ? <Formulario /> : <div></div>} */}
      {/* { mostrarFormulario === true ?  <Formulario /> : <></>} */}

      { 
        mostrarFormulario && <Formulario 
          listaEquipos={listaEquipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          />
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />

      {/* MANERAS DE MOSTRAR COMPONENTES MEDIANTE METODO MAP */}
      { 
        listaEquipos.map((equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)
          }
          />)
      }

      {/* {
        listaEquipos.map((equipo) => {
            return <Equipo datos={equipo} key={equipo.titulo} />
        })
      } */}

      {/* MOSTRAR COMPONENTE FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
