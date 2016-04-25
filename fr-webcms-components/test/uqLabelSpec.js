import React from 'react';
import UqLabel from 'uniqlo/UqLabel';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

describe('UqLabel', () => {
  let ThemedUqLabel;

  beforeEach(() => {
    ThemedUqLabel = injectTheme(UqLabel);
  });

  it('should capture props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedUqLabel
      id="testId" className="testClass" text="labelText" type="promo"
    />);
    expect(render.props.id).to.equal('testId');
    expect(render.props.className).to.equal('testClass');
    expect(render.props.text).to.equal('labelText');
    expect(render.props.type).to.equal('promo');
  });

  it('should set style for type discount passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedUqLabel text="sale" type="discount" />);
    const UqLabelDomNode = ReactDOM.findDOMNode(render);
    expect(UqLabelDomNode.style['background-color']).to.equal('rgb(255, 0, 0)');
    expect(UqLabelDomNode.style.color).to.equal('rgb(255, 255, 255)');
    expect(UqLabelDomNode.textContent).to.equal('sale');
  });

  it('should set style for type lowstock passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedUqLabel
      text="lowstock" type="onlineLowStock"
    />);
    const UqLabelDomNode = ReactDOM.findDOMNode(render);
    expect(UqLabelDomNode.style['background-color']).to.equal('rgb(97, 97, 97)');
    expect(UqLabelDomNode.style.color).to.equal('rgb(255, 255, 255)');
    expect(UqLabelDomNode.textContent).to.equal('lowstock');
  });

  it('should set style for type promo passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedUqLabel text="promotion" type="promo" />);
    const UqLabelDomNode = ReactDOM.findDOMNode(render);
    expect(UqLabelDomNode.style['background-color']).to.equal('rgb(255, 0, 0)');
    expect(UqLabelDomNode.style.color).to.equal('rgb(255, 255, 255)');
    expect(UqLabelDomNode.textContent).to.equal('promotion');
  });

  it('should set style for type new passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedUqLabel text="new" type="new" />);
    const UqLabelDomNode = ReactDOM.findDOMNode(render);
    expect(UqLabelDomNode.style['background-color']).to.equal('rgb(0, 0, 0)');
    expect(UqLabelDomNode.style.color).to.equal('rgb(255, 255, 255)');
    expect(UqLabelDomNode.textContent).to.equal('new');
  });

  it('should set style for type multiBuy passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedUqLabel text="multi-buy" type="multiBuy" />);
    const UqLabelDomNode = ReactDOM.findDOMNode(render);
    expect(UqLabelDomNode.style['background-color']).to.equal('rgb(0, 0, 0)');
    expect(UqLabelDomNode.style.color).to.equal('rgb(255, 255, 255)');
    expect(UqLabelDomNode.textContent).to.equal('multi-buy');
  });

  it('should set style for type limited passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedUqLabel
      text="Limited" type="limitedOffer"
    />);
    const UqLabelDomNode = ReactDOM.findDOMNode(render);
    expect(UqLabelDomNode.style['background-color']).to.equal('rgb(0, 0, 0)');
    expect(UqLabelDomNode.style.color).to.equal('rgb(255, 255, 255)');
    expect(UqLabelDomNode.textContent).to.equal('Limited');
  });

});
