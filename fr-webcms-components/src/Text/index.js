import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import Icon from '../core/Icon';

const { string, object, func, node } = PropTypes;
const styles = {
  display: 'inline',
};

class Text extends Component {

  static propTypes = {
    children: node,
    className: string,
    iconButton: string,
    iconStyle: object,
    id: string,
    /**
     * onPress props for triggers the click event
     */
    onPress: func,
    /**
     * Override the inline-styles of the root element.
     */
    style: object,
    content: string,
  };

  static contextTypes = {
    compTheme: object,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  handleOnPress = (event) => {
    if (this.props.onPress) this.props.onPress(event);
  };

  render() {
    const {
      className,
      id,
      content,
      style,
      iconButton,
      children,
    } = this.props;

    const getTheme = this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const theme = getTheme && getTheme.text;

    const textThemeColor = { color: theme.textColor };
    const inputId = id || this._uniqueId;

    return (
      <div
        id={inputId}
        className={className}
        style={mergeStyles.apply(this, [styles, textThemeColor, style])}
        onClick={this.handleOnPress}
      >
        {iconButton ? <Icon name={iconButton} style={this.props.iconStyle} /> : null}
        {content ? content : children}
      </div>
    );
  }
}

export default composeContextPure(Text);
