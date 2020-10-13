import React from "react";

export class Counter extends React.Component {
  render() {
    console.log({ counter: this.props.counter });
    return <h1>{this.props.counter}</h1>;
  }
}
