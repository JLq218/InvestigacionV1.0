import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import "./ComiteDeEtica.scss";
import { TableIntegrantes } from "../../components";
import { integrantes } from "../../data/integrantesComiteEtica";

export function ComiteDeEtica() {
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
        <h2 className="tituloPage">
          COMITÉ PROVINCIAL DE ÉTICA DE INVESTIGACIÓN EN SALUD
        </h2>
        {/* <p className="descripcionPage">
          Este Comité, tiene por función principal el análisis de protocolos de
          investigación en Salud y como visión la de proteger a la Comunidad que
          participa en investigaciones sobre Salud y brindar un servicio de
          calidad y excelencia a la calidad científica que desarrolle
          investigaciones vinculadas a la Salud Humana en el territorio
          provincial, asegurando que las mismas cumplan con las leyes y
          normativas nacionales que regulan Investigación Científica, así como
          las Pautas Internacionales de Ética de la Investigación.
        </p> */}
        <h2 className="subtituloPage" style={{ marginBottom: "10px" }}>
          Integrantes:
        </h2>
        <Grid stackable columns={2} style={{ marginBottom: "5px" }}>
          <Grid.Column width={8}>
            <TableIntegrantes
              integrantes={integrantes.slice(
                0,
                Math.ceil(integrantes.length / 2)
              )}
              iconoIntegrantes="id card outline"
            />
          </Grid.Column>

          <Grid.Column width={8}>
            <TableIntegrantes
              integrantes={integrantes.slice(Math.ceil(integrantes.length / 2))}
              iconoIntegrantes="id card outline"
            />
          </Grid.Column>
        </Grid>

        {/* <p className="descripcionPage">
          Las designaciones de los miembros del CEIS son en el marco del
          cumplimiento de la Resolución Nº 1480 del Ministerio de Salud de la
          Nación adheridas por la provincia de Jujuy mediante Resolución
          Ministerial Nº 11039-S-13, vigente a la fecha y a las normas
          provinciales, nacionales e internacionales.
        </p> */}
        <h2 className="descripcionPage" style={{ marginBottom: "30px" }}>
          Las funciones que les competen a los miembros del CEIS revisten el
          carácter de AD HONOREM.
        </h2>
      </Grid.Column>
    </Grid>
  );
}
