import React, { Component } from 'react';
import {Badge, Button, Table} from 'react-bootstrap';
import {branch} from 'baobab-react/higher-order';

const divStyle = {
        maxHeight: 60,
        overflow: 'scroll'
      },
      previewLimit = 200;

class PreviewList extends Component {
  renderItems() {
    let head = this.props.emailAddresses.slice(0, previewLimit);
    return head.map((address, i) => {
      return (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{address}</td>
        </tr>
      );
    });
  }
  renderMaxWarning(length) {
    if (length >= previewLimit) {
      return (
        <p className={"text-muted"}>
          <i className={"fa fa-exclamation-triangle"}></i> Only the first {previewLimit} items are displayed in the preview list.
        </p>
      );
    } else {
      return null;
    }
  }
  render() {
    if (this.props.emailAddresses.length > 0) {
      return (
        <div>
          <Button bsStyle={'primary'} block style={{marginBottom: 20}}>Download list as CSV</Button>
          {this.renderMaxWarning(this.props.emailAddresses.length)}
          <Table striped condensed bordered>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.renderItems()}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default branch(PreviewList, {
  cursors: {
    emailAddresses: ['emailAddresses']
  }
});
