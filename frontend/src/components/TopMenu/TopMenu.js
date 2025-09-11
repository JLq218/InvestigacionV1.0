import React from "react";
import { Menu, Grid, Dropdown, Popup } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";

import "./TopMenu.scss";
import logoMinisterio from "../../images/Gobierno+ministerioRecurso 13@300x.png";
import {
  color_primario,
  color_blanco_puro,
  color_fondo,
} from "../../data/colores";

import { opcionesMenu } from "../../data/opcionesMenu";

export function TopMenu() {
  const colorWrite = color_blanco_puro;
  const backgroundColor_item = color_primario;

  const enlaceMinisterio = "https://salud.jujuy.gob.ar/";
  const { pathname } = useLocation();

  return (
    <Grid className="topMenu" verticalAlign="middle" columns={2}>
      <Grid.Column width={2} floated="left" style={{ padding: "0px" }}>
        <Menu.Item as={Link} to={enlaceMinisterio}>
          <Popup
            trigger={
              <img className="logoTopMenu" src={logoMinisterio} alt=""></img>
            }
            content="Ir a la página del Ministerio de Salud de Jujuy"
            position="left center"
          />
        </Menu.Item>
      </Grid.Column>

      <Grid.Column
        className="menuItemLarge"
        width={14}
        style={{
          padding: "0px",
        }}
      >
        <Menu secondary style={{ marginRight: "30px" }}>
          <Menu.Menu position="right">
            {opcionesMenu.map((opcion, index) => (
              <Menu.Item
                key={index}
                className="itemMenu"
                as={Link}
                to={opcion.namePath}
                active={pathname === opcion.namePath}
                style={{
                  backgroundColor:
                    pathname === opcion.namePath && backgroundColor_item,
                }}
              >
                <p
                  className="itemMenu__texto"
                  style={{ color: pathname === opcion.namePath && colorWrite }}
                >
                  {opcion.texto}
                </p>
              </Menu.Item>
            ))}
          </Menu.Menu>
        </Menu>
      </Grid.Column>

      <Grid.Column
        className="menuItemMini"
        textAlign="right"
        style={{ padding: "5px" }}
      >
        <Dropdown
          item
          icon={{ name: "bars", size: "big" }}
          direction="left"
          style={{
            color: backgroundColor_item,
            margin: "0px 10px 0px 0px",
          }}
        >
          <Dropdown.Menu
            style={{
              backgroundColor: color_fondo,
            }}
          >
            {opcionesMenu.map((opcion, index) => (
              <Dropdown.Item
                key={index}
                as={Link}
                to={opcion.namePath}
                active={pathname === opcion.namePath}
                style={{
                  backgroundColor:
                    pathname === opcion.namePath && backgroundColor_item,
                  color: pathname === opcion.namePath && colorWrite,
                }}
              >
                {opcion.texto}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Grid.Column>
    </Grid>
  );
}
