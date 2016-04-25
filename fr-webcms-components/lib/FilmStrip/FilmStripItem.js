'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('../core/Image');

var _Image2 = _interopRequireDefault(_Image);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;


var styles = {
  root: {
    display: 'inline-block',
    width: '100%'
  },
  imageContainerStyle: {
    width: '100%',
    lineHeight: 0
  },
  imageStyle: {
    width: '100%'
  }
};

var FilmStripItem = function FilmStripItem(props) {
  var link = props.link;
  var imageSource = props.imageSource;
  var stripStyle = props.stripStyle;
  var imageContainerStyle = props.imageContainerStyle;
  var imageStyle = props.imageStyle;
  var targetwindow = props.targetwindow;


  return _react2.default.createElement(
    'div',
    { style: _stylePropable.mergeStyles.apply(undefined, [styles.root, stripStyle]) },
    _react2.default.createElement(
      'div',
      { style: _stylePropable.mergeStyles.apply(undefined, [styles.imageContainerStyle, imageContainerStyle]) },
      _react2.default.createElement(
        'a',
        {
          href: link,
          target: targetwindow
        },
        _react2.default.createElement(_Image2.default, {
          source: imageSource,
          style: _stylePropable.mergeStyles.apply(undefined, [styles.imageStyle, imageStyle])
        })
      )
    )
  );
};

FilmStripItem.propTypes = {
  imageSource: string,
  imageContainerStyle: object,
  imageStyle: object,
  link: string,
  stripStyle: object,
  targetwindow: string
};

FilmStripItem.contextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(FilmStripItem);