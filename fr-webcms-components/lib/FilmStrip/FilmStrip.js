'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _Swipable = require('../core/Swipable');

var _Swipable2 = _interopRequireDefault(_Swipable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var array = _react.PropTypes.array;
var oneOfType = _react.PropTypes.oneOfType;
var number = _react.PropTypes.number;

var container = {
  width: '100%'
};

var FilmStrip = function FilmStrip(props) {
  var className = props.className;
  var id = props.id;
  var style = props.style;
  var children = props.children;
  var display = props.display;


  return _react2.default.createElement(
    'div',
    {
      id: id,
      className: className,
      style: _stylePropable.mergeStyles.apply(undefined, [container, style])
    },
    _react2.default.createElement(
      _Swipable2.default,
      { display: display },
      children
    )
  );
};

FilmStrip.propTypes = {
  children: oneOfType([array, object]),
  className: string,
  display: number,
  id: string,
  style: object
};

exports.default = (0, _contextPure2.default)(FilmStrip);