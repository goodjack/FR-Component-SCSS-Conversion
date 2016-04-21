import React from 'react';
import {
  Route,
  Redirect,
  IndexRoute,
} from 'react-router';

// Here we define all our material-ui ReactComponents.
import Master from './components/master';
import Home from './components/pages/home';

// Ariake UI
import Guidelines from './components/pages/get-started/Guidelines';
import Architecture from './components/pages/get-started/Architecture';
import Colors from './components/pages/customization/colors';
import Themes from './components/pages/customization/themes';
import LightTheme from './components/pages/customization/light-theme';
import DarkTheme from './components/pages/customization/dark-theme';
import Configuration from './components/pages/customization/configuration';
import SiteA from './components/pages/customization/site-a';
import SiteB from './components/pages/customization/site-b';
import InlineStyles from './components/pages/customization/inline-styles';

import Accordion from './components/pages/components/accordion';
import AnchorButton from './components/pages/components/anchor-button';
import Badge from './components/pages/components/badge';
import BreadCrumb from './components/pages/components/bread-crumb';
import Button from './components/pages/components/button';
import ButtonTile from './components/pages/components/button-tile';
import Carousel from './components/pages/components/carousel';
import CheckBox from './components/pages/components/checkbox';
import Filter from './components/pages/components/filter';
import Chip from './components/pages/components/chip';
import Collage from './components/pages/components/collage';
import RatingStar from './components/pages/components/rating-star';
import Coordinate from './components/pages/components/coordinate';
import Grid from './components/pages/components/Grid/Page';
import Heading from './components/pages/components/heading';
import Hero from './components/pages/components/hero';
import HeroMovie from './components/pages/components/hero-movie';
import IconButton from './components/pages/components/icon-button';
import Image from './components/pages/components/image';
import Label from './components/pages/components/label';
import List from './components/pages/components/list';
import Modal from './components/pages/components/modal';
import Picker from './components/pages/components/picker';
import ProductGrid from './components/pages/components/ProductGrid/Page';
import ProxyLink from './components/pages/components/proxy-link';
import RadioButtonGroup from './components/pages/components/radio-button-group';
import RollOverImage from './components/pages/components/roll-over-image';
import SearchBox from './components/pages/components/search-box';
import SectionAnchorBar from './components/pages/components/section-anchor-bar';
import SectionImage from './components/pages/components/section-image';
import SectionTitle from './components/pages/components/section-title';
import Swipable from './components/pages/components/swipable';
import SwipableNav from './components/pages/components/swipable-nav';
import Tabs from './components/pages/components/tabs';
import TabbedCarousel from './components/pages/components/tabbed-carousel';
import TapableGrid from './components/pages/components/TapableGrid/Page';
import Text from './components/pages/components/text';
import UpdatedText from './components/pages/components/updated-text';
import TextInput from './components/pages/components/text-input';
import UqLabel from './components/pages/components/uq-label';
import Youtube from './components/pages/components/youtube';
import FilmStrip from './components/pages/components/film-strip';

/**
 * Routes: https://github.com/rackt/react-router/blob/master/docs/api/components/Route.md
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */

const AppRoutes = (
  <Route path="/" component={Master}>
    <Route path="home" component={Home} />
    <Redirect from="get-started" to="/get-started/development-guidelines" />
    <Route path="get-started">
      <Route path="development-guidelines" component={Guidelines} />
      <Route path="component-architecture" component={Architecture} />
    </Route>

    <Redirect from="customization" to="/customization/themes" />
    <Route path="customization">
      <Route path="colors" component={Colors} />
      <Route path="themes" component={Themes} />
      <Route path="light-theme" component={LightTheme} />
      <Route path="dark-theme" component={DarkTheme} />
      <Route path="configuration" component={Configuration} />
      <Route path="site-a" component={SiteA} />
      <Route path="site-b" component={SiteB} />
      <Route path="inline-styles" component={InlineStyles} />
    </Route>

    <Redirect from="components" to="/components/text-input" />
    <Route path="components">
      <Route path="accordion" component={Accordion} />
      <Route path="anchor-button" component={AnchorButton} />
      <Route path="badge" component={Badge} />
      <Route path="bread-crumb" component={BreadCrumb} />
      <Route path="button" component={Button} />
      <Route path="button-tile" component={ButtonTile} />
      <Route path="carousel" component={Carousel} />
      <Route path="checkbox" component={CheckBox} />
      <Route path="collage" component={Collage} />
      <Route path="chip" component={Chip} />
      <Route path="coordinate" component={Coordinate} />
      <Route path="grid" component={Grid} />
      <Route path="heading" component={Heading} />
      <Route path="hero" component={Hero} />
      <Route path="hero-movie" component={HeroMovie} />
      <Route path="image" component={Image} />
      <Route path="icon-button" component={IconButton} />
      <Route path="label" component={Label} />
      <Route path="list" component={List} />
      <Route path="modal" component={Modal} />
      <Route path="picker" component={Picker} />
      <Route path="product-grid" component={ProductGrid} />
      <Route path="proxy-link" component={ProxyLink} />
      <Route path="rating-star" component={RatingStar} />
      <Route path="radio-button-group" component={RadioButtonGroup} />
      <Route path="roll-over-image" component={RollOverImage} />
      <Route path="search-box" component={SearchBox} />
      <Route path="section-anchor-bar" component={SectionAnchorBar} />
      <Route path="section-image" component={SectionImage} />
      <Route path="section-title" component={SectionTitle} />
      <Route path="Swipable" component={Swipable} />
      <Route path="Swipable-nav" component={SwipableNav} />
      <Route path="tabs" component={Tabs} />
      <Route path="tabbed-carousel" component={TabbedCarousel} />
      <Route path="tapable-grid" component={TapableGrid} />
      <Route path="text" component={Text} />
      <Route path="updated-text" component={UpdatedText} />
      <Route path="text-input" component={TextInput} />
      <Route path="uq-label" component={UqLabel} />
      <Route path="youtube" component={Youtube} />
      <Route path="film-strip" component={FilmStrip} />
      <Route path="filter" component={Filter} />
    </Route>

    <IndexRoute component={Home}/>
  </Route>

);

export default AppRoutes;
