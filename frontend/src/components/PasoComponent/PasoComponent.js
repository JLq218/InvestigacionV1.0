import React from "react";
import "./PasoComponent.scss";

export function PasoComponent(props) {
  const { id, numero, titulo, descripcion } = props;
  return (
    <div id={id} className="paso-card">
      <div className="paso-contenido">
        <h3 className="paso-titulo">
          <b>PASO {numero}:</b> {titulo}
        </h3>
        <p
          className="paso-descripcion"
          dangerouslySetInnerHTML={{ __html: descripcion }}
        ></p>
      </div>
    </div>
  );
}
