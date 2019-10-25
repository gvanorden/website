import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Education from "./experience";
import Bio from "./bio";
import Skills from "./skills";
import Resume from "./resume";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: null,
      tabs: [
        {
          id: 1,
          eventKey: "bio",
          title: "BIOGRAPHY",
          component: <Bio />
        },
        {
          id: 2,
          eventKey: "edu",
          title: "EXPERIENCE",
          component: <Education />
        },

        {
          id: 4,
          eventKey: "skills",
          title: "SKILLS",
          component: <Skills />
        },
        {
          id: 5,
          eventKey: "resume",
          title: "RESUME",
          component: <Resume />
        }
      ]
    };

    this.splitTitle = this.splitTitle.bind(this);
  }

  splitTitle(title) {
    let letters = title.split("");
    return letters;
  }

  render() {
    return (
      <Tabs justify defaultActiveKey={this.state.tabs[0].eventKey}>
        {this.state.tabs.map(tab => (
          <Tab key={tab.id} eventKey={tab.eventKey} title={tab.title}>
            <div className="tab-left">
              <p className="tab-title">
                {this.splitTitle(tab.title).map(letter => (
                  <div className="tab-title-letter">{letter}</div>
                ))}
              </p>
            </div>
            <div className="tab-right">{tab.component}</div>
          </Tab>
        ))}
      </Tabs>
    );
  }
}

export default Navbar;
