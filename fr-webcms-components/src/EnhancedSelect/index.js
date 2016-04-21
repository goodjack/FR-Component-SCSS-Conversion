import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import { mergeStyles } from '../helpers/utils/stylePropable';

const { any, string, bool, func, object } = PropTypes;

const styles = {
  option: {
    padding: 0,
    margin: 0,
  },
};

class EnhancedSelect extends Component {

  static propTypes = {
    children: any.isRequired,
    className: string,
    disabled: bool,
    id: string,
    onChange: func,
    style: object,
  };

  static defaultProps = {
    onChange: () => null,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  handleChange = event => {
    if (this.props.onChange) this.props.onChange(event);
  };

  render() {
    const {
      className,
      children,
      disabled,
      id,
      style,
      ...other,
    } = this.props;

    const inputId = id || UniqueId.generate();
    const cursorType = disabled ? 'default' : 'pointer';
    const optionStyles = { cursor: cursorType, ...styles.option };

    const optionProps = {
      style: mergeStyles(optionStyles, style),
      id: inputId,
      disabled,
      ...other,
    };

    return (
      <select
        onChange={this.handleChange}
        {...optionProps}
      >{children}</select>
    );
  }

}

export default EnhancedSelect;
