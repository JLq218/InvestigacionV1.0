import React, { useState, useEffect } from "react";
import { Image, Transition } from "semantic-ui-react";
import acit from "../../images/logo-gob-05-25.png";
import { developers } from "../../data/equipoDesarrollo";
import "./DesarrolladoPor.scss";

export function DesarrolladoPor() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  return (
    <div className="contenedor-page">
      <Transition animation="fade down" duration={800} visible={visible}>
        <div>
          <h2 className="tituloPage">🏗️ EQUIPO DE DESARROLLO</h2>
          <p className="descripcionPage">
            Esta <b>plataforma web</b> es el resultado del{" "}
            <b>trabajo colaborativo</b> entre{" "}
            <b>profesionales en informática</b>,{" "}
            <b>profesionales de la salud</b>,{" "}
            <b>especialistas de diversas disciplinas</b> y la{" "}
            <b>Agencia de Ciencia, Tecnología e Innovación</b>. Cada integrante
            aportó su <b>tiempo, conocimiento y experiencia</b> para construir
            una plataforma moderna, accesible y orientada a{" "}
            <b>impulsar el desarrollo de la investigación en salud</b>.
          </p>
        </div>
      </Transition>
      <Transition animation="fade up" duration={800} visible={visible}>
        <div className="devpage-content-center">
          <h3 className="devpage-collab-title">🖥️ EQUIPO DE DESARROLLO WEB</h3>

          <div className="devpage-developers-list">
            {developers.map((dev, index) => (
              <div
                key={index}
                className="devpage-developer-card"
                style={{
                  borderLeft: `8px solid ${dev.color}`,
                }}
              >
                <h4>{dev.nombre}</h4>
                <p>{dev.descripcion}</p>
              </div>
            ))}
          </div>

          <h3 className="devpage-collab-title">📚 CON LA COLABORACÓN DE</h3>
          <a
            href="https://cienciaytecnologia.jujuy.gob.ar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="devpage-collab-img"
              centered
              src={acit}
              alt="Agencia de Ciencia y Tecnología"
            />
          </a>
        </div>
      </Transition>
    </div>
  );
}
