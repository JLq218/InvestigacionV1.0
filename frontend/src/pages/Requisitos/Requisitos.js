import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Requisitos.scss";
import {
  Grid,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Icon,
  Table,
  Checkbox,
  Button,
} from "semantic-ui-react";

import { requisitos } from "../../data/requisitosProceso";

export function Requisitos() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckAll = () => {
    if (isChecked) {
      const updatedChecklist = [];
      setSelectedCheckboxes(updatedChecklist);
      setIsChecked(false);
    } else {
      const updatedChecklist = requisitos.map((item) => item.titulo);
      setSelectedCheckboxes(updatedChecklist);
      setIsChecked(true);
    }
  };
  console.log();
  // Manejador de eventos para el cambio en los checkboxes
  const handleCheckboxChange = (e, { value }) => {
    if (selectedCheckboxes.includes(value)) {
      // Si el checkbox ya está seleccionado, lo eliminamos del array
      setSelectedCheckboxes(
        selectedCheckboxes.filter((item) => item !== value)
      );
    } else {
      // Si el checkbox no está seleccionado, lo agregamos al array
      setSelectedCheckboxes([...selectedCheckboxes, value]);
    }
  };

  return (
    // <Grid stackable className="gridPage">
    <div className="acercade-page">
      <Grid.Column>
        <h2 className="tituloPage">
          📝 VERIFICACIÓN DE LOS DATOS Y DOCUMENTACIÓN REQUERIDA
        </h2>
        <p className="descripcionPage">
          Para <b>facilitar y agilizar el proceso de admisión</b>, hemos
          preparado un listado completo con los{" "}
          <b>datos y documentación requerida</b>. Le pedimos que{" "}
          <b>marque con una tilde aquellos elementos que ya posea</b>. Es
          importante destacar que una vez <b>marcados todos los requisitos</b>{" "}
          en la lista, se{" "}
          <b>habilitará el botón para iniciar el procedimiento</b>. Esta medida
          se implementa con el objetivo de garantizar que la carga de los
          formularios se realice <b>sin contratiempos y en un solo paso</b>.
          Agradecemos de antemano su colaboración.
        </p>
        <Table
          celled
          collapsing
          unstackable
          className="tableNormativas"
          style={{ marginTop: "25px" }}
        >
          <TableHeader>
            <TableRow>
              <TableHeaderCell>DATOS Y DOCUMENTOS</TableHeaderCell>
              <TableHeaderCell textAlign="center" width={1}>
                <Checkbox checked={isChecked} onChange={handleCheckAll} />
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requisitos.map((requisito, index) => (
              <TableRow key={index}>
                <TableCell>
                  <p
                    style={{
                      fontWeight: "600",
                      marginBottom: "0px",
                    }}
                  >
                    {requisito.titulo}
                  </p>
                  <p>
                    {requisito.descripcion}
                    {requisito.enlace && (
                      <a
                        href={requisito.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click para descargar el modelo
                      </a>
                    )}
                  </p>
                </TableCell>
                <TableCell textAlign="center">
                  <Checkbox
                    key={requisito.titulo}
                    value={requisito.titulo}
                    checked={selectedCheckboxes.includes(requisito.titulo)}
                    onChange={handleCheckboxChange}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          disabled={requisitos.length !== selectedCheckboxes.length}
          className="buttonFormat"
          as={Link}
          to={"/procedimientoProceso"}
          icon
          labelPosition="right"
          style={{
            width: "100%",
          }}
        >
          Iniciar Procedimiento de Admisión
          <Icon name="arrow alternate circle right" />
        </Button>
      </Grid.Column>
      {/* </Grid> */}
    </div>
  );
}
