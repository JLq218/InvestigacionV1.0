import React, { useEffect, useState } from "react";
import { Button, Icon, Transition } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./JornadaDeInvestigacion.scss";

export function JornadaDeInvestigacion() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  return (
    <div className="acercade-page">
      <Transition animation="fade down" duration={800} visible={visible}>
        <div>
          <h2 className="tituloPage">
            📑 ACERCA DE NUESTRAS JORNADAS DE INVESTIGACIÓN
          </h2>
          <p className="descripcionPage">
            En este apartado encontrarás información detallada sobre las
            <b> Jornadas de Investigación</b> organizadas por la{" "}
            <b>Unidad de Investigación</b>.
            <br />
            Estos encuentros constituyen un{" "}
            <b>espacio de intercambio científico y académico</b> donde se
            presentan los <b>avances, experiencias y resultados</b> de proyectos
            desarrollados en distintas áreas de la <b>salud pública</b> y{" "}
            <b>disciplinas afines</b>.
          </p>
        </div>
      </Transition>

      {/* ETAPA 1 */}
      <div className="devpage-content-center">
        <Transition animation="fade right" duration={800} visible={visible}>
          <div className="jornada-stage stage-noticia">
            <p className="jornada-stage-title">JORNADA DE INVESTIGACIÓN 2025</p>
            <p className="jornada-stage-fecha">
              <Icon name="calendar outline" /> 03 de Octubre, 2025
            </p>
            <p className="jornada-stage-desc">
              El <b>3 de octubre de 2025</b> se llevó a cabo la{" "}
              <b>2° Jornada Provincial de Investigación en Salud</b>, bajo el
              lema{" "}
              <b>
                <i>
                  “La Ciencia de la Salud entre Cerros, Quebradas, Selvas y
                  Valles”
                </i>
              </b>
              . El evento tuvo lugar en el{" "}
              <b>Salón Auditorio del Ministerio de Salud</b>, ubicado en{" "}
              <b>Av. Italia esquina Independencia</b>, en{" "}
              <b>San Salvador de Jujuy</b>, y se desarrolló entre las{" "}
              <b>8:30 y las 13:30 horas</b>.
            </p>

            <p className="jornada-stage-desc">
              Durante la jornada, se presentaron las{" "}
              <b>
                {" "}
                agendas y líneas prioritarias de investigación provincial y
                nacional
              </b>
              , se realizó la
              <b> exhibición de trabajos en formato póster</b> y se compartieron
              los
              <b>
                {" "}
                resultados del curso “Metodología de la Investigación en Salud”
              </b>
              .
            </p>

            <p className="jornada-stage-desc">
              Un <b>comité científico evaluó los trabajos presentados</b>,
              distinguiendo a los más destacados por su calidad y aporte al
              conocimiento. Además, todos los trabajos formarán parte de un
              <b> libro de resúmenes con ISBN</b> , otorgándole{" "}
              <b>validez editorial y académica</b> a las producciones
              participantes.
            </p>
            <Button
              className="buttonFormatJornada"
              as={Link}
              target="_blank"
              to="https://drive.google.com/file/d/1pb-P8Yz-b-JNB2vMJPNQX8kt_KTbCYLe/view"
              icon
              labelPosition="left"
            >
              <Icon name="book" />
              Ver Libro de Resumenes 2025
            </Button>
          </div>
        </Transition>

        {/* ETAPA 2 */}
        <Transition animation="fade left" duration={800} visible={visible}>
          <div className="jornada-stage stage-noticia">
            <p className="jornada-stage-title">JORNADA DE INVESTIGACIÓN 2024</p>
            <p className="jornada-stage-fecha">
              <Icon name="calendar outline" /> 29 de Noviembre, 2024
            </p>

            <p className="jornada-stage-desc">
              El <b>29 de noviembre de 2024</b> se llevó a cabo la{" "}
              <b>1° Jornada Provincial de Investigación en Salud</b>, bajo el
              lema{" "}
              <b>
                <i>
                  “La Ciencia de la Salud entre Cerros, Quebradas, Selvas y
                  Valles”
                </i>
              </b>
              . El evento tuvo lugar en el{" "}
              <b>Salón Auditorio del Ministerio de Salud</b>, ubicado en{" "}
              <b>Av. Italia esquina Independencia</b>, en{" "}
              <b>San Salvador de Jujuy</b>, y se desarrolló entre las{" "}
              <b>8:30 y las 13:30 horas</b>.
            </p>

            <p className="jornada-stage-desc">
              El encuentro estuvo dirigido a{" "}
              <b>
                investigadores, profesionales, estudiantes y representantes de
                instituciones interesadas en la investigación en salud{" "}
              </b>
              y contó con la participación de más de 120 inscriptos. Durante la
              jornada se presentaron
              <b> 24 trabajos en formato póster</b>, los cuales fueron evaluados
              por una
              <b> comisión científica</b>, que distinguió a los{" "}
              <b>mejores trabajos</b> por su calidad y aporte.
            </p>

            <p className="jornada-stage-desc">
              Además, se llevó a cabo la{" "}
              <b>
                socialización de los procedimientos para la admisión de
                protocolos de investigación
              </b>{" "}
              y se presentaron las
              <b> funciones del Comité de Ética de la Provincia</b>. La jornada
              incluyó también <b>presentaciones artísticas</b>y la exposición de
              la{" "}
              <b>
                plataforma web para la admisión administrativa de protocolos de
                investigación
              </b>
              , herramienta destinada a optimizar la gestión de dichos procesos.
            </p>
            <Button
              className="buttonFormatJornada"
              as={Link}
              target="_blank"
              to="https://drive.google.com/file/d/1pb-P8Yz-b-JNB2vMJPNQX8kt_KTbCYLe/view"
              icon
              labelPosition="left"
            >
              <Icon name="book" />
              Ver Libro de Resumenes 2024
            </Button>
          </div>
        </Transition>
      </div>
    </div>
  );
}
