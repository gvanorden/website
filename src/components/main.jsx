import React, { Component } from "react";
import Contact from "./contact";
import Navbar from "./navbar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: "",
      height: ""
    };

    this.setDimensions = this.setDimensions.bind(this);
  }

  setDimensions() {
    let html = document.getElementsByTagName("html")[0];

    if (window.innerWidth < 800) {
      this.setState({ width: "90vw", height: "35vh" });
      //html.style.fontSize = "1.1vw";
      console.log(window.innerWidth + "        1");
    } else if (window.innerWidth < 1224) {
      this.setState({ width: "85vw", height: "60vh" });
      console.log(window.innerWidth + "        2");
    } else if (window.innerWidth < 1625) {
      this.setState({ width: "80vw", height: "67.5vh" });
      console.log(window.innerWidth);
    } else {
      this.setState({ width: "75vw", height: "65vh" });
      console.log(window.innerWidth);
    }
  }

  componentDidMount() {
    this.setDimensions();

    window.addEventListener("resize", this.setDimensions);
  }

  render() {
    return (
      <div
        className="main"
        style={{
          width: this.state.width,
          height: this.state.height
        }}
      >
        <div className="top-main">
          <Contact />
        </div>
        <div className="bottom-main">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default Main;
