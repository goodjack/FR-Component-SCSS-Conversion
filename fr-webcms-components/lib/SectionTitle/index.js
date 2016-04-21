'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _stylePropable = require('../helpers/utils/stylePropable');

var _contextPure = require('../helpers/composedComponents/contextPure');

var _contextPure2 = _interopRequireDefault(_contextPure);

var _configurationManager = require('../helpers/configuration/configurationManager');

var _configurationManager2 = _interopRequireDefault(_configurationManager);

var _baseConfig = require('../helpers/configuration/baseConfig');

var _baseConfig2 = _interopRequireDefault(_baseConfig);

var _Heading = require('../Heading');

var _Heading2 = _interopRequireDefault(_Heading);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

//  Uniqlo UI


var string = _react.PropTypes.string;
var object = _react.PropTypes.object;


function getRelevantContextKeys(config) {
  return {
    showSubTitle: config.sectionTitle.showSubTitle
  };
}

var root = {
  width: 'auto',
  height: 100,
  textAlign: 'center'
};
var titleStyles = {
  textAlign: 'center',
  fontSize: 32,
  fontWeight: 'bold'
};
var titleContainer = {
  display: 'inline-block'
};
var subtitleStyles = {
  fontSize: 14,
  fontWeight: 'bold',
  textAlign: 'center'
};
var dividerStyles = {
  width: 'inherit',
  height: 2
};

var getHeading = function getHeading(otherProps, showSubTitle) {
  var dividerStyle = otherProps.dividerStyle;
  var subtitle = otherProps.subtitle;
  var subtitleStyle = otherProps.subtitleStyle;
  var title = otherProps.title;
  var titleStyle = otherProps.titleStyle;
  var viewType = otherProps.viewType;


  var viewTypes = viewType ? viewType.toLowerCase() : '';

  var titleMergeStyle = _stylePropable.mergeStyles.apply(undefined, [titleStyles, titleStyle]);
  var dividerMergeStyle = _stylePropable.mergeStyles.apply(undefined, [dividerStyles, dividerStyle]);
  var subtitleMergeStyle = _stylePropable.mergeStyles.apply(undefined, [subtitleStyles, subtitleStyle]);

  var headingTitle = _react2.default.createElement(_Heading2.default, {
    type: 'h2',
    headingText: title,
    style: titleMergeStyle
  });

  var headingWithSubTitle = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: titleContainer },
      headingTitle,
      _react2.default.createElement(_Divider2.default, { style: dividerMergeStyle })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Heading2.default, {
        type: 'h4',
        headingText: subtitle,
        style: subtitleMergeStyle
      })
    )
  );

  return (viewTypes === 'regular with subhead' || viewTypes === 'regular') && showSubTitle ? headingWithSubTitle : headingTitle;
};

var SectionTitle = function SectionTitle(props, context) {
  var className = props.className;
  var id = props.id;
  var style = props.style;

  var others = _objectWithoutProperties(props, ['className', 'id', 'style']);

  var compConfig = context.compConfig || _configurationManager2.default.getCompConfig(_baseConfig2.default);

  var _getRelevantContextKe = getRelevantContextKeys(compConfig);

  var showSubTitle = _getRelevantContextKe.showSubTitle;


  var heading = getHeading(_extends({}, others), showSubTitle);
  return _react2.default.createElement(
    'div',
    {
      style: _stylePropable.mergeStyles.apply(undefined, [root, style]),
      id: id,
      className: className
    },
    heading
  );
};

SectionTitle.propTypes = {
  anchorId: string,
  className: string,
  dividerStyle: object,
  id: string,
  style: object,
  subtitle: string,
  subtitleStyle: object,
  title: string,
  titleStyle: object,
  viewType: string
};

SectionTitle.contextTypes = {
  compConfig: object
};

exports.default = (0, _contextPure2.default)(SectionTitle);