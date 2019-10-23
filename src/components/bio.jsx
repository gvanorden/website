import React, { Component } from "react";
import photo from "../images/bio-photo.png";
import Table from "react-bootstrap/Table";

class Bio extends Component {
  state = {};
  render() {
    return (
      <div className="bio-container">
        <div className="bio">
          <div className="bio-left">
            <img className="bio-photo" src={photo} alt="Gregg Van Orden" />
          </div>
          <div className="bio-right">
            <Table className="bio-table">
              <tbody>
                <tr>
                  <td className="bio-title remove-top-border">PHILOSOPHY</td>
                  <td className="bio-text remove-top-border">
                    Ones ethic must be driven by intellectual honesty and a
                    ceaseless will to self-educate. Mentality built from this
                    ethic should recognize its prevailing cognitive ceiling as
                    temporary, existing only to be replaced by a deeper sense of
                    knowledge and understanding.
                  </td>
                </tr>
                <tr>
                  <td className="bio-title">BACKGROUND</td>
                  <td className="bio-text">
                    <p>
                      I do not have a Computer Science degree and prior to
                      February 2012, I did not possess any experience in
                      software development.
                      <br />
                      <br />
                      Today, I build big data solutions for both small-scale and
                      Fortune 500 customers using SQL, PowerShell, Python,
                      C#/.NET and STEALTHbits products. I've also acquired
                      skills in JavaScript, HTML and CSS that I've used in
                      building a number of applications in Node and React.
                      <br />
                      <br />
                      In February 2012, I was offered a Quality Assurance
                      Enginner position at STEALTHbits Technologies Inc. Soon
                      after I accepted the offer, I quickly realized that my
                      natural tendency to identify, analyze, and resolve
                      problems aligned very well with software testing. With the
                      help of a mentor, I learned about the rules constructing
                      our applications; written logic we call code, which I used
                      to strengthen my testing skill and perspective. This
                      foundation shaped how I would approach client-facing roles
                      in the future and served as an important backbone to many
                      high-visibility projects I would work on.
                      <br />
                      <br />
                      After 1.5 years in the Quality Assurance role, I was
                      approached by our CEO where he asked if I would transition
                      from QA into a client-facing Professional Services role.
                      Although it’s not uncommon for an employee to receive a
                      promotion, this request was important for two main
                      reasons:
                    </p>
                    <ol>
                      <li>
                        Personal recognition from the CEO of a 200+ employee
                        company at the time.
                      </li>
                      <li>
                        The companies first override of their typical transition
                        process of QA > Support > Professional Services.
                      </li>
                    </ol>
                    <p>
                      I spent approx. 2.5 years in this role, both leading and
                      assisting in 25+ installations, configurations, and
                      customizations of enterprise-level security software
                      within both large and small-scale unstructured data
                      environments.
                    </p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
