import React from "react";
import "./styles.css";
import { Navbar } from "./Components/Navbar";
import { HomePage } from "./Components/HomePage";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <HomePage />
      </div>
    );
  }
}
