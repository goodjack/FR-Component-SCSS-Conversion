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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var number = _react.PropTypes.number;
var any = _react.PropTypes.any;
var object = _react.PropTypes.object;


var getRelevantContextKeys = function getRelevantContextKeys(config, theme) {
  var gConfig = config && config.grid || {};
  var gTheme = theme && theme.grid || {};
  var gcConfig = config && config.gridCell || {};

  return {
    gridContext: _extends({}, gConfig, gTheme),
    gridCellContext: _extends({}, gcConfig)
  };
};

var styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    boxSizing: 'border-box'
  }
};

var Grid = function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var cellHeight = _props.cellHeight;
      var cellWidth = _props.cellWidth;
      var cellPadding = _props.cellPadding;
      var children = _props.children;
      var maxCols = _props.maxCols;
      var style = _props.style;

      var other = _objectWithoutProperties(_props, ['cellHeight', 'cellWidth', 'cellPadding', 'children', 'maxCols', 'style']);

      var _context = this.context;
      var compContextTheme = _context.compTheme;
      var compContextConfig = _context.compConfig;


      var compTheme = compContextTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
      var compConfig = compContextConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default);

      var _getRelevantContextKe = getRelevantContextKeys(compConfig, compTheme);

      var gridContext = _getRelevantContextKe.gridContext;
      var gridCellContext = _getRelevantContextKe.gridCellContext;


      var columns = maxCols || gridContext.maxCols || 12;

      var padding = void 0;
      if (cellPadding === 0) {
        padding = 0;
      } else {
        padding = cellPadding || gridContext.cellPadding || 10;
      }

      var mergedRootStyles = (0, _stylePropable.mergeStyles)(styles.root, style);

      var wrappedChildren = _react2.default.Children.map(children, function (currentChild) {

        var childCols = currentChild.props.colSpan || gridCellContext.colSpan || 1;
        var childRows = currentChild.props.rowSpan || gridCellContext.rowSpan;

        var childWidth = cellWidth ? cellWidth * childCols + padding : 100 / columns * childCols + '%';

        var itemStyle = (0, _stylePropable.mergeStyles)(styles.item, {
          width: childWidth,
          paddingRight: padding,
          paddingBottom: padding
        });

        if (cellHeight && childRows) {
          itemStyle = (0, _stylePropable.mergeStyles)(itemStyle, {
            height: cellHeight * childRows + padding
          });
        }

        return _react2.default.createElement(
          'div',
          { style: itemStyle },
          currentChild
        );
      });

      return _react2.default.createElement(
        'div',
        _extends({
          style: mergedRootStyles
        }, other),
        wrappedChildren
      );
    }
  }]);

  return Grid;
}(_react.Component);

Grid.propTypes = {
  cellHeight: number,
  cellWidth: number,
  cellPadding: number,
  children: any,
  maxCols: number,
  style: object
};
Grid.contextTypes = {
  compTheme: object,
  compConfig: object
};
exports.default = (0, _contextPure2.default)(Grid);