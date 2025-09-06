import React, { useState, useEffect } from "react";
import { Grid, Dimmer, Loader } from "semantic-ui-react";
import { MenuRedesSociales } from "../../components";

import "./Contacto.scss";
// import imaMaps from "../../../logos/imaMaps.png";

export function Contacto() {
  const [mapaCargado, setMapaCargado] = useState(false);

  const cargarMapa = () => {
    setMapaCargado(true);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      // behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <Dimmer active={!mapaCargado} inverted>
        <Loader size="big">Espere un momento</Loader>
      </Dimmer>

      <Grid
        stackable
        className="gridPage"
        style={{ display: mapaCargado ? "flex" : "none" }}
      >
        <Grid.Row>
          <Grid.Column>
            <h2 className="tituloPage">CONTACTO</h2>
            <h2 className="subtituloPage">
              Comunicate con nosotros a través de los siguientes medios:
            </h2>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={2} style={{ padding: "0px" }}>
          <Grid.Column width={8}>
            <h3 className="tituloItem">Teléfono:</h3>

            <p className="descripcionItem">– (0388) 4245518</p>
            <h3 className="tituloItem">E-mail:</h3>
            <p className="descripcionItem">
              unidaddeinvestigacion.msj@gmail.com
            </p>
            <h3 className="tituloItem">Personalmente:</h3>
            <p className="descripcionItem">
              Av. Italia esq. Independencia – Hall Auditorium. CP 4600 San
              Salvador de Jujuy – JUJUY-ARGENTINA De 08:00 a 13:00 hs
            </p>
          </Grid.Column>

          <Grid.Column width={8} textAlign="center" style={{ height: "50vh" }}>
            {/* <Menu.Item
            as={Link}
            to="https://maps.app.goo.gl/hQEuCPJzbKGFE97A7"
            target="_blank"
          >
            <img className="contactoMapa" alt="" src={imaMaps}></img>
          </Menu.Item> */}
            <iframe
              title="Mapa de google"
              className="contactoMapa"
              onLoad={cargarMapa}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5191.9211060443085!2d-65.29637308246305!3d-24.1867706389301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f5b8e135cdd%3A0xdef2a693fecfc293!2sMinisterio%20de%20Salud!5e0!3m2!1ses!2sar!4v1699364448663!5m2!1ses!2sar"
              style={{ border: 0 }}
              // allowfullscreen=""
              // loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row
          centered
          verticalAlign="middle"
          style={{ padding: "10px 0px 40px 0px" }}
        >
          <MenuRedesSociales />
        </Grid.Row>
      </Grid>
    </>
  );
}
