import React, { Component, PropTypes } from 'react';
import Tabs, { Tab } from '../uniqlo/Tabs';
import composeContextPure from '../helpers/composedComponents/contextPure';
import SortList from './SortList';
import ColorGrid from './ColorGrid';
import LengthGrid from './LengthGrid';
import SizeGrid from './SizeGrid';
import FeatureGrid from './FeatureGrid';

const { string } = PropTypes;

const styles = {
  imageStyle: {
    width: '100%',
    height: '57',
  },
};

class Filters extends Component {

  static propTypes = {
    sizeData: string,
    sortData: string,
    colorData: string,
    lengthData: string,
    featureData: string,
    sortImage: string,
    sortClickImg: string,
    colorImage: string,
    colorClickImg: string,
    lengthImage: string,
    lengthClickImg: string,
    priceImage: string,
    priceClickImg: string,
    featureImage: string,
    featureClickImg: string,
    sizeImage: string,
    sizeClickImg: string,
    waterMarkImage: string,
    plusSign: string,
    tickSign: string,
  };

  state = {
    sortListindex: null,
    colorIndex: null,
    lengthIndex: null,
    sizeIndex: null,
    featureIndex: null,
  };

 setIndex = (index, child) => {

   if (child === 'List') {
     this.setState({ sortListindex: index });
   } else if (child === 'Color') {
     this.setState({ colorIndex: index });
   } else if (child === 'Length') {
     this.setState({ lengthIndex: index });
   } else if (child === 'Size') {
     this.setState({ sizeIndex: index });
   } else if (child === 'Feature') {
     this.setState({ featureIndex: index });
   }

 };

  render() {
    const {
      imageStyle,
  } = styles;

    const { sortListindex, colorIndex, lengthIndex, sizeIndex, featureIndex } = this.state;
    const {
       sortData,
       colorData,
       lengthData,
       featureData,
       sizeData,
       sortImage,
       sortClickImg,
       colorImage,
       colorClickImg,
       lengthImage,
       lengthClickImg,
       priceImage,
       priceClickImg,
       featureImage,
       featureClickImg,
       sizeImage,
       sizeClickImg,
       waterMarkImage,
       plusSign,
       tickSign,
     } = this.props;

    return (

          <Tabs cols={6} padding={0} >
            <Tab
              imageStyle = {imageStyle}
              defaultImage = {sortImage}
              hoverImage= {sortClickImg}
            >
            <SortList
              sortData = {sortData}
              passIndex = {sortListindex}
              setIndex = {this.setIndex}
              tickSign ={tickSign}
            />
          </Tab>
            <Tab
              imageStyle = {imageStyle}
              defaultImage={colorImage}
              hoverImage={colorClickImg}
            >
             <ColorGrid
               colorData={colorData}
               passIndex={colorIndex}
               waterMarkImage={waterMarkImage}
               setColorState ={this.setIndex}
             />
            </Tab>
            <Tab
              imageStyle = {imageStyle}
              defaultImage={lengthImage}
              hoverImage={lengthClickImg}
            >
            <LengthGrid
              lengthData={lengthData}
              passIndex={lengthIndex}
              setLengthState ={this.setIndex}
            />
            </Tab>
            <Tab
              imageStyle = {imageStyle}
              defaultImage={priceImage}
              hoverImage={priceClickImg}
            />
            <Tab
              imageStyle = {imageStyle}
              defaultImage={featureImage}
              hoverImage={featureClickImg}
            >
            <FeatureGrid
              featureData={featureData}
              passIndex={featureIndex}
              plusSign={plusSign}
              tickSign={tickSign}
              setSizeState ={this.setIndex}
            />
            </Tab>
            <Tab
              imageStyle = {imageStyle}
              defaultImage={sizeImage}
              hoverImage={sizeClickImg}
            >
            <SizeGrid
              sizeData={sizeData}
              passIndex={sizeIndex}
              setSizeState ={this.setIndex}
            />
            </Tab>
          </Tabs>
    );
  }
}
export default composeContextPure(Filters);
