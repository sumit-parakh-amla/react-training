import React from "react";
import { Menu } from "../Menu/Menu";

export const Footer = (props) => {
  return (
    <footer>
      This is footer
      <Menu menus={props.menus} />
    </footer>
  );
};
