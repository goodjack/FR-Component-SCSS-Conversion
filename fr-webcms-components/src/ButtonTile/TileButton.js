import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import UniqueId from '../helpers/utils/uniqueId';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import Button from '../Button';

const { string, object } = PropTypes;

const getRelevantContextKeys = theme => {
  const tbTheme = theme && theme.tileButton || {};
  return { ...tbTheme };
};

const styles = {
  list: {
    flex: 1,
    position: 'relative',
    height: 29,
  },
  button: {
    flex: 1,
    display: 'inline-block',
    padding: 0,
    position: 'relative',
    transform: 'translate3d(0,0,0)',
    top: 0,
    height: '100%',
    borderRadius: 0,
  },
  label: {
    fontSize: 10,
    fontWeight: 'bold',
    position: 'absolute',
    paddingTop: 10,
    margin: 'auto',
    width: '100%',
    height: '100%',
    left: '0',
    top: '0',
  },
};

class TileButton extends Component {

  static propTypes = {
    buttonStyle: object,
    color: string,
    link: string,
    listItemStyle: object,
    targetwindow: string,
    title: string,
  };

  static contextTypes = {
    muiTheme: object,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  render() {
    const {
      color,
      title,
      link,
      targetwindow,
      listItemStyle,
      buttonStyle,
    } = this.props;

    const {
      compTheme: compContextTheme,
    } = this.context;

    const compTheme = compContextTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const { textColor } = getRelevantContextKeys(compTheme);
    const labelStyle = mergeStyles(styles.label, { color: textColor });

    const defaultButtonStyles = mergeStyles(styles.button, { backgroundColor: color });

    return (
      <li style={mergeStyles(styles.list, listItemStyle)}>
        <a href={link} target={targetwindow}>
          <Button style={mergeStyles(defaultButtonStyles, buttonStyle)}
            label={title}
            labelStyle={labelStyle}
          />
        </a>
      </li>
    );
  }

}

export default composeContextPure(TileButton);
