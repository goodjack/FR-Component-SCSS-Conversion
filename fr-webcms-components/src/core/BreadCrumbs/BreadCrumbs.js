import React, { Component, PropTypes } from 'react';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import ThemeManager from '../../helpers/styles/themeManager';

const { node, string, object } = PropTypes;
const styles = {
  root: {
    listStyle: 'none',
  },
  item: {
    display: 'inline-block',
    verticalAlign: 'middle',
  },
  separator: {
    margin: '0 5px 0 3px',
  },
};

const prepareStyle = (context, props) => {
  const compTheme = context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const separatorColor = {
    color: compTheme && compTheme.breadCrumbs && compTheme.breadCrumbs.seperatorColor,
  };
  const mergedRootStyles = mergeStyles.apply(this, [styles.root, props.style]);
  const separatorStyles = mergeStyles.apply(this, [separatorColor, styles.separator, props.separatorStyle]);
  return { mergedRootStyles, separatorStyles };
};

class BreadCrumbs extends Component {

  static propTypes = {
    children: node,
    separator: string,
    separatorStyle: object,
    style: object,
  };

  static contextTypes = {
    compTheme: object,
  };

  render() {
    const {
      separator,
      children,
    } = this.props;
    const {
      mergedRootStyles,
      separatorStyles,
    } = prepareStyle(this.context, this.props);

    const wrappedChildren = React.Children.map(children, (currentChild, index) => {
      const separatorElement = (index > 0) ? <span style={separatorStyles} >{separator}</span> : null;
      return (
          <li style={styles.item}>
            {separatorElement}
            {currentChild}
          </li>);
    });

    return (
      <ul style={mergedRootStyles}>{wrappedChildren}</ul>
    );
  }
}

export default composeContextPure(BreadCrumbs);
