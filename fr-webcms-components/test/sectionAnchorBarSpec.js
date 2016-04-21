import React from 'react';
import SectionAnchorBar from 'SectionAnchorBar';
import SectionAnchorBarItem from 'SectionAnchorBar/SectionAnchorBarItem';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { spy } from 'sinon';

/* global expect */

describe('SectionAnchorBar', () => {
  let ThemedSectionAnchorBar;

  beforeEach(() => {
    ThemedSectionAnchorBar = injectTheme(SectionAnchorBar);
  });

  it('should check the number of SectionAnchorBarItem', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedSectionAnchorBar className="sampleClass">
        <SectionAnchorBarItem title="Section1" link="#section1"/>
        <SectionAnchorBarItem title="Section2" link="#section2"/>
        <SectionAnchorBarItem title="Section2" link="#section2"/>
        <SectionAnchorBarItem title="Section2" link="#section2"/>
      </ThemedSectionAnchorBar>);
    const SectionAnchorBarDomNode = TestUtils
      .scryRenderedComponentsWithType(render, SectionAnchorBarItem);
    expect(SectionAnchorBarDomNode.length).to.equal(4);
  });

  it('should display the text which is passed through the title props', () => {
    const render = TestUtils.renderIntoDocument(
      <SectionAnchorBarItem title="Section1" link="#section1"/>);
    const SectionAnchorBarDomNode = ReactDOM.findDOMNode(render);
    expect(SectionAnchorBarDomNode.textContent).to.equal('Section1');
  });

  it('should validate given attributes rendered correctly', () => {
    const render = TestUtils.renderIntoDocument(
      <SectionAnchorBarItem title="Section1" link="#section1"/>);
    const SectionAnchorBarDomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(SectionAnchorBarDomNode.getAttribute('href')).to.equal('#section1');
  });

  it('should trigger the onClick event', () => {
    const onClickSpy = spy();
    const render = TestUtils.renderIntoDocument(
      <SectionAnchorBarItem title="Section1" link="#section1" onClick={onClickSpy}/>);
    const SectionAnchorBarDomNode = ReactDOM.findDOMNode(render);
    TestUtils.Simulate.click(SectionAnchorBarDomNode);
    expect(onClickSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should check the color and backgroundColor on mouseEnter and mouseLeave', () => {
    const render = TestUtils.renderIntoDocument(
      <SectionAnchorBarItem title="Section1" link="#section1" />);
    const SectionAnchorBarDomNode = ReactDOM.findDOMNode(render);

    // test initial values
    expect(SectionAnchorBarDomNode.style.backgroundColor).to.equal('rgb(224, 224, 224)');

    // simulate mouseEnter
    TestUtils.Simulate.mouseEnter(SectionAnchorBarDomNode);

    // // test values after simulating mouseEnter
    expect(SectionAnchorBarDomNode.style.backgroundColor).to.equal('rgb(213, 0, 0)');

    // simulate mouseLeave
    TestUtils.Simulate.mouseLeave(SectionAnchorBarDomNode);

    // test values after simulating mouseLeave
    expect(SectionAnchorBarDomNode.style.backgroundColor).to.equal('rgb(224, 224, 224)');
  });
});
