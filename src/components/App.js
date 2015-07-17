import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Navigation from './Navigation';
import PreviewList from './PreviewList';
import ControlPanel from './ControlPanel';
import Instructions from './Instructions';
import ResultsPanel from './ResultsPanel';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='container'>
          <Instructions />
        </div>
        <Grid>
          <Row>
            <Col sm={4}>
              <ControlPanel />
            </Col>
            <Col sm={4}>
              <ResultsPanel />
            </Col>
            <Col sm={4}>
              <PreviewList />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
