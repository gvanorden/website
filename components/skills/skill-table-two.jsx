import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import cmd from "../../images/other-skill-logos/cmd.png";
import tcpip from "../../images/other-skill-logos/tcpip.png";
import dns from "../../images/other-skill-logos/dns.png";

class SkillTableTwo extends Component {
  state = {
    skills: [
      { id: 1, img: cmd, text: "CMD", class: "skills-text" },
      { id: 2, img: tcpip, text: "TCP/IP", class: "skills-text" },
      { id: 3, img: dns, text: "DNS", class: "skills-text" }
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
