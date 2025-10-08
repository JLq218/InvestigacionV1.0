import React from "react";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Icon,
  Popup,
} from "semantic-ui-react";

import "./TableNormativas.scss";

export function TableNormativas(props) {
  const { normativas, tituloHeaderCell } = props;
  return (
    <Table celled striped unstackable className="tableNormativas">
      <TableHeader>
        <TableRow>
          <TableHeaderCell colSpan="2">{tituloHeaderCell}</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {normativas.map((normativa, index) => (
          <TableRow key={index}>
            <TableCell>
              <p className="tableCellFormat">{normativa.nombre}</p>
            </TableCell>
            <TableCell textAlign="center">
              <Popup
                content="Ver documento"
                position="left center"
                trigger={
                  <a
                    href={normativa.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      name="file alternate outline"
                      size="large"
                      className="iconFormat"
                    />
                  </a>
                }
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
