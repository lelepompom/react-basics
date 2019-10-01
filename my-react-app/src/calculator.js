import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Calculator extends Component {
  static propTypes = {
    init: PropTypes.string,
    result: PropTypes.number,
    operation: PropTypes.string
  };
  static defaultProps = {
    init: "",
    result: 0
  };
  constructor(props) {
    super(props);
    this.state = { operation: props.init };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const newValue = event.target.value;
    this.setState((current, props) => {
      const operation = current.operation + newValue;
      return {
        operation: operation,
        result: operation.match("/\\d+[\\+\\-\\*]\\d{1,}$/")
          ? eval(operation)
          : this.props.result
      };
    });
  }

  onEquals() {
    this.setState({ operation: this.state.result });
  }
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="button"
                  value="7"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="8"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="9"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="*"
                  onClick={this.onChange.bind(this)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="4"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="5"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="6"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="-"
                  onClick={this.onChange.bind(this)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="1"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="2"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="3"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="+"
                  onClick={this.onChange.bind(this)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="button"
                  value="0"
                  onClick={this.onChange.bind(this)}
                />
              </td>
              <td>
                <input
                  type="button"
                  value="C"
                  onClick={e => {
                    this.setState({ operation: this.props.init });
                  }}
                />
              </td>
              <td colSpan="2">
                <input
                  type="button"
                  value="="
                  onClick={this.onEquals.bind(this)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <h1>{this.state.operation || "0"}</h1>
      </div>
    );
  }
}
