'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Grid = require('../core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GridCell = require('../core/GridCell');

var _GridCell2 = _interopRequireDefault(_GridCell);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var array = _react.PropTypes.array;
var func = _react.PropTypes.func;
var string = _react.PropTypes.string;


var prepareStyle = function prepareStyle(_ref) {
  var context = _ref.context;

  var CompTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var filterTheme = CompTheme && CompTheme.filter || {};
  var styles = {
    gridCellStyle: {
      padding: '50%',
      position: 'relative',
      width: 'auto',
      display: 'block',
      borderColor: filterTheme.borderColor,
      borderWidth: '1',
      borderStyle: 'solid'
    },
    gridCellClick: {
      padding: '50%',
      position: 'relative',
      width: 'auto',
      display: 'block',
      backgroundColor: filterTheme.backgroundColor,
      borderColor: filterTheme.borderColor,
      borderWidth: '1',
      borderStyle: 'solid'
    },
    gridText: {
      position: 'absolute',
      top: '31%',
      left: '30%',
      fontSize: 34,
      color: filterTheme.textColor
    },
    gridTextClick: {
      position: 'absolute',
      top: '31%',
      left: '30%',
      fontSize: 34,
      color: filterTheme.clickTextColor,
      textDecoration: 'underline'
    },
    gridStyle: {
      backgroundColor: filterTheme.gridBackgroundColor,
      borderColor: filterTheme.borderColor,
      borderWidth: 1,
      borderStyle: 'solid',
      borderCollapse: 'collapse'
    }
  };
  return {
    styles: styles
  };
};

var LengthGrid = function (_Component) {
  _inherits(LengthGrid, _Component);

  function LengthGrid() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, LengthGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(LengthGrid)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      gridIndex: []
    }, _this.componentWillMount = function () {
      var passIndex = _this.props.passIndex;

      if (passIndex) {
        _this.setState({ gridIndex: passIndex });
      }

      var _prepareStyle$styles = prepareStyle(_this).styles;
      var gridStyle = _prepareStyle$styles.gridStyle;
      var gridCellStyle = _prepareStyle$styles.gridCellStyle;
      var gridText = _prepareStyle$styles.gridText;
      var gridTextClick = _prepareStyle$styles.gridTextClick;
      var gridCellClick = _prepareStyle$styles.gridCellClick;


      _this.cachedStyle = {
        gridStyle: gridStyle,
        gridCellStyle: gridCellStyle,
        gridText: gridText,
        gridTextClick: gridTextClick,
        gridCellClick: gridCellClick
      };
    }, _this.getSizeGridCells = function () {
      var _this$cachedStyle = _this.cachedStyle;
      var gridCellStyle = _this$cachedStyle.gridCellStyle;
      var gridText = _this$cachedStyle.gridText;
      var gridTextClick = _this$cachedStyle.gridTextClick;
      var gridCellClick = _this$cachedStyle.gridCellClick;


      var clickText = gridText;
      var clickGrid = gridCellStyle;
      var dataIterate = _this.props.lengthData.split(',');
      var gridIndex = _this.state.gridIndex;


      var gridItem = dataIterate.map(function (data, index) {

        var bindCall = _this.getGridIndex.bind(_this, index);
        clickText = gridText;
        clickGrid = gridCellStyle;

        if (gridIndex[index]) {
          clickText = gridTextClick;
          clickGrid = gridCellClick;
        }

        return _react2.default.createElement(
          _GridCell2.default,
          {
            onClick: bindCall,
            key: index,
            style: clickGrid
          },
          _react2.default.createElement(_Text2.default, { style: clickText, content: data })
        );
      });

      return gridItem;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LengthGrid, [{
    key: 'getGridIndex',
    value: function getGridIndex(index) {
      var gridState = this.state.gridIndex;

      if (gridState[index]) {
        gridState[index] = false;
      } else {
        gridState[index] = true;
      }

      this.setState(gridState);
      this.props.setLengthState(gridState, 'Length');
    }
  }, {
    key: 'render',
    value: function render() {
      var gridStyle = this.cachedStyle.gridStyle;


      return _react2.default.createElement(
        _Grid2.default,
        { cellPadding: 0, style: gridStyle, maxCols: 3 },
        this.getSizeGridCells()
      );
    }
  }]);

  return LengthGrid;
}(_react.Component);

LengthGrid.propTypes = {
  lengthData: string,
  setLengthState: func,
  passIndex: array
};
exports.default = (0, _contextPure2.default)(LengthGrid);