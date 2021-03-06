import merge from 'lodash.merge';
import Colors from './colors';
import ColorManipulator from '../utils/colorManipulator';
import lightBaseTheme from './baseThemes/lightBaseTheme';
import zIndex from './zIndex';
import Typography from './typography';

/**
 * Get the MUI theme corresponding to a base theme.
 * It's possible to override the computed theme values
 * by providing a second argument. The calculated
 * theme will be deeply merged with the second argument.
 */
export default function getMuiTheme(baseTheme, muiTheme) {
  const newbaseTheme = merge({}, lightBaseTheme, baseTheme);
  const { palette, spacing, fontFamily } = newbaseTheme;
  return merge({
    isRtl: false,
    zIndex,
    newbaseTheme,
    rawTheme: newbaseTheme, // To provide backward compatibility.
    appBar: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      height: spacing.desktopKeylineIncrement,
    },
    avatar: {
      borderColor: 'rgba(0, 0, 0, 0.08)',
    },
    badge: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.accent1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.primary1Color,
      secondaryTextColor: palette.alternateTextColor,
      fontWeight: Typography.fontWeightMedium,
      fontFamily,
      backgroundColor: palette.primary6Color,
    },
    cardText: {
      textColor: palette.textColor,
    },
    checkbox: {
      boxColor: palette.textColor,
      checkedColor: palette.primary1Color,
      requiredColor: palette.primary1Color,
      disabledColor: palette.disabledColor,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
    },
    datePicker: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      calendarTextColor: palette.textColor,
      selectColor: palette.primary2Color,
      selectTextColor: palette.alternateTextColor,
    },
    dropDownMenu: {
      accentColor: palette.borderColor,
    },
    flatButton: {
      color: Colors.transparent,
      buttonFilterColor: '#999999',
      disabledTextColor: ColorManipulator.fade(palette.textColor, 0.3),
      textColor: palette.textColor,
      primaryTextColor: palette.accent1Color,
      secondaryTextColor: palette.primary1Color,
    },
    floatingActionButton: {
      buttonSize: 56,
      miniSize: 40,
      color: palette.accent1Color,
      iconColor: palette.alternateTextColor,
      secondaryColor: palette.primary1Color,
      secondaryIconColor: palette.alternateTextColor,
      disabledTextColor: palette.disabledColor,
    },
    inkBar: {
      backgroundColor: palette.accent1Color,
    },
    leftNav: {
      width: spacing.desktopKeylineIncrement * 4,
      color: palette.canvasColor,
    },
    listItem: {
      nestedLevelDepth: 18,
    },
    menu: {
      backgroundColor: palette.canvasColor,
      containerBackgroundColor: palette.canvasColor,
    },
    menuItem: {
      dataHeight: 32,
      height: 48,
      hoverColor: 'rgba(0, 0, 0, .035)',
      padding: spacing.desktopGutter,
      selectedTextColor: palette.accent1Color,
    },
    menuSubheader: {
      padding: spacing.desktopGutter,
      borderColor: palette.borderColor,
      textColor: palette.primary1Color,
    },
    paper: {
      backgroundColor: palette.canvasColor,
    },
    radioButton: {
      borderColor: palette.textColor,
      backgroundColor: palette.alternateTextColor,
      checkedColor: palette.primary1Color,
      requiredColor: palette.primary1Color,
      disabledColor: palette.disabledColor,
      size: 24,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
    },
    raisedButton: {
      color: palette.alternateTextColor,
      textColor: palette.textColor,
      primaryColor: palette.accent1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.primary1Color,
      secondaryTextColor: palette.alternateTextColor,
      disabledColor: ColorManipulator.darken(palette.alternateTextColor, 0.1),
      disabledTextColor: ColorManipulator.fade(palette.textColor, 0.3),
    },
    refreshIndicator: {
      strokeColor: palette.borderColor,
      loadingStrokeColor: palette.primary1Color,
    },
    slider: {
      trackSize: 2,
      trackColor: palette.primary3Color,
      trackColorSelected: palette.accent3Color,
      handleSize: 12,
      handleSizeDisabled: 8,
      handleSizeActive: 18,
      handleColorZero: palette.primary3Color,
      handleFillColor: palette.alternateTextColor,
      selectionColor: palette.primary1Color,
      rippleColor: palette.primary1Color,
    },
    snackbar: {
      textColor: palette.alternateTextColor,
      backgroundColor: palette.textColor,
      actionColor: palette.accent1Color,
    },
    table: {
      backgroundColor: palette.canvasColor,
    },
    tableHeader: {
      borderColor: palette.borderColor,
    },
    tableHeaderColumn: {
      textColor: palette.accent3Color,
      height: 56,
      spacing: 24,
    },
    tableFooter: {
      borderColor: palette.borderColor,
      textColor: palette.accent3Color,
    },
    tableRow: {
      hoverColor: palette.accent2Color,
      stripeColor: ColorManipulator.lighten(palette.primary1Color, 0.55),
      selectedColor: palette.borderColor,
      textColor: palette.textColor,
      borderColor: palette.borderColor,
      height: 48,
    },
    tableRowColumn: {
      height: 48,
      spacing: 24,
    },
    timePicker: {
      color: palette.alternateTextColor,
      textColor: palette.accent3Color,
      accentColor: palette.primary1Color,
      clockColor: palette.textColor,
      clockCircleColor: palette.clockCircleColor,
      headerColor: palette.pickerHeaderColor || palette.primary1Color,
      selectColor: palette.primary2Color,
      selectTextColor: palette.alternateTextColor,
    },
    toggle: {
      thumbOnColor: palette.primary1Color,
      thumbOffColor: palette.accent2Color,
      thumbDisabledColor: palette.borderColor,
      thumbRequiredColor: palette.primary1Color,
      trackOnColor: ColorManipulator.fade(palette.primary1Color, 0.5),
      trackOffColor: palette.primary3Color,
      trackDisabledColor: palette.primary3Color,
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
      trackRequiredColor: ColorManipulator.fade(palette.primary1Color, 0.5),
    },
    toolbar: {
      backgroundColor: ColorManipulator.darken(palette.accent2Color, 0.05),
      height: 56,
      titleFontSize: 20,
      iconColor: 'rgba(0, 0, 0, .40)',
      separatorColor: 'rgba(0, 0, 0, .175)',
      menuHoverColor: 'rgba(0, 0, 0, .10)',
    },
    tabs: {
      backgroundColor: palette.primary1Color,
      textColor: ColorManipulator.fade(palette.alternateTextColor, 0.6),
      selectedTextColor: palette.alternateTextColor,
    },
    textField: {
      textColor: palette.textColor,
      hintColor: palette.disabledColor,
      floatingLabelColor: palette.textColor,
      disabledTextColor: palette.disabledColor,
      errorColor: Colors.red500,
      focusColor: palette.primary1Color,
      backgroundColor: 'transparent',
      borderColor: palette.borderColor,
    },
    textInput: {
      textColor: palette.textColor,
      hintColor: palette.disabledColor,
      floatingLabelColor: palette.textColor,
      disabledTextColor: palette.disabledColor,
      errorColor: Colors.red500,
      focusColor: palette.primary1Color,
      backgroundColor: 'transparent',
      borderColor: palette.borderColor,
    },
    button: {
      textColor: palette.textColor,
      backgroundColor: palette.primary1Color,
      hoverColor: ColorManipulator.fade(palette.primary1Color, 0.8),
      padding: spacing.desktopGutter,
      disabledTextColor: ColorManipulator.fade(palette.textColor, 0.3),
      disabledColor: palette.disabledColor,
      height: 36,
      minWidth: 88,
      iconButtonSize: spacing.iconSize * 2,
    },
    buttonTile: {
      borderColor: palette.borderColor,
    },
    tileButton: {
      textColor: palette.alternateTextColor,
    },
    sectionTitle: {
      textColor: palette.textColor,
      borderColor: palette.borderColor,
      backgroundColor: palette.backgroundColor,
    },
    text: {
      textColor: palette.textColor,
    },
    heading: {
      textColor: palette.textColor,
    },
    hero: {
      borderColor: palette.borderColor,
      fontFamily,
    },
    sectionAnchorBar: {
      textColor: palette.textColor,
      alternateTextColor: palette.alternateTextColor,
      primary3Color: palette.primary3Color,
      accent3Color: palette.accent3Color,
      borderColor: palette.borderColor,
    },
    producTile: {
      borderColor: palette.borderColor,
      fontFamily,
      notesColor: palette.primary4Color,
      priceColor: palette.primary5Color,
      textColor: palette.textColor,
      testiomoniallinkColor: palette.linkColor,
    },
    imageTile: {
      borderColor: palette.borderColor,
    },
    colorPicker: {
      borderColor: palette.primary4Color,
      backgroundColor: palette.canvasColor,
      linkColor: palette.primary3Color,
    },
    colorStrip: {
      borderColor: palette.primary5Color,
      outlineColor: palette.canvasColor,
    },
    chip: {
      borderColor: Colors.red500,
      borderBlackColor: palette.borderColor,
      textColor: palette.textColor,
      whiteTextColor: Colors.white,
    },
    uqLabel: {
      discountTextColor: palette.primary9Color,
      discountBackgroundColor: palette.primary6Color,
      promoTextColor: palette.primary9Color,
      promoBackgroundColor: palette.primary6Color,
      lowStockTextColor: palette.primary9Color,
      lowStockBackgroundColor: palette.primary7Color,
      newTextColor: palette.primary9Color,
      newBackgroundColor: palette.primary8Color,
      multiBuyTextColor: palette.primary9Color,
      multiBuyBackgroundColor: palette.primary8Color,
      limitedTextColor: palette.primary9Color,
      limitedBackgroundColor: palette.primary8Color,
      fontFamily,
    },
    breadCrumbs: {
      seperatorColor: palette.textColor,
    },
    breadCrumb: {
      textColor: palette.textColor,
      hoverColor: palette.primary1Color,
    },
    ratingStar: {
      fullStarColor: Colors.red500,
      halfStarColor: Colors.red300,
      emptyStarColor: Colors.white,
      strokeColor: Colors.black,
    },
    coordinate: {
      textColor: palette.textColor,
    },
  }, muiTheme);
}

export function getCompTheme(baseTheme, compTheme) {
  const newbaseTheme = merge({}, lightBaseTheme, baseTheme);
  const { palette, spacing, fontFamily } = newbaseTheme;
  const ptTextColor = palette.textColor;
  return merge({
    isRtl: false,
    zIndex,
    newbaseTheme,
    rawTheme: newbaseTheme, // To provide backward compatibility.
    appBar: {
      color: palette.primary1Color,
      textColor: palette.alternateTextColor,
      height: spacing.desktopKeylineIncrement,
      fontFamily,
    },
    grid: {
      verticalSpacing: 10,
      horizontalSpacing: 10,
      cellHeight: 20,
    },
    heading: {
      textColor: palette.textColor,
    },
    badge: {
      color: palette.alternateTextColor,
      textColor: ptTextColor,
      primaryColor: palette.accent1Color,
      primaryTextColor: palette.alternateTextColor,
      secondaryColor: palette.primary1Color,
      secondaryTextColor: palette.alternateTextColor,
      fontWeight: Typography.fontWeightMedium,
      fontFamily,
      backgroundColor: palette.primary6Color,
    },
    imageTile: {
      borderColor: palette.borderColor,
    },
    uqLabel: {
      discountTextColor: palette.primary9Color,
      discountBackgroundColor: palette.primary6Color,
      promoTextColor: palette.primary9Color,
      promoBackgroundColor: palette.primary6Color,
      lowStockTextColor: palette.primary9Color,
      lowStockBackgroundColor: palette.primary7Color,
      newTextColor: palette.primary9Color,
      newBackgroundColor: palette.primary8Color,
      multiBuyTextColor: palette.primary9Color,
      multiBuyBackgroundColor: palette.primary8Color,
      limitedTextColor: palette.primary9Color,
      limitedBackgroundColor: palette.primary8Color,
      fontSize: '.625rem',
      fontFamily,
    },
    modal: {
      bodyBackground: palette.primary9Color,
      contentBackground: ColorManipulator.fade(palette.primary9Color, 0),
      headerBackground: ColorManipulator.fade(palette.primary9Color, 0),
      overlayBackground: ColorManipulator.fade(palette.primary9Color, 0.75),
      closeButtonBackground: ColorManipulator.fade(palette.primary9Color, 0),
      closeButtonTextStyle: palette.primary6Color,
    },
    hero: {
      borderColor: palette.borderColor,
      fontFamily,
      textColor: ptTextColor,
      subtitleTextColor: ptTextColor,
      titleTextColor: ptTextColor,
      imageBackgroundColor: palette.primary3Color,
      textareaBackgroundColor: palette.primary9Color,
    },
    button: {
      textColor: palette.textColor,
      backgroundColor: palette.primary1Color,
      hoverColor: ColorManipulator.fade(palette.primary1Color, 0.8),
      padding: spacing.desktopGutter,
      disabledTextColor: ColorManipulator.fade(palette.textColor, 0.3),
      disabledColor: palette.disabledColor,
      height: 36,
      minWidth: 88,
      iconButtonSize: spacing.iconSize * 2,
    },
    buttonTile: {
      borderColor: palette.borderColor,
    },
    text: {
      textColor: palette.textColor,
    },
    sectionAnchorBar: {
      textColor: palette.textColor,
      alternateTextColor: palette.alternateTextColor,
      primary3Color: palette.primary3Color,
      accent3Color: palette.accent3Color,
      borderColor: palette.borderColor,
    },
    ratingStar: {
      fullStarColor: Colors.red500,
      halfStarColor: Colors.red300,
      emptyStarColor: Colors.white,
      strokeColor: Colors.black,
    },
    chip: {
      borderColor: Colors.red500,
      borderBlackColor: palette.borderColor,
      textColor: palette.textColor,
      whiteTextColor: Colors.white,
    },
    coordinate: {
      textColor: palette.textColor,
    },
    heroMovie: {
      borderColor: palette.borderColor,
      fontFamily,
      iconHoverColor: ColorManipulator.fade(palette.primary6Color, 0.6),
      iconTextColor: palette.primary9Color,
      iconBackground: ColorManipulator.fade(palette.primary9Color, 0.6),
    },
    checkBox: {
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
    },
    radioButton: {
      labelColor: palette.textColor,
      labelDisabledColor: palette.disabledColor,
    },
    breadCrumbs: {
      seperatorColor: palette.textColor,
    },
    breadCrumb: {
      textColor: palette.textColor,
      hoverColor: palette.primary1Color,
    },
    listItem: {
      labelColor: palette.textColor,
      labelHoverColor: palette.textColor,
      itemBackgroundColor: palette.primary9Color,
      itemHoverBackgroundColor: ColorManipulator.fade(palette.textColor, 0.2),
      iconColor: palette.textColor,
      iconFill: palette.textColor,
    },
    colorPicker: {
      borderColor: palette.primary4Color,
      backgroundColor: palette.canvasColor,
      linkColor: palette.primary3Color,
    },
    productCard: {
      borderColor: palette.borderColor,
      fontFamily,
      notesColor: palette.primary4Color,
      priceColor: palette.primary5Color,
      offerBackGroundColor: palette.primary5Color,
      textColor: palette.textColor,
      testiomoniallinkColor: palette.linkColor,
      offerTextColor: Colors.white,
      ratingColor: Colors.yellow900,
    },
    textInput: {
      textColor: palette.textColor,
      hintColor: palette.disabledColor,
      floatingLabelColor: palette.textColor,
      disabledTextColor: palette.disabledColor,
      errorColor: Colors.red500,
      focusColor: palette.primary1Color,
      backgroundColor: 'transparent',
    },
    swipeableNavItem: {
      txtColor: palette.textColor,
      activeColor: ColorManipulator.fade(palette.textColor, 0.5),
      margin: '0 0 0 10px',
    },
    accordion: {
      borderColor: palette.borderColor,
      backgroundColor: palette.primary3Color,
    },
    searchBox: {
      borderColor: palette.borderColor,
    },
    proxyLink: {
      textColor: ptTextColor,
    },
    filter: {
      gridBackgroundColor: Colors.white,
      textColor: '#7D7D7D',
      clickTextColor: '#28788C',
      borderColor: Colors.grey300,
      backgroundColor: Colors.grey300,
    },
    imagePlusText: {
      textColor: palette.textColor,
      borderColor: palette.borderColor,
      textMargin: 10,
      linkMargin: '10px 0 10px 0',
      textPaddingLeft: '3%',
      textPaddingRight: '3%',
    },
    instagram: {
      captionTextColor: ptTextColor,
    },
    social: {
      titleColor: palette.textColor,
      contentColor: palette.textColor,
      linkColor: ColorManipulator._convertHexToRGB(palette.primary3Color),
      margin: '10px',
    },
    iconHead: {
      textSize: '14px',
      textColor: palette.textColor,
      imageWidth: '25px',
      imageHeight: 'auto',
    },
    thisOrThat: {
      backgroundColor: palette.primary9Color,
      borderColor: palette.borderColor,
      overlaySize: '50px',
    },
    overlay: {
      borderColor: Colors.white,
      backgroundColor: Colors.black,
      transparent: 'transparent',
    },
  }, compTheme);
}
