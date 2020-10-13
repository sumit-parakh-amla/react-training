import React from "react";
import * as hCss from "./Header.module.css";

export class Header extends React.PureComponent {
  render() {
    console.log("This is Header", {temp: this.props.temp});
    return (
      <div className={hCss["header-content"]}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {this.props.temp}
      </div>
    );
  }
}
