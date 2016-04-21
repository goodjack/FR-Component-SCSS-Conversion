import Colors from '../colors';
import ColorManipulator from '../../utils/colorManipulator';
import Spacing from '../spacing';

/*
 *  Default Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

export default {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.cyan500,
    primary2Color: Colors.cyan700,
    primary3Color: Colors.grey300,
    primary4Color: Colors.grey600,
    primary5Color: Colors.redA700,
    primary6Color: Colors.redA500,
    primary7Color: Colors.grey700,
    primary8Color: Colors.black,
    primary9Color: Colors.white,
    accent1Color: Colors.pinkA200,
    accent2Color: Colors.grey100,
    accent3Color: Colors.redA700,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey400,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.cyan500,
    clockCircleColor: ColorManipulator.fade(Colors.darkBlack, 0.07),
  },
};
