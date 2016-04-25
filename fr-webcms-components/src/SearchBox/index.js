import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import Button from '../Button';
import TextInput from '../TextInput';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import Icon from '../core/Icon';

const { string, object, func, oneOf, bool } = PropTypes;

function getRelevantContextKeys(compTheme) {
  return {
    borderThemeColor: compTheme.searchBox.borderColor,
  };
}

const styles = {
  root: {
    width: '50%',
    position: 'relative',
    display: 'inline-block',
    float: 'right',
    border: '1px solid',
    padding: 10,
    transition: 'width 0.2s linear',
  },
  rootFocus: {
    width: '100%',
    transition: 'width 0.2s linear',
  },
  textInputStyle: {
    width: '78%',
    transition: 'width 0.2s linear',
    float: 'right',
    paddingRight: 25,
  },
  textInputFocusStyle: {
    width: '89%',
    transition: 'width 0.2s linear',
  },
  searchButtonStyle: {
    width: 30,
    height: 28,
    padding: 3,
    float: 'right',
    cursor: 'pointer',
  },
  closeButtonStyles: {
    display: 'none',
    float: 'right',
    position: 'absolute',
    width: 25,
    height: 25,
    padding: 0,
    top: 12,
    right: 40,
    zIndex: 1,
    backgroundColor: 'transparent',
  },
  button: {
    width: 50,
    padding: 5,
    float: 'right',
    marginLeft: 10,
  },
};

const noop = () => null;

class SearchBox extends Component {

  static propTypes = {
    buttonDisabled: bool,
    buttonStyle: object,
    buttonText: string,
    buttonType: oneOf(['iconButton', 'button']),
    className: string,
    closeIcon: string,
    closeIconStyle: object,
    closeButtonStyles: object,
    expand: bool,
    hintText: string,
    buttonHoverStyle: object,
    id: string,
    labelStyle: object,
    onBlur: func,
    onFocus: func,
    onTouchTap: func,
    searchIcon: string,
    searchIconStyle: object,
    searchButtonStyle: object,
    style: object,
    textInputFocusStyle: object,
    textInputStyle: object,
    wrapperFocusStyle: object,
  };

  static contextTypes = {
    compTheme: object,
  };

  static defaultProps = {
    onKeyUp: noop,
    onBlur: noop,
    onFocus: noop,
    onTouchTap: noop,
  };

  state = {
    textInputFocusStyle: null,
    wrapperFocusStyle: null,
    closeButtonStyles: null,
    textInputValue: null,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  getInputValue() {
    return this.textInput.input.value;
  }

  handleFocus = (event) => {
    const {
      expand,
      wrapperFocusStyle,
      textInputFocusStyle,
      onFocus,
    } = this.props;

    if (expand) {
      this.setState({
        wrapperFocusStyle: mergeStyles.apply(this,
          [styles.rootFocus, wrapperFocusStyle]),
        textInputFocusStyle: mergeStyles.apply(this, [
          styles.textInputFocusStyle,
          textInputFocusStyle,
        ]),
        textInputValue: null,
      });
    }

    onFocus(event);
  };

  handleFocusOut = (event) => {
    const {
      expand,
      style,
      textInputStyle,
      onBlur,
    } = this.props;

    if (expand) {
      this.setState({
        wrapperFocusStyle: mergeStyles.apply(this, [styles.root, style]),
        textInputFocusStyle: mergeStyles.apply(this,
          [styles.textInputStyle, textInputStyle]),
      });
    }

    onBlur(event);
  };

  handleKeyUp = () => {
    const inputValue = this.getInputValue();

    styles.closeButtonStyles.display = 'block';
    this.setState({
      closeButtonStyles: mergeStyles.apply(this,
        [styles.closeButtonStyles, this.props.closeButtonStyles]),
    });
    if (!inputValue) {
      styles.closeButtonStyles.display = 'none';
    }
  };

  handleClose = () => {
    styles.closeButtonStyles.display = 'none';
    this.setState({
      closeButtonStyles: mergeStyles.apply(this,
        [styles.closeButtonStyles, this.props.closeButtonStyles]),
      textInputValue: '',
    });
  };

  searchExplore = (event) => {
    const searchValue = this.getInputValue();
    this.props.onTouchTap(event, searchValue);
  };

  renderCommonButton() {
    const {
      buttonDisabled,
      buttonHoverStyle,
      buttonText,
      labelStyle,
      buttonStyle,
    } = this.props;

    return (
      <Button
        disabled={buttonDisabled}
        hoverStyle={buttonHoverStyle}
        label={buttonText}
        labelStyle={labelStyle}
        onTouchTap={this.searchExplore}
        style={mergeStyles.apply(this, [styles.button, buttonStyle])}
      />
    );
  }

  renderIconButton() {
    const _this = this;
    const {
      searchIconStyle,
      closeIconStyle,
      searchIcon,
      closeIcon,
      closeButtonStyles,
      searchButtonStyle,
    } = _this.props;
    return (
      <div>
        <Button
          onTouchTap={_this.searchExplore}
          style={mergeStyles.apply(_this, [styles.searchButtonStyle, searchButtonStyle])}
        >
          <Icon name={searchIcon} style={searchIconStyle} />
        </Button>
        <Button
          style={mergeStyles.apply(_this, [
            styles.closeButtonStyles,
            closeButtonStyles, _this.state.closeButtonStyles,
          ])}
          onTouchTap={_this.handleClose}
        >
          <Icon name={closeIcon} style={closeIconStyle} />
        </Button>
      </div>
    );
  }

  render() {
    const _this = this;
    const { state } = _this;
    const {
      className,
      id,
      style,
      textInputStyle,
      hintText,
      buttonType,
    } = _this.props;

    const compTheme = this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const {
      borderThemeColor,
    } = getRelevantContextKeys(compTheme);
    const borderColor = { borderColor: borderThemeColor };

    const inputId = id || _this._uniqueId;
    const getRefs = (ref) => _this.textInput = ref;

    const isIconButton = buttonType === 'iconButton';
    const buttonTypes = isIconButton ? _this.renderIconButton() : _this.renderCommonButton();

    return (
      <div
        id={inputId}
        className={className}
        style={mergeStyles.apply(_this,
          [styles.root, style, borderColor, state.wrapperFocusStyle])}
      >
        {buttonTypes}
        <TextInput
          value={state.textInputValue}
          onKeyUp={_this.handleKeyUp}
          onBlur={_this.handleFocusOut}
          ref={getRefs}
          style={
            mergeStyles.apply(_this,
              [styles.textInputStyle, textInputStyle, state.textInputFocusStyle])
          }
          hintText={hintText}
          onFocus={_this.handleFocus}
        />
      </div>
    );
  }
}

export default composeContextPure(SearchBox);
