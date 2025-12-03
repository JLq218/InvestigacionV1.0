import React, { useState, useEffect } from "react";
import { Grid, Button, Icon, Transition } from "semantic-ui-react";
import { enlace_formulario_protocolo } from "../../data/enlacesFormulariosGoogle";

export function ProcesoDeAdmisionPaso03() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  const abrirEnNuevaVentana1 = () => {
    window.open(
      // "https://docs.google.com/forms/d/e/1FAIpQLSeYIkdBFjuFKDkS7WvLjq-IHi_6ZSYGmBB017ByqSCmyPicdA/viewform",
      enlace_formulario_protocolo,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=900,height=700"
    );
  };

  return (
    <>
      <div className="contenedor-page">
        <Grid.Column>
          <Transition animation="fade down" duration={800} visible={visible}>
            <div>
              <h2 className="tituloPage">PROCEDIMIENTO DE ADMISIÓN</h2>
              <p className="descripcionPage" style={{ marginBottom: "20px" }}>
                <b>PASO 3:</b> Corresponde al <b>último paso</b> del
                procedimiento de admisión.
                <br />
                En esta etapa deberá incorporar toda la <b>
                  documentación
                </b> y <b> datos requeridos</b> del{" "}
                <b> Protocolo de Investigación</b>.
              </p>
              <div className="alerta">
                ⚠️ Por favor, evite salir de esta página hasta finalizar el
                procedimiento de admisión ⚠️
              </div>
            </div>
          </Transition>

          <Transition animation="fade left" duration={800} visible={visible}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className="contenedor-dos-columnas">
                <Button
                  className="buttonFormatRegister"
                  icon
                  labelPosition="left"
                  onClick={abrirEnNuevaVentana1}
                >
                  Llenar Formulario de Registro del Protocolo de Investigación
                  <Icon name="file outline" />
                </Button>
              </div>
            </div>
          </Transition>
        </Grid.Column>
      </div>
    </>
  );
}
