import React, { Component, PropTypes } from 'react';
import composeContextPure from '../../helpers/composedComponents/contextPure';

const {
  string,
  object,
  number,
  node,
} = PropTypes;

const renderChildren = (props) => {
  const {
    orientation,
    children,
    nestedLevel,
  } = props;

  return React.Children.map(children, (child) =>
     React.cloneElement(child, {
       orientation,
       nestedLevel: nestedLevel + 1,
     })
  );
};

class List extends Component {

  static propTypes = {
    children: node,
    name: string,
    nestedLevel: number,
    orientation: string,
    style: object,
  };

  static contextTypes = {
    compTheme: object,
  };

  static defaultProps = {
    name: 'List',
    orientation: 'vertical',
    nestedLevel: -1,
  };

  render() {
    const {
      style,
      ...other,
    } = this.props;

    return (
      <div {...other} style={style} >
        {renderChildren(this.props)}
      </div>
    );
  }
}

export default composeContextPure(List);
