'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

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

var _stylePropable = require('../helpers/utils/stylePropable');

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
    gridStyle: {
      backgroundColor: filterTheme.gridBackgroundColor,
      borderColor: filterTheme.borderColor,
      borderWidth: '1',
      borderStyle: 'solid',
      borderCollapse: 'collapse'
    },
    colorText: {
      display: 'none'
    },
    colorTextClick: {
      position: 'absolute',
      top: '31%',
      left: '36%',
      fontSize: '75%',
      color: filterTheme.gridBackgroundColor,
      fontWeight: 'bold',
      textDecoration: 'underline'
    },
    waterMarkStyle: {
      position: 'absolute',
      width: '100%',
      top: '0',
      left: '0'
    }
  };

  return {
    styles: styles
  };
};

var ColorGrid = function (_Component) {
  _inherits(ColorGrid, _Component);

  function ColorGrid() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(ColorGrid)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      gridIndex: []
    }, _this.componentWillMount = function () {
      var passIndex = _this.props.passIndex;

      if (passIndex) {
        _this.setState({ gridIndex: passIndex });
      }

      var _prepareStyle$styles = prepareStyle(_this).styles;
      var gridCellStyle = _prepareStyle$styles.gridCellStyle;
      var gridCellClick = _prepareStyle$styles.gridCellClick;
      var colorText = _prepareStyle$styles.colorText;
      var colorTextClick = _prepareStyle$styles.colorTextClick;
      var waterMarkStyle = _prepareStyle$styles.waterMarkStyle;
      var gridStyle = _prepareStyle$styles.gridStyle;


      _this.cachedStyle = {
        gridStyle: gridStyle,
        gridCellStyle: gridCellStyle,
        colorText: colorText,
        colorTextClick: colorTextClick,
        gridCellClick: gridCellClick,
        waterMarkStyle: waterMarkStyle
      };
    }, _this.getColorGridCells = function () {

      var colorArray = new Array(12).fill(undefined).map(function (val, id) {
        return id;
      });

      var _this$cachedStyle = _this.cachedStyle;
      var gridCellStyle = _this$cachedStyle.gridCellStyle;
      var colorText = _this$cachedStyle.colorText;
      var colorTextClick = _this$cachedStyle.colorTextClick;
      var gridCellClick = _this$cachedStyle.gridCellClick;
      var waterMarkStyle = _this$cachedStyle.waterMarkStyle;


      var gridInput = null;
      var clickText = colorText;
      var clickGrid = gridCellStyle;
      var _this$props = _this.props;
      var colorData = _this$props.colorData;
      var waterMarkImage = _this$props.waterMarkImage;

      var dataIterate = colorData.split(',');
      var gridItem = colorArray.map(function (index) {
        if (index < dataIterate.length) {

          var data = dataIterate[index];
          var bindCall = _this.getGridState.bind(_this, index);
          clickText = colorText;
          var gridStyle = gridCellStyle;

          if (_this.state.gridIndex[index]) {
            clickText = colorTextClick;
            gridStyle = gridCellClick;
          }

          clickGrid = _stylePropable.mergeStyles.apply(_this, [gridStyle, { backgroundColor: data }]);
          gridInput = _react2.default.createElement(
            _GridCell2.default,
            {
              onClick: bindCall,
              key: index,
              style: clickGrid
            },
            _react2.default.createElement(_Text2.default, { style: clickText, content: data })
          );
        } else {
          gridInput = _react2.default.createElement(
            _GridCell2.default,
            {
              key: index,
              style: gridCellStyle
            },
            _react2.default.createElement(_Image2.default, { style: waterMarkStyle, source: waterMarkImage })
          );
        }

        return gridInput;
      });

      return gridItem;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorGrid, [{
    key: 'getGridState',
    value: function getGridState(index) {
      var stateGrid = this.state.gridIndex;

      if (stateGrid[index]) {
        stateGrid[index] = false;
      } else {
        stateGrid[index] = true;
      }

      this.setState(stateGrid);
      this.props.setColorState(stateGrid, 'Color');
    }
  }, {
    key: 'render',
    value: function render() {
      var gridStyle = this.cachedStyle.gridStyle;


      return _react2.default.createElement(
        _Grid2.default,
        { cellPadding: 0, style: gridStyle, maxCols: 3 },
        this.getColorGridCells()
      );
    }
  }]);

  return ColorGrid;
}(_react.Component);

ColorGrid.propTypes = {
  colorData: string,
  setColorState: func,
  passIndex: array,
  waterMarkImage: string
};
exports.default = (0, _contextPure2.default)(ColorGrid);