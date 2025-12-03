import React, { useEffect, useState } from "react";
import { Button, Icon, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { PasoComponent } from "../../components";
import "./ProcedimientoDeAdmisionInfo.scss";

export function ProcedimientoDeAdmisionInfo() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  return (
    <div className="contenedor-page">
      <Transition animation="fade down" duration={800} visible={visible}>
        <div>
          <h2 className="tituloPage">
            🗃️ INFORMACIÓN ACERCA DEL PROCEDIMIENTO DE ADMISIÓN
          </h2>
          <p className="descripcionPage">
            El <b>Procedimiento de Admisión </b> se desarrolla en{" "}
            <b>dos etapas</b>: una presentación en <b>formato digital</b> y otra
            en <b>formato físico</b>. <br />A continuación, se{" "}
            <b>describen las etapas y los pasos</b> que debe seguir el
            solicitante para presentar su{" "}
            <b>Protocolo de Investigación en Salud</b> en la{" "}
            <b>Unidad de Investigación</b> del{" "}
            <b>Ministerio de Salud de Jujuy</b>.
          </p>
        </div>
      </Transition>

      {/* ETAPA 1 */}
      <div className="devpage-content-center">
        <Transition animation="fade right" duration={800} visible={visible}>
          <div className="admision-stage stage-digital">
            <p className="admision-stage-title">
              <b>ETAPA 1:</b> Presentación y Registro en Formato Digital
              🖥️💻📱📤
            </p>
            <p className="admision-stage-desc">
              En esta fase, el solicitante debe completar el proceso en{" "}
              <b>formato digital</b> mediante el <b>sistema web de registro</b>.
            </p>
            <PasoComponent
              id="paso1"
              numero="1"
              titulo="Verificación de Datos"
              descripcion="El <b>solicitante</b> debe verificar si se encuentran
              registrados los datos de la <b>Institución de Afiliación</b> y del/la <b>Investigador/ar Principal</b>.
               <b>Si no, deberá registrarlos</b>."
            />
            <PasoComponent
              id="paso2"
              numero="2"
              titulo="Completar el Formulario Digital"
              descripcion="El <b>solicitante</b> debe completar el <b>Formulario Digital
              de Registro de Protocolos de Investigación en Salud de la Provincia de Jujuy</b>. En la cual se le
              solicitará datos y documentación acerca del protocolo."
            />
            <PasoComponent
              id="paso3"
              numero="3"
              titulo="Admisión Administrativa"
              descripcion="La <b>Unidad de Investigación revisará</b> todos los datos y documentación
              presentada de forma digital y <b>comunicará</b> si está completa o requiere correcciones
              en un <b>plazo de hasta 5 días hábiles</b>."
            />
            <div className="admision-alert">
              ⚠️ Una vez <b>aprobada</b> este proceso digital, deberá realizar
              la presentación en <b>formato físico</b>. ⚠️
            </div>
          </div>
        </Transition>

        {/* ETAPA 2 */}
        <Transition animation="fade left" duration={800} visible={visible}>
          <div className="admision-stage stage-fisica">
            <p className="admision-stage-title">
              <b>ETAPA 2: </b> Presentación de la Documentación Impresa 📑➡️🏬
            </p>
            <p className="admision-stage-desc">
              Luego de la{" "}
              <b>
                validación de los datos y documentación presentada digitalmente
              </b>
              , el solicitante debe <b>entregarlas impresas</b> en la oficina de
              la
              <b> Unidad de Investigación</b>.
            </p>

            <PasoComponent
              id="paso4"
              numero="4"
              titulo="Entrega de la Documentación"
              descripcion="El <b>solicitante</b> presenta el Protocolo de Investigacion <b>impreso</b> en la
              oficina de la <b>Unidad de Investigación</b>, la cual se encuentra en la Subdirección Provincial de Formación y Capacitación (Av. Italia 41, esquina
              Independencia)."
            />

            <PasoComponent
              id="paso5"
              numero="5"
              titulo="Revisión Final"
              descripcion="La <b>Unidad de Investigación</b> revisará la documentación
              impresa y notificará al <b>solicitante</b> si
              <b>requiere correcciones</b> o si está lista para la <b>evaluación</b> por parte del Comité de Ética."
            />
          </div>
        </Transition>
        <Button
          className="buttonFormatRegister"
          as={Link}
          to="/procedimiento"
          icon
          labelPosition="left"
        >
          <Icon name="arrow alternate circle left outline" />
          Regresar
        </Button>
      </div>
    </div>
  );
}
