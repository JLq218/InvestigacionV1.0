// IMPORTACIÓN DE REACT
import React from "react";

// IMPORTACIÓN PARA EL SISTEMA DE RUTAS
import { BrowserRouter, Routes, Route } from "react-router-dom";

// IMPORTACIÓN DE LAS ROUTES
import routes from "./routes.user";
import { map } from "lodash";

export function Navigation() {
  // RENDERIZACIÓN DE LAS RUTAS PARA EL USUARIO ADMINISTRADOR
  return (
    <BrowserRouter>
      <Routes>
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
