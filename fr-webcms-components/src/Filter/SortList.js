import React, { Component, PropTypes } from 'react';
import Text from '../Text';
import Image from '../core/Image';
import List from '../core/List';
import ListItem from '../core/List/ListItem';
import composeContextPure from '../helpers/composedComponents/contextPure';
import ThemeManager from '../helpers/styles/themeManager';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';

const { func, number, string } = PropTypes;

const prepareStyle = ({ context }) => {
  const CompTheme = context.CompTheme || ThemeManager.getCompTheme(DefaultRawTheme);
  const filterTheme = CompTheme && CompTheme.filter || {};
  const styles = {
    imageStyle: {
      width: '100%',
      height: 57,
    },
    textStyle: {
      color: filterTheme.textColor,
      fontWeight: 'Bold',
    },
    listStyle: {
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderColor: filterTheme.borderColor,
    },
    listClickStyle: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: filterTheme.borderColor,
      backgroundColor: filterTheme.backgroundColor,
    },
    listImageStyle: {
      float: 'right',
      display: 'none',
    },
    listClickImageStyle: {
      float: 'right',
      display: 'block',
    },
  };

  return {
    styles,
  };
};

class SortList extends Component {

  static propTypes = {
    sortData: string,
    setIndex: func,
    passIndex: number,
    tickSign: string,
  };

  state = {
    sortIndex: null,
  };

  componentWillMount = () => {
    this.setState({ sortIndex: this.props.passIndex });
    const {
      textStyle,
      listStyle,
      listImageStyle,
      listClickStyle,
      listClickImageStyle,
      imageStyle,
    } = prepareStyle(this).styles;

    this.cachedStyle = {
      textStyle,
      listStyle,
      listImageStyle,
      listClickStyle,
      listClickImageStyle,
      imageStyle,
    };

  };

  getSortListItems = () => {

    const {
      listStyle,
      textStyle,
      listImageStyle,
      listClickStyle,
      listClickImageStyle,
    } = this.cachedStyle;

    let clickText = textStyle;
    let clickList = listStyle;
    let imageShow = listImageStyle;
    const { sortData, tickSign } = this.props;
    const { sortIndex } = this.state;
    const dataIterate = sortData.split(',');
    const listItem = dataIterate.map((data, index) => {
      clickList = listStyle;
      imageShow = listImageStyle;
      const bindFunc = this.callBackTest.bind(this, index);

      if (sortIndex === index) {
        clickText = textStyle;
        imageShow = listClickImageStyle;
        clickList = listClickStyle;
      }

      return (
      <ListItem
        onTouchTap= {bindFunc}
        key = {index}
        style = {clickList}
      >
       <Text style = {clickText} content = {data}/>
       <Image style = {imageShow} source = {tickSign}/>
     </ListItem>
  );
    });

    return listItem;
  };

  callBackTest(index) {
    this.setState({ sortIndex: index });
    this.props.setIndex(index, 'List');
  }

  render() {
    return (
            <List >
                 {this.getSortListItems()}
            </List>
    );
  }
}
export default composeContextPure(SortList);
