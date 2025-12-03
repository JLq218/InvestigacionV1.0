import React, { useState } from "react";
import { ProcesoDeAdmisionPaso01 } from "./ProcesoDeAdmisionPaso01";
import { ProcesoDeAdmisionPaso02 } from "./ProcesoDeAdmisionPaso02";
import { ProcesoDeAdmisionPaso03 } from "./ProcesoDeAdmisionPaso03";

export function ProcedimientoDeAdmisionProceso() {
  const [paso1, setPaso1] = useState(false);
  const [paso2, setPaso2] = useState(false);

  const onPaso2 = () => setPaso1((prev) => !prev);
  const onPaso3 = () => setPaso2((prev) => !prev);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  scrollToTop();

  return paso1 ? (
    paso2 ? (
      <ProcesoDeAdmisionPaso03 />
    ) : (
      <ProcesoDeAdmisionPaso02 onPaso3={onPaso3} />
    )
  ) : (
    <ProcesoDeAdmisionPaso01 onPaso2={onPaso2} />
  );
}
