import React, { Component } from 'react';
import {Grid, Row, Col, Input, Button} from 'react-bootstrap';
import actions from './actions';

export default class App extends Component {
  constructor() {
    super();
    this.state = {arrayLengthValue: ''};
    this.handleArrayLengthValueChange = this.handleArrayLengthValueChange.bind(this);
  }
  handleGenerateClick() {
    actions.generateArray();
  }
  handleFilterClick() {
    actions.filter();
  }
  handleArrayLengthValueChange() {
    let val = this.refs.arrayLengthInput.getValue();
    if (!isNaN(parseInt(val))) {
      this.setState({
        arrayLengthValue: parseInt(val)
      });
    }
  }
  render() {
    let generateButton = <Button onClick={this.handleGenerateClick}>Generate Demo Data</Button>;
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <Input
              type='text'
              placeholder='length of address list'
              buttonAfter={generateButton}
              value={this.state.arrayLengthValue}
              onChange={this.handleArrayLengthValueChange}
              ref='arrayLengthInput'
            />
          </Col>
          <Col xs={6}>
            <h1>Hello, world.</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button onClick={this.handleFilterClick}>Filter</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
}
