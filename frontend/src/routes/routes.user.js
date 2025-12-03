import {
  Inicio,
  JornadaDeInvestigacion,
  AcercaDeNosotros,
  Normativas,
  Contacto,
  ProcedimientoDeAdmisionInicio,
  ProcedimientoDeAdmisionInfo,
  Requisitos,
  ProcedimientoDeAdmisionProceso,
  DesarrolladoPor,
  Error404,
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
    path: "/jornada-investigacion",
    layout: UserLayout,
    component: JornadaDeInvestigacion,
    exact: true,
  },
  {
    path: "/acerca-de",
    layout: UserLayout,
    component: AcercaDeNosotros,
    exact: true,
  },
  {
    path: "/normativas",
    layout: UserLayout,
    component: Normativas,
    exact: true,
  },
  {
    path: "/contacto",
    layout: UserLayout,
    component: Contacto,
    exact: true,
  },
  {
    path: "/procedimiento",
    layout: UserLayout,
    component: ProcedimientoDeAdmisionInicio,
    exact: true,
  },
  {
    path: "/procedimiento/informacion",
    layout: UserLayout,
    component: ProcedimientoDeAdmisionInfo,
    exact: true,
  },
  {
    path: "/procedimiento/verificacion",
    layout: UserLayout,
    component: Requisitos,
    exact: true,
  },
  {
    path: "/procedimiento/admision",
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
];

export default routes;
