import React, { useState } from "react";
import "./Inicio.scss";
import { Button, Grid, Dimmer, Loader } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { ModalAnuncios } from "../../components";
import imagen from "../../images/imagenHome.png";
export function Inicio() {
  const [imagenCargada, setImagenCargada] = useState(false);

  const cargaImagen = () => {
    setImagenCargada(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  scrollToTop();

  return (
    <>
      <Dimmer active={!imagenCargada} inverted>
        <Loader size="big">Espere un momento</Loader>
      </Dimmer>
      {/* <ModalAnuncios /> */}
      <Grid
        className="gridInicio"
        stackable
        columns={2}
        verticalAlign="middle"
        textAlign="center"
        style={{
          display: imagenCargada ? "flex" : "none",
        }}
      >
        <Grid.Column style={{ padding: "40px" }}>
          <p className="tituloGrande">UNIDAD DE INVESTIGACIÓN</p>
          <p className="tituloMediano">
            {/* Promovemos Ciencia con Conciencia para contribuir a la Equidad y a la
          Calidad de la Atención Sanitaria para todos los habitantes de la
          provincia de Jujuy */}
            Promovemos el desarrollo de investigación en salud para contribuir a
            la equidad y a la calidad de la atención sanitaria para todos los
            habitantes de la provincia de Jujuy
          </p>
          <p className="tituloPequenio">
            Para solicitar la admisión administrativa de su Protocolo de
            Investigación haga click en el siguiente botón
          </p>
          <Button
            className="buttonFormat"
            as={Link}
            to={"/procedimientoInicio"}
          >
            {/* Solicitar Evaluación de Protocolo */}
            Solicitar la admisión
          </Button>
        </Grid.Column>

        <Grid.Column style={{ padding: "0px" }}>
          <img
            alt=""
            src={imagen}
            style={{ width: "85%" }}
            onLoad={cargaImagen}
          ></img>
        </Grid.Column>
      </Grid>
    </>
  );
}
