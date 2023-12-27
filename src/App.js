import React, { Component } from "react";
// import Logo from "../public/logo.svg";

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello, World! </h1>
        {/*<Logo />*/}
        <img
          src="logo.svg"
          style={{
            width: "100px",
            fill: "red",
            stroke: "red",
            strokeWidth: "50px",
          }}
          alt=""
        />
      </div>
    );
  }
}

export default App;
