import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Requisitos.scss";
import {
  Grid,
  HeaderSubheader,
  HeaderContent,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Header,
  Table,
  Checkbox,
  Button,
} from "semantic-ui-react";

import { requisitos } from "../../data/requisitosProceso";

export function Requisitos() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  useEffect(() => {
    // Esta función se ejecutará solo una vez
    scrollToTop();
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
    <Grid stackable className="gridPage">
      <Grid.Column>
        <h2 className="tituloPage">
          VERIFICACIÓN DE LOS DATOS Y DOCUMENTOS REQUERIDOS
        </h2>
        <p className="descripcionPage">
          Para facilitar y agilizar el proceso de admisión, hemos preparado un
          listado completo de los datos y documentos necesarios. Le pedimos que
          marque con una tilde aquellos elementos que ya posea. Es importante
          destacar que una vez marcados todos los requisitos en la lista, se
          habilitará el botón para iniciar el procedimiento. Esta medida se
          implementa con el objetivo de garantizar que la carga de los
          formularios se realice sin contratiempos y en un solo paso.
          Agradecemos de antemano su colaboración.
        </p>
        <Table celled collapsing style={{ width: "100%" }}>
          <TableHeader>
            <TableRow>
              <TableHeaderCell
                style={{
                  color: "#542141",
                  fontSize: "20px",
                }}
              >
                DATOS Y DOCUMENTOS
              </TableHeaderCell>
              <TableHeaderCell
                textAlign="center"
                width={2}
                style={{
                  color: "#542141",
                  fontSize: "20px",
                }}
              >
                <Checkbox checked={isChecked} onChange={handleCheckAll} />
              </TableHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requisitos.map((requisito, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Header as="h3">
                    <HeaderContent
                      style={{ color: "#542141", fontSize: "17px" }}
                    >
                      {requisito.titulo}
                    </HeaderContent>
                    <HeaderSubheader
                      style={{ color: "#542141", fontSize: "16px" }}
                    >
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
                    </HeaderSubheader>
                  </Header>
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
          style={{ margin: "0px 0px 40px 0px" }}
          floated="right"
        >
          Iniciar Procedimiento de Admisión
        </Button>
      </Grid.Column>
    </Grid>
  );
}
