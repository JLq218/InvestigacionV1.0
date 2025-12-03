import React, { useState, useEffect } from "react";
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
import { toast } from "react-toastify";
import "./ProcedimientoDeAdmisionProceso.scss";
import { BASE_API } from "../../utils/constants";
import { enlace_formulario_investigador } from "../../data/enlacesFormulariosGoogle";

export function ProcesoDeAdmisionPaso02(props) {
  const { onPaso3 } = props;
  const [loader, setLoader] = useState(false);
  const [mensajeDni, setMensajeDni] = useState(false);
  const [isDniValid, setIsDniValid] = useState(false);
  const [dni, setdni] = useState("");
  const [bandera, setBandera] = useState(false);
  const [investigador, setInvestigador] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  const abrirEnNuevaVentana = () => {
    window.open(
      enlace_formulario_investigador,
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,width=900,height=700"
    );
  };

  const handledniChange = (event) => {
    setdni(event.target.value);
    const patronDNI = /^[0-9]{7,8}$/;
    let valorDNI = patronDNI.test(event.target.value);
    setIsDniValid(valorDNI);
    setMensajeDni(event.target.value !== "" && !valorDNI);
    setBandera(false);
    setInvestigador(null);
  };

  const buscarInvestigador2 = () => {
    if (!dni) {
      // Muestra un mensaje de error si el campo está vacío
      console.error("Debes ingresar el dni");
      return;
    }

    // Realiza la búsqueda con el valor de dni
    // console.log(dni);

    // Construye la URL para la API
    const URL = `${BASE_API}/api/investigador/buscarInvestigador2?dni=${dni}`;
    setLoader(true);

    // Realiza la solicitud a la API usando fetch
    fetch(URL)
      .finally(() => {
        setLoader(false);
      })
      .then((response) => response.json())
      .then((data) => {
        setBandera(true);
        if (data.investigador) {
          // console.log(data);
          setInvestigador(data.investigador);
          toast.success(
            `¡Se encontró al/la investigador/a: ${data.investigador.nombreapellido}!`
          );
        } else {
          console.error("Investigador No Encontrado");
          toast.error("¡El investigador NO se encontró!");
          setInvestigador(null);
        }
      })
      .catch((error) => {
        toast.error("error no encontrado");
        console.error("Error al buscar el investigador:", error);
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
                <b>PASO 2:</b> Verifique si se encuentra registrado/a el/la
                <b> Investigador/a Principal.</b>
                <br />
                La búsqueda debe realizarse a través del número del
                <b> DNI del Investigador/a</b>, el cual debe escribirse
                <b> sin puntos</b>.
                <br />
                <i>
                  Ejemplo: <b>25789321</b>
                </i>
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
                  placeholder="Ingrese el número de DNI"
                  value={dni}
                  onChange={handledniChange}
                  onKeyUp={(event) => {
                    if (event.key === "Enter" && isDniValid) {
                      buscarInvestigador2();
                    }
                  }}
                  style={{ minWidth: "320px" }}
                />

                <Button
                  primary
                  onClick={buscarInvestigador2}
                  disabled={!isDniValid}
                >
                  Buscar
                </Button>
              </div>
            </div>
          </Transition>

          {mensajeDni && (
            <p className="mensajeValido">
              🚨 Ingrese un número de DNI válido (no debe llevar punto) 🚨
            </p>
          )}

          {investigador ? (
            <div className="resultado-exito">
              <h2 className="mensajeEncontrado">
                ✅ El/la Investigador/a Principal está registrado/a.
              </h2>
              <p className="descripcionProceso">
                Ahora puedes proceder al paso 3 haciendo clic en el siguiente
                botón:
              </p>
              <Button
                className="buttonFormatGreen"
                onClick={onPaso3}
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
                    ⛔ El/la Investigador/a Principal NO está registrado/a.
                  </h2>
                  <p className="descripcionProceso">
                    Por lo tanto, debe registrarlo/a haciendo clic en el
                    siguiente botón:
                  </p>

                  <Button
                    className="buttonFormatRegister"
                    icon
                    labelPosition="left"
                    onClick={abrirEnNuevaVentana}
                  >
                    Registrar Nuevo/a Investigador/a Principal
                    <Icon name="address book outline" />
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
