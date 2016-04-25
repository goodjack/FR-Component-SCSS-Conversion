'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Grid = require('../../core/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _GridCell = require('../../core/GridCell');

var _GridCell2 = _interopRequireDefault(_GridCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var object = _react.PropTypes.object;
var number = _react.PropTypes.number;
var func = _react.PropTypes.func;
var node = _react.PropTypes.node;


var renderChildren = function renderChildren(me) {
  var _me$state = me.state;
  var activeIndex = _me$state.activeIndex;
  var columns = _me$state.columns;

  var updateTabSet = me.updateTabSet;
  var content = void 0;
  var children = _react2.default.Children.map(me.props.children, function (child, index) {
    var tabContent = child.props.children;
    if (child.type.name === 'Tab') {
      if (activeIndex === index && tabContent) {
        content = _react2.default.createElement(
          _GridCell2.default,
          {
            colSpan: columns,
            key: index
          },
          tabContent
        );
      }

      return _react2.default.createElement(
        _GridCell2.default,
        { key: index },
        _react2.default.cloneElement(child, {
          index: index,
          updateTabSet: updateTabSet,
          active: activeIndex === index ? true : false
        })
      );
    }
  });
  if (content) {
    children.push(content);
  }

  return children;
};

var Tabs = function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    var _Object$getPrototypeO;

    var _temp, _this2, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Tabs)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this2), _this2.componentWillMount = function () {
      var _this2$props = _this2.props;
      var cols = _this2$props.cols;
      var defaultTabIndex = _this2$props.defaultTabIndex;
      var children = _this2$props.children;

      var columns = cols;
      var isTab = false;
      var defaultIndex = defaultTabIndex;
      _react2.default.Children.forEach(children, function (child) {
        if (child.props.children) {
          isTab = true;
        }

        if (child.type.name === 'Tab' && cols === 0) {
          columns++;
        }
      });
      if (!defaultIndex && isTab) {
        defaultIndex = 0;
      }

      _this2.setState({
        activeIndex: defaultIndex,
        columns: columns
      });
    }, _this2.componentWillReceiveProps = function (nextProps) {
      if (_this2.props.defaultTabIndex !== nextProps.defaultTabIndex && nextProps.defaultTabIndex) {
        _this2.setState({
          activeIndex: nextProps.defaultTabIndex
        });
      }
    }, _this2.updateTabSet = function (index) {
      _this2.setState({ activeIndex: index });
      _this2.props.onTabChange(index);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this = this;
      var _this$props = _this.props;
      var padding = _this$props.padding;
      var style = _this$props.style;

      var other = _objectWithoutProperties(_this$props, ['padding', 'style']);

      var columns = _this.state.columns;

      var gridContent = renderChildren(_this);
      return _react2.default.createElement(
        _Grid2.default,
        { maxCols: columns, cellPadding: padding, style: style },
        gridContent
      );
    }
  }]);

  return Tabs;
}(_react.Component);

Tabs.propTypes = {
  children: node.isRequired,
  cols: number,
  defaultTabIndex: number,
  onTabChange: func,
  padding: number,
  style: object
};
Tabs.defaultProps = {
  onTabChange: function onTabChange() {
    return null;
  },
  cols: 0,
  padding: 0
};
exports.default = Tabs;