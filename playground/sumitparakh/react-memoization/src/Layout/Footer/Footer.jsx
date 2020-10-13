import React from "react";
import * as fCss from "./Footer.module.css";

export class Footer extends React.Component {
  render() {
    console.log("This is footer", { fCss });
    return (
      <footer className={fCss.footer_content}>
        <ul className={fCss["footer-menu"]}>
          <li>Home</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>
      </footer>
    );
  }
}
