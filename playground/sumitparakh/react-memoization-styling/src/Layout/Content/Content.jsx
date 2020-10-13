import React from "react";

export class Content extends React.Component {
  render() {
    console.log("This is content");
    return <div>{this.props.children}</div>;
  }
}
