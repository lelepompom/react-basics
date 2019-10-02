import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demos, { Saluda } from "./demos";
import Calculator from "./calculator";
import Calculadora from "./calculadora";
import Newsfeed from "./newsfeed";

function App() {
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
      <Newsfeed rows={5} cols={6} />
    </div>
  );
}

export default App;
