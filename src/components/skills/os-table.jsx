import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import windows from "../../images/os-logos/windows.png";
import server from "../../images/os-logos/windows-server.png";
import linux from "../../images/os-logos/linux.png";
import mac from "../../images/os-logos/mac.png";
import netapp from "../../images/os-logos/netapp.png";
import emc from "../../images/os-logos/emc.png";

class OsTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oss: [
        {
          id: 1,
          img: server,
          text: "Windows Server",
          class: "skills-text red"
        },
        { id: 2, img: windows, text: "Windows", class: "skills-text red" },
        { id: 3, img: linux, text: "Linux", class: "skills-text blue" },
        { id: 4, img: mac, text: "Mac", class: "skills-text" },
        { id: 5, img: netapp, text: "NetApp", class: "skills-text" },
        { id: 6, img: emc, text: "EMC", class: "skills-text blue" }
      ]
    };

    this.osType = this.osType.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getText = this.getText.bind(this);
    this.getClass = this.getClass.bind(this);
  }

  osType(x) {
    let osType = x % 2 ? true : false;
    return osType;
  }

  getImage(x) {
    return this.state.oss[x].img;
  }

  getText(x) {
    return this.state.oss[x].text;
  }

  getClass(x) {
    return this.state.oss[x].class;
  }

  render() {
    const { oss } = this.state;

    return (
      <div className="os-table-container">
        <Table className="skills-table">
          <tbody>
            {oss.map(os => (
              <tr key={os.id} className="skills-row">
                {this.osType(os.id) && (
                  <React.Fragment>
                    <td className="skills-image">
                      <img
                        src={this.getImage(os.id)}
                        alt={this.getText(os.id)}
                      />
                    </td>
                    <td className={this.getClass(os.id)}>
                      {this.getText(os.id)}
                    </td>
                    <td className="skills-image">
                      <img
                        src={this.getImage(os.id - 1)}
                        alt={this.getText(os.id - 1)}
                      />
                    </td>
                    <td className={this.getClass(os.id - 1)}>
                      {this.getText(os.id - 1)}
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

export default OsTable;
