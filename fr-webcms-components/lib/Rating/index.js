'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _lightRawTheme = require('../helpers/styles/rawThemes/lightRawTheme');

var _lightRawTheme2 = _interopRequireDefault(_lightRawTheme);

var _themeManager = require('../helpers/styles/themeManager');

var _themeManager2 = _interopRequireDefault(_themeManager);

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _Star = require('../SvgIcons/action/Star');

var _Star2 = _interopRequireDefault(_Star);

var _HalfStar = require('../SvgIcons/action/HalfStar');

var _HalfStar2 = _interopRequireDefault(_HalfStar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var string = _react.PropTypes.string;
var object = _react.PropTypes.object;
var number = _react.PropTypes.number;


var prepareStyle = function prepareStyle(props, context) {
  var CompTheme = context.CompTheme || _themeManager2.default.getCompTheme(_lightRawTheme2.default);
  var starTheme = CompTheme && CompTheme.ratingStar || {};
  var styles = {
    root: {
      listStyle: 'none'
    },
    listStyle: {
      float: 'left'
    },
    halfStarStyle: {
      fill: starTheme.fullStarColor
    },
    fullStarStyle: {
      fill: starTheme.fullStarColor
    },
    smallSize: {
      width: '16',
      height: '16'
    },
    largeSize: {
      width: '28',
      height: '28'
    },
    mediumSize: {
      width: '22',
      height: '22'
    },
    emptyStarStyle: {
      fill: starTheme.emptyStarColor,
      stroke: starTheme.strokeColor,
      strokeWidth: '0.3'
    }
  };
  var sizeStyle = styles.mediumSize;
  if (props.size === 'Large') {
    sizeStyle = styles.largeSize;
  } else if (props.size === 'Small') {
    sizeStyle = styles.smallSize;
  }

  var halfStarStyle = _stylePropable.mergeStyles.apply(undefined, [styles.halfStarStyle, sizeStyle, props.halfStyle]);
  var fullStarStyle = _stylePropable.mergeStyles.apply(undefined, [styles.fullStarStyle, sizeStyle, props.fullStyle]);
  var emptyStarStyle = _stylePropable.mergeStyles.apply(undefined, [styles.emptyStarStyle, sizeStyle, props.emptyStyle]);
  var listStyle = _stylePropable.mergeStyles.apply(undefined, [styles.listStyle, props.ratingStyle]);
  var rootStyle = _stylePropable.mergeStyles.apply(undefined, [styles.root, props.style]);
  return { halfStarStyle: halfStarStyle, fullStarStyle: fullStarStyle, emptyStarStyle: emptyStarStyle, listStyle: listStyle, rootStyle: rootStyle };
};

var getStar = function getStar(index, Star, type, props, context) {
  var _prepareStyle = prepareStyle(props, context);

  var halfStarStyle = _prepareStyle.halfStarStyle;
  var listStyle = _prepareStyle.listStyle;
  var fullStarStyle = _prepareStyle.fullStarStyle;
  var emptyStarStyle = _prepareStyle.emptyStarStyle;

  var starStyle = emptyStarStyle;

  if (type === 'half') {
    starStyle = halfStarStyle;
  } else if (type === 'full') {
    starStyle = fullStarStyle;
  }

  return _react2.default.createElement(
    'li',
    {
      key: index,
      style: listStyle
    },
    _react2.default.createElement(Star, { style: starStyle })
  );
};

var Rating = function Rating(props, context) {
  var className = props.className;
  var id = props.id;
  var ratingCount = props.ratingCount;
  var maxCount = props.maxCount;

  var _prepareStyle2 = prepareStyle(props, context);

  var rootStyle = _prepareStyle2.rootStyle;


  var halfStarIndex = null;
  var fullStarIndex = Math.floor(ratingCount);
  var decimalCount = Math.ceil(ratingCount);
  if (ratingCount !== decimalCount) {
    halfStarIndex = decimalCount;
  }

  var val = null;
  var renderChildren = Array(Math.max(maxCount, ratingCount)).fill().map(function (star, index) {
    val = index + 1;
    if (val === halfStarIndex) {
      return getStar(val, _HalfStar2.default, 'half', props, context);
    }

    if (val <= fullStarIndex) {
      return getStar(val, _Star2.default, 'full', props, context);
    }

    return getStar(val, _Star2.default, 'empty', props, context);
  });

  return _react2.default.createElement(
    'ul',
    { id: id,
      className: className,
      style: rootStyle
    },
    renderChildren
  );
};

Rating.propTypes = {
  className: string,
  emptyStyle: object,
  fullStyle: object,
  halfStyle: object,
  id: string,
  maxCount: number,
  ratingCount: number,
  ratingStyle: object,
  style: object,
  size: string
};
Rating.defaultProps = { maxCount: 5 };
Rating.contextTypes = {
  compTheme: object
};

exports.default = (0, _contextPure2.default)(Rating);