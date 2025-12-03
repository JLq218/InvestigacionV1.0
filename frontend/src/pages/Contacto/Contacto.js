import React, { useState, useEffect } from "react";
import { Grid, Dimmer, Loader, Transition } from "semantic-ui-react";
import { MenuRedesSociales } from "../../components";
import "./Contacto.scss";

export function Contacto() {
  const [mapaCargado, setMapaCargado] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  const cargarMapa = () => {
    setMapaCargado(true);
  };

  return (
    <div className="contenedor-page">
      <Dimmer active={!mapaCargado} inverted>
        <Loader size="big">Espere un momento</Loader>
      </Dimmer>

      <Grid stackable style={{ display: mapaCargado ? "flex" : "none" }}>
        <Grid.Row>
          <Transition animation="fade up" duration={800} visible={visible}>
            <Grid.Column>
              <h2 className="tituloPage">CONTACTO</h2>
              <p className="descripcionPage">
                Para obtener mayor{" "}
                <b>
                  información sobre el proceso de admisión y evaluación de
                  protocolos de investigación
                </b>
                , o para realizar consultas relacionadas con la normativa
                vigente, la Unidad de Investigación pone a disposición los
                siguientes <b>canales de contacto</b>. A través de ellos, los
                interesados podrán comunicarse directamente con el
                <b> equipo responsable</b>, recibir{" "}
                <b>
                  orientación sobre los requisitos establecidos y acceder a
                  asistencia en la presentación de sus proyectos
                </b>
                .
              </p>
            </Grid.Column>
          </Transition>
        </Grid.Row>
        <Transition animation="fade down" duration={800} visible={visible}>
          <Grid.Row columns={2} verticalAlign="middle">
            <Grid.Column width={7} style={{ maxHeight: "400px" }}>
              <h3 className="tituloItem">☎️ Teléfono:</h3>
              <p className="descripcionItem">– (0388) 4245518</p>

              <h3 className="tituloItem">
                📧 Correo electrónico de la unidad:
              </h3>
              <p className="descripcionItem">
                unidaddeinvestigacion.msj@gmail.com
              </p>

              <h3 className="tituloItem">📍 Ubicación:</h3>
              <p className="descripcionItem">
                Av. Italia esq. Independencia – Hall Auditorium. CP 4600 San
                Salvador de Jujuy – JUJUY-ARGENTINA De 08:00 a 13:00 hs
              </p>

              <h3 className="tituloItem">
                🖥️ Correo electrónico del soporte de la plataforma:
              </h3>
              <p className="descripcionItem">grupointegrar1@gmail.com</p>
            </Grid.Column>

            <Grid.Column
              width={9}
              textAlign="center"
              style={{ height: "50vh", maxHeight: "400px" }}
            >
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  width: "100%",
                  height: "100%", // ajusta según necesites
                }}
              >
                <iframe
                  title="Mapa de google"
                  className="contactoMapa"
                  onLoad={cargarMapa}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5191.9211060443085!2d-65.29637308246305!3d-24.1867706389301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f5b8e135cdd%3A0xdef2a693fecfc293!2sMinisterio%20de%20Salud!5e0!3m2!1ses!2sar!4v1699364448663!5m2!1ses!2sar"
                  style={{
                    border: "0",
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Transition>

        <Grid.Row
          centered
          verticalAlign="middle"
          style={{ padding: "0px", marginTop: "10px" }}
        >
          <Transition animation="fade left" duration={800} visible={visible}>
            <div>
              <MenuRedesSociales />
            </div>
          </Transition>
        </Grid.Row>
      </Grid>
    </div>
  );
}
