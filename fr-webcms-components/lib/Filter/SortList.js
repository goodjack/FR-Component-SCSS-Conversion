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

var _List = require('../core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('../core/List/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

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

var func = _react.PropTypes.func;
var number = _react.PropTypes.number;
var string = _react.PropTypes.string;


var prepareStyle = function prepareStyle(_ref) {
  var context = _ref.context;

  var CompTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var filterTheme = CompTheme && CompTheme.filter || {};
  var styles = {
    imageStyle: {
      width: '100%',
      height: 57
    },
    textStyle: {
      color: filterTheme.textColor,
      fontWeight: 'Bold'
    },
    listStyle: {
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderColor: filterTheme.borderColor
    },
    listClickStyle: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: filterTheme.borderColor,
      backgroundColor: filterTheme.backgroundColor
    },
    listImageStyle: {
      float: 'right',
      display: 'none'
    },
    listClickImageStyle: {
      float: 'right',
      display: 'block'
    }
  };

  return {
    styles: styles
  };
};

var SortList = function (_Component) {
  _inherits(SortList, _Component);

  function SortList() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, SortList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SortList)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      sortIndex: null
    }, _this.componentWillMount = function () {
      _this.setState({ sortIndex: _this.props.passIndex });
      var _prepareStyle$styles = prepareStyle(_this).styles;
      var textStyle = _prepareStyle$styles.textStyle;
      var listStyle = _prepareStyle$styles.listStyle;
      var listImageStyle = _prepareStyle$styles.listImageStyle;
      var listClickStyle = _prepareStyle$styles.listClickStyle;
      var listClickImageStyle = _prepareStyle$styles.listClickImageStyle;
      var imageStyle = _prepareStyle$styles.imageStyle;


      _this.cachedStyle = {
        textStyle: textStyle,
        listStyle: listStyle,
        listImageStyle: listImageStyle,
        listClickStyle: listClickStyle,
        listClickImageStyle: listClickImageStyle,
        imageStyle: imageStyle
      };
    }, _this.getSortListItems = function () {
      var _this$cachedStyle = _this.cachedStyle;
      var listStyle = _this$cachedStyle.listStyle;
      var textStyle = _this$cachedStyle.textStyle;
      var listImageStyle = _this$cachedStyle.listImageStyle;
      var listClickStyle = _this$cachedStyle.listClickStyle;
      var listClickImageStyle = _this$cachedStyle.listClickImageStyle;


      var clickText = textStyle;
      var clickList = listStyle;
      var imageShow = listImageStyle;
      var _this$props = _this.props;
      var sortData = _this$props.sortData;
      var tickSign = _this$props.tickSign;
      var sortIndex = _this.state.sortIndex;

      var dataIterate = sortData.split(',');
      var listItem = dataIterate.map(function (data, index) {
        clickList = listStyle;
        imageShow = listImageStyle;
        var bindFunc = _this.callBackTest.bind(_this, index);

        if (sortIndex === index) {
          clickText = textStyle;
          imageShow = listClickImageStyle;
          clickList = listClickStyle;
        }

        return _react2.default.createElement(
          _ListItem2.default,
          {
            onTouchTap: bindFunc,
            key: index,
            style: clickList
          },
          _react2.default.createElement(_Text2.default, { style: clickText, content: data }),
          _react2.default.createElement(_Image2.default, { style: imageShow, source: tickSign })
        );
      });

      return listItem;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SortList, [{
    key: 'callBackTest',
    value: function callBackTest(index) {
      this.setState({ sortIndex: index });
      this.props.setIndex(index, 'List');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _List2.default,
        null,
        this.getSortListItems()
      );
    }
  }]);

  return SortList;
}(_react.Component);

SortList.propTypes = {
  sortData: string,
  setIndex: func,
  passIndex: number,
  tickSign: string
};
exports.default = (0, _contextPure2.default)(SortList);