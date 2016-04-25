'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _Text = require('../Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var func = _react.PropTypes.func;
var array = _react.PropTypes.array;


var styles = {
  listBody: {
    width: '100%',
    listStyle: 'none',
    float: 'left',
    padding: '0',
    margin: '0',
    position: 'relative'
  },
  root: {
    display: 'block',
    width: '100%',
    float: 'left'
  },
  headTextStyle: {
    display: 'block'
  }
};
var noop = function noop() {
  return null;
};

var Chip = function (_Component) {
  _inherits(Chip, _Component);

  function Chip() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Chip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Chip)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
      colorName: null
    }, _this.getHoveredData = function (data, event) {
      _this.setState({ colorName: data });
      _this.props.onMouseEnter(event);
    }, _this.getChildren = function (children) {
      var clicked = false;
      var renderChildren = _react2.default.Children.map(children, function (child, index) {
        clicked = false;
        if (_this.state.id === index) clicked = true;
        return _react2.default.cloneElement(child, {
          clickCallBack: _this.handleClick,
          hoverCallBack: _this.getHoveredData,
          hoverOutCallBack: _this.handleMouseOut,
          clicked: clicked,
          refId: index
        });
      });
      return renderChildren;
    }, _this.handleClick = function (getid, event) {
      _this.setState({ id: getid });
      _this.props.onMouseClick(event);
      _this.props.onTouchTap(event);
    }, _this.handleMouseOut = function (event) {
      _this.props.onMouseLeave(event);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Chip, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var headingText = _props.headingText;
      var headingTextStyle = _props.headingTextStyle;
      var children = _props.children;
      var chipsBodyStyle = _props.chipsBodyStyle;
      var className = _props.className;
      var style = _props.style;

      var other = _objectWithoutProperties(_props, ['headingText', 'headingTextStyle', 'children', 'chipsBodyStyle', 'className', 'style']);

      var headingStyle = _stylePropable.mergeStyles.apply(this, [styles.headTextStyle, headingTextStyle]);
      var ulStyle = _stylePropable.mergeStyles.apply(this, [styles.listBody, chipsBodyStyle]);
      var renderChildren = this.getChildren(children);

      return _react2.default.createElement(
        'div',
        {
          className: className,
          style: _stylePropable.mergeStyles.apply(this, [styles.root, style])
        },
        _react2.default.createElement(
          _Text2.default,
          { style: headingStyle },
          headingText,
          this.state.colorName
        ),
        _react2.default.createElement(
          'ul',
          { style: ulStyle },
          renderChildren
        )
      );
    }
  }]);

  return Chip;
}(_react.Component);

Chip.propTypes = {
  children: _react2.default.PropTypes.oneOfType([array, object]).isRequired,
  className: string,
  chipsBodyStyle: object,
  headingText: string,
  headingTextStyle: object,
  onMouseClick: func,
  onMouseEnter: func,
  onMouseLeave: func,
  onTouchTap: func,
  style: object
};
Chip.defaultProps = {
  onMouseClick: noop,
  onMouseEnter: noop,
  onMouseLeave: noop,
  onTouchTap: noop
};
exports.default = (0, _contextPure2.default)(Chip);