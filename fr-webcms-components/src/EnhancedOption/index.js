import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import { mergeStyles } from '../helpers/utils/stylePropable';

const { string, object, bool } = PropTypes;

const styles = {
  option: {
    padding: 0,
    margin: 0,
  },
};

class EnhancedOption extends Component {

  static propTypes = {
    className: string,
    disabled: bool,
    id: string,
    name: string,
    style: object,
    value: string.isRequired,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  render() {
    const {
      className,
      disabled,
      id,
      name,
      style,
      value,
      ...other,
    } = this.props;

    const inputId = id || UniqueId.generate();
    const cursorType = disabled ? 'default' : 'pointer';
    const optionStyles = { cursor: cursorType, ...styles.option };

    const optionProps = {
      style: mergeStyles(optionStyles, style),
      value,
      disabled,
      ...other,
    };

    return (
      <option
        id={inputId}
        {...optionProps}
      >{name}</option>
    );
  }

}

export default EnhancedOption;
