import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Dimmer,
  Loader,
  Transition,
  Icon,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

// import { ModalAnuncios } from "../../components";
import "./Inicio.scss";
import imagen from "../../images/imagenHome.png";

export function Inicio() {
  const [imagenCargada, setImagenCargada] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  const cargaImagen = () => {
    setImagenCargada(true);
  };

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
        <Transition animation="fade up" duration={2000} visible={visible}>
          <Grid.Column>
            <p className="tituloInicioGrande">UNIDAD DE INVESTIGACIÓN</p>
            <p className="tituloInicioMediano">
              Promovemos el desarrollo de investigación en salud para contribuir
              a la equidad y a la calidad de la atención sanitaria para todos
              los habitantes de la provincia de Jujuy
            </p>
            <p className="tituloInicioPequenio">
              Para solicitar la admisión administrativa de su Protocolo de
              Investigación haga clic en el siguiente botón:
            </p>
            <Button className="buttonFormat" as={Link} to={"/procedimiento"}>
              <Icon name="file alternate outline" />
              Solicitar la admisión
            </Button>
          </Grid.Column>
        </Transition>
        <Transition animation="fade down" duration={2000} visible={visible}>
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
