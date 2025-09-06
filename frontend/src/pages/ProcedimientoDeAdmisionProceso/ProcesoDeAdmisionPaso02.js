import React, { useState } from "react";
import { Grid, Button, Input, Icon, Dimmer, Loader } from "semantic-ui-react";
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

  // const [contador, setContador] = useState(0);

  // const incrementar = () => {
  //   setContador(contador + 1);
  //   setBandera(true);
  //   if (contador >= 2) {
  //     toast.success("¡El investigador se encontró!");
  //   } else {
  //     toast.error("¡El investigador NO se encontró!");
  //   }
  // };
  const abrirEnNuevaVentana = () => {
    window.open(
      // "https://docs.google.com/forms/d/e/1FAIpQLSeVc1PPuqHvj3h_y7F1dqxi9r4pwIS_OhhiS60kppoE3vAvHw/viewform",
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
              <b>PASO 2:</b> Ingrese el DNI del/la Investigador/a Principal.
              Ingrese el DNI sin puntos. Ejemplo 25789321.
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
              placeholder="DNI del/la Investigador/a Principal"
              style={{
                width: "100%",
              }}
            >
              <input
                className="inputProcesoDeAdmision"
                value={dni}
                onChange={handledniChange}
                onKeyUp={(event) => {
                  if (event.key === "Enter" && isDniValid) {
                    // incrementar();
                    buscarInvestigador2();
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
              onClick={buscarInvestigador2}
              disabled={!isDniValid}
            >
              Buscar
            </Button>
          </Grid.Column>
        </Grid.Row>
        {mensajeDni && (
          <p className="mensajeValido">
            Debe ingresar un DNI válido, recuerde que no debe llevar punto '.'
          </p>
        )}
        <Grid.Row centered>
          {/* {contador >= 3 ? ( */}
          {investigador ? (
            <Grid.Column textAlign="center">
              <h2 className="mensajeEncontrado">
                El/la investigador/a principal ya esta registrado/a, ahora
                proceda al paso siguiente haciendo click en el siguiente botón
              </h2>

              <Button
                className="buttonFormat"
                onClick={onPaso3}
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
                    Al parecer el/la Investigador/a Principal no esta
                    registrado/a, por lo tanto, lo/la debe registrar en el
                    siguiente botón
                  </h2>

                  <Button
                    className="buttonFormat"
                    // as={Link}
                    // to="https://docs.google.com/forms/d/e/1FAIpQLSeVc1PPuqHvj3h_y7F1dqxi9r4pwIS_OhhiS60kppoE3vAvHw/viewform"
                    // target="_blank"
                    onClick={abrirEnNuevaVentana}
                    style={{ marginBottom: "30px" }}
                  >
                    Registrar Nuevo/a Investigador/a Principal
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
