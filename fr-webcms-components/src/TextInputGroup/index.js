import React, { Component, PropTypes } from 'react';
import TextInput from 'TextInput';
import Button from 'Button';
import { mergeStyles } from 'helpers/utils/stylePropable';
import composeContextPure from 'helpers/composedComponents/contextPure';

const noop = () => null;
const styles = {
  input: {
    width: '30%',
    height: 30,
  },
  button: {
    width: '30%',
    marginLeft: 5,
  },
};

const { string, object, bool, func } = PropTypes;
class TextInputGroup extends Component {

  static propTypes = {
    buttonDisabled: bool,
    buttonStyle: object,
    className: string,
    hintText: string,
    hoverStyle: object,
    id: string,
    inputDisabled: bool,
    inputStyle: object,
    label: string,
    labelStyle: object,
    onBlur: func,
    onChange: func,
    onTouchTap: func,
    /**
     * Override the inline-styles of the root element.
     */
    style: object,
    type: string,
  };

  static defaultProps = {
    onTouchTap: noop,
  };

  handleTouchTap = (event) => {
    const textBoxValue = this.textInput.input.value;
    this.props.onTouchTap(event, textBoxValue);
  };

  render() {
    const {
      id,
      className,
      hintText,
      inputDisabled,
      onBlur,
      onChange,
      type,
      inputStyle,
      buttonDisabled,
      hoverStyle,
      label,
      labelStyle,
      buttonStyle,
    } = this.props;

    const getRefs = (ref) => this.textInput = ref;

    return (
      <div
        id={id}
        className={className}
      >
        <TextInput
          ref={getRefs}
          hintText={hintText}
          disabled={inputDisabled}
          onBlur={onBlur}
          onChange={onChange}
          type={type}
          style={mergeStyles.apply(this, [styles.input, inputStyle])}
        />
        <Button
          disabled={buttonDisabled}
          hoverStyle={hoverStyle}
          label={label}
          labelStyle={labelStyle}
          onTouchTap={this.handleTouchTap}
          style={mergeStyles.apply(this, [styles.button, buttonStyle])}
        />
      </div>
    );
  }
}

export default composeContextPure(TextInputGroup);
