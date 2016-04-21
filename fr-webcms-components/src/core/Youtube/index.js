import React, { PropTypes } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';
import { generateUrl } from '../../helpers/utils/urlGenerator';

const { string, object, bool } = PropTypes;

const styles = {
  width: '100%',
  height: '100%',
  border: 0,
};

const getRelevantContextKeys = (themeAndConfig) => {
  const {
    compConfig,
  } = themeAndConfig;
  const ytConfig = compConfig && compConfig.youtube || {};
  return { ...ytConfig };
};

const getUrl = (props, themeAndConfig) => {
  const {
    allowAutoplay,
    allowFullScreen,
    allowLooping,
    origin,
    showControls,
    showRelatedVideos,
    source,
    youtubeEmbedUrlPrefix,
  } = props;
  const youtube = getRelevantContextKeys(themeAndConfig);
  const urlPrefix = youtubeEmbedUrlPrefix || youtube.embedUrlPrefix ||
    'https://www.youtube.com/embed/';
  const requestOrigin = origin || window.location.origin;
  const ytParams = {
    rel: 0,
    autoplay: 0,
    fs: 1,
  };

  if (showRelatedVideos || (showRelatedVideos !== false && youtube.showRelatedVideos)) {
    ytParams.rel = 1;
  }

  if (allowAutoplay || (allowAutoplay !== false && youtube.allowAutoplay)) {
    ytParams.autoplay = 1;
  }

  if (showControls === false || (!showControls && youtube.showControls === false)) {
    ytParams.controls = 0;
    ytParams.fs = 0;
  }

  if (allowLooping || (allowLooping !== false && youtube.allowLooping)) {
    ytParams.loop = 1;
    ytParams.playlist = source;
  }

  if (allowFullScreen === false || (!allowFullScreen && youtube.allowFullScreen === false)) {
    ytParams.fs = 0;
  }

  ytParams.origin = requestOrigin;
  const prefix = `${urlPrefix}${source}`;
  const url = generateUrl(prefix, ytParams);
  return url;
};

// stateless component definition in Es6
const Youtube = (props, context) => {

  const themeAndConfig = {
    compTheme: context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };
  const {
    className,
    id,
    allowFullScreen,
    ...other,
  } = props;
  const youtube = getRelevantContextKeys(themeAndConfig);
  const url = getUrl(props, themeAndConfig);
  let allowFullScreenVal = 1;
  if (allowFullScreen === false || (!allowFullScreen && youtube.allowFullScreen === false)) {
    allowFullScreenVal = 0;
  }

  return (
    <iframe
      id={id}
      className={className}
      src={url}
      style={mergeStyles.apply(this, [styles, props.style])}
      allowFullScreen={allowFullScreenVal}
    />
  );

};

Youtube.propTypes = {
  allowAutoplay: bool,
  allowFullScreen: bool,
  allowLooping: bool,
  className: string,
  id: string,
  origin: string,
  showControls: bool,
  showRelatedVideos: bool,
  source: string.isRequired,
  style: object,
  youtubeEmbedUrlPrefix: string,
};

Youtube.contextTypes = {
  compTheme: object,
  compConfig: object,
};

export default composeContextPure(Youtube);
