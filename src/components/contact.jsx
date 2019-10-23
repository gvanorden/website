import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../images/logo.png";
import phone from "../images/contact-icons/phone.png";
import email from "../images/contact-icons/email.png";
import address from "../images/contact-icons/address.png";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Gregg Van Orden" />
        </div>
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
