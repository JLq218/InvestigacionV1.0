import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { enlacesRedes } from "../../data/enlacesRedesSociales";

import "./MenuRedesSociales.scss";

export function MenuRedesSociales() {
  return (
    <Menu secondary>
      <Menu.Menu position="right">
        {enlacesRedes.map((enlace, index) => (
          <Menu.Item
            key={index}
            as={Link}
            to={enlace.enlace}
            target="_blank"
            style={{ margin: "0px 5px", padding: "5px" }}
          >
            <Icon
              className="iconRedesFormat"
              name={enlace.icon}
              style={{ color: enlace.color }}
            />
          </Menu.Item>
        ))}
      </Menu.Menu>
    </Menu>
  );
}
