import React from 'react';

export default class StubbedContextParent extends React.Component {
  displayName: 'StubbedContextParent';
  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return React.Children.only(this.props.children);
  }
}
