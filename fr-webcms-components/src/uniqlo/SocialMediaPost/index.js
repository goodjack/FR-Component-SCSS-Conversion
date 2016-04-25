import React, { PropTypes, Component } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import { getPostDetails } from '../../helpers/utils/http';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import IconHead from '../../core/IconHead';
import ImagePlusText from '../ImagePlusText';
import reactStringReplace from '../../helpers/utils/reactStringReplace';

const { string, oneOf, object } = PropTypes;
const prepareStyles = (me) => {
  const styles = {
    root: {
      minHeight: '100px',
      color: me.theme.contentColor || '#000',
      padding: me.theme.padding || '10px',
    },
    icon: {
      width: '29px',
      height: '25px',
    },
    title: {
      paddingBottom: '35px',
      color: me.theme.titleColor || '#000',
    },
    imgTxt: {
      border: 'none',
    },
    image: {
      margin: '0 0 12px',
    },
    container: {
      padding: 0,
    },
  };
  const {
    style,
    imageStyle,
    titleStyle,
    contentStyle,
  } = me.props;

  styles.root = mergeStyles(styles.root, style);
  styles.image = mergeStyles(styles.image, imageStyle);
  styles.heading = mergeStyles(styles.title, titleStyle);
  styles.postText = contentStyle;
  return styles;
};

const parseText = (text, linkColor, link) => {
  let replacedText;
  const style = { color: linkColor };

  replacedText = reactStringReplace(text, /(https?:\/\/\S+)/g, match => (
    <a key={match} href={match} style={style} >{match}</a>
  ));
  replacedText = reactStringReplace(replacedText, /@(\w+)/g, match => (
    <a key={match} href={`${link}/${match}`} style={style} >@{match}</a>
  ));
  replacedText = reactStringReplace(replacedText, /#(\w+)/g, match => (
    <a key={match} href={`${link}/hashtag/${match}`} style={style} >#{match}</a>
  ));

  return replacedText;
};

const processData = (me, result) => {
  const type = me.props.type;
  const linkColor = me.theme.linkColor || '#CCC';
  if (type === 'twitter') {
    me.setState({
      title: result.user[`screen_name`],
      content: parseText(result.text, linkColor, 'http://twitter.com'),
      imageSrc: result.entities.media[0][`media_url`],
      postLink: result.entities.media[0][`expanded_url`],
    });
  } else if (type === 'facebook') {
    me.setState({
      title: result.from.name,
      content: parseText(result.name, linkColor, 'http://facebook.com'),
      imageSrc: result.images[6].source,
      postLink: result.link,
    });
  }
};

const getPostContent = (me) => {
  const {
    postId,
    variation,
    content,
    altText,
    imageSrc,
  } = me.props;

  const {
    image,
    postText,
    imgTxt,
    container,
  } = me.styles;

  let text = me.state.content;
  let postContent;
  if (variation === 'textOnly') {
    postContent = (postId) ? <div style={postText}>{text}</div> :
      <div style={postText}>{content}</div>;
  } else {
    const imageURL = (postId) ? me.state.imageSrc : imageSrc;
    text = (postId) ? text : content;
    postContent = (
      <ImagePlusText
        imageSrc={imageURL}
        text={text}
        variation="imageTop"
        style={imgTxt}
        imageTitle={altText}
        imageStyle={image}
        textContainerStyle={container}
      />);
  }

  return postContent;
};

class SocialMediaPost extends Component {

  static propTypes = {
    postId: string,
    title: string,
    variation: oneOf(['textOnly', 'photoPost']),
    content: string,
    altText: string,
    imageSrc: string,
    titleImage: string,
    postLink: string,
    loadText: string,
    type: string,
    style: object,
    imageStyle: object,
    titleStyle: object,
    contentStyle: object,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
  };

  static defaultProps = {
    loadText: 'Loading..',
  };

  state = {
    postId: null,
    content: {},
    imageSrc: {},
  };

  componentWillMount = () => {
    const _this = this;
    const compTheme = _this.context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme) || {};
    _this.theme = compTheme.social || {};
    _this.styles = prepareStyles(_this);
  };

  componentDidMount = () => {
    const {
      postId,
      type,
    } = this.props;
    if (postId) {
      getPostDetails(postId, type, (result) => {
        processData(this, result);
      });
    }
  };

  render() {
    const _this = this;
    const {
      postId,
      title,
      titleImage,
    } = _this.props;

    const {
      root,
      heading,
      icon,
    } = _this.styles;
    const postContent = getPostContent(_this);
    const postTitle = (postId) ? `@ ${_this.state.title}` : title;
    return (
      (_this.state.title || title) ?
        <div style={root}>
          <IconHead
            imageSrc={titleImage}
            titleText={postTitle}
            style={heading}
            imageStyle={icon}
          />
          {postContent}
       </div> :
       <div style={root} >{_this.props.loadText}</div>
    );
  }
}

export default composeContextPure(SocialMediaPost);
