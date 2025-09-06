import React from "react";
import { Grid, GridColumn, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./ProcedimientoDeAdmisionInfo.scss";
import { PasoComponent } from "../../components";
// import imaYoutube from "../../images/pantallaVideo.png";

export function ProcedimientoDeAdmisionInfo() {
  const scrollToNextStep = (id) => {
    const nextStep = document.querySelector(id);
    if (nextStep) {
      nextStep.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  scrollToTop();

  return (
    <Grid
      className="gridInicioProcesoDeAdmision"
      style={{ margin: "0px 0px 0px 0px" }}
    >
      <Grid.Row>
        <GridColumn textAlign="center">
          <h2 className="tituloPage">
            PROCEDIMIENTO DE ADMISIÓN DEL PROTOCOLO DE INVESTIGACIÓN
          </h2>
          {/* <section className="contenedorNavProcedimiento">
            <a
              href="https://docs.google.com/document/d/1PwBB2LKeAjEmK4UHAAGwxn3KqIvdQYQc"
              target="_blank"
              rel="noopener noreferrer"
              className="linkProceso"
            >
              <Icon name="file text" />
              POE 1 de Admisión
            </a>
            <span
              className="linkProceso"
              onClick={() => scrollToNextStep("#imagenYoutube")}
            >
              <Icon name="youtube" />
              Video Ilustrativo
            </span>
          </section> */}
          <div className="contenedorEtapas">
            <h3 className="subtituloPage">
              ETAPA 1: Presentación y registro del protocolo en formato DIGITAL
            </h3>
            <PasoComponent
              id="paso1"
              numero="1"
              titulo="Verificación de Datos"
              descripcion="El <strong>solicitante</strong> debe verificar si se encuentran
                            registrados los datos del Centro de Investigación y los
                            datos de los investigadores involucrados en el proyecto. En caso de que no se encuentren
                            registrados, deberá registrarlos."
              opcional={false}
            ></PasoComponent>
            <div
              className="down-arrow"
              onClick={() => scrollToNextStep("#paso2")}
            ></div>
            <PasoComponent
              id="paso2"
              numero="2"
              titulo="Completar el formulario digital"
              descripcion="El
                            <strong>solicitante</strong>
                            debe completar el Formulario Digital de Registro de Protocolos de Investigación en Salud en la Provincia de Jujuy."
              opcional={false}
            ></PasoComponent>
            <div
              className="down-arrow"
              onClick={() => scrollToNextStep("#paso3")}
            ></div>
            <PasoComponent
              id="paso3"
              numero="3"
              titulo="Admisión administrativa de la documentación en formato digital"
              descripcion="El
                            <strong>Área de Investigación del Ministerio de Salud de
                                Jujuy</strong>
                            revisará la documentación presentada y se comunicara con el solicitante, confirmando si la documentación presentada esta completa o si se requiere documentación adicional en un plazo de hasta 5 días hábiles."
              opcional={false}
            ></PasoComponent>
            {/* <div
                            className="down-arrow"
                            onClick={() => scrollToNextStep("#paso4")}
                        ></div>
                        <PasoComponent
                            id="paso4"
                            numero="4"
                            titulo="Revisión de los formularios ¿Están completos y correctos?"
                            descripcion="<strong>SI:</strong> Se inicia el proceso de admisión del protocolo en
                formato físico. <br /><br />
                <strong>NO:</strong> Se solicitará modificaciones o adendas."
                            opcional={false}
                        ></PasoComponent>
                        <div
                            className="down-arrow"
                            onClick={() => scrollToNextStep("#pasoOpcional")}
                        ></div>
                        <PasoComponent
                            id="pasoOpcional"
                            numero="Opcional"
                            titulo="Se ofrece una asesoría al investigador ¿Acepta?"
                            descripcion="<strong>SI:</strong> Se pacta el día, horario y lugar para la asesoría. <br /><br />
                            <strong>NO:</strong> Se solicita la presentación de los documentos físicos."
                            opcional={true}
                        ></PasoComponent> */}
            <h5 className="alertaProceso">
              SOLO UNA VEZ CONCLUIDA EL PROCESO DE ADMISIÓN DIGITAL SE
              SOLICITARÁ LO SIGUIENTE
            </h5>
            <h3 className="subtituloPage">
              ETAPA 2: Presentación y registro del protocolo en formato FÍSICO
            </h3>
            <div
              className="down-arrow"
              onClick={() => scrollToNextStep("#paso4")}
            ></div>
            <PasoComponent
              id="paso4"
              numero="4"
              titulo="Presentación en formato físico"
              descripcion="El <strong>solicitante</strong> debe presentar los documentos en la oficina de la Coordinación de Docencia y Capacitación, sita en Av. Italia 41, esquina Independencia frente al salón Auditorium del Ministerio de Salud de la Provincia de Jujuy. La documentación mínima requerida se describe en el documento POE 1 de Admisión "
              opcional={false}
            ></PasoComponent>
            <div
              className="down-arrow"
              onClick={() => scrollToNextStep("#paso5")}
            ></div>
            <PasoComponent
              id="paso5"
              numero="5"
              titulo="Revisión de los documentos en formato fisico"
              descripcion="El <strong>Área de Investigación del Ministerio de Salud de Jujuy</strong> revisará la documentación presentada y responderá al <strong>solicitante</strong> en un plazo de hasta 5 días hábiles desde la recepción de la documentación, informando si son necesarias adendas y/o modificaciones, o si la documentación presentada es pertinente."
              opcional={false}
            ></PasoComponent>
            {/* <div
                            className="down-arrow"
                            onClick={() => scrollToNextStep("#paso7")}
                        ></div>
                        <PasoComponent
                            id="paso7"
                            numero="7"
                            titulo="Evaluación ¿Cumple los requisitos?"
                            descripcion="<strong>SI:</strong> La documentación cumple con los requisitos solicitados. El solicitante será notificado sobre la fecha de pase al Comité de Ética de Investigación en Salud (CEIS) para la evaluación. <br /><br />
                <strong>NO:</strong> Se informará si corresponde la evaluacion por partes del CEIS."
                            opcional={false}
                        ></PasoComponent> */}
            {/* <h5 className="alertaProceso--purple">VIDEO ILUSTRATIVO</h5>
            <img
              src={imaYoutube}
              style={{ width: "100%", maxWidth: "800px" }}
              alt="Imagen por ahora de ejemplo"
              id="imagenYoutube"
            ></img> */}

            <Button
              className="buttonFormat"
              as={Link}
              to="/procedimientoInicio"
              style={{ marginTop: "20px", marginBottom: "50px" }}
            >
              Regresar
            </Button>
          </div>
        </GridColumn>
      </Grid.Row>
    </Grid>
  );
}
