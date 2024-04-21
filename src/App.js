import React, { Component } from "react";
import Logo from "../public/logo.svg";

import "./styles.css";

class App extends Component {
  render() {
    return (
      <>
        <h1> Hello, World! </h1>
        <div style={{ display: "flex", gap: "24px" }}>
          <div className="component">
            <p> This is a React component! </p>
            <Logo className="svg" />
          </div>
          <div className="component">
            <p> This is img tag! </p>
            <img src="logo.svg" className="svg" alt="" />
          </div>
        </div>
      </>
    );
  }
}

export default App;
