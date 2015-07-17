import React, { Component } from 'react';
import {Alert} from 'react-bootstrap';
import actions from '../actions';

export default class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {visible: true};
    this.handleDismissClick = this.handleDismissClick.bind(this);
    this.handleShowClick = this.handleShowClick.bind(this);
  }
  handleDismissClick() {
    this.setState({visible: false});
  }
  handleShowClick() {
    this.setState({visible: true});
  }
  renderAlert() {
    return (
      <Alert
        bsStyle='info'
        onDismiss={this.handleDismissClick}
      >
        <p>
          This is a demo built by Nick Robin to show how duplicate email
          addresses can be removed from a list. To test it out, hit the
          <strong> GENERATE LIST</strong> button.
        </p>
        <p>
          The generated list of random email addresses will contain 50% duplicates.
        </p>
        <p>
          Hit the <strong> REMOVE DUPLICATES</strong> button to filter, and note how long
          it takes in relation to the size of the list.
        </p>
        <p>
          You can see how this is implemented in the source code <a target="_blank" href='https://github.com/nrobin24/remove-duplicate-email/blob/master/src/removeDuplicates.js'>by clicking here</a>
        </p>
      </Alert>
    );
  }
  renderIcon() {
    return (
      <i
        className={'fa fa-question-circle fa-2x'}
        onClick={this.handleShowClick}
        style={{paddingBottom: 20}}
      >
      </i>
    );
  }
  render() {
    return this.state.visible ? this.renderAlert() : this.renderIcon();
  }
}
