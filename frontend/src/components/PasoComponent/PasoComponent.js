import React from "react";
import "./PasoComponent.scss";

export function PasoComponent(props) {
    const { id, numero, titulo, descripcion,opcional } = props;
    if(opcional===false){
        return (
            <div id={id} className="pasos">
                <p className="pasos-p">PASO</p>
                <div className="pasos__circulo">
                    <h3 className="pasos__circulo-h3">{numero}</h3>
                </div>
                <h3 className="pasos__titulo">{titulo}</h3>
                <div
                    className="pasos__descripcion"
                    dangerouslySetInnerHTML={{ __html: descripcion }}
                />
            </div>
        );
    }else{
        return (
            <div id={id} className="pasos">
                <p className="pasos-p">PASO</p>
                <h3 className="pasos__opcional">
                    {numero}
                </h3>
                <h3 className="pasos__titulo">{titulo}</h3>
                <div
                    className="pasos__descripcion"
                    dangerouslySetInnerHTML={{ __html: descripcion }}
                />
            </div>
        );
    }
}