import React, { Component } from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import {branch} from 'baobab-react/higher-order';

class EmailAddressesList extends Component {
  renderItems() {
    let head = this.props.emailAddresses.slice(0, 101);
    return head.map((address, i) => {
      return (
        <ListGroupItem key={i} >{address}</ListGroupItem>
      );
    });
  }
  render() {
    return (
      <ListGroup>
        {this.renderItems()}
      </ListGroup>
    );
  }
}

export default branch(EmailAddressesList, {
  cursors: {
    emailAddresses: ['emailAddresses']
  }
});
