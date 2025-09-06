import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { enlace_formulario_protocolo } from "../../data/enlacesFormulariosGoogle";

export function ProcesoDeAdmisionPaso03() {
  const abrirEnNuevaVentana1 = () => {
    window.open(
      // "https://docs.google.com/forms/d/e/1FAIpQLSeYIkdBFjuFKDkS7WvLjq-IHi_6ZSYGmBB017ByqSCmyPicdA/viewform",
      enlace_formulario_protocolo,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=900,height=700"
    );
  };

  // const abrirEnNuevaVentana2 = () => {
  //   window.open(
  //     "https://docs.google.com/forms/d/e/1FAIpQLSd4z0v-_Fv26Gsl-Wy0-10aN-J4R9WEvvPgSVJFXAONVIV9yQ/viewform",
  //     "_blank",
  //     "toolbar=yes,scrollbars=yes,resizable=yes"
  //   );
  // };

  return (
    <Grid className="gridPage" stackable>
      <Grid.Row>
        <Grid.Column>
          <h2 className="tituloPage">PROCEDIMIENTO DE ADMISIÓN</h2>

          <p className="descripcionPage">
            <b>PASO 3:</b> Complete el siguiente formulario:
          </p>

          <h2 className="descripcionPage" style={{ marginTop: "0px" }}>
            Por favor evite salir de esta página hasta finalizar el
            procedimiento de admisión
          </h2>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row textAlign="center">
        <Grid.Column>
          <Button
            className="buttonFormat"
            // as={Link}
            // to="https://docs.google.com/forms/d/e/1FAIpQLSeYIkdBFjuFKDkS7WvLjq-IHi_6ZSYGmBB017ByqSCmyPicdA/viewform"
            // target="_blank"
            onClick={abrirEnNuevaVentana1}
          >
            Llenar Formulario de Registro de Protocolo de Investigación
          </Button>
        </Grid.Column>
      </Grid.Row>

      {/* <Grid.Row>
        <p className="descripcion">
          <b>PASO 4:</b> ¿En el protocolo de investigación hay más
          investigadores involucrados? En caso afirmativo, deberá registrar uno
          por uno en el siguiente enlace.
        </p>
      </Grid.Row>

      <Grid.Row centered>
        <Button
          className="buttonFormat"
          // as={Link}
          // to="https://docs.google.com/forms/d/e/1FAIpQLSd4z0v-_Fv26Gsl-Wy0-10aN-J4R9WEvvPgSVJFXAONVIV9yQ/viewform"
          // target="_blank"
          onClick={abrirEnNuevaVentana2}
        >
          Llenar Formulario de Investigadores
        </Button>
      </Grid.Row> */}
    </Grid>
  );
}
