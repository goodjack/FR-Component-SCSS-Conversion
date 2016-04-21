import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import composeContextPure from '../helpers/composedComponents/contextPure';
import Text from '../Text';
import CloseIcon from '../SvgIcons/action/CloseIcon';

const noop = () => null;

const { string, object, func, bool, number } = PropTypes;
const prepareStyle = ({ context, props, state }) => {
  const compTheme = context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const chipTheme = compTheme && compTheme.chip || {};
  const styles = {
    listItem: {
      float: 'left',
      width: '34',
      height: '34',
      borderStyle: 'solid',
      borderWidth: '1',
      boxSizing: 'border-box',
      paddingTop: '5',
      paddingLeft: '5',
      paddingRight: '5',
      outlineStyle: 'solid',
      outlineWidth: '0',
      outlineColor: chipTheme.borderColor,
      marginRight: '8',
      marginBottom: '8',
      borderColor: state.hovered ? chipTheme.borderColor :
      compTheme && chipTheme.borderBlackColor,
      cursor: 'pointer',
      textAlign: 'center',
      position: 'relative',
    },
    borderRed: {
      outlineStyle: 'solid',
      outlineWidth: '2',
      outlineColor: chipTheme.borderColor,
      borderWidth: '0',
      paddingLeft: '6',
      paddingRight: '6',
      paddingTop: '6',
    },
    toolText: {
      display: state.toolTipDisplay ? 'block' : 'none',
      position: 'absolute',
      top: state.toolTipTop,
      left: state.toolTipLeft,
      backgroundColor: chipTheme.textColor,
      color: compTheme && chipTheme.whiteTextColor,
      padding: '2',
      zIndex: '200',
    },
    chipText: {
      fontWeight: 'bolder',
      color: (props.enable) ? chipTheme.textColor :
       chipTheme.borderBlackColor,
    },
    colorStyle: {
      width: '100%',
      height: '80%',
      overflow: 'hidden',
    },
    imageStyle: {
      width: '68',
      height: '68',
    },
    icon: {
      fill: chipTheme.borderBlackColor,
      position: 'absolute',
      top: '0',
      left: '0',
      height: '34',
      width: '34',
      display: (props.enable) ? 'inline' : 'none',
    },
  };
  const iconStyle = styles.icon;
  const listhoverStyle =
  mergeStyles.apply(this,
    [styles.listItem, styles.borderRed, props.chipHoverStyle, props.chipStyle]);
  const listStyle = mergeStyles.apply(this, [styles.listItem, props.chipStyle]);
  const toolTextStyle = mergeStyles.apply(this, [styles.toolText, props.toolTipStyle]);
  const childStyle = mergeStyles.apply(this, [styles.colorStyle, props.chipChildStyle]);
  return { listhoverStyle, iconStyle, listStyle, toolTextStyle, childStyle };
};

class ChipChild extends Component {

  static propTypes ={
    children: object.isRequired,
    chipChildStyle: object,
    chipHoverStyle: object,
    chipStyle: object,
    chipToolStyle: object,
    clickCallBack: func,
    clicked: bool,
    enable: bool,
    headingContent: string,
    hoverCallBack: func,
    hoverOutCallBack: func,
    onMouseClick: func,
    onMouseEnter: func,
    onMouseLeave: func,
    onTouchTap: func,
    refId: number,
    toolTipData: string,
    toolTipStyle: object,
  };

  static contextTypes = {
    compTheme: object,
  };

  static defaultProps = {
    onMouseClick: noop,
    onMouseEnter: noop,
    onMouseLeave: noop,
  };

  state = {
    hovered: false,
    toolTipTop: '',
    toolTipLeft: '',
    toolTipDisplay: false,
    clicked: false,
  };

  handleClick = (event) => {
    const { props } = this;
    props.clickCallBack(props.refId, event);
    props.onMouseClick(event);
  };

  hoverColorchange = (event) => {
    const { props } = this;
    let toolTop = null;
    let toolLeft = null;
    if (event) {
      const spec = event.target.getBoundingClientRect();
      toolTop = Math.abs(event.clientY - spec.top);
      toolLeft = Math.abs(event.clientX - spec.left);
    }

    this.setState({
      toolTipTop: toolTop,
      toolTipLeft: toolLeft,
      toolTipDisplay: true,
      hovered: true,
    });
    props.hoverCallBack(props.headingContent, event);
    props.onMouseEnter(event);
  };

  handleMouseOut = (event) => {
    const { props } = this;
    this.setState({ hovered: false, toolTipDisplay: false });
    props.hoverOutCallBack(event);
    props.onMouseLeave(event);
  };

  render() {
    const {
      enable,
      chipHoverStyle,
      clicked,
      chipStyle,
      chipChildStyle,
      chipToolStyle,
      toolTipStyle,
      children,
      toolTipData,
      ...other,
    } = this.props;

    const {
    listStyle,
    listhoverStyle,
    toolTextStyle,
    iconStyle,
    childStyle,
  } = prepareStyle(this);

    let stylesList = listStyle;

    if (this.state.hovered || clicked) {
      stylesList = listhoverStyle;
    }

    return (
      <li
        style={stylesList}
        onMouseEnter={this.hoverColorchange}
        onMouseLeave={this.handleMouseOut} onClick={this.handleClick}
      >
        <CloseIcon style={iconStyle}/>
        <div style ={childStyle}>{children}</div>
        <Text style={toolTextStyle}>{toolTipData}</Text>
      </li>
    );
  }

}

export default composeContextPure(ChipChild);
