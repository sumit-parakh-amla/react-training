import React, { memo } from "react";
import * as fCss from "./Footer.module.css";

/**
 * memo can be used with
 * functional component only
 *
 * Stateless component
 * All data is static
 */
export const Footer = memo((props) => {
  console.log('Footer');
  return (
    <div className={fCss["footer-content"]}>
      <h2>Footer</h2>
      <h4>{props.footerData}</h4>
    </div>
  );
});
