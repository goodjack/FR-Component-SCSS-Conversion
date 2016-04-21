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
  const checkboxTheme = compTheme.checkBox || {};
  const labelRoot = {
    marginLeft: '10px',
    marginRight: '10px',
    color: props.disabled ? checkboxTheme.labelDisabledColor : checkboxTheme.labelColor,
    display: 'inline',
  };
  return mergeStyles.apply(this, [labelRoot, props.labelStyle]);
};

const CheckBox = (props, context) => {
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
    inputType: 'checkbox',
    onSwitch: handleCheck,
  };

  const isLabelLeft = labelPosition.toUpperCase() === 'LEFT';

  return (
    (isLabelLeft) ? (
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

CheckBox.propTypes = {
  checked: bool,
  disabled: bool,
  label: string,
  labelPosition: oneOf(['left', 'right']),
  labelStyle: object,
  onCheck: func,
  value: string,
};

CheckBox.contextTypes = {
  compTheme: object,
};

CheckBox.defaultProps = {
  onCheck: () => null,
  labelPosition: 'right',
};

export default composeContextPure(CheckBox);
