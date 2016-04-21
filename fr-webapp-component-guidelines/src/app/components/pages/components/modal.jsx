import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Modal from 'uniqlo-ui/core/Modal';
import Heading from 'uniqlo-ui/Heading';
import {Button} from 'uniqlo-ui';
import Youtube from 'uniqlo-ui/core/Youtube';
import Image from 'uniqlo-ui/core/Image';
import IconButton from 'uniqlo-ui/IconButton';
import {CheckBox} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'modal-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const ModalDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  onClickEvent(e) {
    if (e.target.getAttribute('id') === 'btn1' && !this.state.showImagePopup) {
      this.setState({showImagePopup: true});
    } else if (e.target.getAttribute('id') === 'btn2' && !this.state.showYoutubePopup) {
      this.setState({showYoutubePopup: true});
    } else if (e.target.getAttribute('id') === 'btn3' && !this.state.showTextPopup) {
      this.setState({showTextPopup: true});
    }
  },

  closeModal() {
    this.setState({
      showImagePopup: false,
      showTextPopup: false,
      showYoutubePopup: false,
    });
  },

  render() {
    console.log(Modal);
    let desc = `This component renders modal popup.`;
    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Id of the popup\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'ClassName for the popup\'s root element.',
          },
          {
            name: 'bodyStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style to override the inline modal body style.',
          },
          {
            name: 'contentStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style to override the inline modal content style.',
          },
          {
            name: 'dialogStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style to override the inline modal dialog style.',
          },
          {
            name: 'closeButtonText',
            type: 'string',
            header: 'optional',
            desc: 'Close component button text. Default value is "X".',
          },
          {
            name: 'closeButtonTextStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides inline close button text style.',
          },
          {
            name: 'closeButtonStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides inline close button style.',
          },
          {
            name: 'headerStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style to override the inline modal header style.',
          },
          {
            name: 'overlayStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style to override the inline modal overlay style.',
          },
        ],
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'onDismiss',
            header: 'function(event)',
            desc: 'Invoked when clicked outside the modal body to close the popup.',
          },
        ],
      },
    ];
    const textOverlayStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    };
    const textPopupContentStyle = {
      width: '700px',
      padding: 10,
      backgroundColor: 'white',
    };
    const textPopupBodyStyle = {
      height: '90%',
      padding: 5,
    };
    const textPopupHeaderStyle = {
      height: '5%',
      borderBottom: '1px solid #e5e5e5',
      padding: 5,
    };
    const textPopupCloseComponentStyle = {
      closeButton: {
        width: '50px',
        height: '30px',
        backgroundColor: '#e6e6e6',
        borderColor: '#adadad',
        padding: 0,
        float: 'right',
        margin: '3px',
        border: '1px solid #6e6e6e',
      },
      closeLabelStyle: {
        color: 'black',
        display: 'block',
        fontSize: '10px',
      },
    };

    return (
      <ComponentDoc
        name="Modal"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Modal} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>
        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Button id="btn1" label="Show Image Popup" onTouchTap={this.onClickEvent} />
              {this.state.showImagePopup ?
                <Modal onDismiss={this.closeModal}>
                  <div>
                    <Image
                      source="https://facebook.github.io/react/img/logo_og.png"
                      style={{width: 500, height: 500}} />
                  </div>
                </Modal> : null
              }
            </div>
            <br />
            <div>
              <Button id="btn2" label="Show Youtube Popup" onTouchTap={this.onClickEvent} />
              {this.state.showYoutubePopup ?
                <Modal
                  onDismiss={this.closeModal}
                  bodyStyle={{backgroundColor: 'transparent'}}
                >
                  <Youtube source="gHcfGU0zim8" />
                </Modal> : null
              }
            </div>
            <br />
            <div>
              <Button
                id="btn3"
                label="Show popup with multiple child components"
                onTouchTap={this.onClickEvent}
              />
              {this.state.showTextPopup ?
                <Modal
                  onDismiss={this.closeModal}
                  overlayStyle={textOverlayStyle}
                  bodyStyle={textPopupBodyStyle}
                  contentStyle={textPopupContentStyle}
                  headerStyle={textPopupHeaderStyle}
                  closeButtonText="close"
                  closeButtonTextStyle={textPopupCloseComponentStyle.closeLabelStyle}
                  closeButtonStyle={textPopupCloseComponentStyle.closeButton}
                >
                  <Heading type="h4" headingText="This is a header component." style={{display: 'block'}}/>
                  <IconButton iconclassName="muidocs-icon-custom-github" style={{backgroundColor: 'red'}}/>
                  <CheckBox
                    name="checkboxName2"
                    value="checkboxValue2"
                    label="fed the dog"
                    style={{display: 'inline'}}
                    defaultChecked={true}
                  />
                </Modal> : null
              }
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ModalDocsPage;
