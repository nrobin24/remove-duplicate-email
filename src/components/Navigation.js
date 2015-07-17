import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const brand = (
  <p>
    <span className={"fa-stack"}>
      <i className={"fa fa-envelope fa-stack-1x"}></i>
      <i className={"fa fa-ban fa-stack-2x text-danger"}></i>
    </span>
    Remove Duplicate Email
  </p>

);

export default class Navigation extends Component {
  render() {
    return (
      <Navbar
        staticTop
        brand={brand}
      >
        <Nav>

        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href='#'>Command Line Version</NavItem>
          <NavItem eventKey={2} href='#'><i className={"fa fa-github fa-lg"}></i> Repo</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
