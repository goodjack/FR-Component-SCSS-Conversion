import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import { spy } from 'sinon';
import IconButton from 'IconButton';
import ActionGrade from 'SvgIcons/action/grade';

/* global expect */

describe('IconButton', () => {
  let ThemedIconButton;
  const ACTIONGRADE_PATH = 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z';
  beforeEach(() => {
    ThemedIconButton = injectTheme(IconButton);
  });

  it('should work with default arguments', () => {
    const parentNode = document.createElement('div');
    const component = ReactDOM.render(<ThemedIconButton />, parentNode);
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    expect(button).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should check the className', () => {
    const hoverStyle = { color: 'white' };
    const normalStyle = { color: 'black' };
    const parentNode = document.createElement('div');
    const component = ReactDOM.render(<ThemedIconButton
      iconclassName="iconButton" hoverStyle={hoverStyle} style={normalStyle}
    />, parentNode);
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    expect(button.getAttribute('class')).to.equal('iconButton');
  });

  it('should trigger the touch tap event of an icon button', () => {
    const touchTapSpy = spy();
    const render = TestUtils.renderIntoDocument(<ThemedIconButton onTouchTap={touchTapSpy} />);
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    TestUtils.Simulate.click(button);
    expect(touchTapSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should render svg Icon', () => {
    const render = TestUtils.renderIntoDocument(<ThemedIconButton>
      <ActionGrade/></ThemedIconButton>);
    const actionGradeNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'svg')[0];
    expect(actionGradeNode.firstChild.getAttribute('d')).to.equal(ACTIONGRADE_PATH);
  });

  it('should trigger mouse leave event', () => {
    const mouseSpy = spy();
    const parentNode = document.createElement('div');
    const component = ReactDOM.render(<ThemedIconButton
      iconclassName="iconButton" onMouseLeave={mouseSpy}
    />, parentNode);
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    TestUtils.Simulate.mouseLeave(button);
    expect(mouseSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should trigger mouse enter event', () => {
    const mouseSpy = spy();
    const parentNode = document.createElement('div');
    const component = ReactDOM.render(<ThemedIconButton
      iconclassName="iconButton" onMouseEnter={mouseSpy}
    />, parentNode);
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    TestUtils.Simulate.mouseEnter(button);
    expect(mouseSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should render icon image when iconImageSrc is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedIconButton iconImageSrc="iconImageUrl"/>);
    const iconImageNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'img')[0];
    expect(iconImageNode.getAttribute('src')).to.equal('iconImageUrl');
  });
});
