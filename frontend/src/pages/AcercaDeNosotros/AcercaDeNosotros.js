import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import "./AcercaDeNosotros.scss";
import { CardAbout } from "../../components";
import misionImagen from "../../images/mision.jpg";
import visionImagen from "../../images/vision.jpg";

export function AcercaDeNosotros() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Grid stackable className="gridPage">
      <Grid.Column>
        <h2 className="tituloPage">ACERCA DE LA UNIDAD DE INVESTIGACIÓN</h2>
        <p className="descripcionPage" style={{ marginBottom: "20px" }}>
          La Unidad de INVESTIGACIÓN integra la Subdirección Provincial de
          Formación y Capacitación, de la Dirección Provincial de Capital Humano
          del Ministerio de Salud de la Provincia de Jujuy.
        </p>
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
      </Grid.Column>
    </Grid>
  );
}
