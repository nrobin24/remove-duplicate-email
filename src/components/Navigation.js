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
        toggleNavKey={0}
      >
        <Nav pullRight eventKey={0}>
          <NavItem target='_blank' href='https://gist.github.com/nrobin24/3b57382eed450ca5bb42'>Command Line Version</NavItem>
          <NavItem target='_blank' href='https://github.com/nrobin24/remove-duplicate-email'><i className={"fa fa-github fa-lg"}></i> Repo</NavItem>
        </Nav>
      </Navbar>
    );
  }
}
