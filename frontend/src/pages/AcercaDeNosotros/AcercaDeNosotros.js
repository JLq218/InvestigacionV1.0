import React, { useEffect, useState } from "react";
import { Grid, Transition } from "semantic-ui-react";

import { CardAbout } from "../../components";

import misionImagen from "../../images/mision.jpg";
import visionImagen from "../../images/vision.jpg";
import "./AcercaDeNosotros.scss";

export function AcercaDeNosotros() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  return (
    <div className="acercade-page">
      <Grid.Column>
        <Transition animation="fade down" duration={1000} visible={visible}>
          <div>
            <h2 className="tituloPage">ACERCA DE LA UNIDAD DE INVESTIGACIÓN</h2>
            <p className="descripcionPage" style={{ marginBottom: "20px" }}>
              La <b>Unidad de Investigación</b> integra la Subdirección
              Provincial de Formación y Capacitación, de la
              <b> Dirección Provincial de Capital Humano</b> del
              <b> Ministerio de Salud de la Provincia de Jujuy</b>.
            </p>
          </div>
        </Transition>
        <Transition animation="fade down" duration={1000} visible={visible}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="contenedor-cartas">
              <CardAbout
                imagen={misionImagen}
                titulo="MISIÓN"
                descripcion="Promover, coordinar y asesorar en investigaciones científicas de salud que generen conocimiento relevante, de calidad y éticamente responsables, orientadas a proporcionar evidencia científica que guíe la toma de decisiones y las políticas públicas en el ámbito de salud."
              ></CardAbout>
              <CardAbout
                imagen={visionImagen}
                titulo="VISIÓN"
                descripcion="Consolidarnos como una unidad de referencia en investigación en salud en la provincia, reconocida por su excelencia científica, su impacto en la salud pública y su contribución al diseño e implementación de políticas y prácticas innovadoras. Conformar una Red Provincial de Investigación en salud, comprometida con el contexto local y con la generación de conocimiento alineado con las prioridades y necesidades de salud de la población."
              ></CardAbout>
            </div>
          </div>
        </Transition>
      </Grid.Column>
    </div>
  );
}
