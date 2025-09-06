import React from "react";
import { Grid, Button, Input, Icon, Dimmer, Loader } from "semantic-ui-react";
// import { Link } from "react-router-dom";
import "./ProcedimientoDeAdmisionProceso.scss";
import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_API } from "../../utils/constants";
import { enlace_formulario_institucion } from "../../data/enlacesFormulariosGoogle";

export function ProcesoDeAdmisionPaso01(props) {
  const { onPaso2 } = props;

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
      <Grid className="gridPage" stackable>
        <Grid.Row>
          <Grid.Column>
            <h2 className="tituloPage">PROCEDIMIENTO DE ADMISIÓN</h2>

            <p className="descripcionPage">
              <b>PASO 1:</b> Verifique si se encuentra registrada la institución
              de afiliación del/la Investigador/a Principal. La búsqueda debe
              realizarse a través del CUIT de la institución. El CUIT debe
              incluir los guiones, ej. 30-70966892-3, CUIT del Ministerio de
              Salud de Jujuy.
            </p>

            <h2 className="descripcionPage" style={{ marginTop: "0px" }}>
              Por favor evite salir de esta página hasta finalizar el
              procedimiento de admisión
            </h2>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} verticalAlign="middle">
          <Grid.Column width={14} style={{ padding: "0px 14px" }}>
            <Input
              icon
              placeholder="CUIT de la Institución de afiliación"
              style={{
                width: "100%",
              }}
            >
              <input
                className="inputProcesoDeAdmision"
                value={cuit}
                onChange={handleInstitucionChange}
                onKeyUp={(event) => {
                  if (event.key === "Enter" && isCuitValid) {
                    // incrementar();
                    buscarInstitucion();
                  }
                }}
              />
              <Icon className="iconBuscar" name="search" />
            </Input>
          </Grid.Column>

          <Grid.Column
            width={2}
            textAlign="center"
            style={{ padding: "0px 0px 0px 14px" }}
          >
            {/* <Button className="buttonFormat" onClick={incrementar}> */}
            <Button
              className="buttonFormat"
              onClick={buscarInstitucion}
              disabled={!isCuitValid}
            >
              Buscar
            </Button>
          </Grid.Column>
        </Grid.Row>
        {mensajeCuit && (
          <p className="mensajeValido">Ingrese un CUIT válido.</p>
        )}
        <Grid.Row centered>
          {/* {contador >= 3 ? ( */}
          {institucion ? (
            <Grid.Column textAlign="center">
              <h2 className="mensajeEncontrado">
                La institución ya está registrada puede proceder al paso 2
                haciendo click en el siguiente botón
              </h2>

              <Button
                className="buttonFormat"
                onClick={onPaso2}
                style={{ marginBottom: "30px" }}
              >
                Siguiente paso
              </Button>
            </Grid.Column>
          ) : (
            <>
              {bandera && (
                <Grid.Column textAlign="center">
                  <h2 className="mensajeNoEncontrado">
                    Al parecer la institución de afiliación no esta registrada,
                    por lo tanto, lo debe registrar en el siguiente botón
                  </h2>

                  <Button
                    className="buttonFormat"
                    // as={Link}
                    // to="https://docs.google.com/forms/d/e/1FAIpQLSdm11hdI2kEqsRITePEczqpeqj3QnB5fnrNZVTJ5Pnwig3kbw/viewform"
                    // target="_blank"
                    onClick={abrirEnNuevaVentana}
                    style={{ marginBottom: "30px" }}
                  >
                    Registrar Nueva Institución de Afiliación
                  </Button>
                </Grid.Column>
              )}
            </>
          )}
        </Grid.Row>
      </Grid>
    </>
  );
}
