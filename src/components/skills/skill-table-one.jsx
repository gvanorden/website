import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import aws from "../../images/other-skill-logos/aws.png";
import rest from "../../images/other-skill-logos/rest.png";
import json from "../../images/other-skill-logos/json.png";
import xml from "../../images/other-skill-logos/xml.png";
import bootstrap from "../../images/other-skill-logos/bootstrap.png";
import git from "../../images/other-skill-logos/git.png";

class SkillTableTwo extends Component {
  state = {
    skills: [
      { id: 1, img: aws, text: "AWS", class: "skills-text blue" },
      { id: 2, img: rest, text: "REST", class: "skills-text" },
      { id: 3, img: json, text: "JSON", class: "skills-text" },
      { id: 4, img: xml, text: "XML", class: "skills-text" },
      { id: 5, img: bootstrap, text: "Bootstrap", class: "skills-text" },
      { id: 6, img: git, text: "GitHub", class: "skills-text" }
    ]
  };
  render() {
    return (
      <div className="skill-table-container">
        <Table className="skills-table">
          <tbody>
            {this.state.skills.map(skill => (
              <tr key={skill.id} className="skills-row">
                <td className="skills-image">
                  <img src={skill.img} alt={skill.text} />
                </td>
                <td className={skill.class}>{skill.text}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default SkillTableTwo;
