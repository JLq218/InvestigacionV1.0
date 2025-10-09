import React, { useEffect, useState } from "react";
import { Transition } from "semantic-ui-react";

import {
  normativasArgentina,
  normativasInternacionales,
} from "../../data/normativas";

import { TableNormativas } from "../../components";

import "./Normativas.scss";

export function Normativas() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    setVisible(true);
  }, []);

  return (
    <div className="normativas-page">
      <Transition animation="scale" duration={800} visible={visible}>
        <div>
          <h2 className="tituloPage">📚 NORMATIVAS DE INVESTIGACIÓN</h2>
          <p className="descripcionPage">
            A continuación se presenta un conjunto de normativas que constituyen
            la base para el proceso de evaluación de los
            <b> Protocolos de Investigación</b>. Estas disposiciones sirven como
            marco de referencia para garantizar que los proyectos presentados en
            la <b>Unidad de Investigación</b> cumplan con los criterios{" "}
            <b>éticos, metodológicos y legales</b> establecidos.
          </p>
        </div>
      </Transition>

      <Transition animation="scale" duration={800} visible={visible}>
        <div className="tabla-container">
          <TableNormativas
            normativas={normativasArgentina}
            tituloHeaderCell="NORMATIVAS APLICABLES EN ARGENTINA"
          />
        </div>
      </Transition>

      <Transition animation="scale" duration={800} visible={visible}>
        <div className="tabla-container">
          <TableNormativas
            normativas={normativasInternacionales}
            tituloHeaderCell="PAUTAS ÉTICAS E INSTRUMENTOS INTERNACIONALES"
          />
        </div>
      </Transition>
    </div>
  );
}
