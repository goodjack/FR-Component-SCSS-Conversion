'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _Button = require('../../Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var node = _react.PropTypes.node;


var preventModalDialogClosure = function preventModalDialogClosure(eventObj) {
  eventObj.stopPropagation();
};

var getRelevantContextKeys = function getRelevantContextKeys(themeAndConfig) {
  var compTheme = themeAndConfig.compTheme;
  var compConfig = themeAndConfig.compConfig;

  var mTheme = compTheme && compTheme.modal || {};
  var mConfig = compConfig && compConfig.modal || {};
  return _extends({}, mConfig, mTheme);
};

var getStyles = function getStyles(themeAndConfig) {
  var modal = getRelevantContextKeys(themeAndConfig);
  return {
    closeButton: {
      display: 'inline-block',
      textAlign: 'center',
      width: 'auto',
      float: 'right',
      backgroundColor: modal.closeButtonBackground || 'transparent',
      padding: 2,
      margin: 2
    },
    closeLabel: {
      color: modal.closeButtonTextStyle || 'red',
      display: 'block',
      fontSize: 25,
      padding: 2
    },
    content: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: modal.contentBackground || 'transparent'
    },
    modalBody: {
      width: '100%',
      height: '100%',
      display: 'block',
      backgroundColor: modal.bodyBackground || 'white'
    },
    modalDialog: {
      position: 'relative',
      paddingTop: modal.dialogTopPosition || 50,
      margin: '0 auto',
      width: modal.dialogWidth || 500,
      height: modal.dialogHeight || 500
    },
    modalHeader: {
      backgroundColor: modal.headerBackground || 'transparent',
      width: '100%',
      height: 'auto',
      display: 'block',
      overflow: 'hidden'
    },
    overlay: {
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'fixed',
      backgroundColor: modal.overlayBackground || 'rgba(255, 255, 255, 0.75)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 10050
    }
  };
};

// ES6 stateless component
var Modal = function Modal(props, context) {

  var themeAndConfig = {
    compTheme: context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default),
    compConfig: context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default)
  };
  var style = getStyles(themeAndConfig);
  var buttonText = props.closeButtonText || 'X';
  var modalCloseComponent = _react2.default.createElement(_Button2.default, {
    label: buttonText,
    style: (0, _stylePropable.mergeStyles)(style.closeButton, props.closeButtonStyle),
    labelStyle: (0, _stylePropable.mergeStyles)(style.closeLabel, props.closeButtonTextStyle),
    onTouchTap: props.onDismiss
  });

  return _react2.default.createElement(
    'div',
    {
      id: props.id,
      className: props.className,
      style: (0, _stylePropable.mergeStyles)(style.overlay, props.overlayStyle),
      onClick: props.onDismiss
    },
    _react2.default.createElement(
      'div',
      { style: (0, _stylePropable.mergeStyles)(style.modalDialog, props.dialogStyle) },
      _react2.default.createElement(
        'div',
        { style: (0, _stylePropable.mergeStyles)(style.content, props.contentStyle) },
        _react2.default.createElement(
          'div',
          { style: (0, _stylePropable.mergeStyles)(style.modalHeader, props.headerStyle) },
          modalCloseComponent
        ),
        _react2.default.createElement(
          'div',
          {
            style: (0, _stylePropable.mergeStyles)(style.modalBody, props.bodyStyle),
            onClick: preventModalDialogClosure
          },
          props.children
        )
      )
    )
  );
};

Modal.propTypes = {
  bodyStyle: object,
  children: node,
  className: string,
  closeButtonStyle: object,
  closeButtonText: string,
  closeButtonTextStyle: object,
  contentStyle: object,
  dialogStyle: object,
  headerStyle: object,
  id: string,
  onDismiss: func,
  overlayStyle: object
};

Modal.contextTypes = {
  compTheme: object,
  compConfig: object
};

exports.default = (0, _contextPure2.default)(Modal);