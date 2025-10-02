import React from "react";
import {
  HeaderSubheader,
  HeaderContent,
  TableRow,
  TableCell,
  TableBody,
  Header,
  Table,
  Icon,
} from "semantic-ui-react";

import "./TableIntegrantes.scss";
export function TableIntegrantes(props) {
  const { integrantes, iconoIntegrantes } = props;
  return (
    <Table celled collapsing>
      <TableBody>
        {integrantes.map((integrante, index) => (
          <TableRow key={index}>
            <TableCell width={1}>
              <Icon
                className="iconIntegrante"
                name={iconoIntegrantes}
                size="big"
                style={{ color: integrante.color }}
              />
            </TableCell>

            <TableCell>
              <Header>
                <HeaderContent
                  className="nombreIntegrante"
                  style={{ color: integrante.color }}
                >
                  {integrante.nombre}
                  <HeaderSubheader
                    className="descripcionIntegrante"
                    style={{ color: integrante.color }}
                  >
                    {integrante.descripcion}
                  </HeaderSubheader>
                </HeaderContent>
              </Header>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
