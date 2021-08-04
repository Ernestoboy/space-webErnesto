import React, { useState } from "react";
import "./Contactar.css";

import { db } from "../firebase";

const Contactar = (props) => {
  
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fondo, setFondo] = useState();
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
      
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

  
    setEmail("");
    setMessage("");
  };


  const SeccionContactar = {
    position:"relative",
  width:"100vw",
  height:"100vh",
  background: fondo === "oscuro" ? "linear-gradient(rgb(8,8,95),rgb(6,6,102,0.8),rgb(8,8,95))" : "linear-gradient(-40deg,rgb(62,80,193,1) , rgb(29,146,226,1))" ,
  display: "flex",
      justifyContent: "center",
      alignItems: "center",
     zIndex:"10",
  }
  const FondoColor = (e) => {
    const { name } = e.target;

    setFondo(name);
  };
  return (
    <div style={SeccionContactar} ref={props.enlace}>
      <div class="contenedor-contactar">
      <div className="contenedor-botones">
<div className="botones">
      <button onClick={FondoColor} name="claro"><i class="fas fa-sun"></i></button>
      <button onClick={FondoColor} name="oscuro"><i class="fas fa-moon"></i></button>
</div>     
</div>  
        <div class="contenedor-1">
          <div className="contenido-1-izquierdo">
            <p className="titulo-metodous">Metodo de trabajo</p>
            <p className="comentario">
              Para la realizacion de tu pagina web tanto al inicio como en el
              proceso trataremos ciertos parametros para que tanto la entrega de
              tu pagina web como la paga puedan ser confiables y efectivas{" "}
              <br />
              <br />
              para comenzar :
            </p>
            <p className="ListaMetodoDeTrabajo">
              1- El nombre de las secciones que quieres que contenga tu web (
              Incio , productos , eventos , etc . )
            </p>
            <p className="ListaMetodoDeTrabajo">
              2- De mi parte un informe en pdf de las caracteristicas y
              funciones de tu pagina web de tu negocio como la web que
              administrara la web de tu negocio .
            </p>
            <p className="ListaMetodoDeTrabajo">
              3- Monto de tu inversion y fecha de entrega .
            </p>
          </div>
        </div>
        <div class="contenedor-2">
          <div class="contenedor-form">
            <form onSubmit={handleSubmit}>
              <p class="titulo-contactarme">Contactarme</p>

              <label class="correo">Correo</label>
              <input placeholder="Email" 
               value={email}
               onChange={(e) => setEmail(e.target.value)}/>

              <textarea placeholder="Cuentame acerca de tu negocio"  value={message}
          onChange={(e) => setMessage(e.target.value)}></textarea>

              <button type="submit">
                Registrarte
              </button>
            </form>
          </div>
        </div>

        <div class="espacial">
          <p>
            <i>1</i>Diversifica tu estrategia de marketing.
          </p>
          <p>
            <i>2</i>Apuesta por la retención del cliente.
          </p>
          <p>
            <i>3</i>Manténte actualizado.
          </p>
          </div>
         

        </div>
   
      </div>
  );
}

export default Contactar;
