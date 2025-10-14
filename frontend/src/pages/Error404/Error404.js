import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Button,
  Icon,
  ButtonContent,
  Transition,
} from "semantic-ui-react";
import "./Error404.scss";

export function Error404() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  return (
    <Grid centered className="error404-grid">
      <Transition animation="browse" duration={500} visible={visible}>
        <div style={{ width: "100%" }} className="error404-page">
          <p className="tituloPrincipalError404">404</p>
          <p className="subtituloError404">OPPS! PÁGINA NO ENCONTRADA</p>
          <p className="descripcionError404">
            Lo sentimos, la página que estás buscando no existe.
          </p>
          <Button animated className="buttonFormat" as={Link} to={"/"}>
            <ButtonContent visible>Volver al Inicio</ButtonContent>
            <ButtonContent hidden>
              <Icon name="home" />
            </ButtonContent>
          </Button>
        </div>
      </Transition>
    </Grid>
  );
}
