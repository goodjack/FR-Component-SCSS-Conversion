import React, { Component, PropTypes } from 'react';
import UniqueId from '../../helpers/utils/uniqueId';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';

const {
  node,
  number,
  string,
  object,
  oneOfType,
} = PropTypes;

const getRelevantContextKeys = config => {
  const gcConfig = config && config.gridCell || {};
  return { ...gcConfig };
};

const styles = {
  root: {
    width: '100%',
    display: 'inline-block',
    height: '100%',
    overflow: 'hidden',
  },
};

class GridCell extends Component {

  static propTypes = {
    children: node,
    rowSpan: number,
    rootClass: oneOfType([
      string,
      object,
    ]),
    style: object,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  render() {
    const {
      style,
      children,
      rootClass,
      ...other,
      } = this.props;

    const {
      compConfig: compContextConfig,
    } = this.context;

    const compConfig = compContextConfig || ConfigurationManager.getCompConfig(BaseConfig);
    const mergedRootStyles = mergeStyles(styles.root, style);

    const gridCellConfig = getRelevantContextKeys(compConfig);

    const RootTag = rootClass || gridCellConfig.rootClass || 'div';

    return (
      <RootTag
        style={mergedRootStyles}
        {...other}
      >
        {children}
      </RootTag>
    );
  }
}

export default composeContextPure(GridCell);
