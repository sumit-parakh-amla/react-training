import React from "react";
import * as cCss from "./Content.module.css";

export class Content extends React.Component {
  render() {
    return <div className={cCss.content}>{this.props.children}</div>;
  }
}
