import React from "react";

export class Counter extends React.Component {
  render() {
    return <h3>{this.props.counter}</h3>;
  }
}
