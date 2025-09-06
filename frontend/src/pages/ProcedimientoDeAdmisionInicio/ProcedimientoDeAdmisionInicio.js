import React, { useEffect } from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ProcedimientoDeAdmisionInicio.scss";

export function ProcedimientoDeAdmisionInicio() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Grid className="gridProcedimientoDeAdmision" stackable>
      <Grid.Row>
        <h2 className="tituloPage">
          PROCEDIMIENTO DE ADMISIÓN ADMINISTRATIVA DE PROTOCOLOS DE
          INVESTIGACIÓN
        </h2>
        <p className="descripcionPage">
          Para completar el proceso de admisión administrativa de protocolos de
          investigación en la Unidad de Investigación del Ministerio de Salud de
          Jujuy, el investigador principal deberá cumplir, inicialmente, con la
          carga de un formulario digital de registro. Sólo una vez concluida y
          aprobada esta etapa, se procederá a la presentación de la
          documentación en formato físico. 
        </p>
      </Grid.Row>

      <Grid.Row
        columns={2}
        verticalAlign="middle"
        style={{ marginBottom: "45px" }}
      >
        <Grid.Column className="botonesProcedimiento" textAlign="right">
          <Button
            className="buttonFormatInverted"
            as={Link}
            to={"/procedimientoInformacion"}
          >
            Mas acerca del procedimiento de admisión
          </Button>
        </Grid.Column>

        <Grid.Column className="botonesProcedimiento">
          <Button className="buttonFormat" as={Link} to={"/requisitos"}>
            Iniciar Procedimiento de Admisión
          </Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
