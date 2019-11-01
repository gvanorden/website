import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import logoIcon from "../images/logo-icon.png";
import logoName from "../images/logo-name.png";
import phone from "../images/contact-icons/phone.png";
import email from "../images/contact-icons/email.png";
import address from "../images/contact-icons/address.png";

class Contact extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <p className="logo-text">SOLUTIONS ENGINEER</p>
        <img className="logo-icon" src={logoIcon} alt="VO" />
        <p className="logo-first-name">GREGG</p>
        <p className="logo-last-name">VAN ORDEN</p>
        <div className="contact-container">
          <ListGroup className="contact-list">
            <ListGroup.Item>
              <img className="contact-image" src={phone} alt="Phone Icon" />
              (201) 321 - 8040
            </ListGroup.Item>
            <ListGroup.Item>
              <img className="contact-image" src={email} alt="Email Icon" />
              gvanorden@gmail.com
            </ListGroup.Item>
            <ListGroup.Item>
              <img className="contact-image" src={address} alt="Address Icon" />
              709 Albemarle St. Wyckoff, NJ 07481
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
}

export default Contact;
