import React from "react";
import "./cardAbout.scss";

export function CardAbout(props) {
    const { imagen, titulo, descripcion } = props;
    return (
        <div className="carta">
            <div className="carta__aside">
                <img src={imagen} className="carta__aside-img" alt="imagen para about us"></img>
            </div>
            <div className="carta__content">
                <div className="carta__titulo">
                    <h2 style={{ margin: "0px", textAlign: "center" }}>
                        {titulo}
                    </h2>
                </div>
                <div className="carta__descripcion">
                    <p style={{ fontSize: "14px" }}>{descripcion}</p>
                </div>
            </div>
        </div>
    );
}
