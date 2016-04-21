'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _Button = require('../Button');

var _Button2 = _interopRequireDefault(_Button);

var _TextInput = require('../TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _Icon = require('../core/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var oneOf = _react.PropTypes.oneOf;
var bool = _react.PropTypes.bool;


function getRelevantContextKeys(compTheme) {
  return {
    borderThemeColor: compTheme.searchBox.borderColor
  };
}

var styles = {
  root: {
    width: '50%',
    position: 'relative',
    display: 'inline-block',
    float: 'right',
    border: '1px solid',
    padding: 10,
    transition: 'width 0.2s linear'
  },
  rootFocus: {
    width: '100%',
    transition: 'width 0.2s linear'
  },
  textInputStyle: {
    width: '78%',
    transition: 'width 0.2s linear',
    float: 'right',
    paddingRight: 25
  },
  textInputFocusStyle: {
    width: '89%',
    transition: 'width 0.2s linear'
  },
  searchButtonStyle: {
    width: 30,
    height: 28,
    padding: 3,
    float: 'right',
    cursor: 'pointer'
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
    backgroundColor: 'transparent'
  },
  button: {
    width: 50,
    padding: 5,
    float: 'right',
    marginLeft: 10
  }
};

var noop = function noop() {
  return null;
};

var SearchBox = function (_Component) {
  _inherits(SearchBox, _Component);

  function SearchBox() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, SearchBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SearchBox)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.state = {
      textInputFocusStyle: null,
      wrapperFocusStyle: null,
      closeButtonStyles: null,
      textInputValue: null
    }, _this2.handleFocus = function (event) {
      var _this2$props = _this2.props;
      var expand = _this2$props.expand;
      var wrapperFocusStyle = _this2$props.wrapperFocusStyle;
      var textInputFocusStyle = _this2$props.textInputFocusStyle;
      var onFocus = _this2$props.onFocus;


      if (expand) {
        _this2.setState({
          wrapperFocusStyle: _stylePropable.mergeStyles.apply(_this2, [styles.rootFocus, wrapperFocusStyle]),
          textInputFocusStyle: _stylePropable.mergeStyles.apply(_this2, [styles.textInputFocusStyle, textInputFocusStyle]),
          textInputValue: null
        });
      }

      onFocus(event);
    }, _this2.handleFocusOut = function (event) {
      var _this2$props2 = _this2.props;
      var expand = _this2$props2.expand;
      var style = _this2$props2.style;
      var textInputStyle = _this2$props2.textInputStyle;
      var onBlur = _this2$props2.onBlur;


      if (expand) {
        _this2.setState({
          wrapperFocusStyle: _stylePropable.mergeStyles.apply(_this2, [styles.root, style]),
          textInputFocusStyle: _stylePropable.mergeStyles.apply(_this2, [styles.textInputStyle, textInputStyle])
        });
      }

      onBlur(event);
    }, _this2.handleKeyUp = function () {
      var inputValue = _this2.getInputValue();

      styles.closeButtonStyles.display = 'block';
      _this2.setState({
        closeButtonStyles: _stylePropable.mergeStyles.apply(_this2, [styles.closeButtonStyles, _this2.props.closeButtonStyles])
      });
      if (!inputValue) {
        styles.closeButtonStyles.display = 'none';
      }
    }, _this2.handleClose = function () {
      styles.closeButtonStyles.display = 'none';
      _this2.setState({
        closeButtonStyles: _stylePropable.mergeStyles.apply(_this2, [styles.closeButtonStyles, _this2.props.closeButtonStyles]),
        textInputValue: ''
      });
    }, _this2.searchExplore = function (event) {
      var searchValue = _this2.getInputValue();
      _this2.props.onTouchTap(event, searchValue);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(SearchBox, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'getInputValue',
    value: function getInputValue() {
      return this.textInput.input.value;
    }
  }, {
    key: 'renderCommonButton',
    value: function renderCommonButton() {
      var _props = this.props;
      var buttonDisabled = _props.buttonDisabled;
      var buttonHoverStyle = _props.buttonHoverStyle;
      var buttonText = _props.buttonText;
      var labelStyle = _props.labelStyle;
      var buttonStyle = _props.buttonStyle;


      return _react2.default.createElement(_Button2.default, {
        disabled: buttonDisabled,
        hoverStyle: buttonHoverStyle,
        label: buttonText,
        labelStyle: labelStyle,
        onTouchTap: this.searchExplore,
        style: _stylePropable.mergeStyles.apply(this, [styles.button, buttonStyle])
      });
    }
  }, {
    key: 'renderIconButton',
    value: function renderIconButton() {
      var _this = this;
      var _this$props = _this.props;
      var searchIconStyle = _this$props.searchIconStyle;
      var closeIconStyle = _this$props.closeIconStyle;
      var searchIcon = _this$props.searchIcon;
      var closeIcon = _this$props.closeIcon;
      var closeButtonStyles = _this$props.closeButtonStyles;
      var searchButtonStyle = _this$props.searchButtonStyle;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Button2.default,
          {
            onTouchTap: _this.searchExplore,
            style: _stylePropable.mergeStyles.apply(_this, [styles.searchButtonStyle, searchButtonStyle])
          },
          _react2.default.createElement(_Icon2.default, { name: searchIcon, style: searchIconStyle })
        ),
        _react2.default.createElement(
          _Button2.default,
          {
            style: _stylePropable.mergeStyles.apply(_this, [styles.closeButtonStyles, closeButtonStyles, _this.state.closeButtonStyles]),
            onTouchTap: _this.handleClose
          },
          _react2.default.createElement(_Icon2.default, { name: closeIcon, style: closeIconStyle })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;
      var state = _this.state;
      var _this$props2 = _this.props;
      var className = _this$props2.className;
      var id = _this$props2.id;
      var style = _this$props2.style;
      var textInputStyle = _this$props2.textInputStyle;
      var hintText = _this$props2.hintText;
      var buttonType = _this$props2.buttonType;


      var compTheme = this.context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);

      var _getRelevantContextKe = getRelevantContextKeys(compTheme);

      var borderThemeColor = _getRelevantContextKe.borderThemeColor;

      var borderColor = { borderColor: borderThemeColor };

      var inputId = id || _this._uniqueId;
      var getRefs = function getRefs(ref) {
        return _this.textInput = ref;
      };

      var isIconButton = buttonType === 'iconButton';
      var buttonTypes = isIconButton ? _this.renderIconButton() : _this.renderCommonButton();

      return _react2.default.createElement(
        'div',
        {
          id: inputId,
          className: className,
          style: _stylePropable.mergeStyles.apply(_this, [styles.root, style, borderColor, state.wrapperFocusStyle])
        },
        buttonTypes,
        _react2.default.createElement(_TextInput2.default, {
          value: state.textInputValue,
          onKeyUp: _this.handleKeyUp,
          onBlur: _this.handleFocusOut,
          ref: getRefs,
          style: _stylePropable.mergeStyles.apply(_this, [styles.textInputStyle, textInputStyle, state.textInputFocusStyle]),
          hintText: hintText,
          onFocus: _this.handleFocus
        })
      );
    }
  }]);

  return SearchBox;
}(_react.Component);

SearchBox.propTypes = {
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
  wrapperFocusStyle: object
};
SearchBox.contextTypes = {
  compTheme: object
};
SearchBox.defaultProps = {
  onKeyUp: noop,
  onBlur: noop,
  onFocus: noop,
  onTouchTap: noop
};
exports.default = (0, _contextPure2.default)(SearchBox);