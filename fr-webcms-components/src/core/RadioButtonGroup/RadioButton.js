import React, { PropTypes } from 'react';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import ThemeManager from '../../helpers/styles/themeManager';
import EnhancedSwitch from '../EnhancedSwitch';

const {
  bool,
  string,
  object,
  oneOf,
  func,
} = PropTypes;

const prepareStyle = (props, context) => {
  const compTheme = context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme) || {};
  const radioTheme = compTheme.radioButton || {};
  const labelRoot = {
    marginLeft: '10px',
    marginRight: '10px',
    color: props.disabled ? radioTheme.labelDisabledColor : radioTheme.labelColor,
    display: 'inline',
  };
  return mergeStyles.apply(this, [labelRoot, props.labelStyle]);
};

const RadioButton = (props, context) => {
  const {
    onCheck,
    label,
    disabled,
    checked,
    labelPosition,
    value,
    style,
    ...other,
  } = props;

  const handleCheck = (event) => {
    onCheck(event, value);
  };

  const rootStyle = prepareStyle(props, context);
  const labelElement = (label) ? (
    <div style={rootStyle} >
      {label}
    </div>
  ) : null;

  const enhancedSwitchProps = {
    checked,
    disabled,
    value,
    style,
    inputType: 'radio',
    onSwitch: handleCheck,
  };

  return (
    (labelPosition &&
      (labelPosition.toUpperCase() === 'LEFT')) ? (
      <div>
        {labelElement}
        <EnhancedSwitch {...other} {...enhancedSwitchProps} />
      </div>
    ) : (
      <div>
        <EnhancedSwitch {...other} {...enhancedSwitchProps} />
        {labelElement}
      </div>
    )
  );
};

RadioButton.propTypes = {
  checked: bool,
  disabled: bool,
  label: string,
  labelPosition: oneOf(['left', 'right']),
  labelStyle: object,
  onCheck: func,
  value: string,
};

RadioButton.contextTypes = {
  compTheme: object,
};

RadioButton.defaultProps = {
  onCheck: () => null,
};

export default composeContextPure(RadioButton);
