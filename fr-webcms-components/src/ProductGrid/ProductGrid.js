import React, { Component, PropTypes } from 'react';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import LangConfig from '../helpers/configuration/languageConfiguration';
import Grid from '../core/Grid';
import GridCell from '../core/GridCell';
import ProductCard from '../ProductCard';
import { getApiDetail } from '../helpers/utils/http';
import { query } from './query';

const { string, object, node } = PropTypes;
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
};

class ProductGrid extends Component {

  static propTypes = {
    alternateText: string,
    catelogPath: string,
    catelogUrl: string.isRequired,
    cellHeight: string,
    children: node,
    content: string,
    dePrioritized: string,
    padding: string,
    pageNo: string,
    password: string,
    prioritized: string,
    products: string,
    ratingLinkUrl: string,
    style: object,
    userName: string,
    variationType: string,
  };

  static contextTypes = {
    muiTheme: object,
    translation: object,
  };

  static defaultProps = {
    padding: '5',
    tileSize: 'large',
  };

  state = {
    productDetail: '',
  };

  componentWillMount = () => {
    this.loadProduct();
  };

  getFillerCount = (tileType, Products) => {
    let productCount = 0;
    const tileCountSmall = 4;
    const tileCountLarge = 3;
    /* Calculating the number of fillers for Large and Small */
    if (tileType === 'Multi-Small') {
      if (Products % tileCountSmall !== 0) {
        productCount = tileCountSmall - Products % tileCountSmall;
      }
    } else if (tileType === 'Multi-Large') {
      if (Products % tileCountLarge !== 0) {
        productCount = tileCountLarge - Products % tileCountLarge;
      }
    }

    return productCount;
  };

 getFillersChildren(child) {
   const fill = React.Children.map(child, (cellChild, index) =>
     <GridCell key={ index } >{cellChild}</GridCell>
   );
   return fill;
 }

  getFillers(tileSize) {
    const fillersSize = (tileSize === 'Multi-Large') ? 'large' : 'small';
    let fillers = [];
    const getFillerCount = this.getFillerCount;
    const productDetail = this.state.productDetail;
    const items = productDetail && productDetail.search && productDetail.search.items || {};
    React.Children.forEach(this.props.children, (child) => {
      const fillersChild = React.Children.map(child.props.children, (FillerChild) =>
         React.cloneElement(FillerChild, {
           fillersSize,
         })
      );
      if (child.props.display === 'Cover') {
        const fillerChild =
        fillersChild.slice(0, getFillerCount(tileSize, items.length));
        fillers = this.getFillersChildren(fillerChild);
      } else {
        fillers = this.getFillersChildren(fillersChild);
      }
    });
    return fillers;
  }

  getCols(type) {
    switch (type) {
      case 'Single-Large': return 1;
      case 'Single-Small': return 1;
      case 'Two-Column': return 2;
      case 'Multi-Small': return 4;
      case 'Multi-Large': return 3;
      default: return 4;
    }
  }

  successCall = (parsedData) => {
    this.setState({ productDetail: parsedData.data });
  };

  errorCall(error) {
    console.log(error);
  }

  loadProduct = () => {
    const { catelogPath, pageNo, products, catelogUrl, userName, password, content } = this.props;
    const categoryId = catelogPath || '';
    const pages = pageNo || 0;
    const productIds = products || '';
    const productUrl = catelogUrl;
    const queryParameter = query(categoryId, productIds, pages);
    const queryData = {
      queryParameter,
      userName,
      password,
      content,
      productUrl,
    };
    getApiDetail(queryData, this.successCall, this.errorCall);
  };

  renderProductChildren(data = {}, language, objString) {
    let ProductCards = [];
    const itemData = data[objString];
    const { variationType, ratingLinkUrl } = this.props;
    const items = itemData && itemData.items || [];
    if (itemData && itemData.items) {
      ProductCards = items.map((pItem, index) => {
        const cardProps = Object.assign({}, language, {
          variationType,
          ratingLinkUrl,
        });
        return (<GridCell key={index} >
          <ProductCard {...cardProps} productData={pItem} />
      </GridCell>);
      });
    }

    return (ProductCards);
  }

  render() {
    const _this = this;
    const {
      padding,
      cellHeight,
      children,
      style,
      variationType,
      products,
      ...other,
    } = _this.props;
    const language = _this.context.language || LangConfig.productCard;
    const cols = _this.getCols(variationType);
    const productDetail = _this.state.productDetail;
    const gridStyle = mergeStyles.apply(_this, [styles.root, style]);
    const searchString = products ? 'list' : 'search';
    return (
      <Grid
        maxCols={cols}
        cellPadding={parseInt(padding, 10)}
        style={gridStyle}
        cellHeight={parseInt(cellHeight, 10)}
      >
        {this.renderProductChildren(productDetail, language, searchString)}
        {this.getFillers(variationType)}
      </Grid>
    );
  }
}

export default composeContextPure(ProductGrid);
