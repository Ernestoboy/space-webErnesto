import "./App.css";
import { useEffect, useRef, useState } from "react";

import "./component/fontawesome-free-5.15.1-web/css/all.min.css";

import Inicio from "./component/Inicio";
import Diseños1 from "./component/Diseños1";
import Diseños2 from "./component/Diseños2";
import Contactar from "./component/Contactar";
import Footer from "./component/Footer";
import WhatsAppFloat from "./component/WhatsAppFloat";

function App() {
  const enlacediseños = useRef(null);
  const enlacecontactar = useRef(null);
  const enlaceskills = useRef(null);
  const [navmovil, setNavmovil] = useState(false);
  const [seccionActiva, setSeccionActiva] = useState("inicio");

  useEffect(() => {
    const secciones = [
      { nombre: "diseños", ref: enlacediseños },
      { nombre: "skills", ref: enlaceskills },
      { nombre: "contactar", ref: enlacecontactar },
    ];

    const actualizarSeccionActiva = () => {
      const lineaDeActivacion = window.innerHeight * 0.45;
      let seccionActual = "inicio";

      secciones.forEach(({ nombre, ref }) => {
        if (ref.current?.getBoundingClientRect().top <= lineaDeActivacion) {
          seccionActual = nombre;
        }
      });

      setSeccionActiva(seccionActual);
    };

    actualizarSeccionActiva();
    window.addEventListener("scroll", actualizarSeccionActiva, { passive: true });
    window.addEventListener("resize", actualizarSeccionActiva);

    return () => {
      window.removeEventListener("scroll", actualizarSeccionActiva);
      window.removeEventListener("resize", actualizarSeccionActiva);
    };
  }, []);

  const onScroll = (ref) => () => {
    if (!ref)
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    else ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const navPanelStyle = {
    transform: navmovil ? "translateX(0)" : "translateX(110%)",
    opacity: navmovil ? 1 : 0,
    pointerEvents: navmovil ? "auto" : "none",
  };

  const flan = () => {
    if (navmovil === false) {
      setNavmovil(true);
    } else setNavmovil(false);
  };

  return (
    <div className="App">
      {/* ===== FONDO ESPACIAL ===== */}
      <div className="stars-layer-1"></div>
      <div className="stars-layer-2"></div>
      <div className="stars-layer-3"></div>
      <div className="nebula-glow"></div>
      <div className="planet-saturn">
        <div className="saturn-ring"></div>
      </div>
      <div className="distant-planet"></div>

      <div className="Contenedor-navegacion">
        <nav>
          <p className={`tab1${seccionActiva === "inicio" ? " active" : ""}`} onClick={onScroll()}>
            Inicio
          </p>
          <p className={`tab2${seccionActiva === "diseños" ? " active" : ""}`} onClick={onScroll(enlacediseños)}>
            Diseños
          </p>
          <p className={`tab3${seccionActiva === "skills" ? " active" : ""}`} onClick={onScroll(enlaceskills)}>
            skills
          </p>
          <p className={`tab4${seccionActiva === "contactar" ? " active" : ""}`} onClick={onScroll(enlacecontactar)}>
            contactar...
          </p>
        </nav>
      </div>

      <div className="Contenedor-navegacion-movil" onClick={flan}>
        <i className="fa fa-bars"></i>
        <nav style={navPanelStyle}>
          <p className={`tab1-movil${seccionActiva === "inicio" ? " active" : ""}`} onClick={onScroll()}>
            <i className="fa fa-user"></i>Inicio
          </p>
          <p className={`tab2-movil${seccionActiva === "diseños" ? " active" : ""}`} onClick={onScroll(enlacediseños)}>
            <i className="fa fa-object-group"></i>Diseños
          </p>
          <p className={`tab3-movil${seccionActiva === "skills" ? " active" : ""}`} onClick={onScroll(enlaceskills)}>
            <i className="fa fa-brain"></i>Skills
          </p>
          <p className={`tab4-movil${seccionActiva === "contactar" ? " active" : ""}`} onClick={onScroll(enlacecontactar)}>
            <i className="fa fa-satellite"></i>Contactar
          </p>
        </nav>
      </div>

      <div className="contenedor-redes">
        <div className="nombre">Ernesto Ulloa</div>
        <div className="redes">
          <a
            className="descargar-cv"
            href="./Web_Developer_EdgarGutierrez.pdf"
            download
          >
            Descargar CV
          </a>
          <a href="https://github.com/Ernestoboy" target="_blank">
            <i className="fab fa-github">
              <p>github</p>
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/ernesto-ulloa-0b61631ba/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div class="fondo-circular"></div>

      <Inicio />
      <Diseños2 />
      <Diseños1 enlace={enlacediseños} enlaceskills={enlaceskills} />
      <Contactar enlace={enlacecontactar} />
      <Footer />

      {/* ===== WHATSAPP FLOTANTE ===== */}
      <WhatsAppFloat />
    </div>
  );
}

export default App;
