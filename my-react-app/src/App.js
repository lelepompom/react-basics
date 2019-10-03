import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Demos, { Saluda } from "./demos";
import Calculator from "./calculator";
import Calculadora from "./calculadora";
import Newsfeed from "./newsfeed";
import { PeopleForm } from "./people";
import Blog from "./blog";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.menu = [
      { text: "Blog", component: <Blog /> },
      {
        text: "People",
        component: <PeopleForm element={{ name: "", lastname: "Grillo" }} />
      },
      // {
      //   text: "Demos",
      //   component: (
      //     <Demos
      //       destinatario="Madrid"
      //       init={0}
      //       delta={Saluda({ nombre: "tu" })}
      //     />
      //   )
      // },
      { text: "Calculadora", component: <Calculadora /> },
      { text: "Newsfeed", component: <Newsfeed rows={5} cols={6} /> }
    ];
    this.state = { currentComponent: this.menu[0].component };
    this.selectOption = this.loadComponent.bind(this);
    this.inputButtonStyle = {
      margin: `5px`,
      backgroundColor: `#dadada`,
      border: `none`,
      padding: `5px 15px`,
      borderRadius: `3px`,
      color: `#fff`,
      fontWeight: `bold`
    };
  }

  loadComponent(index) {
    this.setState({
      currentComponent: this.menu[index].component
    });
  }
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <Demos init={0} delta={Saluda({ name: "San" })} /> */}

        {/* <Calculadora /> */}
        {/* <Calculator /> */}

        <p>
          {this.menu.map((item, index) => (
            <input
              type="button"
              value={item.text}
              onClick={this.selectOption.bind(this, index)}
              style={this.inputButtonStyle}
              key={item + `-` + index}
            />
          ))}
        </p>
        <div className="container-fluid">{this.state.currentComponent}</div>
      </div>
    );
  }
}
