import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Divider from 'material-ui/lib/divider';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
import {
  Colors,
  Spacing,
  Typography,
} from 'material-ui/lib/styles';
import {StylePropable} from 'material-ui/lib/mixins';

const SelectableList = SelectableContainerEnhance(List);

const AppLeftNav = React.createClass({

  propTypes: {
    docked: React.PropTypes.bool.isRequired,
    history: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired,
    onRequestChangeLeftNav: React.PropTypes.func.isRequired,
    onRequestChangeList: React.PropTypes.func.isRequired,
    open: React.PropTypes.bool.isRequired,
    style: React.PropTypes.object,
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func,
  },

  mixins: [
    StylePropable,
  ],

  handleRequestChangeLink(event, value) {
    window.location = value;
  },

  handleTouchTapHeader() {
    this.props.history.push('/');
    this.setState({
      leftNavOpen: false,
    });
  },

  getStyles() {
    return {
      logo: {
        cursor: 'pointer',
        fontSize: 24,
        color: Typography.textFullWhite,
        lineHeight: Spacing.desktopKeylineIncrement + 'px',
        fontWeight: Typography.fontWeightLight,
        backgroundColor: Colors.cyan500,
        paddingLeft: Spacing.desktopGutter,
        marginBottom: 8,
      },
    };
  },

  render() {
    const {
      location,
      docked,
      onRequestChangeLeftNav,
      onRequestChangeList,
      open,
      style,
    } = this.props;

    const styles = this.getStyles();

    return (
      <LeftNav
        style={style}
        docked={docked}
        open={open}
        onRequestChange={onRequestChangeLeftNav}
      >
        <div
          style={this.prepareStyles(styles.logo)}
          onTouchTap={this.handleTouchTapHeader}
        >
          Uniqlo UI
        </div>
        <SelectableList
          valueLink={{
            value: location.pathname,
            requestChange: onRequestChangeList,
          }}
        >
          <ListItem
            primaryText="Get Started"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value="/get-started/development-guidelines"
                primaryText="Component Guidelines"
              />,
              <ListItem
                value="/get-started/component-architecture"
                primaryText="Component Architecture"
              />,
            ]}
          />
          <ListItem
            primaryText="Customization"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value="/customization/themes"
                primaryText="Themes"
                nestedItems={[
                  <ListItem
                    value="/customization/light-theme"
                    primaryText="Light Theme"
                  />,
                  <ListItem
                    value="/customization/dark-theme"
                    primaryText="Dark Theme"
                  />,
                ]}
              />,

              <ListItem
                value="/customization/configuration"
                primaryText="Configuration"
                nestedItems={[
                  <ListItem
                    value="/customization/site-a"
                    primaryText="Site A"
                  />,
                  <ListItem
                    value="/customization/site-b"
                    primaryText="Site B"
                  />,
                ]}
              />,
              <ListItem
                value="/customization/inline-styles"
                primaryText="Inline Styles"
              />,
              <ListItem
                value="/customization/colors"
                primaryText="Colors"
              />,
            ]}
          />
          <ListItem
            primaryText="Components"
            primaryTogglesNestedList={true}
            nestedItems={[
              <ListItem
                value="/components/accordion"
                primaryText="Accordion"
              />,
              <ListItem
                value="/components/anchor-button"
                primaryText="AnchorButton"
              />,
              <ListItem

                value="/components/badge"
                primaryText="Badge"
              />,
              <ListItem
                value="/components/bread-crumb"
                primaryText="BreadCrumb"
              />,
              <ListItem
                value="/components/button"
                primaryText="Button"
              />,
              <ListItem
                value="/components/button-tile"
                primaryText="ButtonTile"
              />,
              <ListItem
                value="/components/carousel"
                primaryText="Carousel"
              />,
              <ListItem
                value="/components/checkbox"
                primaryText="CheckBox"
              />,
              <ListItem
                value="/components/chip"
                primaryText="Chip"
              />,
              <ListItem
                value="/components/collage"
                primaryText="Collage"
              />,
              <ListItem
                value="/components/coordinate"
                primaryText="Coordinate"
              />,
              <ListItem
                value="/components/film-strip"
                primaryText="FilmStrip"
              />,
              <ListItem
                value="/components/filter"
                primaryText="Filter"
              />,
              <ListItem
                value="/components/grid"
                primaryText="Grid"
              />,
              <ListItem
                value="/components/heading"
                primaryText="Heading"
              />,
              <ListItem
                value="/components/hero"
                primaryText="Hero"
              />,
              <ListItem
                value="/components/hero-movie"
                primaryText="HeroMovie"
              />,
              <ListItem
                value="/components/icon-button"
                primaryText="IconButton"
              />,
              <ListItem
                value="/components/product-grid"
                primaryText="ProductGrid"
              />,
              <ListItem
                value="/components/proxy-link"
                primaryText="ProxyLink"
              />,
              <ListItem
                value="/components/image"
                primaryText="Image"
              />,
              <ListItem
                value="/components/label"
                primaryText="Label"
              />,
              <ListItem
                value="/components/list"
                primaryText="List"
              />,
              <ListItem
                value="/components/modal"
                primaryText="Modal"
              />,
              <ListItem
                value="/components/picker"
                primaryText="Picker"
              />,
              <ListItem
                value="/components/radio-button-group"
                primaryText="RadioButtonGroup"
              />,
              <ListItem
                value="/components/rating-star"
                primaryText="Rating"
              />,
              <ListItem
                value="/components/roll-over-image"
                primaryText="RollOverImage"
              />,
              <ListItem
                value="/components/search-box"
                primaryText="SearchBox"
              />,
              <ListItem
                value="/components/section-image"
                primaryText="SectionImage"
              />,
              <ListItem
                value="/components/section-title"
                primaryText="SectionTitle"
              />,
              <ListItem
                value="/components/Swipable"
                primaryText="Swipable"
              />,
              <ListItem
                value="/components/Swipable-nav"
                primaryText="SwipableNav"
              />,
              <ListItem
                value="/components/tabs"
                primaryText="Tabs"
              />,
              <ListItem
                value="/components/tabbed-carousel"
                primaryText="TabbedCarousel"
              />,
              <ListItem
                value="/components/tapable-grid"
                primaryText="TapableGrid"
              />,
              <ListItem
                value="/components/text"
                primaryText="Text"
              />,
              <ListItem
                value="/components/updated-text"
                primaryText="UpdatedText"
              />,
              <ListItem
                value="/components/text-input"
                primaryText="TextInput"
              />,
              <ListItem
                value="/components/uq-label"
                primaryText="UqLabel"
              />,
              <ListItem
                value="/components/youtube"
                primaryText="Youtube"
              />,
            ]}
          />
        </SelectableList>
        <Divider />
        <SelectableList
          subheader="Resources"
          valueLink={{
            value: '',
            requestChange: this.handleRequestChangeLink,
          }}
        >
          <ListItem
            value="https://github.com/fastretailing/fr-webcms-components"
            primaryText="GitHub"
          />
          <ListItem
            value="http://facebook.github.io/react"
            primaryText="React"
          />
        </SelectableList>
      </LeftNav>
    );
  },
});

export default AppLeftNav;
