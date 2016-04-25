'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = composeContextPure;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowEqual = require('../utils/shallowEqual');

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var relevantContextKeysEqual = function relevantContextKeysEqual(_ref, currentContext, nextContext) {
  var getRelevantContextKeys = _ref.getRelevantContextKeys;
  var getChildrenClasses = _ref.getChildrenClasses;

  // Get those keys from current object's context that we care
  // about and check whether those keys have changed or not
  if (getRelevantContextKeys) {
    var currentContextKeys = getRelevantContextKeys(currentContext);
    var nextContextKeys = getRelevantContextKeys(nextContext);

    if (!(0, _shallowEqual2.default)(currentContextKeys, nextContextKeys)) {
      return false;
    }
  }

  // Check if children context keys changed
  if (getChildrenClasses) {
    var areKeysEqual = getChildrenClasses().findIndex(function (child) {
      return !relevantContextKeysEqual(child, currentContext, nextContext);
    }) === -1;
    return areKeysEqual;
  }

  // context keys are equal
  return true;
};

function composeContextPure(OriginalComponent) {
  var composedWithContextPure = function (_Component) {
    _inherits(composedWithContextPure, _Component);

    function composedWithContextPure() {
      _classCallCheck(this, composedWithContextPure);

      return _possibleConstructorReturn(this, Object.getPrototypeOf(composedWithContextPure).apply(this, arguments));
    }

    _createClass(composedWithContextPure, [{
      key: 'shouldComponentUpdate',


      // Don't update if state, prop, and context are equal
      value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
        var context = this.context;

        // If either the props or state have changed, component should update

        if (!(0, _shallowEqual2.default)(this.props, nextProps) || !(0, _shallowEqual2.default)(this.state, nextState)) {
          return true;
        }

        // If current theme and next theme are both undefined, do not update
        if (!context.muiTheme && !nextContext.muiTheme) {
          return false;
        }

        // If both themes exist, compare keys only if current theme is not static
        if (context.muiTheme && nextContext.muiTheme) {
          return !context.muiTheme.static && !relevantContextKeysEqual(this.constructor, context.muiTheme, nextContext.muiTheme);
        }

        // At this point it is guaranteed that exactly one theme is undefined so simply update
        return true;
      }
      // For get the name & display name of the component

    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(OriginalComponent, _extends({}, this.props, this.state));
      }
    }]);

    return composedWithContextPure;
  }(_react.Component);

  composedWithContextPure.displayName = OriginalComponent.displayName || OriginalComponent.name;


  return composedWithContextPure;
}