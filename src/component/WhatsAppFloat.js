import React, { useState } from "react";
import "./WhatsAppFloat.css";

const PHONE = "50360880222";
const MESSAGE = encodeURIComponent(
  "¡Hola! Estoy interesado/a en desarrollar un proyecto web para mi negocio y me gustaría conocer más sobre tus servicios. ¿Podríamos hablar?"
);
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`;

function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      className={`whatsapp-float${hovered ? " whatsapp-float--hovered" : ""}`}
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctame por WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Onda de pulso */}
      <span className="whatsapp-pulse" />

      {/* Ícono SVG oficial de WhatsApp */}
      <svg
        className="whatsapp-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.003 2C8.28 2 2 8.28 2 16.003c0 2.478.653 4.801 1.792 6.818L2 30l7.393-1.768A13.94 13.94 0 0 0 16.003 30C23.72 30 30 23.72 30 16.003 30 8.28 23.72 2 16.003 2zm0 25.454a11.39 11.39 0 0 1-5.804-1.592l-.416-.247-4.388 1.05 1.076-4.27-.271-.437A11.403 11.403 0 0 1 4.545 16c0-6.322 5.137-11.457 11.458-11.457S27.46 9.678 27.46 16c0 6.321-5.136 11.454-11.457 11.454zm6.29-8.583c-.345-.172-2.04-1.006-2.356-1.12-.316-.115-.546-.172-.776.172-.23.345-.892 1.12-1.093 1.35-.2.23-.4.258-.746.086-.345-.172-1.458-.537-2.777-1.714-1.027-.916-1.72-2.047-1.922-2.392-.2-.345-.021-.531.151-.703.155-.155.345-.402.517-.603.172-.2.23-.345.345-.574.115-.23.058-.43-.028-.603-.086-.172-.776-1.872-1.063-2.562-.28-.673-.563-.582-.776-.593l-.66-.012c-.23 0-.603.086-.919.43-.316.345-1.207 1.178-1.207 2.875 0 1.696 1.235 3.334 1.408 3.564.172.23 2.43 3.71 5.887 5.204.823.355 1.465.567 1.967.726.826.262 1.578.225 2.172.137.662-.1 2.04-.834 2.328-1.638.287-.804.287-1.493.2-1.638-.085-.144-.315-.23-.66-.402z" />
      </svg>

      {/* Tooltip */}
      <span className={`whatsapp-tooltip${hovered ? " whatsapp-tooltip--visible" : ""}`}>
        ¡Hablemos de tu proyecto!
      </span>
    </a>
  );
}

export default WhatsAppFloat;
