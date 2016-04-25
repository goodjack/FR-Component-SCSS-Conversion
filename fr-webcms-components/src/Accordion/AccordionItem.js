import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import Icon from '../core/Icon';

const { object, array, bool, func, number, string, oneOfType } = PropTypes;

const prepareStyle = (context) => {
  const CompTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const themeAccordion = CompTheme && CompTheme.accordion || {};

  const styles = {
    container: {
      width: '100%',
      border: '1px solid',
      borderColor: themeAccordion.borderColor,
      marginBottom: 5,
      borderRadius: 4,
    },
    headingStyleExpend: {
      borderBottom: '1px solid',
      borderBottomColor: themeAccordion.borderColor,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
      cursor: 'pointer',
      backgroundColor: themeAccordion.backgroundColor,
    },
    headingStyleCollapse: {
      cursor: 'pointer',
    },
    headingStyle: {
      padding: 5,
      position: 'relative',
      display: 'block',
      height: 38,
      lineHeight: '38px',
    },
    contentStyle: {
      padding: 10,
    },
    expand: {
      opacity: 1,
      transition: 'opacity 1s',
      height: 'auto',
    },
    collapse: {
      padding: 0,
      opacity: 0,
      transition: 'opacity 1s',
      height: 0,
    },
    headingTextStyle: {
      display: 'inline-block',
    },
    iconButtonStyle: {
      display: 'inline-block',
      position: 'absolute',
      top: 12,
      right: 20,
    },
  };

  return { styles };
};

class AccordionItem extends Component {

  static propTypes = {
    accordionCallback: func,
    children: oneOfType([array, object]),
    contentStyle: object,
    headingStyle: object,
    headingTextStyle: object,
    hideIcon: string,
    hideIconStyle: object,
    iconButtonStyle: object,
    expandMultipleTabs: bool,
    itemReferenceId: number,
    showIcon: string,
    showIconStyle: object,
    expandTab: bool,
    /**
     * Override the inline-styles of the root element.
     */
    tileStyle: object,
  };

  state = {
    multipleExpandTab: null,
  };

  componentWillMount() {
    this.setState({ multipleExpandTab: this.props.expandTab });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.expandTab !== this.state.expandTab) {
      this.setState({ multipleExpandTab: nextProps.expandTab });
    }
  }

  expandCollapse = (event) => {
    const {
      expandMultipleTabs,
      accordionCallback,
      itemReferenceId,
    } = this.props;

    if (expandMultipleTabs) {
      this.setState({ multipleExpandTab: this.state.multipleExpandTab ? false : true });
    } else {
      accordionCallback(itemReferenceId, event);
    }
  };

  render() {
    const {
      itemReferenceId,
      tileStyle,
      headingStyle,
      contentStyle,
      iconButtonStyle,
      headingTextStyle,
      showIcon,
      hideIcon,
      children,
      showIconStyle,
      hideIconStyle,
    } = this.props;

    const {
      styles,
    } = prepareStyle(this);

    const multipleExpandTab = this.state.multipleExpandTab;
    const headingContainerStyle = multipleExpandTab ?
      styles.headingStyleExpend : styles.headingStyleCollapse;
    const toggle = multipleExpandTab ? styles.expand : styles.collapse;
    const accordionIcon = multipleExpandTab ?
    (<Icon name={showIcon} style={showIconStyle}/>) :
    (<Icon name={hideIcon} style={hideIconStyle} />);

    let heading = null;
    const content = React.Children.map(children, (child) => {
      if (child.type.displayName === 'Heading') {
        heading = child;
      } else {
        return child;
      }
    });

    const tileMergeStyle = mergeStyles.apply(this, [styles.container, tileStyle]);
    const headingMergeStyle = mergeStyles.apply(this,
      [styles.headingStyle, headingContainerStyle, headingStyle]);
    const headingTextMergeStyle = mergeStyles.apply(this,
      [styles.headingTextStyle, headingTextStyle]);
    const iconButtonMergeStyle = mergeStyles.apply(this, [styles.iconButtonStyle, iconButtonStyle]);
    const contentMergeStyle = mergeStyles.apply(this, [styles.contentStyle, toggle, contentStyle]);

    return (
      <div
        id={itemReferenceId}
        style={tileMergeStyle}
      >
        <div
          onClick={this.expandCollapse}
          style={headingMergeStyle}
        >
          <div style={headingTextMergeStyle}>
            {heading}
          </div>
          <div style={iconButtonMergeStyle}>
            {accordionIcon}
          </div>
        </div>
        <div style={contentMergeStyle}>
          {content}
        </div>
      </div>
    );
  }
}

export default composeContextPure(AccordionItem);
