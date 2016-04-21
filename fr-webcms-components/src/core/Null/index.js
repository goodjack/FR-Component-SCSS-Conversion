import { Component } from 'react';

export default class Null extends Component {
  static displayName = 'Noop';

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}
