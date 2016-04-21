import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { mergeStyles } from '../../helpers/utils/stylePropable';

const { bool, func, object, string } = PropTypes;

class EnhancedSwitch extends Component {

  static propTypes = {
    checked: bool,
    disabled: bool,
    inputType: string.isRequired,
    name: string,
    onSwitch: func,
    required: bool,
    style: object,
    value: string,
  };

  static defaultProps = {
    onSwitch: () => null,
  };

  state = {
    checked: false,
  };

  componentWillMount = () => {
    this.setState({ checked: this.props.checked });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.hasOwnProperty('checked') && nextProps.checked !== this.state.checked) {
      this.setState({ checked: nextProps.checked });
    }
  };

  handleChange = (event) => {
    const {
      inputType,
      checked,
      onSwitch,
    } = this.props;
    const isInputChecked = ReactDOM.findDOMNode(this.refs.enhancedSwitch).checked;
    onSwitch(event, isInputChecked);
    if (checked && inputType === 'checkbox') {
      this.setState({ checked: !this.state.checked });
    }
  };

  render() {
    const {
      name,
      value,
      checked,
      inputType,
      style,
      disabled,
      ...other,
    } = this.props;

    const inputStyle = {
      cursor: disabled ? 'default' : 'pointer',
      margin: 0,
    };
    const inputProps = {
      name,
      value,
      disabled,
      ref: 'enhancedSwitch',
      type: inputType,
      style: mergeStyles.apply(this, [inputStyle, style]),
      onChange: this.handleChange,
      checked: this.state.checked,
    };

    return (
      <input
        {...other}
        {...inputProps}
      />
    );
  }
}

export default EnhancedSwitch;
