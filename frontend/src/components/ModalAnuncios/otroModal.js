import React, { useState, useEffect } from "react";
import { Modal, Button, Header, Icon, Checkbox } from "semantic-ui-react";

export function ModalAnuncios() {
  const [open, setOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hasDisabledModal = localStorage.getItem("disableJornadaModal");
    // Chequear si ya se mostró el modal en esta sesión
    const hasSeenModal = sessionStorage.getItem("hasSeenJornadaModal");

    if (!hasSeenModal && !hasDisabledModal) {
      setOpen(true);
      // Guardamos el flag en esta sesión
      sessionStorage.setItem("hasSeenJornadaModal", "true");
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      // Guardamos la preferencia permanente
      localStorage.setItem("disableJornadaModal", "true");
    }
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      size="large"
      closeIcon
      dimmer="blurring"
      style={{ borderRadius: "20px", overflow: "hidden" }}
    >
      {/* Encabezado */}
      <div
        style={{
          background: "linear-gradient(135deg, #2185d0, #21ba45)",
          color: "white",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <Header
          as="h1"
          style={{ fontSize: "2rem", color: "white", marginBottom: "0.5em" }}
        >
          2° Jornada Provincial de Investigación en Salud
        </Header>
        <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
          "La ciencia de la salud entre cerros, quebradas, selvas y valles"
        </p>
      </div>

      {/* Contenido principal */}
      <Modal.Content style={{ padding: "2rem" }}>
        <div
          style={{
            fontFamily: "Montserrat, sans-serif",
            lineHeight: "1.8",
            fontSize: "1.05rem",
          }}
        >
          <Header as="h3" dividing style={{ marginTop: "2rem" }}>
            Información con respecto a la Jornada
          </Header>
          <p>
            <Icon name="map marker alternate" color="red" />{" "}
            <strong>Lugar:</strong> Salón auditorio del Ministerio de Salud.
          </p>
          <p>
            <Icon name="calendar alternate outline" color="blue" />{" "}
            <strong>Fecha:</strong> Viernes 03 de octubre de 8:30 a 13:30 hs.
          </p>
          <p>
            <Icon name="building" color="orange" /> <strong>Domicilio:</strong>{" "}
            Av. Italia esq. Independencia – San Salvador de Jujuy.
          </p>
          <p>
            <Icon name="phone" color="teal" /> <strong>Teléfono:</strong>{" "}
            4245518 (interno 5518)
          </p>
          <p>
            <Icon name="mail outline" color="purple" />{" "}
            <strong>Consultas:</strong> unidaddeinvestigacion.msj@gmail.com
          </p>

          <Header as="h3" dividing style={{ marginTop: "2rem" }}>
            Agenda de Actividades
          </Header>
          <p>
            📌 Presentación de agendas y líneas prioritarias de investigación
            provincial y nacional.
          </p>
          <p>📌 Exhibición de trabajos en formato póster.</p>
          <p>
            📌 Resultados del curso en “Metodología de la Investigación en
            Salud”.
          </p>
          <p>
            📌 Evaluación y distinción de los mejores trabajos por parte de un
            comité científico.
          </p>
          <p>
            📌 Publicación de los trabajos en un libro de resúmenes con ISBN
            (validez editorial).
          </p>
        </div>
      </Modal.Content>

      {/* Acciones */}
      <Modal.Actions style={{ padding: "1.5rem", textAlign: "center" }}>
        <div style={{ marginBottom: "1rem", textAlign: "left" }}>
          <Checkbox
            label="No volver a mostrar este mensaje"
            checked={dontShowAgain}
            onChange={() => setDontShowAgain(!dontShowAgain)}
          />
        </div>
        <Button
          color="green"
          size="large"
          onClick={handleClose}
          style={{ borderRadius: "10px", fontWeight: "bold" }}
        >
          <Icon name="checkmark" /> ¡Allí estaré!
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
