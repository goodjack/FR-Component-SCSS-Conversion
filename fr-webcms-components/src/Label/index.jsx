import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';

const { string, object } = PropTypes;
const styles = {
  display: 'inline-block',
  padding: 5,
  backgroundColor: 'transparent',
  color: 'black',
  fontSize: '10px',
  lineHeight: '15px',
  margin: 2,
  textAlign: 'center',
};

class Label extends Component {

  static propTypes = {
    background: string,
    className: string,
    foreground: string,
    id: string,
    style: object,
    text: string.isRequired,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  render() {
    const {
      className,
      id,
      background,
      foreground,
      style,
      text,
    } = this.props;
    const inputId = id || this._uniqueId;
    let labelStyle = mergeStyles.apply(this, [styles, style]);
    if (background) {
      labelStyle = mergeStyles.apply(this, [labelStyle, { backgroundColor: background }]);
    }

    if (foreground) {
      labelStyle = mergeStyles.apply(this, [labelStyle, { color: foreground }]);
    }

    return (
      <div
        id={inputId}
        className={className}
        style={labelStyle}
      >
        {text}
      </div>
    );
  }

}

export default composeContextPure(Label);
