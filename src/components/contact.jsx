import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import logo from "../images/logo.png";
import diamond from "../images/diamond.png";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="header">
        <img className="logo" src={logo} alt="Gregg Van Orden" />
        <div className="contact">
          <ListGroup className="contact-container">
            <ListGroup.Item>gvanorden@gmail.com</ListGroup.Item>
            <ListGroup.Item>(201) 321 - 8040</ListGroup.Item>
            <ListGroup.Item>709 Albemarle St. Wyckoff, NJ 07481</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    );
  }
