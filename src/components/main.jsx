import React, { Component } from "react";
import Contact from "./contact";
import Navbar from "./navbar";
import { get } from "https";


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '70vw',
      height: '70vh'
    }

    this.setDimensions = this.setDimensions.bind(this);
  }

  setDimensions() {
    if (window.innerWidth <= 812 && window.innerHeight > 414) {
      this.setState({ width: '80vw', height: '37.5vh' })
      //document.getElementsByClassName('bio')[0].style.padding = "7.5em"
    }
    else if (window.innerWidth <= 1024 && window.innerHeight > 414) {
      this.setState({ width: '80vw', height: '50vh' })
      //document.getElementsByClassName('bio')[0].style.padding = "0.5em"
    }
    else {
      this.setState({ width: '70vw', height: '70vh' })
      //document.getElementsByClassName('bio')[0].style.padding = "0.5em"
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.setDimensions)
  }

  render() {
    return (
      <div className="main" style={{ width: this.state.width, height: this.state.height, margin: 'auto' }}>
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
