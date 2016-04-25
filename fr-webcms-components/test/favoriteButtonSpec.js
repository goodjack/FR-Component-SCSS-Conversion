import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';

import { spy } from 'sinon';
import FavoriteButton from 'FavoriteButton';

import IconButton from 'Button';

// import ActionGrade from 'SvgIcons/action/grade';

/* global expect */

describe('FavoriteButton', () => {
  let ThemedFavoriteButton;

  beforeEach(() => {
    ThemedFavoriteButton = injectTheme(FavoriteButton);
  });

  it('should work with default arguments', () => {
    const parentNode = document.createElement('div');
    const component = ReactDOM.render(<ThemedFavoriteButton />, parentNode);
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    expect(button).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should check disabled property is passed on', () => {
    const component = TestUtils.renderIntoDocument(<ThemedFavoriteButton disabled/>);
    const childComponent = TestUtils.findRenderedComponentWithType(component, IconButton);
    expect(childComponent.props.disabled).to.equal(true);
  });

  it('should check hoverStyle property is passed on', () => {
    const componentHoverStyle = {
      backgroundColor: 'blue',
    };
    const component =
      TestUtils.renderIntoDocument(<ThemedFavoriteButton hoverStyle={componentHoverStyle} />);
    const childComponent = TestUtils.findRenderedComponentWithType(component, IconButton);
    expect(childComponent.props.hoverStyle).to.equal(componentHoverStyle);
  });

  it('should check iconclassName property is passed on', () => {
    const component =
     TestUtils.renderIntoDocument(<ThemedFavoriteButton iconClassName="testClass" />);
    const childComponent = TestUtils.findRenderedComponentWithType(component, IconButton);
    expect(childComponent.props.iconClassName).to.equal('testClass');
  });

  it('should trigger the MouseEnter event', () => {
    const mouseEnterSpy = spy();
    const component = TestUtils.renderIntoDocument(
      <ThemedFavoriteButton onMouseEnter={mouseEnterSpy}/>
    );
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    TestUtils.Simulate.mouseEnter(button);
    expect(mouseEnterSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should trigger the MouseLeave event', () => {
    const mouseLeaveSpy = spy();
    const component = TestUtils.renderIntoDocument(
      <ThemedFavoriteButton onMouseLeave={mouseLeaveSpy}/>
    );
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    TestUtils.Simulate.mouseLeave(button);
    expect(mouseLeaveSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should trigger the TouchTap event', () => {
    const onTouchTapSpy = spy();
    const component = TestUtils.renderIntoDocument(
      <ThemedFavoriteButton onTouchTap={onTouchTapSpy}/>
    );
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    TestUtils.Simulate.click(button);
    expect(onTouchTapSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
    TestUtils.Simulate.click(button);
    expect(onTouchTapSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('verifies the styles of the button', () => {
    const component = TestUtils.renderIntoDocument(
      <ThemedFavoriteButton style={{ fontWeight: '500' }} />);
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    expect(button.style.fontWeight).to.equal('500');
  });

  it('should reflect changes done to component props', () => {
    const parentNode = document.createElement('div');
    let component = ReactDOM.render(<ThemedFavoriteButton style={{ fontWeight: '500' }} />, parentNode);
    component = ReactDOM.render(<ThemedFavoriteButton style={{ fontWeight: '900' }} />, parentNode);
    const button = TestUtils.findRenderedDOMComponentWithTag(component, 'button');
    expect(button.style.fontWeight).to.equal('900');
  });

});
