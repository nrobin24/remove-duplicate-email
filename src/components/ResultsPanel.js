import React, { Component } from 'react';
import {Badge, ListGroup, ListGroupItem} from 'react-bootstrap';
import {branch} from 'baobab-react/higher-order';

class ResultsPanel extends Component {
  constructor() {
    super();
    this.renderResultsList = this.renderResultsList.bind(this);
  }
  renderResultsList() {
    return this.props.results.map((result, i) => {
      if (result.type === 'generate') {
        return (
          <ListGroupItem key={i} bsStyle='success'>
            Generated list of {result.length} email addresses
            in {result.delta} milliseconds
          </ListGroupItem>
        );
      } else if (result.type === 'filter') {
        return (
          <ListGroupItem key={i} bsStyle='warning'>
            Removed duplicates from list of {result.startLength} email addresses
            in {result.delta} milliseconds. Resulting list has {result.endLength} entries.
          </ListGroupItem>
        );
      }
    });
  }
  render() {
    let length = this.props.emailAddresses.length;
    if (length > 0) {
      return (
        <div>
          <p>There are currently <Badge>{length}</Badge> email addresses in the list</p>
          <ListGroup>
          {this.renderResultsList()}
          </ListGroup>
        </div>
      );
    } else {
      return null;
    }

  }
}

export default branch(ResultsPanel, {
  cursors: {
    emailAddresses: ['emailAddresses'],
    results: ['results']
  }
});
