import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import styl from './label.scss';
//
console.log(styl.label);

const { string, object } = PropTypes;

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
    let labelStyle = mergeStyles.apply(this, [style]);
    if (background) {
      labelStyle = mergeStyles.apply(this, [labelStyle, { backgroundColor: background }]);
    }

    if (foreground) {
      labelStyle = mergeStyles.apply(this, [labelStyle, { color: foreground }]);
    }

    return (
      <div
        id={inputId}
        className="label"
        style={labelStyle}
      >
        {text}
      </div>
    );
  }

}

export default composeContextPure(Label);
