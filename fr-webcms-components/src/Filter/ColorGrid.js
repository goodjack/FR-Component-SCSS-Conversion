import React, { Component, PropTypes } from 'react';
import Text from '../Text';
import Image from '../core/Image';
import Grid from '../core/Grid';
import GridCell from '../core/GridCell';
import composeContextPure from '../helpers/composedComponents/contextPure';
import ThemeManager from '../helpers/styles/themeManager';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import { mergeStyles } from '../helpers/utils/stylePropable';

const { array, func, string } = PropTypes;

const prepareStyle = ({ context }) => {
  const CompTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const filterTheme = CompTheme && CompTheme.filter || {};
  const styles = {

    gridCellStyle: {
      padding: '50%',
      position: 'relative',
      width: 'auto',
      display: 'block',
      borderColor: filterTheme.borderColor,
      borderWidth: '1',
      borderStyle: 'solid',
    },
    gridCellClick: {
      padding: '50%',
      position: 'relative',
      width: 'auto',
      display: 'block',
      backgroundColor: filterTheme.backgroundColor,
      borderColor: filterTheme.borderColor,
      borderWidth: '1',
      borderStyle: 'solid',
    },
    gridStyle: {
      backgroundColor: filterTheme.gridBackgroundColor,
      borderColor: filterTheme.borderColor,
      borderWidth: '1',
      borderStyle: 'solid',
      borderCollapse: 'collapse',
    },
    colorText: {
      display: 'none',
    },
    colorTextClick: {
      position: 'absolute',
      top: '31%',
      left: '36%',
      fontSize: '75%',
      color: filterTheme.gridBackgroundColor,
      fontWeight: 'bold',
      textDecoration: 'underline',
    },
    waterMarkStyle: {
      position: 'absolute',
      width: '100%',
      top: '0',
      left: '0',
    },
  };

  return {
    styles,
  };
};

class ColorGrid extends Component {

  static propTypes = {
    colorData: string,
    setColorState: func,
    passIndex: array,
    waterMarkImage: string,
  };

  state = {
    gridIndex: [],
  };

  componentWillMount = () => {
    const { passIndex } = this.props;
    if (passIndex) {
      this.setState({ gridIndex: passIndex });
    }

    const {
      gridCellStyle,
      gridCellClick,
      colorText,
      colorTextClick,
      waterMarkStyle,
      gridStyle,
    } = prepareStyle(this).styles;

    this.cachedStyle = {
      gridStyle,
      gridCellStyle,
      colorText,
      colorTextClick,
      gridCellClick,
      waterMarkStyle,
    };

  };

  getColorGridCells = () => {

    const colorArray = new Array(12).fill(undefined).map((val, id) => id);

    const {
      gridCellStyle,
      colorText,
      colorTextClick,
      gridCellClick,
      waterMarkStyle,
    } = this.cachedStyle;

    let gridInput = null;
    let clickText = colorText;
    let clickGrid = gridCellStyle;
    const{ colorData, waterMarkImage } = this.props;
    const dataIterate = colorData.split(',');
    const gridItem = colorArray.map((index) => {
      if (index < dataIterate.length) {

        const data = dataIterate[index];
        const bindCall = this.getGridState.bind(this, index);
        clickText = colorText;
        let gridStyle = gridCellStyle;

        if (this.state.gridIndex[index]) {
          clickText = colorTextClick;
          gridStyle = gridCellClick;
        }

        clickGrid = mergeStyles.apply(this, [gridStyle, { backgroundColor: data }]);
        gridInput = (
          <GridCell
            onClick= {bindCall}
            key = {index}
            style = {clickGrid}
          >
         <Text style = {clickText} content = {data}/>
       </GridCell>);
      } else {
        gridInput = (
        <GridCell
          key = {index}
          style = {gridCellStyle}
        >
      <Image style = {waterMarkStyle} source = {waterMarkImage}/>
   </GridCell>);
      }

      return gridInput;
    });

    return gridItem;
  };

  getGridState(index) {
    const stateGrid = this.state.gridIndex;

    if (stateGrid[index]) {
      stateGrid[index] = false;
    } else {
      stateGrid[index] = true;
    }

    this.setState(stateGrid);
    this.props.setColorState(stateGrid, 'Color');
  }

  render() {
    const {
      gridStyle,
  } = this.cachedStyle;

    return (

            <Grid cellPadding = {0} style = {gridStyle} maxCols= {3}>
               {this.getColorGridCells()}
            </Grid>

    );
  }
}
export default composeContextPure(ColorGrid);
