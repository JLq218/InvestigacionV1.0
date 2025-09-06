import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "semantic-ui-react";
import "./Error404.scss";

export function Error404() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Grid centered style={{ margin: "0px" }}>
      <Grid.Column className="cuadroCentro" verticalAlign="middle">
        <p className="tituloPrincipalError404">404</p>
        <p className="subtituloError404">OPPS! PÁGINA NO ENCONTRADA</p>
        <p className="descripcionError404">
          Lo sentimos, la página que estás buscando no existe.
        </p>
        <Button className="buttonFormat" as={Link} to={"/"}>
          Volver al Inicio
        </Button>
      </Grid.Column>
    </Grid>
  );
}
