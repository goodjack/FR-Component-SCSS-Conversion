import React, { Component, PropTypes } from 'react';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import { mergeStyles } from '../helpers/utils/stylePropable';
import ConfigurationManager from '../helpers/configuration/configurationManager';
import BaseConfig from '../helpers/configuration/baseConfig';

const {
  node,
  string,
  any,
  bool,
  func,
  object,
} = PropTypes;

const getRelevantContextKeys = (config, theme) => {
  const tiConfig = config && config.textInput || {};
  const tiTheme = theme && theme.textInput || {};

  return { ...tiConfig, ...tiTheme };
};

const noop = () => null;

const styles = {
  input: {
    tapHighlightColor: 'rgba(0,0,0,0)',
    padding: 0,
    position: 'relative',
    width: '100%',
    height: '100%',
    font: 'inherit',
  },
};

class TextInput extends Component {

  static propTypes = {
    children: node,
    className: string,
    defaultValue: any,
    disabled: bool,
    hintText: node,
    id: string,
    onBlur: func,
    onChange: func,
    onEnterKeyDown: func,
    onFocus: func,
    onKeyDown: func,
    style: object,
    type: string,
    value: any,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
  };

  static defaultProps = {
    type: 'text',
    disabled: false,
    onBlur: noop,
    onChange: noop,
    onFocus: noop,
    onEnterKeyDown: noop,
    onKeyDown: noop,
  };

  componentWillMount() {
    const _this = this;
    const {
      className,
      disabled,
      onBlur,
      onChange,
      onFocus,
      onEnterKeyDown,
      onKeyDown,
    } = this.props;

    _this.inputProps = {
      className,
      onBlur,
      disabled,
      ref: (ref) => _this.input = ref,
      onChange: !_this.props.hasOwnProperty('valueLink') ? onChange : null,
      onFocus: !disabled ? onFocus : null,
      onKeyDown: (event) => {
        if (event.keyCode === 13) onEnterKeyDown(event);
        onKeyDown(event);
      },
    };
  }

  render() {

    const _this = this;
    const {
      disabled,
      hintText,
      style,
      type,
      ...other,
    } = _this.props;

    const inputProps = _this.inputProps;

    const {
      compTheme: compContextTheme,
      compConfig: compContextConfig,
    } = _this.context;

    const compTheme = compContextTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const compConfig = compContextConfig || ConfigurationManager.getCompConfig(BaseConfig);
    const tiContext = getRelevantContextKeys(compConfig, compTheme);

    const {
      disabledTextColor,
      textColor,
      showHint,
    } = tiContext;

    const inputStyle = mergeStyles(
      styles.input,
      { color: disabled ? disabledTextColor : textColor },
      style,
    );

    if (hintText && showHint) {
      inputProps.placeholder = hintText;
    }

    return (
      <input
        {...other}
        {...inputProps}
        style={inputStyle}
        type={type}
      />
    );

  }
}

export default TextInput;
