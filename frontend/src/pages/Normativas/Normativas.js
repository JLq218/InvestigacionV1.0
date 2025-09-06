import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";

import { TableNormativas } from "../../components";

import {
  normativasArgentina,
  normativasInternacionales,
} from "../../data/normativas";

import "./Normativas.scss";

export function Normativas() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <Grid stackable className="gridPage">
      <Grid.Column>
        <h2 className="tituloPage">NORMATIVAS DE INVESTIGACIÓN</h2>
        <TableNormativas
          normativas={normativasArgentina}
          tituloHeaderCell1={"NORMATIVAS APLICABLE EN ARGENTINA"}
          tituloHeaderCell2={"DOCUMENTO"}
        />
        <div style={{ margin: "30px 0px" }}>
          <TableNormativas
            normativas={normativasInternacionales}
            tituloHeaderCell1={"PAUTAS ETICAS E INSTRUMENTOS INTERNACIONALES"}
            tituloHeaderCell2={"DOCUMENTO"}
          />
        </div>
      </Grid.Column>
    </Grid>
  );
}
