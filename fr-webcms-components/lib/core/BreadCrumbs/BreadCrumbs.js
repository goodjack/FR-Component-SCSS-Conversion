'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _lightRawTheme = require('../../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _themeManager = require('../../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = _react.PropTypes.node;
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;

var styles = {
  root: {
    listStyle: 'none'
  },
  item: {
    display: 'inline-block',
    verticalAlign: 'middle'
  },
  separator: {
    margin: '0 5px 0 3px'
  }
};

var prepareStyle = function prepareStyle(context, props) {
  var compTheme = context.compTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var separatorColor = {
    color: compTheme && compTheme.breadCrumbs && compTheme.breadCrumbs.seperatorColor
  };
  var mergedRootStyles = _stylePropable.mergeStyles.apply(undefined, [styles.root, props.style]);
  var separatorStyles = _stylePropable.mergeStyles.apply(undefined, [separatorColor, styles.separator, props.separatorStyle]);
  return { mergedRootStyles: mergedRootStyles, separatorStyles: separatorStyles };
};

var BreadCrumbs = function (_Component) {
  _inherits(BreadCrumbs, _Component);

  function BreadCrumbs() {
    _classCallCheck(this, BreadCrumbs);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BreadCrumbs).apply(this, arguments));
  }

  _createClass(BreadCrumbs, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var separator = _props.separator;
      var children = _props.children;

      var _prepareStyle = prepareStyle(this.context, this.props);

      var mergedRootStyles = _prepareStyle.mergedRootStyles;
      var separatorStyles = _prepareStyle.separatorStyles;


      var wrappedChildren = _react2.default.Children.map(children, function (currentChild, index) {
        var separatorElement = index > 0 ? _react2.default.createElement(
          'span',
          { style: separatorStyles },
          separator
        ) : null;
        return _react2.default.createElement(
          'li',
          { style: styles.item },
          separatorElement,
          currentChild
        );
      });

      return _react2.default.createElement(
        'ul',
        { style: mergedRootStyles },
        wrappedChildren
      );
    }
  }]);

  return BreadCrumbs;
}(_react.Component);

BreadCrumbs.propTypes = {
  children: node,
  separator: string,
  separatorStyle: object,
  style: object
};
BreadCrumbs.contextTypes = {
  compTheme: object
};
exports.default = (0, _contextPure2.default)(BreadCrumbs);