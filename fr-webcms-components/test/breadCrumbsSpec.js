import React from 'react';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import ReactDOM from 'react-dom';
import BreadCrumb from 'core/BreadCrumbs/BreadCrumb';
import BreadCrumbs from 'core/BreadCrumbs';
import { expect } from 'chai';

describe('BreadCrumbs', () => {
  let ThemedBreadCrumb;

  beforeEach(() => {
    ThemedBreadCrumb = injectTheme(BreadCrumbs);
  });

  it('should render the component when the BreadCrumbs are passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedBreadCrumb separator="/" >
         <BreadCrumb text="男裝" link="http://uniqlo.com" />
         <BreadCrumb text="特別企劃" link="http://uniqlo.com" />
         <BreadCrumb text="期間限定特價" />
      </ThemedBreadCrumb>);
    const items = TestUtils.scryRenderedComponentsWithType(render, BreadCrumb);
    expect(items.length).to.equal(3);
  });

  it('should change the hover color when hoverStyle is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedBreadCrumb separator="/" >
         <BreadCrumb text="男裝" link="http://uniqlo.com" style={{ color: '#535353' }} hoverStyle={{ color: '#FF0000' }} />
      </ThemedBreadCrumb>);
    const items = TestUtils.scryRenderedComponentsWithType(render, BreadCrumb);
    const renDomNode = ReactDOM.findDOMNode(items[0]);
    TestUtils.Simulate.mouseEnter(renDomNode);
    const newRenDomNode = ReactDOM.findDOMNode(items[0]);
    expect(newRenDomNode.style.color).to.equal('rgb(255, 0, 0)');
    TestUtils.Simulate.mouseLeave(renDomNode);
    const defaultRenDomNode = ReactDOM.findDOMNode(items[0]);
    expect(defaultRenDomNode.style.color).to.equal('rgb(83, 83, 83)');
  });

  it('should have the separator  when separator props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedBreadCrumb separator="/" >
         <BreadCrumb text="男裝" link="http://uniqlo.com" />
         <BreadCrumb text="男裝" link="http://uniqlo.com" />
      </ThemedBreadCrumb>);
    const items = TestUtils.scryRenderedDOMComponentsWithTag(render, 'li');
    const defaultRenDomNode = ReactDOM.findDOMNode(items[1]);
    expect(defaultRenDomNode.querySelector('span').textContent).to.equal('/');
  });

  it('should have the separator style  when separatorStyle props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedBreadCrumb separator="/" separatorStyle={{ color: 'rgb(204, 204, 204)' }}>
         <BreadCrumb text="男裝" link="http://uniqlo.com" />
         <BreadCrumb text="男裝" link="http://uniqlo.com" />
      </ThemedBreadCrumb>);
    const items = TestUtils.scryRenderedDOMComponentsWithTag(render, 'li');
    const defaultRenDomNode = ReactDOM.findDOMNode(items[1]);
    expect(defaultRenDomNode.querySelector('span').style.color).to.equal('rgb(204, 204, 204)');
  });
});
