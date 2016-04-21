import React from 'react';
import Badge from 'core/Badge';
import Heading from 'Heading';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

describe('Badge', () => {
  let ThemedBadge;

  beforeEach(() => {
    ThemedBadge = injectTheme(Badge);
  });

  it('should capture props is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedBadge
      className="testClass" number={1} badgeStyle={{ width: 50 }}
      style={{ width: 50 }} position="right" maxLimit={1}
    >
      <Heading headingText="Header" />
    </ThemedBadge>);
    expect(render.props.className).to.equal('testClass');
    expect(render.props.number).to.equal(1);
    expect(render.props.maxLimit).to.equal(1);
    expect(render.props.position).to.equal('right');
    expect(render.props.badgeStyle.width).to.equal(50);
    expect(render.props.style.width).to.equal(50);
    expect(render.props.badgeStyle.width).to.equal(50);
    expect(render.props.children.props.headingText).to.equal('Header');
  });

  it('should render badge as expected when child is not passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedBadge
      className="testClass" number={1}
    />);
    const BadgeDomNode = ReactDOM.findDOMNode(render);
    expect(BadgeDomNode.textContent).to.equal('1');
    expect(BadgeDomNode.style['padding-top']).to.equal('12px');
  });

  it('should render badge as expected when child is passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedBadge
      className="testClass" number={1}
    >
      <Heading headingText="Header" />
    </ThemedBadge>);
    let BadgeDomNode = TestUtils.scryRenderedComponentsWithType(render, Heading);
    BadgeDomNode = ReactDOM.findDOMNode(BadgeDomNode[0]);
    expect(BadgeDomNode.textContent).to.equal('Header');
  });

  it('should set the style passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedBadge
      className="testClass" number={1} style={{ width: 15 }}
    />);
    const BadgeDomNode = ReactDOM.findDOMNode(render);
    expect(BadgeDomNode.style.width).to.equal('15px');
  });

  it('should set the badgeStyle passed as props', () => {
    const render = TestUtils.renderIntoDocument(<ThemedBadge
      className="testClass" number={1} badgeStyle={{ width: 15 }}
    />);
    const BadgeDomNode = ReactDOM.findDOMNode(render);
    expect(BadgeDomNode.querySelector('span').getAttribute('style')).to.contain('width:15px');
  });

  it('should set the content to badgesContentLmit+', () => {
    const render = TestUtils.renderIntoDocument(<ThemedBadge
      className="testClass" number={6} maxLimit={5}
    />);
    const BadgeDomNode = ReactDOM.findDOMNode(render);
    expect(BadgeDomNode.textContent).to.equal('5+');
  });

});
