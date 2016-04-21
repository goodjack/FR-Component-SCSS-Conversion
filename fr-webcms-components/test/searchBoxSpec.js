import React from 'react';
import SearchBox from 'SearchBox';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { spy } from 'sinon';

/* global expect */

describe('SearchBox', () => {
  let ThemedSearchBox;

  beforeEach(() => {
    ThemedSearchBox = injectTheme(SearchBox);
  });

  it('should trigger the onTouchTap event', () => {
    const onTouchTapSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedSearchBox
        onTouchTap={onTouchTapSpy}
        hintText="Enter Your Name"
      />
    );
    const button = TestUtils.findRenderedDOMComponentWithTag(render, 'button');
    TestUtils.Simulate.click(button);
    expect(onTouchTapSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should check styles on onFocus event', () => {
    const onTouchTabSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <ThemedSearchBox
        expand
        style={{ width: 150 }}
        wrapperFocusStyle={{ width: 250 }}
        textInputStyle={{ width: 90 }}
        textInputFocusStyle={{ width: 190 }}
        hintText="Enter Your Name"
        onTouchTap={onTouchTabSpy}
      />
    );
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    expect(input.style.width).to.equal('90px');
    TestUtils.Simulate.focus(input);
    expect(input.style.width).to.equal('190px');
  });

  it('should properly render search box with iconbutton', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSearchBox
        searchIcon="ActionSearch"
        closeIcon="CloseIcon"
        buttonType="iconButton"
        expand
        hintText="Enter Your Name"
      />
    );
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.click(input);
    TestUtils.Simulate.keyUp(input);
    input.value = 'Sample search phrase';
    const buttons = TestUtils.scryRenderedDOMComponentsWithTag(render, 'button');
    TestUtils.Simulate.click(buttons[1]);
    expect(input.value).to.equal(''); // eslint-disable-line no-unused-expressions
  });

  it('should fire the expand collapse style changes', () => {
    const focusStyle = {
      color: 'red',
    };
    const blurStyle = {
      color: 'blue',
    };
    const render = TestUtils.renderIntoDocument(
      <ThemedSearchBox
        buttonType="iconButton"
        expand
        searchIcon="ActionSearch"
        closeIcon="CloseIcon"
        textInputFocusStyle={focusStyle}
        textInputStyle={blurStyle}
        hintText="Enter Your Name"
      />
    );
    const input = TestUtils.findRenderedDOMComponentWithTag(render, 'input');
    TestUtils.Simulate.focus(input);
    expect(input.style.color).to.equal('red'); // eslint-disable-line no-unused-expressions
    TestUtils.Simulate.blur(input);
    expect(input.style.color).to.equal('blue'); // eslint-disable-line no-unused-expressions
  });

});
