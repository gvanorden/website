import React, { Component } from "react";
import OperatingSystems from "../components/skills/operating-systems";
import LangTableOne from "./skills/lang-table-one";
import LangTableTwo from "./skills/lang-table-two";
import SkillTableOne from "./skills/skill-table-one";
import SkillTableTwo from "./skills/skill-table-two";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="skills-container">
        <div className="skills">
          <div className="skills-left">
            <div className="skills-title">OPERATING SYSTEMS</div>
            <div className="os-table-container">
              <OperatingSystems />
            </div>
          </div>
          <div className="skills-center">
            <div className="skills-title">LANGUAGES</div>
            <LangTableOne />
            <LangTableTwo />
          </div>
          <div className="skills-right">
            <div className="skills-title">OTHER SKILLS</div>
            <SkillTableOne />
            <SkillTableTwo />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
