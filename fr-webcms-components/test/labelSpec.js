import React from 'react';
import Label from 'Label';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

describe('Label', () => {
  let ThemedLabel;

  beforeEach(() => {
    ThemedLabel = injectTheme(Label);
  });

  it('should capture props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedLabel
      background="Red" foreground="black" id="testId"
      className="testClass" style={{ width: 10 }}
      text="labelText"
    />);
    expect(render.props.id).to.equal('testId');
    expect(render.props.className).to.equal('testClass');
    expect(render.props.background).to.equal('Red');
    expect(render.props.foreground).to.equal('black');
    expect(render.props.text).to.equal('labelText');
    expect(render.props.style.width).to.equal(10);
  });

  it('should set the style to value passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedLabel
      style={{ width: 10 }} text="labelText"
    />);
    const LabelDomNode = ReactDOM.findDOMNode(render);
    expect(LabelDomNode.style.width).to.equal('10px');
  });

  it('should set the backgroundColor to value passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedLabel
      background="red" text="labelText"
    />);
    const LabelDomNode = ReactDOM.findDOMNode(render);
    expect(LabelDomNode.style['background-color']).to.equal('red');
  });

  it('should set the border to value passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedLabel
      foreground="black" text="labelText"
    />);
    const LabelDomNode = ReactDOM.findDOMNode(render);
    expect(LabelDomNode.style.color).to.equal('black');
  });

  it('should display text value when the text props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedLabel
      text="labelText" foreground="black"
    />);
    const LabelDomNode = ReactDOM.findDOMNode(render);
    expect(LabelDomNode.textContent).to.equal('labelText');
  });

  it('should display the text with specified style when style props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedLabel
      style={{ color: 'red' }} text="labelText"
    />);
    const LabelDomNode = ReactDOM.findDOMNode(render);
    expect(LabelDomNode.style.color).to.equal('red');
  });

});
