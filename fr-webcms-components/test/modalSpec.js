import React from 'react';
import ReactDOM from 'react-dom';
import Image from 'core/Image';
import Modal from 'core/Modal';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('Modal', () => {
  let ThemedModal;

  beforeEach(() => {
    ThemedModal = injectTheme(Modal);
  });

  it('should capture all the props passed to Modal component', () => {
    const modalProps = {
      id: 'testId',
      className: 'testClass',
      bodyStyle: { width: '50px' },
      contentStyle: { width: '50px' },
      dialogStyle: { width: '50px' },
      closeButtonText: 'close',
      closeButtonTextStyle: { color: 'red' },
      closeButtonStyle: { border: '1px solid black' },
      headerStyle: { width: '50px' },
      overlayStyle: { width: '50px' },
    };
    const ModalPopup = TestUtils.renderIntoDocument(<ThemedModal { ...modalProps }/>);
    expect(ModalPopup.props.id).to.equal('testId');
    expect(ModalPopup.props.className).to.equal('testClass');
    expect(ModalPopup.props.bodyStyle.width).to.equal('50px');
    expect(ModalPopup.props.contentStyle.width).to.equal('50px');
    expect(ModalPopup.props.dialogStyle.width).to.equal('50px');
    expect(ModalPopup.props.headerStyle.width).to.equal('50px');
    expect(ModalPopup.props.overlayStyle.width).to.equal('50px');
    expect(ModalPopup.props.closeButtonText).to.equal('close');
    expect(ModalPopup.props.closeButtonTextStyle.color).to.equal('red');
    expect(ModalPopup.props.closeButtonStyle.border).to.equal('1px solid black');
  });
  it('should set modal overlay style to the style passed as props', () => {
    const ModalPopup = TestUtils.renderIntoDocument(<ThemedModal
      overlayStyle={{ width: '50px' }}
    />);
    const ModalNode = ReactDOM.findDOMNode(ModalPopup);
    expect(ModalNode.style.width).to.equal('50px');
  });
  it('should set modal Dialog style to the style passed as props', () => {
    const ModalPopup = TestUtils.renderIntoDocument(<ThemedModal
      dialogStyle={{ width: '50px' }}
    />);
    const ModalNode = ReactDOM.findDOMNode(ModalPopup);
    expect(ModalNode.querySelector('div').style.width).to.equal('50px');
  });
  it('should set modal Content style to the style passed as props', () => {
    const ModalPopup = TestUtils.renderIntoDocument(<ThemedModal
      contentStyle={{ width: '50px' }}
    />);
    const ModalNode = ReactDOM.findDOMNode(ModalPopup);
    const contentTag = (ModalNode.querySelector('div div').innerHTML).split('>')[0];
    expect(contentTag).to.contain('width:50px');
  });
  it('should set modal Header style to the style passed as props', () => {
    const ModalPopup = TestUtils.renderIntoDocument(<ThemedModal
      headerStyle={{ width: '50px' }}
    />);
    const ModalNode = ReactDOM.findDOMNode(ModalPopup);
    const contentTag = (ModalNode.querySelector('div div div div').innerHTML).split('>')[0];
    expect(contentTag).to.contain('width:50px');
  });
  it('should render the child components in the modal body', () => {
    const ModalPopup = TestUtils.renderIntoDocument(<ThemedModal headerStyle={{ width: '50px' }}>
      <Image source="https://facebook.github.io/react/img/logo_og.png" />
    </ThemedModal>);
    const ModalNode = ReactDOM.findDOMNode(ModalPopup);
    expect(ModalNode.querySelector('img').getAttribute('src')).to.equal(
      'https://facebook.github.io/react/img/logo_og.png');
  });
  it('should render the close button text as the value passed as props', () => {
    const closeStyle = {
      width: 50,
    };
    const ModalPopup = TestUtils.renderIntoDocument(<ThemedModal
      bodyStyle={{ width: '50px' }} closeButtonText="Close"
      closeComponentProps={{ style: closeStyle }}
    >
      <Image source="https://facebook.github.io/react/img/logo_og.png" />
    </ThemedModal>);
    const ModalNode = ReactDOM.findDOMNode(ModalPopup);
    expect(ModalNode.textContent).to.equal('Close');
  });
  it('should call the dismiss function upon initiating popup dismissal', () => {
    const dismissMock = spy();
    const ModalPopup = TestUtils.renderIntoDocument(<ThemedModal onDismiss={dismissMock} />);
    const ModalNode = ReactDOM.findDOMNode(ModalPopup);
    TestUtils.Simulate.click(ModalNode);
    expect(dismissMock.called).to.equal(true);
  });
});
