import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Header,
  Icon,
  Checkbox,
  Image,
} from "semantic-ui-react";
import "./ModalAnuncios.scss";
import imagen from "../../images/qr-2_jornada investigacion.png";

export function ModalAnuncios() {
  const [open, setOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const formLink = "https://forms.gle/1hpcQk9mpxgJjkHE9"; // Enlace de Google Form
  const qrImage = imagen; // Imagen del QR

  useEffect(() => {
    const hasDisabledModal = localStorage.getItem("disableJornadaModal");
    // Chequear si ya se mostró el modal en esta sesión
    const hasSeenModal = sessionStorage.getItem("hasSeenJornadaModal");

    if (!hasSeenModal && !hasDisabledModal) {
      sessionStorage.setItem("hasSeenJornadaModal", "true");
      setOpen(true);
      // Guardamos el flag en esta sesión
    }
  }, []);
  console.log(sessionStorage.getItem("hasSeenJornadaModal"));

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
      className="modal-anuncios"
      style={{ borderRadius: "20px", overflow: "hidden" }}
    >
      {/* Encabezado */}
      <div className="modal-anuncios__header">
        <Header as="h1">
          2° JORNADA PROVINCIAL DE INVESTIGACIÓN EN SALUD:
        </Header>
        <p>"LA CIENCIA DE LA SALUD ENTRE CERROS, QUEBRADAS, SELVAS Y VALLES"</p>
      </div>
      <Modal.Content>
        <div className="modal-anuncios__grid">
          {/* Columna izquierda */}
          <div className="modal-anuncios__info">
            <Header as="h3" dividing>
              📢 Informacion sobre la jornada
            </Header>
            <p>
              📆 <strong>Fecha:</strong> Viernes 03 de octubre de 8:30 a 13:30
              hs
            </p>
            <p>
              <Icon name="map marker alternate" color="red" />{" "}
              <strong>Lugar:</strong> Salón Auditorio del Ministerio de Salud
            </p>
            <p>
              🏢 <strong>Domicilio:</strong> Av. Italia esq. Independencia – San
              Salvador de Jujuy
            </p>
            <p>
              ☎️ <strong> Teléfono:</strong> 4245518 (interno 5518)
            </p>
            <p>
              📧 <strong>Consultas:</strong> unidaddeinvestigacion.msj@gmail.com
            </p>

            <Header as="h3" dividing>
              📚 Agenda de Actividades
            </Header>
            <p>
              📌 Presentación de agendas y líneas prioritarias de investigación
              provincial y nacional
            </p>
            <p>📌 Exhibición de trabajos en formato póster</p>
            <p>
              📌 Presentación de resultados del curso en “Metodología de la
              Investigación en Salud”
            </p>
            <p>
              <strong>
                📝 El día de la jornada un comité científico evaluará y
                distinguirá a los mejores trabajos presentados
              </strong>
            </p>
            <p>
              <strong>
                🎉 Todos los trabajos presentados serán publicados en un libro
                de resúmenes con ISBN - con validez editorial
              </strong>
            </p>
          </div>

          {/* Columna derecha */}
          <div className="modal-anuncios__registro">
            <Header as="h3" dividing>
              ✏️ Inscripción
            </Header>
            <p>Inscribite completando el formulario:</p>
            <Button
              as="a"
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              color="green"
              size="large"
              icon
              labelPosition="left"
              fluid
            >
              <Icon name="edit" /> Ir al formulario
            </Button>
            <p>O escaneá el siguiente código QR:</p>
            <Image src={qrImage} size="medium" centered bordered />
          </div>
        </div>
      </Modal.Content>

      {/* Acciones */}
      <Modal.Actions>
        <div className="modal-anuncios__acciones">
          <Checkbox
            label="No volver a mostrar este mensaje"
            checked={dontShowAgain}
            onChange={() => setDontShowAgain(!dontShowAgain)}
          />
          <Button color="green" size="large" onClick={handleClose}>
            <Icon name="checkmark" /> ¡Allí estaré!
          </Button>
        </div>
      </Modal.Actions>
    </Modal>
  );
}
