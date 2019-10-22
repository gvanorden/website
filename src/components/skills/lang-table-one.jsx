import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import mssql from "../../images/language-logos/mssql.png";
import mysql from "../../images/language-logos/mysql.png";
import postgresql from "../../images/language-logos/postgresql.png";
import powershell from "../../images/language-logos/powershell.png";
import net from "../../images/language-logos/net.png";
import java from "../../images/language-logos/java.png";

class LangTableOne extends Component {
  state = {
    languagesOne: [
      { id: 1, img: mssql, text: "MS SQL", class: "skills-text red" },
      { id: 2, img: mysql, text: "MySQL", class: "skills-text red" },
      { id: 3, img: postgresql, text: "PostgreSQL", class: "skills-text red" },
      { id: 4, img: powershell, text: "PowerShell", class: "skills-text red" },
      { id: 5, img: net, text: "C#\\.NET", class: "skills-text blue" },
      { id: 6, img: java, text: "Java", class: "skills-text blue" }
    ]
  };
  render() {
    return (
      <div className="lang-table-container">
        <Table className="skills-table">
          <tbody>
            {this.state.languagesOne.map(languageOne => (
              <tr key={languageOne.id} className="skills-row">
                <td className="skills-image">
                  <img src={languageOne.img} alt={languageOne.text} />
                </td>
                <td className={languageOne.class}>{languageOne.text}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default LangTableOne;
