import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Counter extends Component {
  static propTypes = {
    init: PropTypes.number.isRequired,
    delta: PropTypes.any,
    onChange: PropTypes.func
  };
  static defaultProps = {
    delta: 1
  };

  calc(delta) {
    this.setState((pre, props) => {
      const newValue = pre.counter + delta;
      if (this.props.onChange) {
        this.props.onChange(newValue);
      }
      return newValue;
    });
  }
  substract() {
    this.calc(-this.props.delta);
  }
  add() {
    this.calc(this.props.delta);
  }

  constructor(props) {
    super(props);
    this.state = { counter: props.init };

    this.add = function() {
      this.calc(this.props.delta);
    };

    this.substract.bind(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <p>
          <input type="button" value="-" onClick={this.substract.bind(this)} />
          <input type="button" value="+" onClick={this.add.bind(this)} />
          <input
            type="button"
            value="Init"
            onClick={e => {
              this.setState({ counter: this.props.init });
            }}
          />
        </p>
      </div>
    );
  }
}
