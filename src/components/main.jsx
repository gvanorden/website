import React, { Component } from "react";
import Contact from "./contact";
import Navbar from "./navbar";

class Main extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Contact />
        <Navbar />
      </React.Fragment>
    );
  }
}

export default Main;
