import React from 'react';

export default class MainScreen extends React.Component {
  render() {
    return ( <div>{this.props.children}</div> );
  }
}
