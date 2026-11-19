import React, { useEffect, useState } from "react";
import "./Diseños1.css";

import css from "../gallery/skill-icons--css.svg";
import tailwind from "../gallery/skill-icons--tailwindcss-light.svg";
import javascript from "../gallery/skill-icons--javascript.svg";
import react from "../gallery/skill-icons--react-light.svg";
import redux from "../gallery/skill-icons--redux.svg";
import firebase from "../gallery/devicon--firebase.svg";
import node from "../gallery/skill-icons--nodejs-dark.svg";
import express from "../gallery/skill-icons--expressjs-light.svg";
import mongodb from "../gallery/skill-icons--mongodb.svg";
import jest from "../gallery/skill-icons--jest.svg";
import seccionTalleres from "../gallery/seccionTalleres.png";

const imagenesDiseñosDinamicos = [
  "https://res.cloudinary.com/dlvfscbsr/image/upload/v1795037985/image_15_gt6osa.png",
  "https://res.cloudinary.com/dlvfscbsr/image/upload/v1795040462/image_18_stpjka.png",
  "https://res.cloudinary.com/dlvfscbsr/image/upload/v1795040467/image_20_pbrj8o.png",
];

const imagenesSliderDinamico = [
  ...imagenesDiseñosDinamicos,
  imagenesDiseñosDinamicos[0],
];

const imagenesMitiko = [
  "https://res.cloudinary.com/dlvfscbsr/image/upload/v1795038478/image_17_afhuqf.png",
  "https://res.cloudinary.com/dlvfscbsr/image/upload/v1795041473/image_21_tgqv4e.png",
  "https://res.cloudinary.com/dlvfscbsr/image/upload/v1795041599/image_23_hhpcuy.png",
];

const imagenesSliderMitiko = [...imagenesMitiko, imagenesMitiko[0]];

const imagenesTalleres = [
  seccionTalleres,
  "https://res.cloudinary.com/dlvfscbsr/image/upload/v1795042453/image_25_forufb.png",
  "https://res.cloudinary.com/dlvfscbsr/image/upload/v1795042459/image_24_faw0qa.png",
];

const imagenesSliderTalleres = [...imagenesTalleres, imagenesTalleres[0]];

function Diseños1(props) {
  const [imagenActiva, setImagenActiva] = useState(0);
  const [transicionActiva, setTransicionActiva] = useState(true);
  const [imagenMitikoActiva, setImagenMitikoActiva] = useState(0);
  const [transicionMitikoActiva, setTransicionMitikoActiva] = useState(true);
  const [imagenTalleresActiva, setImagenTalleresActiva] = useState(0);
  const [transicionTalleresActiva, setTransicionTalleresActiva] = useState(true);

  useEffect(() => {
    const intervalo = window.setInterval(() => {
      setImagenActiva((imagenAnterior) => imagenAnterior + 1);
      setImagenMitikoActiva((imagenAnterior) => imagenAnterior + 1);
      setImagenTalleresActiva((imagenAnterior) => imagenAnterior + 1);
    }, 4500);

    return () => window.clearInterval(intervalo);
  }, []);

  const reiniciarSlider = () => {
    if (imagenActiva !== imagenesDiseñosDinamicos.length) return;

    setTransicionActiva(false);
    setImagenActiva(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setTransicionActiva(true));
    });
  };

  const reiniciarSliderMitiko = () => {
    if (imagenMitikoActiva !== imagenesMitiko.length) return;

    setTransicionMitikoActiva(false);
    setImagenMitikoActiva(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setTransicionMitikoActiva(true));
    });
  };

  const reiniciarSliderTalleres = () => {
    if (imagenTalleresActiva !== imagenesTalleres.length) return;

    setTransicionTalleresActiva(false);
    setImagenTalleresActiva(0);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => setTransicionTalleresActiva(true));
    });
  };

  return (
    <div class="seccion-diseño" ref={props.enlace}  >
      <div class="contenido" >
        <div class="contenedor-izquierdo-img">
          <div class="contenido-izquierdo-img">

            <div class="img-1">
              <p>Diseño responsive</p>
            </div>



            <div class="conte-imgs">
              <a href="https://www.espacioparaempreder.com/" target="_blank" rel="noopener noreferrer" title="Visitar Espacio para Emprender">
                <div class="img-2">
                  <span class="overlay-visitar">Visitar web</span>
                </div>
              </a>
              <div class="img-3">
                <div
                  className="slider-talleres-track"
                  style={{
                    transform: `translateX(-${imagenTalleresActiva * 100}%)`,
                    transition: transicionTalleresActiva ? undefined : "none",
                  }}
                  onTransitionEnd={reiniciarSliderTalleres}
                >
                  {imagenesSliderTalleres.map((imagen, indice) => (
                    <div
                      className="slide-talleres"
                      key={`${imagen}-${indice}`}
                      style={{ backgroundImage: `url("${imagen}")` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <div class="img-4"></div>
            </div>
          </div>

          <div class="contenido-izquierdo-img">

            <div class="conte-p-img5">
              <p>Diseños dinamicos</p>
              <a href="https://next-cube-one.vercel.app/" target="_blank" rel="noopener noreferrer" title="Visitar Cubestore">
                <div
                  class="img-5"
                >
                  <div
                    className="slider-dinamico-track"
                    style={{
                      transform: `translateX(-${imagenActiva * 100}%)`,
                      transition: transicionActiva ? undefined : "none",
                    }}
                    onTransitionEnd={reiniciarSlider}
                  >
                    {imagenesSliderDinamico.map((imagen, indice) => (
                      <div
                        className="slide-dinamico"
                        key={`${imagen}-${indice}`}
                        style={{ backgroundImage: `url("${imagen}")` }}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <span class="overlay-visitar" style={{ borderRadius: '0 0 12px 12px' }}>Visitar web en desarrollo</span>
                </div>
              </a>
            </div>
            <div class="conte-p-img6-img7">
              <p>Proyecto Mitiko, Fidelizacion de clientes</p>
              <a className="proyecto-mitiko-link" href="https://mitiko.app/negocios" target="_blank" rel="noopener noreferrer" title="Visitar Mitiko">
                <div class="img-6">
                  <span class="overlay-visitar" style={{ borderRadius: '0 0 10px 10px' }}>Visitar web</span>
                </div>
              </a>
              <div class="img-7">
                <div
                  className="slider-mitiko-track"
                  style={{
                    transform: `translateX(-${imagenMitikoActiva * 100}%)`,
                    transition: transicionMitikoActiva ? undefined : "none",
                  }}
                  onTransitionEnd={reiniciarSliderMitiko}
                >
                  {imagenesSliderMitiko.map((imagen, indice) => (
                    <div
                      className="slide-mitiko"
                      key={`${imagen}-${indice}`}
                      style={{ backgroundImage: `url("${imagen}")` }}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>


          <div className="skills" ref={props.enlaceskills}  >

            <div className="conocimientos">
              <h3>SKILLS</h3>
              <p>HTML , CSS , javascript ,ecmascript6<hr /> </p>
              <p>React - redux - router - react test library - Jest<hr /> </p>
              <p>Tailwind - styled Components - SASS<hr /> </p>
              <p className="resaltado">Control de versiones: Git - Github<hr /> </p>

              <div className="logo-tecnologias">



                {/* React */}
                <div className="icon-container">
                  <img src={css} className="icon" />
                </div>


                <div className="icon-container">
                  <img src={tailwind} className="icon" />
                </div>

                <div className="icon-container">
                  <img src={javascript} className="icon" />
                </div>

                <div className="icon-container">
                  <img src={react} className="icon" />
                </div>

                <div className="icon-container">
                  <img src={redux} className="icon" />
                </div>

                <div className="icon-container">
                  <img src={jest} className="icon" />
                </div>

                <div className="icon-container">
                  <img src={node} className="icon" />
                </div>

                <div className="icon-container">
                  <img src={express} className="icon" />
                </div>

                <div className="icon-container">
                  <img src={mongodb} className="icon" />
                </div>

                <div className="icon-container">
                  <img src={firebase} className="icon" />
                </div>






              </div>
            </div>

          </div>



        </div>

        <div class="ancho-contenido-derecho-texto">
          <div class="contenido-derecho-texto">
            <div class="conte-texto">
              <p class="titulo-seccion-diseño">Diseño web responsive</p>
              <p>
                Tanto el diseño visual como las funciones estaran a la
                perfeccion sin importar el tipo de dispositivo en el que la
                pagina web sea visitada , ya que cambiara sus dimensiones o
                estructura sin importar donde esta sea vista.
              </p>
            </div>

            <div class="conte-texto">
              <p class="titulo-seccion-diseño">Contenido Administrable</p>
              <p>
                Administrable si cuentas con negocio de ventas tendras en muchas
                ocaciones nuevos productos , ofertas , historias algo nuevo que
                compartirles a tus clientes por ende necesitaras una web
                administrable para hacerle cambios al contenido.
              </p>
            </div>

            <div class="conte-texto">
              <p class="titulo-seccion-diseño">Registro de usuarios</p>
              <p>
                Manten a tus clientes regitrados ya sea para tus estadisticas de
                ventas como para tener contacto con ellos via correo electronico
                , llevandole notificaciones de tus descuentos , nueva coleccion
                de productos o eventos de tu negocio .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Diseños1;
