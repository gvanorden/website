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
    let i = 0

    if (window.innerWidth <= 812 && window.innerHeight > 414) {
      this.setState({ width: '80vw', height: '37.5vh' })

      let images = document.getElementsByClassName('skills-image')
      for (i = 0; i < images.length; i++) {
        images[i].childNodes[0].style.height = '1.5vh';
      }
    }
    else if (window.innerWidth <= 1024 && window.innerHeight > 414) {
      this.setState({ width: '80vw', height: '50vh' })

      let images = document.getElementsByClassName('skills-image')
      for (i = 0; i < images.length; i++) {
        images[i].childNodes[0].style.height = '2vh';
      }

    }
    else {
      this.setState({ width: '70vw', height: '70vh' })

      let images = document.getElementsByClassName('skills-image')
      for (i = 0; i < images.length; i++) {
        images[i].childNodes[0].style.height = '2.75vh';
      }
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
