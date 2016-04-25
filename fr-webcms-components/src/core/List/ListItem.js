import React, { Component, PropTypes } from 'react';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import ThemeManager from '../../helpers/styles/themeManager';
import RollOverImage from '../../RollOverImage';
import Icon from '../Icon';
const {
  bool,
  node,
  string,
  object,
  number,
  func,
} = PropTypes;
const pushElement = (children, element, baseStyles, additionalProps) => {
  if (element) {
    const styles = mergeStyles.apply(this, [baseStyles, element.props.style]);
    children.push(
      React.cloneElement(element, {
        key: children.length,
        style: styles,
        ...additionalProps,
      })
    );
  }
};

const prepareStyles = (me) => {
  const {
    rightToggle,
    nestedLevel,
    leftIcon,
    insetChildren,
    rightIcon,
  } = me.props;
  const paddingToggle = rightToggle ? 52 : 16;
  const styles = {
    sRoot: {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      lineHeight: '16px',
      position: 'relative',
      cursor: 'pointer',
    },
    sInnerDiv: {
      marginLeft: nestedLevel * 18,
      paddingLeft: leftIcon || insetChildren ? 52 : 16,
      paddingRight: rightIcon ? 56 : paddingToggle,
      paddingBottom: 12,
      paddingTop: 12,
      position: 'relative',
    },
    sIcons: {
      height: 20,
      width: 20,
      display: 'block',
      position: 'absolute',
      top: 0,
      margin: 10,
      color: me.theme.iconColor,
      fill: me.theme.iconFill,
    },
    sLeftIcon: {
      left: 4,
    },
    sRightIcon: {
      right: 4,
    },
    sRightToggle: {
      position: 'absolute',
      display: 'block',
      width: 54,
      top: 6,
      right: 8,
    },
  };
  return styles;
};

const getRootStyles = (me) => {
  const{
    sRoot,
    sInnerDiv,
  } = me.styles;
  const {
    style,
    innerDivStyle,
    hoverStyle,
  } = me.props;
  const theme = me.theme;
  const rootColors = {
    backgroundColor: (me.state.hovered) ? theme.itemHoverBackgroundColor : theme.itemBackgroundColor,
    color: (me.state.hovered) ? theme.labelHoverColor : theme.labelColor,
  };
  let rootStyle = me.state.hovered ? hoverStyle : style;
  rootStyle = mergeStyles.apply(this, [sRoot, rootColors, rootStyle]);
  const divStyle = mergeStyles.apply(this, [sInnerDiv, innerDivStyle]);
  return { rootStyle, divStyle };
};

const createChildren = (me) => {
  const {
    autoGenerateNestedIndicator,
    children,
    label,
    leftIcon,
    nestedLevel,
    rightIcon,
    rightToggle,
    ...other,
  } = me.props;
  const{
    sIcons,
    sLeftIcon,
    sRightIcon,
    sRightToggle,
  } = me.styles;
  const contentChildren = [];
  if (leftIcon) {
    pushElement(
      contentChildren,
      <Icon name={leftIcon} />,
      mergeStyles.apply(this, [sIcons, sLeftIcon])
    );
  }

  if (rightIcon) {
    pushElement(
      contentChildren,
      <Icon name={rightIcon} />,
      mergeStyles.apply(this, [sIcons, sRightIcon])
    );
  }

  if (label) {
    contentChildren.push(label);
  }

  let nestedList;
  const display = me.state.open ? null : 'none';
  let hasNestListItems = false;
  if (children) {
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child) && child.type.displayName === 'List') {
        hasNestListItems = true;
        nestedList = React.cloneElement(child, {
          style: { display },
          nestedLevel,
        });
      } else {
        contentChildren.push(child);
      }
    });
  }

  const needsNestedIndicator = hasNestListItems && autoGenerateNestedIndicator && !(rightIcon || rightToggle);
  if (needsNestedIndicator) {
    const rightIconButtonHandlers = {};
    let rightIconButtonElement;
    if (needsNestedIndicator) {
      rightIconButtonElement = me.state.open ?
        <Icon name="NavigationArrowDropUp" /> : <Icon name="NavigationArrowDropDown" />;
      rightIconButtonHandlers.onClick = me.handleNestedListToggle;
    }

    pushElement(
      contentChildren,
      rightIconButtonElement,
      mergeStyles.apply(this, [sRightToggle]),
      rightIconButtonHandlers
    );
  }

  if (rightToggle) {
    pushElement(
      contentChildren,
      <Icon name={rightToggle}/>,
      mergeStyles.apply(this, [sRightToggle])
    );
  }

  return { contentChildren, nestedList };
};

class ListItem extends Component {
  static propTypes = {
    autoGenerateNestedIndicator: bool,
    children: node,
    hoverStyle: object,
    hoverImageSrc: string,
    imageSrc: string,
    initiallyOpen: bool,
    innerDivStyle: object,
    insetChildren: bool,
    label: string,
    leftIcon: string,
    link: string,
    nestedLevel: number,
    onMouseEnter: func,
    onMouseLeave: func,
    onNestedListToggle: func,
    onTouchTap: func,
    orientation: string,
    outerDivStyle: object,
    rightIcon: string,
    rightToggle: string,
    style: object,
    targetWindow: string,
  };
  static contextTypes = {
    compTheme: object,
  };
  static defaultProps = {
    autoGenerateNestedIndicator: true,
    initiallyOpen: false,
    insetChildren: false,
    nestedLevel: 0,
    onMouseEnter: () => null,
    onMouseLeave: () => null,
    onNestedListToggle: () => null,
    targetWindow: 'self',
  };
  state = {
    hovered: false,
    open: this.props.initiallyOpen,
  };

  componentWillMount = () => {
    const _this = this;
    const compTheme = _this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme) || {};
    _this.theme = compTheme.listItem || {};
    _this.styles = prepareStyles(_this);
  };

  handleMouseEnter = (event) => {
    this.setState({ hovered: true });
    this.props.onMouseEnter(event);
  };

  handleMouseLeave = (event) => {
    this.setState({ hovered: false });
    this.props.onMouseLeave(event);
  };

  handleNestedListToggle = (event) => {
    const _this = this;
    event.stopPropagation();
    _this.setState({ open: !_this.state.open });
    _this.props.onNestedListToggle(_this);
  };

  render() {
    const _this = this;
    const {
      onTouchTap,
      orientation,
      imageSrc,
      hoverImageSrc,
      label,
      link,
      outerDivStyle,
      targetWindow,
      ...other,
    } = _this.props;
    const {
      contentChildren,
      nestedList,
    } = createChildren(_this);
    const {
      rootStyle,
      divStyle,
    } = getRootStyles(_this);

    const handleOnClick = nestedList ? _this.handleNestedListToggle : onTouchTap;
    const outerStyle = (orientation === 'horizontal') ? mergeStyles(outerDivStyle, { float: 'left' }) : outerDivStyle;

    const innerDiv = (imageSrc) ? (
      <div style={divStyle} >
        <RollOverImage
          imgSrc={imageSrc}
          rollImgSrc={hoverImageSrc}
          altText={label}
          link={link}
          target={targetWindow}
          style={rootStyle}
          onMouseLeave={_this.handleMouseLeave}
          onMouseEnter={_this.handleMouseEnter}
          onClick={handleOnClick}
        />
       </div>
      ) :
      (<a href={link} target={targetWindow} style={rootStyle} >
        <div
          style={divStyle}
          onMouseLeave={_this.handleMouseLeave}
          onMouseEnter={_this.handleMouseEnter}
          onClick={handleOnClick}
        > {contentChildren} </div>
      </a>);

    return (
      <div style={outerStyle}>
        {innerDiv}
        {nestedList}
      </div>
    );
  }
}
export default composeContextPure(ListItem);
