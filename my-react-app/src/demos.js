// shortcut > rcc
import React, { Component } from "react";
import PropTypes from "prop-types";
import Counter from "./counter";
import Calculator from "./calculator";

export function Saluda(props) {
  return <h1>Que pasa {props.name}</h1>;
}

export class Card extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
export default class Demos extends Component {
  static propTypes = {
    name: PropTypes.string,
    init: PropTypes.number.isRequired,
    delta: PropTypes.any,
    onChange: PropTypes.func
  };
  static defaultProps = {
    delta: 5
  };
  constructor(props) {
    super(props);
    this.state = { value: 1 };
    console.info("constructor");
  }
  componentWillMount() {
    console.info("Will mount");
  }
  componentWillReceiveProps() {
    console.info("Props!");
  }
  componentDidMount() {
    console.info("Mounted!");
  }
  componentDidUpdate() {
    console.info("Updated!");
  }
  componentWillUpdate() {
    console.info("Will update");
  }
  render() {
    return (
      <div>
        <Card title="This is a card">
          <div>Delta equals to {this.props.delta}</div>
          <Saluda name={this.props.name} />
          <p>
            Normally, JavaScript expressions inserted in JSX will evaluate to a
            string, a React element, or a list of those things. However,
            props.children works just like any other prop in that it can pass
            any sort of data, not just the sorts that React knows how to render.
            For example, if you have a custom component, you could have it take
            a callback as props.children:
          </p>
          <div>Value equals to {this.state.value}</div>
        </Card>
        <Counter
          init={1}
          onChange={result => {
            this.setState({ value: result });
          }}
        />

        <List></List>
      </div>
    );
  }
}

function ListItem(props) {
  return <li key={props.value}>{props.text}</li>;
}

export class List extends Component {
  constructor(props) {
    super(props);
    this.list = [
      { id: 1, name: "Madrid", location: "Sol, Atocha" },
      { id: 2, name: "Bilbao" },
      { id: 3, name: "Sevilla" }
    ];
  }
  render() {
    return (
      <ul>
        {this.list.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    );
  }
}
