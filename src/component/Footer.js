import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="contenedor-footer">
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
            React<i class="fab fa-react"></i>
          </p>
          <p>
            Angular<i class="fab fa-angular"></i>
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
        <div className="contenedor-github">
          <i class="fab fa-github-square">
            <p>Github</p>
          </i>
          <p>Correo: nellastesi@gmail.com</p>
        </div>

       
      </div>
    );
  }
}

export default Footer;
