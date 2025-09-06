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
  const { normativas, tituloHeaderCell1, tituloHeaderCell2 } = props;
  return (
    <Table celled collapsing style={{ margin: "0px", width: "100%" }}>
      <TableHeader>
        <TableRow>
          <TableHeaderCell className="tableHeaderCellFormat">
            {tituloHeaderCell1}
          </TableHeaderCell>

          <TableHeaderCell width={1} className="tableHeaderCellFormat">
            {tituloHeaderCell2}
          </TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {normativas.map((normativa, index) => (
          <TableRow key={index}>
            <TableCell>
              <p className="tituloNormativa">{normativa.nombre}</p>
            </TableCell>

            <TableCell textAlign="center">
              <Popup
                trigger={
                  <a
                    href={normativa.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon
                      link
                      name="file alternate outline"
                      size="big"
                      className="iconFormat"
                    />
                  </a>
                }
                content="Ir al documento"
                position="left center"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
