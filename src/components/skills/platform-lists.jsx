import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import windows from "../../images/os-logos/windows.png";
import server from "../../images/os-logos/windows-server.png";
import linux from "../../images/os-logos/linux.png";
import mac from "../../images/os-logos/mac.png";
import netapp from "../../images/os-logos/netapp.png";
import emc from "../../images/os-logos/emc.png";

class PlatformsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      platformOne: [
        { id: 1, img: windows, text: "Windows", class: "skills-text red" },
        {
          id: 2,
          img: server,
          text: "Windows Server",
          class: "skills-text red"
        },
        { id: 3, img: netapp, text: "NetApp", class: "skills-text" },
        { id: 4, img: "", text: "", class: "skills-text" },
        { id: 5, img: "", text: "", class: "skills-text" },
        { id: 6, img: "", text: "", class: "skills-text" }
      ],
      platformTwo: [
        { id: 1, img: mac, text: "Mac", class: "skills-text" },
        { id: 2, img: linux, text: "Linux", class: "skills-text blue" },
        { id: 3, img: emc, text: "EMC", class: "skills-text blue" },
        { id: 4, img: "", text: "", class: "skills-text" },
        { id: 5, img: "", text: "", class: "skills-text" },
        { id: 6, img: "", text: "", class: "skills-text" }
      ]
    };
  }

  render() {
    return (
      <div id="platform-container">
        <p className="skills-title">PLATFORMS</p>
        <div className="skills-list-one">
          {this.state.platformOne.map(skill => (
            <ListGroup key={skill.id} className="skills-list">
              <ListGroup.Item className="skills-list-item">
                <img
                  className="skills-image-img"
                  src={skill.img}
                  alt={skill.text}
                />
                <p className={skill.class}> {skill.text}</p>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
        <div className="skills-list-two">
          {this.state.platformTwo.map(skill => (
            <ListGroup key={skill.id} className="skills-list">
              <ListGroup.Item className="skills-list-item">
                <img
                  className="skills-image-img"
                  src={skill.img}
                  alt={skill.text}
                />
                <p className={skill.class}> {skill.text}</p>
              </ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </div>
    );
  }
}

export default PlatformsTable;
