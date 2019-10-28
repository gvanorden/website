import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import aws from "../../images/other-skill-logos/aws.png";
import rest from "../../images/other-skill-logos/rest.png";
import json from "../../images/other-skill-logos/json.png";
import xml from "../../images/other-skill-logos/xml.png";
import bootstrap from "../../images/other-skill-logos/bootstrap.png";
import git from "../../images/other-skill-logos/git.png";
import cmd from "../../images/other-skill-logos/cmd.png";
import tcpip from "../../images/other-skill-logos/tcpip.png";
import dns from "../../images/other-skill-logos/dns.png";

class SkillsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillOne: [
        { id: 1, img: bootstrap, text: "Bootstrap", class: "skills-text" },
        { id: 2, img: rest, text: "REST", class: "skills-text" },
        { id: 3, img: json, text: "JSON", class: "skills-text" },
        { id: 4, img: xml, text: "XML", class: "skills-text" },
        { id: 5, img: aws, text: "AWS", class: "skills-text blue" },
        { id: 6, img: "", text: "", class: "skills-text" }
      ],
      skillTwo: [
        { id: 1, img: git, text: "GitHub", class: "skills-text" },
        { id: 2, img: cmd, text: "CMD", class: "skills-text" },
        { id: 3, img: tcpip, text: "TCP/IP", class: "skills-text" },
        { id: 4, img: dns, text: "DNS", class: "skills-text" },
        { id: 5, img: "", text: "", class: "skills-text" },
        { id: 6, img: "", text: "", class: "skills-text" }
      ]
    };
  }

  render() {
    return (
      <div id="skills-container">
        <p className="skills-title">OTHER SKILLS</p>
        <div className="skills-list-one">
          {this.state.skillOne.map(skill => (
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
          {this.state.skillTwo.map(skill => (
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

export default SkillsTable;
