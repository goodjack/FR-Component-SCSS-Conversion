import React, { PropTypes } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';

const { string, object, func, node } = PropTypes;

const getRelevantContextKeys = (themeAndConfig) => {
  const {
    compTheme,
    compConfig,
  } = themeAndConfig;
  const plTheme = compTheme && compTheme.proxyLink || {};
  const plConfig = compConfig && compConfig.proxyLink || {};
  return { ...plTheme, ...plConfig };
};

const getStyle = (prop, themeAndConfig) => {
  const {
    textColor,
    textDecoration,
    fontWeight,
    fontSize,
  } = prop;

  const plContext = getRelevantContextKeys(themeAndConfig);
  return {
    color: textColor || plContext.textColor || 'black',
    fontWeight: fontWeight || 'bold',
    fontSize: fontSize || '0.75em',
    textDecoration: textDecoration || plContext.textDecoration || 'underline',
  };
};

const ProxyLink = (props, context) => {

  const {
    linkUrl,
    onClickEvent,
    linkText,
    children,
    targetwindow,
    rootClass,
  } = props;

  const themeAndConfig = {
    compTheme: context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };

  const style = getStyle(props, themeAndConfig);

  return (
    <a
      className={rootClass}
      href={linkUrl}
      onClick={onClickEvent}
      style={style}
      target={targetwindow}
    >
      {children}
      {linkText}
    </a>
  );
};

ProxyLink.propTypes = {
  linkText: string,
  linkUrl: string,
  onClickEvent: func,
  /**
    Basic style properties are passed to be added from cms
  **/
  textColor: string,
  fontWeight: string,
  fontSize: string,
  textDecoration: string,
  /**
    This prop would allow ProxyLink component to be used as a wrapper to child component
  **/
  children: node,
  rootClass: string,
  targetwindow: string,
};

ProxyLink.ContextTypes = {
  compTheme: object,
  compConfig: object,
};

export default composeContextPure(ProxyLink);
