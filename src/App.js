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
  const enlacefooter = useRef(null);
 

  const onScroll = (ref) => () => {
    if (!ref)
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    else ref.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <div className="App">


<div class="Contenedor-navegacion">
<nav>
  <p class="tab1" onClick={onScroll()}>Inicio</p>
  <p class="tab2" onClick={onScroll(enlacediseños)}>Diseños</p>
  <p class="tab3" onClick={onScroll(enlacecontactar)}>Contactar</p>
  <p class="tab4" onClick={onScroll(enlacefooter)}>Footer</p>
  
  </nav>
  </div>


<div class="contenedor-redes">
<div class="nombre">Ernesto Ulloa</div>
<div class="redes">
<p class="servicio-como">Desarrollador web</p>
<a href="https://github.com/Ernestoboy" target="_blank"><i class="fab fa-github"><p>Github</p></i></a>
<a href="https://www.instagram.com/edgar_ulloa007/" target="_blank"><i class="fab fa-instagram"></i></a>

</div>
</div>










  <div class="fondo-circular"></div>

  <Inicio/>
<Diseños2/>
<Diseños1 enlace={enlacediseños} />
<Contactar enlace={enlacecontactar} />
<Footer enlace={enlacefooter} />
  
    </div>
  );
}

export default App;