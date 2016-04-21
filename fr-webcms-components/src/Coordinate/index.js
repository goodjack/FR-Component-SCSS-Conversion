import React, { Component, PropTypes } from 'react';
import UniqueId from '../helpers/utils/uniqueId';
import Carousel, { CarouselTile } from '../Carousel';
import Image from '../core/Image';
import Button from '../Button';
import Heading from '../Heading';
import DefaultRawTheme from '../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../helpers/styles/themeManager';
import { mergeStyles } from '../helpers/utils/stylePropable';
import composeContextPure from '../helpers/composedComponents/contextPure';
import { generateUrl } from '../helpers/utils/urlGenerator';
import { getApiDetail } from '../helpers/utils/http';

// Uniqlo UI
import ConfigurationManager from '../helpers/configuration/configurationManager';
import BaseConfig from '../helpers/configuration/baseConfig';

const { string, object } = PropTypes;
const getRelevantContextKeys = (config) => {
  const coordinateConfig = config && config.coordinate || {};

  return {
    coordinateContext: { ...coordinateConfig },
  };
};

const styles = {
  root: {
    height: 525,
  },
  headingStyle: {
    width: '100%',
    textAlign: 'center',
    padding: 5,
  },
  buttonStyle: {
    marginRight: 15,
    marginBottom: 10,
    padding: 2,
    width: 115,
    height: 22,
    position: 'absolute',
    border: '1px solid #000',
    bottom: 0,
    right: 0,
    backgroundColor: '#C3CAD0',
    opacity: 0.5,
    zIndex: 1,
  },
  mainCopyStyle: {
    width: '100%',
    fontWeight: 'normal',
  },
  subCopyStyle: {
    width: '100%',
    fontWeight: 'normal',
  },
  buttonHoverStyle: {
    backgroundColor: '#fff',
    opacity: 1,
  },
  imageStyle: {
    height: 400,
    width: 275,
  },
};

class Coordinate extends Component {

  static propTypes = {
    buttonHoverStyle: object,
    buttonStyle: object,
    className: string,
    headingStyle: object,
    id: string,
    imageStyle: object,
    lang: string,
    limit: string,
    locale: string,
    mainCopy: string,
    mainContainerStyle: object,
    mainCopyStyle: object,
    /**
     * Override the inline-styles of the root element.
     */
    style: object,
    styleId: string,
    subCopy: string,
    subContainerStyle: object,
    subCopyStyle: object,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
  };

  state = {
    styleDetail: null,
  };

  componentWillMount() {
    const styleIdArray = this.props.styleId.split(',');

    // array of promises that is passed to promise.all
    // populate the promises list
    const styleDetailPromises = styleIdArray.map((rawStyleId) =>
      new Promise((resolve, reject) => {
        this.fetchStyleDetails(rawStyleId, resolve, reject);
      })
    );

    // call promise.all to wait for completion of all API calls
    Promise.all(styleDetailPromises).then((styleDetails) => {
      this.setState({
        styleDetail: styleDetails,
      });
    }, (error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    this._uniqueId = UniqueId.generate();
  }

  getCarouselTiles(coordinateItems, productLink, key) {
    const {
      imageStyle,
      buttonHoverStyle,
      buttonStyle,
    } = this.props;

    const imageMergeStyle = mergeStyles.apply(this, [styles.imageStyle, imageStyle]);
    const hoverMergeStyle = mergeStyles.apply(this, [styles.buttonHoverStyle, buttonHoverStyle]);
    const buttonMergeStyle = mergeStyles.apply(this, [styles.buttonStyle, buttonStyle]);

    // disabling JSCS rule for not triggering errors on style API fields
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    return coordinateItems.map((item, index) =>
        <CarouselTile key={key}>
          <a href={productLink} target="_blank" style={{ position: 'relative' }}>
            <Image key={index}
              style={imageMergeStyle}
              source={item.img_url_pc }
            />
            <Button label="Preview"
              hoverStyle={hoverMergeStyle}
              style={buttonMergeStyle}
            />
          </a>
        </CarouselTile>
    );
  }

  getCarousel(productLink) {
    const { styleDetail } = this.state;
    if (styleDetail) {
      const carouselTileImages = styleDetail.map((styleDetailItem, key) => {
        if (styleDetailItem) {
          const coordinateItems = styleDetailItem.result.coordinates[0].items;
          let productLinkUrl = productLink;
          productLinkUrl += styleDetailItem.result.photo.styleId;
          return this.getCarouselTiles(coordinateItems, productLinkUrl, key);
        }
      });

      return (
        <Carousel height={400} autoScroll={false} animation={'scroll'} display={3} navHead>
          {carouselTileImages}
        </Carousel>
      );
    }
  }

  fetchStyleDetails(rawStyleId, successCallback, failiureCallback) {
    const {
      compConfig: compContextConfig,
    } = this.context;
    const compConfig = compContextConfig || ConfigurationManager.getCompConfig(BaseConfig);
    const { coordinateContext } = getRelevantContextKeys(compConfig);

    const styleIds = rawStyleId.trim();
    const urlObj = {
      lang: this.props.lang,
      locale: this.props.locale,
      limit: this.props.limit,
      styleId: styleIds,
    };
    const productUrl = generateUrl(coordinateContext.styleUrl, urlObj);
    const queryData = { productUrl };
    getApiDetail(queryData, successCallback, failiureCallback);
  }

  render() {
    const {
      className,
      id,
      style,
      mainContainerStyle,
      mainCopy,
      mainCopyStyle,
      subContainerStyle,
      subCopy,
      subCopyStyle,
    } = this.props;

    const {
      compConfig: compContextConfig,
    } = this.context;
    const compConfig = compContextConfig || ConfigurationManager.getCompConfig(BaseConfig);
    const { coordinateContext } = getRelevantContextKeys(compConfig);
    const productLink = coordinateContext.productLink;

    const getTheme = this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme);
    const theme = getTheme && getTheme.coordinate;
    const textThemeColor = { color: theme.textColor };
    const inputId = id || this._uniqueId;

    const mergeStyle = mergeStyles.apply(this, [styles.root, style]);
    const mainMergeStyle = mergeStyles.apply(this, [styles.headingStyle, mainContainerStyle]);
    const mainCopyMergeStyle = mergeStyles.apply(this,
      [styles.mainCopyStyle, textThemeColor, mainCopyStyle]);
    const subMergeStyle = mergeStyles.apply(this, [styles.headingStyle, subContainerStyle]);
    const subCopyMergeStyle = mergeStyles.apply(this,
      [styles.subCopyStyle, textThemeColor, subCopyStyle]);

    return (
      <div
        id={inputId}
        className={className}
        style={mergeStyle}
      >
        <div style={mainMergeStyle}>
          <Heading
            type="h2"
            headingText={mainCopy}
            style={mainCopyMergeStyle}
          />
        </div>
        <div style={subMergeStyle}>
          <Heading
            type="h3"
            headingText={subCopy}
            style={subCopyMergeStyle}
          />
        </div>
        {this.getCarousel(productLink)}
      </div>
    );
  }
}

export default composeContextPure(Coordinate);
