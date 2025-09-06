import React from "react";
import { Grid, Button, Input, Icon } from "semantic-ui-react";

import { Link } from "react-router-dom";
import "./ProcedimientoDeAdmisionProceso.scss";
import { useState } from "react";
// import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

export function InicioProcesoDeAdmision() {
  const [nombreapellido, setNombreApellido] = useState("");
  const [investigador, setInvestigador] = useState(null);
  const handleNombreApellidoChange = (event) => {
    setNombreApellido(event.target.value);
  };

  //intitucion / centro de investigacion
  const [nombre, setNombre] = useState("");
  const [institucion, setInstitucion] = useState(null);

  const handleInstitucionChange = (event) => {
    setNombre(event.target.value);
  };

  const buscarInvestigador2 = () => {
    if (!nombreapellido) {
      // Muestra un mensaje de error si el campo está vacío
      console.error("Debes ingresar los nombres y apellidos");
      return;
    }

    // Realiza la búsqueda con el valor de nombreapellido
    console.log(nombreapellido);

    // nombreapellido = nombreapellido.toLowerCase();

    // Construye la URL para la API
    const URL = `http://localhost:3000/api/investigador/buscarInvestigador2?nombreapellido=${nombreapellido}`;

    // Realiza la solicitud a la API usando fetch
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.investigador) {
          console.log(data);
          setInvestigador(data.investigador);
          toast.success("¡El investigador se encontró!");
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

  const buscarInstitucion = () => {
    if (!nombre) {
      // Muestra un mensaje de error si el campo está vacío
      console.error("Debes ingresar el nombre de la institucion");
      return;
    }

    // Realiza la búsqueda con el valor de nombreapellido
    console.log(nombre);

    // nombre = nombre.toLowerCase();

    // Construye la URL para la API
    const URL = `http://localhost:3000/api/institucion/buscarInstitucion?nombre=${nombre}`;

    // Realiza la solicitud a la API usando fetch
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.institucion) {
          console.log(data);
          setInstitucion(data.institucion);
          toast.success("¡La Institucion se encontró!");
        } else {
          console.error("Institucion No Encontrado");
          toast.error("¡La Institucion NO se encontró!");
          setInstitucion(null);
        }
      })
      .catch((error) => {
        toast.error("error no encontrado");
        console.error("Error al buscar el Institucion:", error);
      });
  };

  return (
    <Grid style={{ padding: "10px 40px", margin: "-14px 0px 0px 0px" }}>
      <Grid.Row>
        <h2 className="tituloPrincipal">
          INICIO DEL PROCEDIMIENTO DE ADMISIÓN
        </h2>
        <p className="descripcion">
          <b>PASO 1:</b> Para iniciar el procedimiento de admisión primero
          verifique si se encuentra registrado su centro de investigación:
        </p>
      </Grid.Row>

      <Grid.Row columns={2} verticalAlign="middle" style={{ padding: "0px" }}>
        <Grid.Column width={12} style={{ padding: "0px 14px 0px 0px" }}>
          <Input
            icon
            placeholder="Buscar Centro de Investigación"
            style={{
              width: "100%",
            }}
          >
            <input
              value={nombre}
              onChange={handleInstitucionChange}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  buscarInstitucion();
                }
              }}
              style={{
                height: "56px",
                border: "rgba(103, 37, 125, 1) 5px solid",
                borderRadius: "20px",
                fontSize: "22px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: "rgba(103, 37, 125, 1)",
              }}
            />
            <Icon name="search" size="big" />
          </Input>
          {institucion && (
            <div>
              <h2>Datos del Institucuion</h2>
              <p>Nombre: {institucion.nombre}</p>
              <p>Apellido: {institucion.tipo}</p>
            </div>
          )}
        </Grid.Column>

        <Grid.Column width={4} style={{ padding: "0px 0px 0px 14px" }}>
          <Button
            className="buttonFormat2"
            as={Link}
            to="https://docs.google.com/forms/d/e/1FAIpQLSeikY5X8nCKrYf1CkgcKrlT9C4VCmCc2Om_NIHMrTB9rvPN4w/viewform"
            target="_blank"
          >
            Registrar Nuevo Centro de Investigación
          </Button>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{ padding: "28px 0px 0px 0px" }}>
        <p className="descripcion">
          <b>PASO 2:</b> Ahora verifique si se encuentran registrados los
          investigadores:
        </p>
      </Grid.Row>

      <Grid.Row columns={2} verticalAlign="middle">
        <Grid.Column width={12} style={{ padding: "0px 14px 0px 0px" }}>
          <Input
            icon
            placeholder="Buscar Investigador"
            style={{
              width: "100%",
            }}
          >
            <input
              value={nombreapellido}
              onChange={handleNombreApellidoChange}
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  buscarInvestigador2();
                }
              }}
              style={{
                height: "56px",
                border: "rgba(103, 37, 125, 1) 5px solid",
                borderRadius: "20px",
                fontSize: "22px",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                color: "rgba(103, 37, 125, 1)",
              }}
            />
            <Icon name="search" size="big" />
          </Input>
          {investigador && (
            <div>
              <h2>Datos del Investigador</h2>
              <p>Nombre: {investigador.nombre}</p>
              <p>Apellido: {investigador.apellido}</p>
            </div>
          )}
        </Grid.Column>

        <Grid.Column width={4} style={{ padding: "0px 0px 0px 14px" }}>
          <Button
            className="buttonFormat3"
            as={Link}
            to="https://docs.google.com/forms/d/e/1FAIpQLScgsztLGZvxqcr_KQdgMmKDuxDRxkiS_AKTumQWuMjHEeL9cA/viewform"
            target="_blank"
          >
            Registrar Investigador
          </Button>
        </Grid.Column>
      </Grid.Row>

      <hr className="separator--dotter" style={{ margin: "20px 0px" }}></hr>

      <Grid.Row centered>
        <p className="descripcion" style={{ margin: "0px" }}>
          <b>PASO 3:</b> Una vez que haya verificado que se escuentran
          registrados los datos del centro de investigación y los datos de los
          investigadores proceda a completar el Formulario Digital de Registro
          de Protocolos de Investigación en Salud en la Provincia de Jujuy
        </p>
        <Button
          className="buttonFormat"
          as={Link}
          to="https://docs.google.com/forms/d/e/1FAIpQLSfInyrlv0BYmB-dMT0rNGcy4FxOgyTSByNyebls6Hm3swCVaw/viewform"
          target="_blank"
        >
          Llenar Formulario
        </Button>
      </Grid.Row>
    </Grid>
  );
}
