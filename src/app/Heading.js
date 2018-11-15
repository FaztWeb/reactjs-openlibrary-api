import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
      <th>{this.props.heading}</th>
    )
  }
}

export default Heading;
