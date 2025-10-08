import React from "react";
import "./cardAbout.scss";

export function CardAbout(props) {
  const { imagen, titulo, descripcion } = props;
  return (
    <div className="carta">
      <div className="carta__aside">
        <img
          src={imagen}
          className="carta__aside-img"
          alt="imagen para about us"
        ></img>
      </div>
      <div className="carta__content">
        <div>
          <h2 className="carta__titulo">{titulo}</h2>
        </div>
        <div className="carta__descripcion">
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}
