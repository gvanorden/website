import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Education from "./education";
import Bio from "./bio";
import Skills from "./skills";
import Resume from "./resume";

class Navbar extends Component {
  state = {
    tabs: [
      {
        id: 1,
        eventKey: "biography",
        title: "BIOGRAPHY",
        component: <Bio />
      },
      {
        id: 2,
        eventKey: "education",
        title: "EDUCATION",
        component: <Education />
      },
      { id: 3, eventKey: "experience", title: "EXPERIENCE", component: "" },
      {
        id: 4,
        eventKey: "skills",
        title: "SKILLS",
        component: <Skills />
      },
      { id: 5, eventKey: "software", title: "RESUME", component: <Resume /> }
    ]
  };

  render() {
    return (
      <Tabs justify defaultActiveKey={this.state.tabs[0].eventKey}>
        {this.state.tabs.map(tab => (
          <Tab key={tab.id} eventKey={tab.eventKey} title={tab.title}>
            {tab.component}
          </Tab>
        ))}
      </Tabs>
    );
  }
}

export default Navbar;
