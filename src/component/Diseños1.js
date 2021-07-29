import React from "react";
import "./Diseños1.css";
import "../gallery/visa1.png";


function Diseños1(props) {
  return (
    <div class="seccion-diseño"  ref={props.enlace}>
      <div class="contenido">
        <div class="contenedor-izquierdo-img">
          <div class="contenido-izquierdo-img">
          
          <div class="img-1">
<p>Diseño responsive</p>
</div>            

              
            
            <div class="conte-imgs">
              <div class="img-2"></div>
              <div class="img-3"></div>
              <div class="img-4"></div>
            </div>
          </div>

          <div class="contenido-izquierdo-img">
              
          <div class="conte-p-img5">
          <p>Diseños dinamicos</p>
                <div class="img-5"></div>
                </div>
              <div class="conte-p-img6-img7">
                <p>Antiguos portafolios</p>
                <div class="img-6"></div>
                <div class="img-7"></div>
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
