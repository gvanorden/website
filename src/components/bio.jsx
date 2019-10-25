import React, { Component } from "react";
import photo from "../images/bio-photo.png";
import Table from "react-bootstrap/Table";
import Fade from "react-slideshow-image/lib/components/slideshow/fade";
import lehighLogo from "../images/lehigh-logo.png";
import lehigh1 from "../images/lehigh-1.png";
import lehigh2 from "../images/lehigh-2.png";
import lehigh3 from "../images/lehigh-3.png";

const slideProperties = {
  duration: 5000,
  transitionDuration: 2000,
  infinite: true,
  indicators: true,
  arrows: true
};

class Bio extends Component {
  state = {
    slideImages: [
      { id: 1, value: lehigh1 },
      { id: 2, value: lehigh2 },
      { id: 3, value: lehigh3 }
    ]
  };
  render() {
    return (
      <div className="bio-container">
        <div className="bio">
          <div className="bio-photo-container">
            <img className="bio-photo" src={photo} alt="Gregg Van Orden" />
          </div>
          <div className="bio-top">
            <div className="bio-container">
              <div className="bio-title-container">
                <p className="bio-title">PHILOSOPHY</p>
              </div>
              <p className="bio-text philo-text">
                A work ethic must be guided by intellectual honesty and driven
                through a strong will to self-educate. The mentality built from
                this ethic should recognize its prevailing cognitive ceiling as
                temporary, existing only to be replaced by a deeper sense of
                knowledge and understanding.
              </p>
            </div>
            <div className="separator"></div>
            <div className="bio-container">
              <div className="bio-title-container">
                <p className="bio-title">EDUCATION</p>
              </div>
              <div className="bio-text">
                <div className="edu-logo-container">
                  <img
                    className="edu-logo"
                    src={lehighLogo}
                    alt="Lehigh Univserity Logo"
                  />
                </div>
                <div className="edu-table-container">
                  <Table className="edu-major-table">
                    <tbody>
                      <tr>
                        <td className="degree-title">
                          <b>MAJOR</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="degree-text">
                          <i>Marketing</i>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <Table className="edu-minor-table">
                    <tbody>
                      <tr>
                        <td className="degree-title">
                          <b>MINOR</b>
                        </td>
                      </tr>
                      <tr>
                        <td className="degree-text">
                          <i>Psychology</i>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </div>
              <div className="edu-slide-container">
                <Fade {...slideProperties}>
                  {this.state.slideImages.map(slide => (
                    <div key={slide.id} className="lehigh-photo-container">
                      <img
                        className="lehigh-photo"
                        src={slide.value}
                        alt="Lehigh University"
                      />
                    </div>
                  ))}
                </Fade>
              </div>
            </div>
          </div>
          <div className="bio-background-container">
            <div className="bio-title-container">
              <p className="bio-title edu-title">BACKGROUND</p>
            </div>
            <div className="background-container">
              <div className="background-text">
                <p>
                  I build data & analytic solutions for both small-scale and
                  Fortune 500 companies using SQL, PowerShell, Python, C#/.NET
                  and STEALTHbits products. I've also acquired skillsets in both
                  front and back-end web development. For instance, this site is
                  built with React and uses AWS for web hosting.
                </p>
              </div>
            </div>
            <div className="background-table-container">
              <Table className="background-table">
                <tbody>
                  <tr>
                    <td>SEO Intern</td>
                    <td>2012 - 2013</td>
                    <td>0.5 years</td>
                    <td>
                      <i>The Rosenblum Law Firm</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Quality Assurance Engineer</td>
                    <td>2013 - 2014</td>
                    <td>1.5 years</td>
                    <td>
                      <i>STEALTHbits Technologies Inc.</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Post-Sales / Prof. Services Engineer</td>
                    <td>2014 - 2017</td>
                    <td>2.5 years</td>
                    <td>
                      <i>STEALTHbits Technologies Inc.</i>
                    </td>
                  </tr>
                  <tr>
                    <td>Pre-Sales / Integration Engineer</td>
                    <td>2017 - 2019 (current)</td>
                    <td>2.5 years</td>
                    <td>
                      <i>STEALTHbits Technologies Inc.</i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
