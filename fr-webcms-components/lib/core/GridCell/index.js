'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _stylePropable = require('../../helpers/utils/stylePropable');

var _contextPure = require('../../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var node = _react.PropTypes.node;
var number = _react.PropTypes.number;
var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var oneOfType = _react.PropTypes.oneOfType;


var getRelevantContextKeys = function getRelevantContextKeys(config) {
  var gcConfig = config && config.gridCell || {};
  return _extends({}, gcConfig);
};

var styles = {
  root: {
    width: '100%',
    display: 'inline-block',
    height: '100%',
    overflow: 'hidden'
  }
};

var GridCell = function (_Component) {
  _inherits(GridCell, _Component);

  function GridCell() {
    _classCallCheck(this, GridCell);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridCell).apply(this, arguments));
  }

  _createClass(GridCell, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var style = _props.style;
      var children = _props.children;
      var rootClass = _props.rootClass;

      var other = _objectWithoutProperties(_props, ['style', 'children', 'rootClass']);

      var compContextConfig = this.context.compConfig;


      var compConfig = compContextConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default);
      var mergedRootStyles = (0, _stylePropable.mergeStyles)(styles.root, style);

      var gridCellConfig = getRelevantContextKeys(compConfig);

      var RootTag = rootClass || gridCellConfig.rootClass || 'div';

      return _react2.default.createElement(
        RootTag,
        _extends({
          style: mergedRootStyles
        }, other),
        children
      );
    }
  }]);

  return GridCell;
}(_react.Component);

GridCell.propTypes = {
  children: node,
  rowSpan: number,
  rootClass: oneOfType([string, object]),
  style: object
};
GridCell.contextTypes = {
  compTheme: object,
  compConfig: object
};
exports.default = (0, _contextPure2.default)(GridCell);