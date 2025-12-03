import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  Input,
  Icon,
  Dimmer,
  Loader,
  Transition,
} from "semantic-ui-react";
// import { Link } from "react-router-dom";
import "./ProcedimientoDeAdmisionProceso.scss";
import { toast } from "react-toastify";
import { BASE_API } from "../../utils/constants";
import { enlace_formulario_institucion } from "../../data/enlacesFormulariosGoogle";

export function ProcesoDeAdmisionPaso01(props) {
  const { onPaso2 } = props;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  //intitucion / centro de investigacion
  const [loader, setLoader] = useState(false);
  const [cuit, setcuit] = useState("");
  const [mensajeCuit, setMensajeCuit] = useState(false);
  const [isCuitValid, setIsCuitValid] = useState(false);
  const [bandera, setBandera] = useState(false);
  const [institucion, setInstitucion] = useState(null);

  const abrirEnNuevaVentana = () => {
    window.open(
      // "https://docs.google.com/forms/d/e/1FAIpQLSdm11hdI2kEqsRITePEczqpeqj3QnB5fnrNZVTJ5Pnwig3kbw/viewform",
      enlace_formulario_institucion,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=900,height=700"
    );
  };

  const handleInstitucionChange = (event) => {
    setcuit(event.target.value);

    const patron = /^\d{2}-\d{8}-\d$/;
    const valorPatron = patron.test(event.target.value);
    setIsCuitValid(valorPatron);
    setMensajeCuit(event.target.value !== "" && !valorPatron);
    setBandera(false);
    setInstitucion(null);
  };

  const buscarInstitucion = () => {
    if (!cuit) {
      // Muestra un mensaje de error si el campo está vacío
      console.error("Debes ingresar el cuit de la institución");
    }

    // Realiza la búsqueda con el valor de cuitapellido
    //console.log(cuit);

    // cuit = cuit.toLowerCase();

    // Construye la URL para la API
    const URL = `${BASE_API}/api/institucion/buscarInstitucion?cuit=${cuit}`;
    setLoader(true);
    // Realiza la solicitud a la API usando fetch
    fetch(URL)
      .finally(() => {
        setLoader(false);
      })
      .then((response) => response.json())
      .then((data) => {
        setBandera(true);
        if (data.institucion) {
          //console.log(data);
          setInstitucion(data.institucion);
          toast.success(
            `¡Se encontró la Institucion: ${data.institucion.nombre}!`
          );
        } else {
          console.error("Institución No Encontrado");
          toast.error("¡La Institución NO se encontró!");
          setInstitucion(null);
        }
      })
      .catch((error) => {
        toast.error("error no encontrado");
        console.error("Error al buscar el Institución:", error);
      });
  };

  return (
    <>
      {loader && (
        <Dimmer active inverted>
          <Loader size="big">Espere un momento...</Loader>
        </Dimmer>
      )}
      <div className="contenedor-page">
        <Grid.Column>
          <Transition animation="fade down" duration={800} visible={visible}>
            <div>
              <h2 className="tituloPage">PROCEDIMIENTO DE ADMISIÓN</h2>
              <p className="descripcionPage">
                <b>PASO 1:</b> Verifique si se encuentra registrada la{" "}
                <b>
                  Institución de Afiliación del/la Investigador/a Principal.
                </b>
                <br />
                La búsqueda debe realizarse a través del{" "}
                <b>CUIT de la institución</b>, el cual debe{" "}
                <b>incluir los guiones</b>.
                <br />
                <i>
                  Ejemplo: <b>30-70966892-3</b> (Ministerio de Salud de Jujuy)
                </i>
                .
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
                <Input
                  icon="search"
                  placeholder="Ingrese el CUIT de la Institución"
                  value={cuit}
                  onChange={handleInstitucionChange}
                  onKeyUp={(event) => {
                    if (event.key === "Enter" && isCuitValid) {
                      buscarInstitucion();
                    }
                  }}
                  style={{ minWidth: "320px" }}
                />

                <Button
                  primary
                  onClick={buscarInstitucion}
                  disabled={!isCuitValid}
                >
                  Buscar
                </Button>
              </div>
            </div>
          </Transition>

          {mensajeCuit && (
            <p className="mensajeValido">
              🚨 Ingrese un CUIT válido (con guiones) 🚨
            </p>
          )}

          {institucion ? (
            <div className="resultado-exito">
              <h2 className="mensajeEncontrado">
                ✅ La Institución de Afiliacion está registrada.
              </h2>
              <p className="descripcionProceso">
                Ahora puedes proceder al paso 2 haciendo clic en el siguiente
                botón:
              </p>
              <Button
                className="buttonFormatGreen"
                onClick={onPaso2}
                icon
                labelPosition="right"
              >
                Siguiente paso
                <Icon name="arrow alternate circle right" />
              </Button>
            </div>
          ) : (
            <>
              {bandera && (
                <div className="resultado-error">
                  <h2 className="mensajeNoEncontrado">
                    ⛔ La Institución de Afiliacion NO está registrada.
                  </h2>
                  <p className="descripcionProceso">
                    Por lo tanto, debe registrarla haciendo clic en el siguiente
                    botón:
                  </p>

                  <Button
                    className="buttonFormatRegister"
                    icon
                    labelPosition="left"
                    onClick={abrirEnNuevaVentana}
                  >
                    Registrar Nueva Institución de Afiliación
                    <Icon name="edit outline" />
                  </Button>
                </div>
              )}
            </>
          )}
        </Grid.Column>
      </div>
    </>
  );
}
