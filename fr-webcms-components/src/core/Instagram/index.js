import React, { PropTypes, Component } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import dateTime from '../../helpers/utils/dateTime';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';
import { jsonpGetRequest } from '../../helpers/utils/http';
import Text from '../../Text';
import Null from '../Null';
import Hero from '../../uniqlo/Hero';
import Container from '../Container';
import Icon from '../Icon';
import ImagePlusText from '../../uniqlo/ImagePlusText';

const { string, object, oneOf } = PropTypes;

const getRelevantContextKeys = (themeAndConfig) => {
  const {
    compTheme,
    compConfig,
  } = themeAndConfig;
  const instaTheme = compTheme && compTheme.instagram || {};
  const instaConfig = compConfig && compConfig.instagram || {};
  return { ...instaTheme, ...instaConfig };
};

const getStyles = (themeAndConfig) => {
  const insta = getRelevantContextKeys(themeAndConfig);
  return {
    titleTextStyle: {
      fontSize: '1em',
      fontWeight: 'normal',
      color: '#B1B1B1',
      padding: 5,
    },
    captionTextStyle: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: insta.captionLinesToShow || 3,
      WebkitBoxOrient: 'vertical',
      fontWeight: 'normal',
      fontSize: '1em',
      color: insta.captionTextColor || 'black',
    },
  };
};

// function to fetch time at which instagram post was done
const getInstagramPostDatetime = (htmlString) => {
  const reg = new RegExp('datetime=\"(.*)\">');
  const dateTimeVal = reg.exec(htmlString)[1];
  let postDate = new Date(dateTimeVal);
  postDate = postDate.getTime();
  let currentDate = new Date();
  currentDate = currentDate.getTime();
  const postAge = dateTime.getDateDiffText(currentDate, postDate);
  return postAge;
};

// retruns instagram markup to render
const getInstaMarkup = (comp) => {
  const {
    variation,
    title,
  } = comp.props;
  const {
    themeAndConfig,
  } = comp;
  const insta = getRelevantContextKeys(themeAndConfig);
  const styles = getStyles(themeAndConfig);
  const childProp = comp.state.variationProps;
  const containerHeight = insta.containerHeight || 350;

  // sets variable to either title or post author name in case of imageWithCaption variation
  const instaTitle = title || childProp.authorName;

  // sets instagram post title markup
  const textMarkup = (<Text content={instaTitle} style={styles.titleTextStyle}/>);
  let markupToRender;
  if (variation === 'imageWithCaption') {
    markupToRender = (
      <Container height={containerHeight}>
        <Icon name="Instagram"/>
        {instaTitle ? textMarkup : <Null />}
        <ImagePlusText
          text={childProp.text}
          textStyle={styles.captionTextStyle}
          imageSrc={childProp.imageSrc}
          variation="imageTop"
        />
      </Container>
    );
  } else {
    markupToRender = (
      <Container height={containerHeight}>
        {title ? textMarkup : <Null />}
        <Hero { ...childProp } />
      </Container>
    );
  }

  return markupToRender;
};

class Instagram extends Component {

  static propTypes = {
    instagramId: string,
    textareaBgColor: string,
    variation: oneOf(['imageLeft', 'overlay', 'imageWithCaption']),
    title: string,
    imageTitle: string,
    mode: oneOf(['static', 'dynamic']),
    imageSrc: string,
    imageCaption: string,
    postAge: string,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
  };

  static defaultProps = {
    variation: 'imageWithCaption',
    mode: 'static',
  };

  state = {
    imageSrc: null,
    title: null,
    postAge: null,
  };

  componentWillMount() {

    const {
      variation,
      instagramId,
      imageTitle,
      textareaBgColor,
      mode,
      imageSrc,
      imageCaption,
      postAge,
    } = this.props;
    const styles = getStyles(this.themeAndConfig);
    let screenRatio;
    let variationProps;
    if (variation === 'imageLeft') {
      screenRatio = '60:40';
    }

    variationProps = {
      imageSrc,
      text: imageCaption,
      textStyle: styles.captionTextStyle,
      textareaBgColor,
      imageTitle,
      icon: 'Instagram',
      iconText: postAge,
      variation,
      screenRatio,
    };
    if (mode === 'static') {
      this.setState({ variationProps });
    } else if (mode === 'dynamic' && instagramId) {
      const promiseObj = new Promise((resolve, reject) => {
        this.fetchInstagramPostDetails(this.themeAndConfig, instagramId, resolve, reject);
      });
      promiseObj.then((json) => {
        const postAgeValue = getInstagramPostDatetime(json.html);
        variationProps.authorName = json[`author_name`];
        variationProps.imageSrc = json[`thumbnail_url`];
        variationProps.text = imageCaption || json.title;
        variationProps.iconText = postAgeValue;
        this.setState({ variationProps });
      });
    }
  }

  themeAndConfig = {
    compTheme: this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: this.context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };

  // function that fetches instagram post detail
  fetchInstagramPostDetails = (themeAndConfig, instagramId, successCallback, failureCallback) => {

    const insta = getRelevantContextKeys(themeAndConfig);
    const instaUrl = `${insta.instagramApiUrl}?url=${insta.instagramImageUrl}${instagramId}`;

    // make jsonp get request to instagram API
    jsonpGetRequest(instaUrl, successCallback, failureCallback);
  };

  render() {
    let markupToRender;
    if (this.state.variationProps) {
      markupToRender = getInstaMarkup(this);
    } else {
      markupToRender = (<Null />);
    }

    return markupToRender;
  }
}

export default Instagram;
