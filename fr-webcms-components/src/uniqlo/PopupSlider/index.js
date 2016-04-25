import React, { PropTypes, Component } from 'react';
import Modal from '../../core/Modal';
import Hero from '../Hero';
import Null from '../../core/Null';
import Swipable from '../../core/Swipable';

const { string, object, node } = PropTypes;

const getStyles = () => (
  {
    model: {
      width: '100%',
      height: '100%',
      paddingTop: '0',
    },
    closeButton: {
      float: 'left',
    },
    closeButtonText: {
      color: '#000',
      paddingLeft: '10px',
      fontSize: '1.5em',
    },
    modalHeader: {
      backgroundColor: '#FFF',
    },
    overlay: {
      backgroundColor: '#FFF',
    },
    navigation: {
      top: '25%',
    },
  }
);

class PopupSlider extends Component {

  static propTypes = {
    title: string,
    subTitle: string,
    imageSrc: string,
    linkText: string,
    style: object,
    children: node,
  };

  static contextTypes = {
    compTheme: object,
    compConfig: object,
  };

  state = {
    showVideoPopup: false,
  };

  handleClick = () => {
    this.setState({ showPopup: !this.state.showPopup });
  };

  render() {
    const {
      title,
      subTitle,
      imageSrc,
      linkText,
      children,
      style,
    } = this.props;

    const {
      model,
      closeButton,
      modalHeader,
      closeButtonText,
      overlay,
      navigation,
    } = getStyles(this);
    return (
      <div>
        <div style={style} >
          <Hero
            imageSrc={imageSrc}
            title={title}
            subtitle={subTitle}
            navToOverlayComp={false}
            linkOnClick={this.handleClick}
            linkText = {linkText}
            variation="textOnImage"
          />
        </div>
        { (this.state.showPopup) ?
          <Modal
            dialogStyle={model}
            onDismiss={this.handleClick}
            closeButtonStyle={closeButton}
            headerStyle={modalHeader}
            closeButtonText="<"
            closeButtonTextStyle={closeButtonText}
            overlayStyle={overlay}
          >
            <Swipable
              nextIcon="images/next.png"
              previousIcon="images/previous.png"
              previousStyle={navigation}
              nextStyle={navigation}
            >
              {children}
            </Swipable>
        </Modal> : Null}
      </div>
    );
  }

}

export default PopupSlider;
