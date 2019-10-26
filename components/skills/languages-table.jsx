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

class LanguagesTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [
        { id: 1, img: mssql, text: "MS SQL", class: "skills-text red" },
        { id: 2, img: mysql, text: "MySQL", class: "skills-text red" },
        {
          id: 3,
          img: postgresql,
          text: "PostgreSQL",
          class: "skills-text red"
        },
        {
          id: 4,
          img: powershell,
          text: "PowerShell",
          class: "skills-text red"
        },
        { id: 5, img: net, text: "C#\\.NET", class: "skills-text blue" },
        { id: 6, img: java, text: "Java", class: "skills-text blue" },
        { id: 7, img: python, text: "Python", class: "skills-text" },
        { id: 8, img: node, text: "Node", class: "skills-text" },
        { id: 9, img: react, text: "React", class: "skills-text" },
        { id: 10, img: javascript, text: "JavaScript", class: "skills-text" },
        { id: 11, img: html, text: "HTML", class: "skills-text" },
        { id: 12, img: css, text: "CSS", class: "skills-text" }
      ]
    };

    this.languageType = this.languageType.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getText = this.getText.bind(this);
    this.getClass = this.getClass.bind(this);
  }

  languageType(x) {
    let languageType = x % 2 ? true : false;
    return languageType;
  }

  getImage(x) {
    return this.state.languages[x].img;
  }

  getText(x) {
    return this.state.languages[x].text;
  }

  getClass(x) {
    return this.state.languages[x].class;
  }

  render() {
    const { languages } = this.state;

    return (
      <div className="languages-table-container">
        <Table className="skills-table">
          <tbody>
            {languages.map(language => (
              <tr key={language.id} className="skills-row">
                {this.languageType(language.id) && (
                  <React.Fragment>
                    <td className="skills-image">
                      <img
                        src={this.getImage(language.id)}
                        alt={this.getText(language.id)}
                      />
                    </td>
                    <td className={this.getClass(language.id)}>
                      {this.getText(language.id)}
                    </td>
                    <td className="skills-image">
                      <img
                        src={this.getImage(language.id - 1)}
                        alt={this.getText(language.id - 1)}
                      />
                    </td>
                    <td className={this.getClass(language.id - 1)}>
                      {this.getText(language.id - 1)}
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

export default LanguagesTable;
