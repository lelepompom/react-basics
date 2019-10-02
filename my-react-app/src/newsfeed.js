import React, { Component } from "react";
import PropTypes from "prop-types";

class PictureContainer extends Component {
  static propTypes = {
    colClassName: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number
  };
  static defaultProps = {
    width: 200,
    height: 200
  };
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
    this.pictureStyle = {
      margin: `${this.props.height / 10}px 0`,
      width: `${this.props.width}px`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      cursor: `pointer`
    };
    this.pictureUnloaded = {
      height: `${this.props.height / 2}px`,
      width: `${this.props.width / 2}px`,
      backgroundColor: `#F3F3F3`
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState({ visible: !this.state.visible });
  }
  setContent() {
    var url = `https://picsum.photos/id/${(Math.random() * 1000).toFixed()}/${
      this.props.width
    }/${this.props.height}`;
    return this.state.visible ? (
      <img src={url} style={{ maxWidth: `100%` }} />
    ) : (
      <div style={this.pictureUnloaded}></div>
    );
  }
  render() {
    return (
      <div
        className={this.props.colClassName}
        style={this.pictureStyle}
        onClick={this.toggleVisibility}
      >
        {this.setContent()}
      </div>
    );
  }
}

export default class Newsfeed extends Component {
  static propTypes = {
    rows: PropTypes.number.isRequired,
    cols: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);
    this.colClassName = "";
  }

  setColClass() {
    switch (this.props.cols) {
      case 2:
        return "col-6";
      case 3:
        return "col-4";
      case 4:
        return "col-3";
      case 6:
        return "col-2";
      default:
        return "col-1";
    }
  }
  createColumns() {
    var columns = [];
    for (var i = 0; i < this.props.cols; i++) {
      columns.push(
        <PictureContainer
          colClassName={this.setColClass()}
          key={"picture-" + i}
        />
      );
    }
    return columns;
  }
  createRows() {
    var rows = [];
    for (var i = 0; i < this.props.rows; i++) {
      rows.push(
        <div className="row" key={"row-" + i}>
          {this.createColumns()}
        </div>
      );
    }
    return rows;
  }
  render() {
    return <div>{this.createRows()}</div>;
  }
}
