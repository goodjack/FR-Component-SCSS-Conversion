import React, { Component, PropTypes } from 'react';
import Text from '../Text';
import Image from '../core/Image';
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
      width: '100%',
      display: 'block',
      float: 'left',
    },
    gridCellClick: {
      width: '100%',
      display: 'block',
      float: 'left',
    },
    gridText: {
      display: 'block',
      fontSize: 12,
      color: filterTheme.textColor,
      width: '72%',
      marginLeft: 2,
      float: 'left',
    },
    gridTextClick: {
      display: 'block',
      fontSize: 12,
      color: filterTheme.clickTextColor,
      width: '72%',
      marginLeft: 2,
      float: 'left',
    },
    gridStyle: {
      backgroundColor: filterTheme.gridBackgroundColor,
    },
    imageShow: {
      float: 'left',
      width: '20%',
    },
  };
  return {
    styles,
  };
};

class FeatureGrid extends Component {

  static propTypes = {
    featureData: string,
    setSizeState: func,
    passIndex: array,
    plusSign: string,
    tickSign: string,
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
      gridText,
      gridTextClick,
      gridCellClick,
      imageShow,
      gridStyle,
    } = prepareStyle(this).styles;

    this.cachedStyle = {
      gridCellStyle,
      gridText,
      gridTextClick,
      gridCellClick,
      gridStyle,
      imageShow,
    };

  };

  getSizeGridCells = () => {

    const {
      gridCellStyle,
      gridText,
      gridTextClick,
      gridCellClick,
      imageShow,
    } = this.cachedStyle;

    let clickText = gridText;
    let clickGrid = gridCellStyle;
    const { featureData, plusSign, tickSign } = this.props;
    let src = plusSign;
    const dataIterate = featureData.split(',');
    const gridItem = dataIterate.map((data, index) => {
      const bindCall = this.getClickIndex.bind(this, index);
      clickText = gridText;
      clickGrid = gridCellStyle;
      src = plusSign;

      if (this.state.gridIndex[index]) {
        clickText = gridTextClick;
        clickGrid = gridCellClick;
        src = tickSign;
      }

      return (
      <GridCell
        onClick= {bindCall}
        key = {index}
        style = {clickGrid}
      >
       <Image style = {imageShow} source = {src}/>
       <Text style = {clickText} content = {data}/>
     </GridCell>
  );
    });

    return gridItem;
  };

 getClickIndex(index) {
   const gridState = this.state.gridIndex;

   if (gridState[index]) {
     gridState[index] = false;
   } else {
     gridState[index] = true;
   }

   this.setState(gridState);
   this.props.setSizeState(gridState, 'Feature');
 }

  render() {
    const { gridStyle } = this.cachedStyle;
    return (
      <Grid cellPadding = {0} style = {gridStyle} maxCols= {2}>
        {this.getSizeGridCells()}
      </Grid>
    );
  }
}
export default composeContextPure(FeatureGrid);
