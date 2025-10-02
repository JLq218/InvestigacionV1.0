import React, { useState, useEffect } from "react";

import { Grid, Dimmer, Loader, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { TableIntegrantes } from "../../components";
import imagen from "../../images/imagenEquipo (1).png";
import acit from "../../images/LOGO-GOBIERNO-04-2025.png";
import { proyectLeader, developers } from "../../data/equipoDesarrollo";
import "./DesarrolladoPor.scss";

export function DesarrolladoPor() {
  const [imagenCargada, setImagenCargada] = useState(false);

  const cargaImagen = () => {
    setImagenCargada(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Dimmer active={!imagenCargada} inverted>
        <Loader>Espere un momento</Loader>
      </Dimmer>

      <Grid
        className="gridPage"
        stackable
        style={{
          display: imagenCargada ? "flex" : "none",
        }}
      >
        <Grid.Row>
          <Grid.Column>
            <h2 className="tituloPage">
              INTEGRANTES DEL EQUIPO DE DESARROLLO WEB
            </h2>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2}>
          <Grid.Column>
            <h2 className="tituloEquipo">Desarrolladores:</h2>
            <TableIntegrantes
              integrantes={developers}
              iconoIntegrantes="keyboard outline"
            />
            {/* <h2 className="tituloEquipo">Líder de Proyecto:</h2>
            <TableIntegrantes
              integrantes={proyectLeader}
              iconoIntegrantes="cogs"
            /> */}
            <h2 className="tituloEquipo">Con la colaboración de:</h2>
            <Image
              className="image-acit"
              centered
              src={acit}
              as={Link}
              to={"https://cienciaytecnologia.jujuy.gob.ar/"}
            />
          </Grid.Column>

          <Grid.Column textAlign="center" verticalAlign="middle">
            <Image
              className="imagenEquipo"
              centered
              src={imagen}
              onLoad={cargaImagen}
            />
            <div className="contenedor-button">
              <Button className="buttonFormat" as={Link} to={"/"}>
                Volver al Inicio
              </Button>
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
