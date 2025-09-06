import React from "react";
import "./Footer.scss";

export function Footer() {
  const unidad = "Unidad de Investigación de Jujuy";
  const desarrollo = "Equipo de desarrollo web";

  return (
    <div className="footer">
      <div className="footer__noResponsive">
        © 2024-2025 | {unidad} | <a href="/desarrolladores">{desarrollo}</a>
      </div>

      <div className="footer__Responsive">
        © 2024-2025 | {unidad}
        <br></br>
        <a href="/desarrolladores">{desarrollo}</a>
      </div>
    </div>
  );
}
