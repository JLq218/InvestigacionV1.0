import React, { useEffect, useState } from "react";
import { Grid, Button, Transition, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./ProcedimientoDeAdmisionInicio.scss";

export function ProcedimientoDeAdmisionInicio() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  return (
    <div className="contenedor-page">
      <Grid.Column>
        <Transition animation="fade down" duration={800} visible={visible}>
          <div>
            <h2 className="tituloPage">
              PROCEDIMIENTO DE ADMISIÓN ADMINISTRATIVA DE PROTOCOLOS DE
              INVESTIGACIÓN
            </h2>
            <p className="descripcionPage">
              Para completar el <b>proceso de admisión administrativa</b> de
              protocolos de investigación en la{" "}
              <b>
                Unidad de Investigación del Ministerio de Salud de la Provincia
                Jujuy
              </b>
              , el investigador o la investigadora principal deberá cumplir,
              inicialmente, con la carga de un{" "}
              <b>formulario digital de registro</b>. Sólo una vez{" "}
              <b>concluida y aprobada esta etapa</b>, se procederá a la
              presentación de la <b>documentación en formato físico</b>.
            </p>
          </div>
        </Transition>
        <Transition animation="fade left" duration={800} visible={visible}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div className="contenedor-dos-columnas">
              <Button
                className="buttonFormatInverted"
                as={Link}
                to={"/procedimiento/informacion"}
                icon
                labelPosition="left"
              >
                <Icon name="info circle" /> Mas acerca del procedimiento de
                admisión
              </Button>
              <Button
                className="buttonFormat"
                as={Link}
                to={"/procedimiento/verificacion"}
                icon
                labelPosition="right"
              >
                Iniciar Procedimiento de Admisión
                <Icon name="arrow alternate circle right" />
              </Button>
            </div>
          </div>
        </Transition>
      </Grid.Column>
    </div>
  );
}
