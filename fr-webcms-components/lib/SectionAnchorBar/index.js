'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('../helpers/utils/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var array = _react.PropTypes.array;

var styles = {
  container: {
    width: '100%',
    height: '100%'
  },
  list: {
    margin: 0,
    padding: 0,
    textAlign: 'center',
    listStyle: 'none',
    display: 'flex',
    overflow: 'hidden'
  }
};

var SectionAnchorBar = function (_Component) {
  _inherits(SectionAnchorBar, _Component);

  function SectionAnchorBar() {
    _classCallCheck(this, SectionAnchorBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SectionAnchorBar).apply(this, arguments));
  }

  _createClass(SectionAnchorBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._uniqueId = _uniqueId2.default.generate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var id = _props.id;
      var style = _props.style;
      var listStyle = _props.listStyle;


      var inputId = id || this._uniqueId;

      return _react2.default.createElement(
        'div',
        {
          id: inputId,
          className: className,
          style: _stylePropable.mergeStyles.apply(this, [styles.container, style])
        },
        _react2.default.createElement(
          'ul',
          { style: _stylePropable.mergeStyles.apply(this, [styles.list, listStyle]) },
          this.props.children
        )
      );
    }
  }]);

  return SectionAnchorBar;
}(_react.Component);

SectionAnchorBar.propTypes = {
  children: array,
  className: string,
  id: string,
  listStyle: object,
  /**
   * Override the inline-styles of the root element.
   */
  style: object
};
exports.default = (0, _contextPure2.default)(SectionAnchorBar);