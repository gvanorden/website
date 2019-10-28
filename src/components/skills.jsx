import React, { Component } from "react";
import OssTable from "./skills/os-table";
import SkillsTable from "./skills/skills-table";
import LanguagesTable from "./skills/languages-table";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills">
        <div className="skills-left">
          <LanguagesTable />
        </div>
        <div className="skills-center">
          <OssTable />
        </div>
        <div className="skills-right">
          <SkillsTable />
        </div>
      </div>
    );
  }
}

export default Skills;
