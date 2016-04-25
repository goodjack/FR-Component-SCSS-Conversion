import React, { PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';

//  Uniqlo UI
import ConfigurationManager from '../helpers/configuration/configurationManager';
import BaseConfig from '../helpers/configuration/baseConfig';
import Heading from '../Heading';
import Divider from '../Divider';

const { string, object } = PropTypes;

function getRelevantContextKeys(config) {
  return {
    showSubTitle: config.sectionTitle.showSubTitle,
  };
}

const root = {
  width: 'auto',
  height: 100,
  textAlign: 'center',
};
const titleStyles = {
  textAlign: 'center',
  fontSize: 32,
  fontWeight: 'bold',
};
const titleContainer = {
  display: 'inline-block',
};
const subtitleStyles = {
  fontSize: 14,
  fontWeight: 'bold',
  textAlign: 'center',
};
const dividerStyles = {
  width: 'inherit',
  height: 2,
};

const getHeading = (otherProps, showSubTitle) => {
  const {
    dividerStyle,
    subtitle,
    subtitleStyle,
    title,
    titleStyle,
    viewType,
  } = otherProps;

  const viewTypes = viewType ? viewType.toLowerCase() : '';

  const titleMergeStyle = mergeStyles.apply(this, [titleStyles, titleStyle]);
  const dividerMergeStyle = mergeStyles.apply(this, [dividerStyles, dividerStyle]);
  const subtitleMergeStyle = mergeStyles.apply(this, [subtitleStyles, subtitleStyle]);

  const headingTitle =
  (<Heading
    type="h2"
    headingText={title}
    style={titleMergeStyle}
  />);

  const headingWithSubTitle =
  (<div>
    <div style={titleContainer}>
      {headingTitle}
      <Divider style={dividerMergeStyle}/>
    </div>
    <div>
      <Heading
        type="h4"
        headingText={subtitle}
        style={subtitleMergeStyle}
      />
    </div>
  </div>);

  return (viewTypes === 'regular with subhead' || viewTypes === 'regular')
    && (showSubTitle) ?
      headingWithSubTitle : headingTitle;
};

const SectionTitle = (props, context) => {
  const {
    className,
    id,
    style,
    ...others,
  } = props;

  const compConfig = context.compConfig || ConfigurationManager.getCompConfig(BaseConfig);
  const {
    showSubTitle,
  } = getRelevantContextKeys(compConfig);

  const heading = getHeading({ ...others }, showSubTitle);
  return (
    <div
      style={mergeStyles.apply(this, [root, style])}
      id={id}
      className={className}
    >
        {heading}
    </div>
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
  viewType: string,
};

SectionTitle.contextTypes = {
  compConfig: object,
};

export default composeContextPure(SectionTitle);
