


import "./App.css";
import { useRef, useState } from "react";

import "./component/fontawesome-free-5.15.1-web/css/all.min.css";

import Inicio from "./component/Inicio";
import Diseños1 from "./component/Diseños1";
import Diseños2 from "./component/Diseños2";
import Contactar from "./component/Contactar";
import Footer from "./component/Footer";



function App() {
  const enlacediseños = useRef(null);
  const enlacecontactar = useRef(null);
  const enlaceskills = useRef(null);
  const [navmovil , setNavmovil] = useState(false);

  const onScroll = (ref) => () => {
    if (!ref)
      window.scroll({
        top: 0,
        behavior: "smooth" ,
      });
    else ref.current.scrollIntoView({ behavior: "smooth" } )





  };


  const navegacion = {
    position: "relative",
    width: "21vw",
    height: "auto",
    left:  navmovil  ? "-9vw" : "31vw" ,
    borderTopLeftRadius:"5vw",
    borderBottomLeftRadius:"5vw",
    overflow: "hidden",
    top:"0vh",
    background: "linear-gradient(120deg,rgb(56,104,252,1), rgb(41,72,255,1))",
    boxShadow: "0px 2px 6px 3px rgb(20,20,20,0.2)",
    transition: "0.5s all ease"
   
    
  }




  const flan = () => {
    if (navmovil === false) {
      setNavmovil(true);
    } else setNavmovil(false);
    


  };

  return (
    <div className="App">


<div className="Contenedor-navegacion" >
<nav >
  <p className="tab1" onClick={onScroll()}>Inicio</p>
  <p className="tab2" onClick={onScroll(enlacediseños)}>Diseños</p>
  <p className="tab3" onClick={onScroll(enlaceskills)}>skills</p>
  <p className="tab4" onClick={onScroll(enlacecontactar)}>contactar...</p>
  
  </nav>
  </div>


  
  <div className="Contenedor-navegacion-movil" onClick={flan} ><i class="fa fa-bars"></i>

  <nav style={navegacion}>
  <p className="tab1-movil" onClick={onScroll()}><i class="fa fa-user"></i>Inicio</p>
  <p className="tab2-movil" onClick={onScroll(enlacediseños)}><i class="fa fa-object-group"></i>Diseños</p>
  <p className="tab3-movil" onClick={onScroll(enlaceskills)}><i class="fa fa-brain"></i>skills</p>
  <p className="tab4-movil" onClick={onScroll(enlacecontactar)}><i class="fa fa-satellite"></i>contactar..</p>
  
  </nav>
  </div>







<div className="contenedor-redes">
<div className="nombre">Ernesto Ulloa</div>
<div className="redes">
<a className="descargar-cv" href="./portafolio-vol2.pdf" download>Descargar CV</a>
<a href="https://github.com/Ernestoboy" target="_blank"><i className="fab fa-github"><p>github</p></i></a>
<a href="https://www.linkedin.com/in/ernesto-ulloa-0b61631ba/" target="_blank"><i className="fab fa-linkedin"></i></a>

 




</div>
</div>










  <div class="fondo-circular"></div>

<Inicio/>  
<Diseños2/>
<Diseños1 enlace={enlacediseños} enlaceskills={enlaceskills}/>
<Contactar enlace={enlacecontactar} />
<Footer />
  
    </div>
  );
}

export default App;