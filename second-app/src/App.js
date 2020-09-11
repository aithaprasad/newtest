import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <p className="container1">ReactJs Logo With Shadow</p>
      <div className="polaroid">
        <img src={logo} alt="logo"></img>
        --------------------------
        <div className="container">
          <p>ReactJs Logo !!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
