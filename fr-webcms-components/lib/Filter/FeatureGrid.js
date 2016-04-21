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
      width: '100%',
      display: 'block',
      float: 'left'
    },
    gridCellClick: {
      width: '100%',
      display: 'block',
      float: 'left'
    },
    gridText: {
      display: 'block',
      fontSize: 12,
      color: filterTheme.textColor,
      width: '72%',
      marginLeft: 2,
      float: 'left'
    },
    gridTextClick: {
      display: 'block',
      fontSize: 12,
      color: filterTheme.clickTextColor,
      width: '72%',
      marginLeft: 2,
      float: 'left'
    },
    gridStyle: {
      backgroundColor: filterTheme.gridBackgroundColor
    },
    imageShow: {
      float: 'left',
      width: '20%'
    }
  };
  return {
    styles: styles
  };
};

var FeatureGrid = function (_Component) {
  _inherits(FeatureGrid, _Component);

  function FeatureGrid() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, FeatureGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(FeatureGrid)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      gridIndex: []
    }, _this.componentWillMount = function () {
      var passIndex = _this.props.passIndex;

      if (passIndex) {
        _this.setState({ gridIndex: passIndex });
      }

      var _prepareStyle$styles = prepareStyle(_this).styles;
      var gridCellStyle = _prepareStyle$styles.gridCellStyle;
      var gridText = _prepareStyle$styles.gridText;
      var gridTextClick = _prepareStyle$styles.gridTextClick;
      var gridCellClick = _prepareStyle$styles.gridCellClick;
      var imageShow = _prepareStyle$styles.imageShow;
      var gridStyle = _prepareStyle$styles.gridStyle;


      _this.cachedStyle = {
        gridCellStyle: gridCellStyle,
        gridText: gridText,
        gridTextClick: gridTextClick,
        gridCellClick: gridCellClick,
        gridStyle: gridStyle,
        imageShow: imageShow
      };
    }, _this.getSizeGridCells = function () {
      var _this$cachedStyle = _this.cachedStyle;
      var gridCellStyle = _this$cachedStyle.gridCellStyle;
      var gridText = _this$cachedStyle.gridText;
      var gridTextClick = _this$cachedStyle.gridTextClick;
      var gridCellClick = _this$cachedStyle.gridCellClick;
      var imageShow = _this$cachedStyle.imageShow;


      var clickText = gridText;
      var clickGrid = gridCellStyle;
      var _this$props = _this.props;
      var featureData = _this$props.featureData;
      var plusSign = _this$props.plusSign;
      var tickSign = _this$props.tickSign;

      var src = plusSign;
      var dataIterate = featureData.split(',');
      var gridItem = dataIterate.map(function (data, index) {
        var bindCall = _this.getClickIndex.bind(_this, index);
        clickText = gridText;
        clickGrid = gridCellStyle;
        src = plusSign;

        if (_this.state.gridIndex[index]) {
          clickText = gridTextClick;
          clickGrid = gridCellClick;
          src = tickSign;
        }

        return _react2.default.createElement(
          _GridCell2.default,
          {
            onClick: bindCall,
            key: index,
            style: clickGrid
          },
          _react2.default.createElement(_Image2.default, { style: imageShow, source: src }),
          _react2.default.createElement(_Text2.default, { style: clickText, content: data })
        );
      });

      return gridItem;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FeatureGrid, [{
    key: 'getClickIndex',
    value: function getClickIndex(index) {
      var gridState = this.state.gridIndex;

      if (gridState[index]) {
        gridState[index] = false;
      } else {
        gridState[index] = true;
      }

      this.setState(gridState);
      this.props.setSizeState(gridState, 'Feature');
    }
  }, {
    key: 'render',
    value: function render() {
      var gridStyle = this.cachedStyle.gridStyle;

      return _react2.default.createElement(
        _Grid2.default,
        { cellPadding: 0, style: gridStyle, maxCols: 2 },
        this.getSizeGridCells()
      );
    }
  }]);

  return FeatureGrid;
}(_react.Component);

FeatureGrid.propTypes = {
  featureData: string,
  setSizeState: func,
  passIndex: array,
  plusSign: string,
  tickSign: string
};
exports.default = (0, _contextPure2.default)(FeatureGrid);