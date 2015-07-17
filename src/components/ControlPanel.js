import React, { Component } from 'react';
import {Panel, Input, Button} from 'react-bootstrap';
import actions from '../actions';
import {branch} from 'baobab-react/higher-order';

class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {arrayLengthValue: 20};
    this.handleArrayLengthValueChange = this.handleArrayLengthValueChange.bind(this);
    this.handleGenerateClick = this.handleGenerateClick.bind(this);
    this.lengthValidationState = this.lengthValidationState.bind(this);
    this.renderRemoveButton = this.renderRemoveButton.bind(this);
  }
  lengthValidationState() {
    let length = parseInt(this.state.arrayLengthValue);
    if (length > 1 && length <= 1000000) {return 'success';}
    else if (length > 1000000 && length <= 10000000) {return 'warning';}
    else if (length > 10000000) {return 'error';}
    else {return 'error';}
  }
  handleGenerateClick() {
    if (this.lengthValidationState() != 'error') {
      actions.generateArray(parseInt(this.state.arrayLengthValue));
    }
  }
  handleFilterClick() {
    actions.filter();
  }
  handleArrayLengthValueChange() {
    let val = this.refs.arrayLengthInput.getValue();
    this.setState({
      arrayLengthValue: val
    });
  }
  renderGenerateButton() {
    if (this.lengthValidationState() != 'error') {
      return <Button block bsStyle={'success'} onClick={this.handleGenerateClick}>Generate List</Button>;
    } else {
      return <Button block bsStyle={'success'} disabled>Generate List</Button>;
    }
  }
  renderRemoveButton() {
    if (this.props.emailAddresses.length > 0) {
      return <Button block bsStyle={'warning'} onClick={this.handleFilterClick}>Remove Duplicates</Button>;
    } else {
      return <Button block bsStyle={'warning'} disabled>Remove Duplicates</Button>;
    }
  }
  handleClearClick() {
    actions.clearData();
  }
  render() {
    return (
      <Panel>
        <Input
          type='text'
          label='length of address list to generate'
          placeholder='enter a number greater than 1'
          value={this.state.arrayLengthValue}
          onChange={this.handleArrayLengthValueChange}
          bsStyle={this.lengthValidationState()}
          ref='arrayLengthInput'
        />
        {this.renderGenerateButton()}
        {this.renderRemoveButton()}
        <Button block bsStyle='info' onClick={this.handleClearClick}>Clear Data</Button>
      </Panel>
    );
  }
}

export default branch(ControlPanel, {
  cursors: {
    emailAddresses: ['emailAddresses']
  }
});
