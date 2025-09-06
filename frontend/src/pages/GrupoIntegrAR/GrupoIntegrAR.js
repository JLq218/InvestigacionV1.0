import React from "react";

import {
  Grid,
  HeaderSubheader,
  HeaderContent,
  TableRow,
  TableCell,
  TableBody,
  Header,
  Table,
  Icon,
} from "semantic-ui-react";
import "./GrupoIntegrAR.scss";

const integrantesUnidad = [
  {
    nombre: "Mag. Hernán Zamponi",
    descripcion:
      "Master of Science in Medical Sciences en University of South Florida. Ministerio de Salud de la Provincia de Jujuy.",
    icon: "id card outline",
  },
  {
    nombre: "Mag. Ana Inés Soruco",
    descripcion:
      "Máster en Bioética de la Facultad Latinoamericana de Ciencias Sociales (FLACSO). Ministerio de Salud de la Provincia de Jujuy.",
    icon: "id card outline",
  },
  {
    nombre: "Elida Noelia Choque",
    descripcion:
      "Auxiliar Forense. Estudiante avanzada de la carera de Lic. En Antropología de la Facultad de Humanidades y Ciencias Sociales (FHyCS) de la Universidad Nacional de Jujuy (UNJu). Administrativa y vocal. Ministerio de Salud de la Provincia de Jujuy.",
    icon: "id card outline",
  },
];

const desarrolladores = [
  {
    nombre: "Lic. Bruno Caseres",
    descripcion:
      "Licencia en Sistemas. Ministerio de Salud de la Provincia de Jujuy",
    icon: "cogs",
  },
  {
    nombre: "Daiana Agustina Maraz",
    descripcion: "Analista Programador Universitario",
    icon: "keyboard outline",
  },
  {
    nombre: "Maximiliano Joaquín Carrillo",
    descripcion: "Analista Programador Universitario",
    icon: "keyboard outline",
  },
  {
    nombre: "José Luis Quispe",
    descripcion: "Estudiante avanzado en Ingeniería en Informática",
    icon: "keyboard outline",
  },
];

export function GrupoIntegrAR() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  scrollToTop();

  return (
    <Grid
      stackable
      style={{
        padding: "14px",
        margin: "-14px 0px 0px 0px",
      }}
      className="gridContacto"
    >
      <Grid.Row>
        <Grid.Column>
          <h2 className="tituloPrincipal">Integrantes del Grupo IntegrAR</h2>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={2}>
        <Grid.Column>
          <p className="subtituloContacto" style={{ marginBottom: "15px" }}>
            Desarrolladores:
          </p>
          <Table celled collapsing style={{ marginTop: "0px", width: "100%" }}>
            <TableBody>
              {desarrolladores.map((desarrollador, index) => (
                <TableRow key={index}>
                  <TableCell width={1}>
                    <Icon
                      name={desarrollador.icon}
                      size="big"
                      style={{ color: "#542141" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Header as="h3">
                      <HeaderContent style={{ color: "#542141" }}>
                        {desarrollador.nombre}
                        <HeaderSubheader
                          style={{ color: "#542141", fontSize: "18px" }}
                        >
                          {desarrollador.descripcion}
                        </HeaderSubheader>
                      </HeaderContent>
                    </Header>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid.Column>

        <Grid.Column>
          <p className="subtituloContacto" style={{ marginBottom: "15px" }}>
            Miembros de la Unidad de Investigación:
          </p>
          <Table celled collapsing style={{ marginTop: "0px" }}>
            <TableBody>
              {integrantesUnidad.map((desarrollador, index) => (
                <TableRow key={index}>
                  <TableCell width={1}>
                    <Icon
                      name={desarrollador.icon}
                      size="big"
                      style={{ color: "#542141" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Header as="h3">
                      <HeaderContent style={{ color: "#542141" }}>
                        {desarrollador.nombre}
                        <HeaderSubheader
                          style={{ color: "#542141", fontSize: "18px" }}
                        >
                          {desarrollador.descripcion}
                        </HeaderSubheader>
                      </HeaderContent>
                    </Header>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
