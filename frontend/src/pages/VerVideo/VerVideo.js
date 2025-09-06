import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import imaYoutube from "../../images/pantallaVideo.png";
import "./VerVideo.scss";

export function VerVideo() {
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
    <Grid style={{ padding: "10px 40px", margin: "-14px 0px 0px 0px" }}>
      <Grid.Row centered>
        <h2 className="tituloPrincipal">VIDEO ILUSTRATIVO</h2>
        {/* <h3 className="subtituloProcesoDeAdmision" style={{ margin: "0px" }}>
          En el siguiente video podras ver un ejemplo de como es el proceso de
          admision de un protocolo de investigación
        </h3> */}
      </Grid.Row>

      <Grid.Row centered>
        <img alt="" src={imaYoutube} style={{ width: "70%" }}></img>
      </Grid.Row>

      <Grid.Row centered>
        <Button className="buttonFormat" as={Link} to="/procedimiento">
          Regresar
        </Button>
      </Grid.Row>
    </Grid>
  );
}
