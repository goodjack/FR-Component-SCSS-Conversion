import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import Text from '../Text';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import NavigationChevronDown from '../SvgIcons/navigation/ChevronDown';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';

const { string, object, func } = PropTypes;

const styles = {
  listItem: {
    listStyleType: 'none',
    textDecoration: 'none',
    position: 'relative',
    float: 'left',
    margin: 0,
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    minWidth: 100,
    lastChild: {
      border: 'none',
    },
  },
  text: {
    paddingTop: 22,
    paddingRight: 0,
    paddingBottom: 16,
    paddingLeft: 0,
    display: 'inline-block',
    width: '100%',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  divider: {
    content: '',
    position: 'absolute',
    top: '50%',
    left: -1,
    width: 1,
    height: 40,
    marginTop: -20,
  },
  navigationArrow: {
    content: '',
    display: 'inline-block',
    width: 15,
    height: 15,
    position: 'absolute',
    left: '50%',
    bottom: 4,
    marginLeft: -8,
  },
};

class SectionAnchorBarItem extends Component {

  static propTypes = {
    arrowStyle: object,
    className: string,
    dividerStyle: object,
    id: string,
    link: string,
    listItemStyle: object,
    listItemHoverStyle: object,
    /**
     * onClick props for triggers the click event
     */
    onClick: func,
    /**
     * Override the inline-styles of the root element.
     */
    style: object,
    textStyle: object,
    textHoverStyle: object,
    title: string,
  };

  static contextTypes = {
    compTheme: object,
  };

  state = {
    hovered: false,
  };

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  handleMouseEnter = () => {
    this.setState({ hovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ hovered: false });
  };

  handleOnPress = (event) => {
    if (this.props.onClick) this.props.onClick(event);
  };

  render() {
    const {
      title,
      link,
      listItemStyle,
      listItemHoverStyle,
      textStyle,
      textHoverStyle,
      arrowStyle,
      dividerStyle,
    } = this.props;

    const getTheme = this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const theme = getTheme && getTheme.sectionAnchorBar;

    let textMergeStyle = '';
    let listItemMergeStyle = '';

    if (this.state.hovered) {
      const listHoverStyle = { cursor: 'pointer', backgroundColor: theme.accent3Color };
      textMergeStyle = mergeStyles.apply(this,
        [styles.text, { color: theme.alternateTextColor }, textHoverStyle]);
      listItemMergeStyle = mergeStyles.apply(this,
        [styles.listItem, listHoverStyle, listItemHoverStyle]);
    } else {
      const listStyle = { cursor: 'default', backgroundColor: theme.primary3Color };
      textMergeStyle = mergeStyles.apply(this,
        [styles.text, { color: theme.textColor }, textStyle]);
      listItemMergeStyle = mergeStyles.apply(this, [styles.listItem, listStyle, listItemStyle]);
    }

    const arrowColor = this.state.hovered ? theme.alternateTextColor : theme.textColor;
    const dividerColor = { backgroundColor: theme.borderColor };

    return (
      <li
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onClick={this.handleOnPress}
        style={listItemMergeStyle}
      >
        <a href={link}>
          <Text style={textMergeStyle}>{title}</Text>
        </a>
        <NavigationChevronDown
          color={arrowColor}
          style={mergeStyles.apply(this, [styles.navigationArrow, arrowStyle])}
        />
      <div style={mergeStyles.apply(this, [styles.divider, dividerColor, dividerStyle])}></div>
      </li>
    );
  }
}

export default composeContextPure(SectionAnchorBarItem);
