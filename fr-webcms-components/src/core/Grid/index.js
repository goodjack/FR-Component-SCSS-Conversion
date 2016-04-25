import React, { Component, PropTypes } from 'react';
import UniqueId from '../../helpers/utils/uniqueId';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';

const { number, any, object } = PropTypes;

const getRelevantContextKeys = (config, theme) => {
  const gConfig = config && config.grid || {};
  const gTheme = theme && theme.grid || {};
  const gcConfig = config && config.gridCell || {};

  return {
    gridContext: { ...gConfig, ...gTheme },
    gridCellContext: { ...gcConfig },
  };
};

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  item: {
    boxSizing: 'border-box',
  },
};

class Grid extends Component {

  static propTypes = {
    cellHeight: number,
    cellWidth: number,
    verticalSpacing: number,
    horizontalSpacing: number,
    cellPadding: number,
    children: any,
    maxCols: number,
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
      cellHeight,
      cellWidth,
      verticalSpacing,
      horizontalSpacing,
      children,
      maxCols,
      style,
      ...other,
    } = this.props;

    const {
      compTheme: compContextTheme,
      compConfig: compContextConfig,
    } = this.context;

    const compTheme = compContextTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const compConfig = compContextConfig || ConfigurationManager.getCompConfig(BaseConfig);
    const { gridContext, gridCellContext } = getRelevantContextKeys(compConfig, compTheme);

    const columns = maxCols || gridContext.maxCols || 12;

    const vSpacing = verticalSpacing || gridContext.verticalSpacing || 10;
    const hSpacing = horizontalSpacing || gridContext.horizontalSpacing || 10;

    const vPadding = (verticalSpacing === 0) ? 0 : vSpacing;
    const hPadding = (horizontalSpacing === 0) ? 0 : hSpacing;

    const mergedRootStyles = mergeStyles(styles.root, style);

    const wrappedChildren = React.Children.map(children, (currentChild) => {

      const childCols = currentChild.props.colSpan || gridCellContext.colSpan || 1;
      const childRows = currentChild.props.rowSpan || gridCellContext.rowSpan;

      const childWidth = cellWidth ? cellWidth * childCols + hPadding : `${100 / columns * childCols}%`;

      let itemStyle = mergeStyles(styles.item, {
        width: childWidth,
        paddingRight: hPadding,
        paddingBottom: vPadding,
      });

      if (cellHeight && childRows) {
        itemStyle = mergeStyles(itemStyle, {
          height: cellHeight * childRows + vPadding,
        });
      }

      return <div style={itemStyle}>{currentChild}</div>;
    });

    return (
      <div
        style={mergedRootStyles}
        {...other}
      >
        {wrappedChildren}
      </div>
    );
  }
}

export default composeContextPure(Grid);
