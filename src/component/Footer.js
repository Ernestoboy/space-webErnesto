import React, { Component } from "react";
import { useState } from "react";
import "./Footer.css";
import {CopyToClipboard} from "react-copy-to-clipboard";
function Footer(props) {
  const [copiado , setCopiado] = useState(false);

  return (
      <div className="contenedor-footer" ref={props.enlace}>
        <div className="conteIzquierdo">
          <p className="TituloFooter">Categorias</p>
          <p>
            -Blog <i class="fas fa-user"></i>
          </p>
          <p>
            -Portafolio <i class="fas fa-address-card"></i>
          </p>
          <p>
            -Formacion <i class="fas fa-graduation-cap"></i>
          </p>
          <p>
            -Tienda en linea <i class="fas fa-store"></i>
          </p>
        </div>
        <div className="conteDerecho">
          <p className="TituloFooter">Frameworks </p>
          <p>
            React(jsx)<i class="fab fa-react"></i>
          </p>
          <p>
            Tailwind(css)
          </p>
          <p>
            Express(node)
          </p>
        </div>
        <div className="contenedor-caracteristicas">
          <i class="fas fa-laptop-code"></i>
          <div className="care">
            <p>--Diseño web responsive</p>
            <p>--Contenido administrable</p>
            <p>--Registros de usuarios</p>
          </div>
        </div>
        <div className="contenedor-gmail">
        <i class="fa fa-envelope">
            <p>Gmail</p>
            </i>
            <p>Correo: edgar.guti2009@gmail.com </p>
        <CopyToClipboard text="edgar.guti2009@gmail.com">
        {copiado ?  <p className="copiado">Copiado en el portapapeles </p> : <p className="copiar" onClick={ () => setCopiado(true)}>Copiar</p>  }
</CopyToClipboard>

       
          
        </div>      

       
      </div>
  );
}

export default Footer;
