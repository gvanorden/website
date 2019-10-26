import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import windows from "../../images/os-logos/windows.png";
import server from "../../images/os-logos/windows-server.png";
import linux from "../../images/os-logos/linux.png";
import mac from "../../images/os-logos/mac.png";
import netapp from "../../images/os-logos/netapp.png";
import emc from "../../images/os-logos/emc.png";

class OperatingSystems extends Component {
  state = {
    oss: [
      { id: 1, img: windows, text: "Windows", class: "skills-text red" },
      { id: 2, img: server, text: "Windows Server", class: "skills-text red" },
      { id: 3, img: linux, text: "Linux", class: "skills-text blue" },
      { id: 4, img: mac, text: "Mac", class: "skills-text" },
      { id: 5, img: netapp, text: "NetApp", class: "skills-text" },
      { id: 6, img: emc, text: "EMC", class: "skills-text blue" }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <Table className="skills-table">
          <tbody>
            {this.state.oss.map(os => (
              <tr key={os.id} className="skills-row">
                <td className="skills-image">
                  <img src={os.img} alt={os.text} />
                </td>
                <td className={os.class}>{os.text}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default OperatingSystems;
