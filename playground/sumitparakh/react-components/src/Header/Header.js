import React from "react";
import { Menu } from "../Menu/Menu";

export class Header extends React.Component {
  constructor() { 
    super();
    this.tagLine = 'Live and let live';
  }

  render() {
    return (
      <header>
        {this.props.headerLabel}
        {this.tagLine}
        <Menu />
      </header>
    );
  }
}
