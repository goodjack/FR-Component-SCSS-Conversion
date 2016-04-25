'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('../../core/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Hero = require('../Hero');

var _Hero2 = _interopRequireDefault(_Hero);

var _Null = require('../../core/Null');

var _Null2 = _interopRequireDefault(_Null);

var _Swipable = require('../../core/Swipable');

var _Swipable2 = _interopRequireDefault(_Swipable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var node = _react.PropTypes.node;


var getStyles = function getStyles() {
  return {
    model: {
      width: '100%',
      height: '100%',
      paddingTop: '0'
    },
    closeButton: {
      float: 'left'
    },
    closeButtonText: {
      color: '#000',
      paddingLeft: '10px',
      fontSize: '1.5em'
    },
    modalHeader: {
      backgroundColor: '#FFF'
    },
    overlay: {
      backgroundColor: '#FFF'
    },
    navigation: {
      top: '25%'
    }
  };
};

var PopupSlider = function (_Component) {
  _inherits(PopupSlider, _Component);

  function PopupSlider() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, PopupSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(PopupSlider)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      showVideoPopup: false
    }, _this.handleClick = function () {
      _this.setState({ showPopup: !_this.state.showPopup });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PopupSlider, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var title = _props.title;
      var subTitle = _props.subTitle;
      var imageSrc = _props.imageSrc;
      var linkText = _props.linkText;
      var children = _props.children;
      var style = _props.style;

      var _getStyles = getStyles(this);

      var model = _getStyles.model;
      var closeButton = _getStyles.closeButton;
      var modalHeader = _getStyles.modalHeader;
      var closeButtonText = _getStyles.closeButtonText;
      var overlay = _getStyles.overlay;
      var navigation = _getStyles.navigation;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { style: style },
          _react2.default.createElement(_Hero2.default, {
            imageSrc: imageSrc,
            title: title,
            subtitle: subTitle,
            navToOverlayComp: false,
            linkOnClick: this.handleClick,
            linkText: linkText,
            variation: 'textOnImage'
          })
        ),
        this.state.showPopup ? _react2.default.createElement(
          _Modal2.default,
          {
            dialogStyle: model,
            onDismiss: this.handleClick,
            closeButtonStyle: closeButton,
            headerStyle: modalHeader,
            closeButtonText: '<',
            closeButtonTextStyle: closeButtonText,
            overlayStyle: overlay
          },
          _react2.default.createElement(
            _Swipable2.default,
            {
              nextIcon: 'images/next.png',
              previousIcon: 'images/previous.png',
              previousStyle: navigation,
              nextStyle: navigation
            },
            children
          )
        ) : _Null2.default
      );
    }
  }]);

  return PopupSlider;
}(_react.Component);

PopupSlider.propTypes = {
  title: string,
  subTitle: string,
  imageSrc: string,
  linkText: string,
  style: object,
  children: node
};
PopupSlider.contextTypes = {
  compTheme: object,
  compConfig: object
};
exports.default = PopupSlider;