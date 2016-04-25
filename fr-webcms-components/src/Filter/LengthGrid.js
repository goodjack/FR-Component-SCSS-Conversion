import React, { Component, PropTypes } from 'react';
import Text from '../Text';
import Grid from '../core/Grid';
import GridCell from '../core/GridCell';
import composeContextPure from '../helpers/composedComponents/contextPure';
import ThemeManager from '../helpers/styles/themeManager';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';

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
    gridText: {
      position: 'absolute',
      top: '31%',
      left: '30%',
      fontSize: 34,
      color: filterTheme.textColor,
    },
    gridTextClick: {
      position: 'absolute',
      top: '31%',
      left: '30%',
      fontSize: 34,
      color: filterTheme.clickTextColor,
      textDecoration: 'underline',
    },
    gridStyle: {
      backgroundColor: filterTheme.gridBackgroundColor,
      borderColor: filterTheme.borderColor,
      borderWidth: 1,
      borderStyle: 'solid',
      borderCollapse: 'collapse',
    },
  };
  return {
    styles,
  };
};

class LengthGrid extends Component {

  static propTypes = {
    lengthData: string,
    setLengthState: func,
    passIndex: array,
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
      gridStyle,
      gridCellStyle,
      gridText,
      gridTextClick,
      gridCellClick,
    } = prepareStyle(this).styles;

    this.cachedStyle = {
      gridStyle,
      gridCellStyle,
      gridText,
      gridTextClick,
      gridCellClick,
    };

  };

  getSizeGridCells = () => {

    const {
      gridCellStyle,
      gridText,
      gridTextClick,
      gridCellClick,
    } = this.cachedStyle;

    let clickText = gridText;
    let clickGrid = gridCellStyle;
    const dataIterate = this.props.lengthData.split(',');
    const { gridIndex } = this.state;

    const gridItem = dataIterate.map((data, index) => {

      const bindCall = this.getGridIndex.bind(this, index);
      clickText = gridText;
      clickGrid = gridCellStyle;

      if (gridIndex[index]) {
        clickText = gridTextClick;
        clickGrid = gridCellClick;
      }

      return (
      <GridCell
        onClick= {bindCall}
        key = {index}
        style = {clickGrid}
      >
       <Text style = {clickText} content = {data}/>
     </GridCell>
  );
    });

    return gridItem;
  };

 getGridIndex(index) {
   const gridState = this.state.gridIndex;

   if (gridState[index]) {
     gridState[index] = false;
   } else {
     gridState[index] = true;
   }

   this.setState(gridState);
   this.props.setLengthState(gridState, 'Length');
 }

  render() {
    const {
      gridStyle,
  } = this.cachedStyle;

    return (
            <Grid cellPadding = {0} style = {gridStyle} maxCols= {3}>
              {this.getSizeGridCells()}
            </Grid>
    );
  }
}
export default composeContextPure(LengthGrid);
