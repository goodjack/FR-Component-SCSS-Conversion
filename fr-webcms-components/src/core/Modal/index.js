import React, { PropTypes } from 'react';
import DefaultRawTheme from '../../helpers/styles/rawThemes/lightRawTheme';
import ThemeManager from '../../helpers/styles/themeManager';
import { mergeStyles } from '../../helpers/utils/stylePropable';
import composeContextPure from '../../helpers/composedComponents/contextPure';
import ConfigurationManager from '../../helpers/configuration/configurationManager';
import BaseConfig from '../../helpers/configuration/baseConfig';
import Button from '../../Button';

const { string, object, func, node } = PropTypes;

const preventModalDialogClosure = (eventObj) => {
  eventObj.stopPropagation();
};

const getRelevantContextKeys = (themeAndConfig) => {
  const {
    compTheme,
    compConfig,
  } = themeAndConfig;
  const mTheme = compTheme && compTheme.modal || {};
  const mConfig = compConfig && compConfig.modal || {};
  return { ...mConfig, ...mTheme };
};

const getStyles = (themeAndConfig) => {
  const modal = getRelevantContextKeys(themeAndConfig);
  return {
    closeButton: {
      display: 'inline-block',
      textAlign: 'center',
      width: 'auto',
      float: 'right',
      backgroundColor: modal.closeButtonBackground || 'transparent',
      padding: 2,
      margin: 2,
    },
    closeLabel: {
      color: modal.closeButtonTextStyle || 'red',
      display: 'block',
      fontSize: 25,
      padding: 2,
    },
    content: {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundColor: modal.contentBackground || 'transparent',
    },
    modalBody: {
      width: '100%',
      height: '100%',
      display: 'block',
      backgroundColor: modal.bodyBackground || 'white',
    },
    modalDialog: {
      position: 'relative',
      paddingTop: modal.dialogTopPosition || 50,
      margin: '0 auto',
      width: modal.dialogWidth || 500,
      height: modal.dialogHeight || 500,
    },
    modalHeader: {
      backgroundColor: modal.headerBackground || 'transparent',
      width: '100%',
      height: 'auto',
      display: 'block',
      overflow: 'hidden',
    },
    overlay: {
      overflowX: 'hidden',
      overflowY: 'auto',
      position: 'fixed',
      backgroundColor: modal.overlayBackground || 'rgba(255, 255, 255, 0.75)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 10050,
    },
  };
};

// ES6 stateless component
const Modal = (props, context) => {

  const themeAndConfig = {
    compTheme: context.compTheme || ThemeManager.getCompTheme(DefaultRawTheme),
    compConfig: context.compConfig || ConfigurationManager.getCompConfig(BaseConfig),
  };
  const style = getStyles(themeAndConfig);
  const buttonText = props.closeButtonText || 'X';
  const modalCloseComponent = (
    <Button
      label={buttonText}
      style={mergeStyles(style.closeButton, props.closeButtonStyle)}
      labelStyle={mergeStyles(style.closeLabel, props.closeButtonTextStyle)}
      onTouchTap={props.onDismiss}
    />
  );

  return (
    <div
      id={props.id}
      className={props.className}
      style={mergeStyles(style.overlay, props.overlayStyle)}
      onClick={props.onDismiss}
    >
      <div style={mergeStyles(style.modalDialog, props.dialogStyle)}>
        <div style={mergeStyles(style.content, props.contentStyle)}>
          <div style={mergeStyles(style.modalHeader, props.headerStyle)}>
            {modalCloseComponent}
          </div>
          <div
            style={mergeStyles(style.modalBody, props.bodyStyle)}
            onClick={preventModalDialogClosure}
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  bodyStyle: object,
  children: node,
  className: string,
  closeButtonStyle: object,
  closeButtonText: string,
  closeButtonTextStyle: object,
  contentStyle: object,
  dialogStyle: object,
  headerStyle: object,
  id: string,
  onDismiss: func,
  overlayStyle: object,
};

Modal.contextTypes = {
  compTheme: object,
  compConfig: object,
};

export default composeContextPure(Modal);
