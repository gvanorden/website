import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import mssql from "../../images/language-logos/mssql.png";
import mysql from "../../images/language-logos/mysql.png";
import postgresql from "../../images/language-logos/postgresql.png";
import powershell from "../../images/language-logos/powershell.png";
import python from "../../images/language-logos/python.png";
import javascript from "../../images/language-logos/javascript.png";
import html from "../../images/language-logos/html.png";
import css from "../../images/language-logos/css.png";
import react from "../../images/language-logos/react.png";
import node from "../../images/language-logos/node.png";
import net from "../../images/language-logos/net.png";
import java from "../../images/language-logos/java.png";

class LangTableTwo extends Component {
  state = {
    languagesTwo: [
      { id: 7, img: python, text: "Python", class: "skills-text" },
      { id: 8, img: node, text: "Node", class: "skills-text" },
      { id: 9, img: react, text: "React", class: "skills-text" },
      { id: 10, img: javascript, text: "JavaScript", class: "skills-text" },
      { id: 11, img: html, text: "HTML", class: "skills-text" },
      { id: 12, img: css, text: "CSS", class: "skills-text" }
    ]
  };
  render() {
    return (
      <div className="lang-table-container">
        <Table className="skills-table">
          <tbody>
            {this.state.languagesTwo.map(languageTwo => (
              <tr key={languageTwo.id} className="skills-row">
                <td className="skills-image">
                  <img src={languageTwo.img} alt={languageTwo.text} />
                </td>
                <td className={languageTwo.class}>{languageTwo.text}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default LangTableTwo;
