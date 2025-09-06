import React from "react";
import "./UserLayout.scss";
import { TopMenu, Footer } from "../../components";

export function UserLayout(props) {
  const { children } = props;
  return (
    <div className="user-layout">
      <div className="user-layout__menu">
        <TopMenu />
      </div>
      <div className="user-layout__main-content">{children}</div>
      <Footer />
    </div>
  );
}
