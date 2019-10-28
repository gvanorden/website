import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import windows from "../../images/os-logos/windows.png";
import server from "../../images/os-logos/windows-server.png";
import linux from "../../images/os-logos/linux.png";
import mac from "../../images/os-logos/mac.png";
import netapp from "../../images/os-logos/netapp.png";
import emc from "../../images/os-logos/emc.png";

class OssTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ossOne: [
        {
          id: 1,
          img: server,
          text: "Windows Server",
          class: "skills-text red"
        },
        { id: 2, img: windows, text: "Windows", class: "skills-text red" },
        { id: 3, img: linux, text: "Linux", class: "skills-text blue" }
      ],
      ossTwo: [
        { id: 4, img: mac, text: "Mac", class: "skills-text" },
        { id: 5, img: netapp, text: "NetApp", class: "skills-text" },
        { id: 6, img: emc, text: "EMC", class: "skills-text blue" }
      ]
    };
  }

  render() {
    return (
      <div id="oss-container">
        <p className="skill-title">PLATFORMS</p>
        <div className="skill-list-one">
          {this.state.ossOne.map(skill => (
            <ListGroup key={skill.id} className="skill-list">
              <ListGroup.Item className="skills-image"><img src={skill.img} alt={skill.text} /></ListGroup.Item>
              <ListGroup.Item className={skill.class}>{skill.text}</ListGroup.Item>
            </ListGroup>
          ))}
        </div>
        <div className="skill-list-two">
          {this.state.ossTwo.map(skill => (
            <ListGroup key={skill.id} className="skill-list">
              <ListGroup.Item className="skills-image"><img src={skill.img} alt={skill.text} /></ListGroup.Item>
              <ListGroup.Item className={skill.class}>{skill.text}</ListGroup.Item>
            </ListGroup>
          ))}
        </div>
      </div>
    );
  }
}

export default OssTable;
