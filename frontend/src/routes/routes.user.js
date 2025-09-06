import {
  Inicio,
  AcercaDeNosotros,
  Contacto,
  ProcedimientoDeAdmisionInicio,
  ProcedimientoDeAdmisionInfo,
  ProcedimientoDeAdmisionProceso,
  Error404,
  PreguntasFrecuentes,
  ComiteDeEtica,
  Normativas,
  Requisitos,
  DesarrolladoPor,
} from "../pages";
import { UserLayout, BasicLayout } from "../layouts";

// LISTADO DE LAS URL PARA EL USUARIO ADMINISTRADOR
const routes = [
  {
    path: "/",
    layout: UserLayout,
    component: Inicio,
    exact: true,
  },
  {
    path: "/acercade",
    layout: UserLayout,
    component: AcercaDeNosotros,
    exact: true,
  },
  {
    path: "/contacto",
    layout: UserLayout,
    component: Contacto,
    exact: true,
  },
  // {
  //   path: "/comite",
  //   layout: UserLayout,
  //   component: ComiteDeEtica,
  //   exact: true,
  // },
  {
    path: "/normativas",
    layout: UserLayout,
    component: Normativas,
    exact: true,
  },
  {
    path: "/procedimientoInicio",
    layout: UserLayout,
    component: ProcedimientoDeAdmisionInicio,
    exact: true,
  },
  {
    path: "/procedimientoInformacion",
    layout: UserLayout,
    component: ProcedimientoDeAdmisionInfo,
    exact: true,
  },
  {
    path: "/requisitos",
    layout: UserLayout,
    component: Requisitos,
    exact: true,
  },
  {
    path: "/procedimientoProceso",
    layout: UserLayout,
    component: ProcedimientoDeAdmisionProceso,
    exact: true,
  },
  {
    path: "/desarrolladores",
    layout: UserLayout,
    component: DesarrolladoPor,
    exact: true,
  },
  {
    path: "*",
    layout: BasicLayout,
    component: Error404,
  },
  {
    path: "/preguntasFrecuentes",
    layout: UserLayout,
    component: PreguntasFrecuentes,
    exact: true,
  },
];

export default routes;
