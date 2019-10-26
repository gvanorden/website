import React, { Component } from "react";
import OsTable from "./skills/os-table";
import SkillsTable from "./skills/skills-table";
import LanguagesTable from "./skills/languages-table";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills-container">
        <div className="skills">
          <div className="skills-left">
            <div className="skills-title">LANGUAGES</div>
            <LanguagesTable />
          </div>
          <div className="skills-center">
            <div className="skills-title">PLATFORMS</div>
            <OsTable />
          </div>
          <div className="skills-right">
            <div className="skills-title">OTHER SKILLS</div>
            <SkillsTable />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
