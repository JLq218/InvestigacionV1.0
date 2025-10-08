import React, { useState, useEffect } from "react";
import { Button, Grid, Dimmer, Loader, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";

// import { ModalAnuncios } from "../../components";
import "./Inicio.scss";
import imagen from "../../images/imagenHome.png";

export function Inicio() {
  const [imagenCargada, setImagenCargada] = useState(false);
  const [activado, setActivado] = useState(false);

  useEffect(() => {
    setActivado((a) => !a);
    scrollToTop();
  }, []);

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
        <Transition animation="fade up" duration={2000} visible={activado}>
          <Grid.Column>
            <p className="tituloGrande">UNIDAD DE INVESTIGACIÓN</p>
            <p className="tituloMediano">
              Promovemos el desarrollo de investigación en salud para contribuir
              a la equidad y a la calidad de la atención sanitaria para todos
              los habitantes de la provincia de Jujuy
            </p>
            <p className="tituloPequenio">
              Para solicitar la admisión administrativa de su Protocolo de
              Investigación haga clic en el siguiente botón
            </p>
            <Button
              className="buttonFormat"
              as={Link}
              to={"/procedimientoInicio"}
            >
              Solicitar la admisión
            </Button>
          </Grid.Column>
        </Transition>
        <Transition animation="fade down" duration={2000} visible={activado}>
          <Grid.Column style={{ padding: "0px" }}>
            <img
              alt=""
              src={imagen}
              style={{ width: "100%" }}
              onLoad={cargaImagen}
            ></img>
          </Grid.Column>
        </Transition>
      </Grid>
    </>
  );
}
