import React, { Component } from "react";
import Table from "react-bootstrap/Table";
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
      skills: [
        { id: 1, img: aws, text: "AWS", class: "skills-text blue" },
        { id: 2, img: rest, text: "REST", class: "skills-text" },
        { id: 3, img: json, text: "JSON", class: "skills-text" },
        { id: 4, img: xml, text: "XML", class: "skills-text" },
        { id: 5, img: bootstrap, text: "Bootstrap", class: "skills-text" },
        { id: 6, img: git, text: "GitHub", class: "skills-text" },
        { id: 7, img: cmd, text: "CMD", class: "skills-text" },
        { id: 8, img: tcpip, text: "TCP/IP", class: "skills-text" },
        { id: 9, img: dns, text: "DNS", class: "skills-text" },
        { id: 10, img: dns, text: "WINS", class: "skills-text" }
      ]
    };

    this.skillType = this.skillType.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getText = this.getText.bind(this);
    this.getClass = this.getClass.bind(this);
  }

  skillType(x) {
    let skillType = x % 2 ? true : false;
    return skillType;
  }

  getImage(x) {
    return this.state.skills[x].img;
  }

  getText(x) {
    return this.state.skills[x].text;
  }

  getClass(x) {
    return this.state.skills[x].class;
  }

  render() {
    const { skills } = this.state;

    return (
      <div className="skills-table-container">
        <Table className="skills-table">
          <tbody>
            {skills.map(skill => (
              <tr key={skill.id} className="skills-row">
                {this.skillType(skill.id) && (
                  <React.Fragment>
                    <td className="skills-image">
                      <img
                        src={this.getImage(skill.id)}
                        alt={this.getText(skill.id)}
                      />
                    </td>
                    <td className={this.getClass(skill.id)}>
                      {this.getText(skill.id)}
                    </td>
                    <td className="skills-image">
                      <img
                        src={this.getImage(skill.id - 1)}
                        alt={this.getText(skill.id - 1)}
                      />
                    </td>
                    <td className={this.getClass(skill.id - 1)}>
                      {this.getText(skill.id - 1)}
                    </td>
                  </React.Fragment>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SkillsTable;
