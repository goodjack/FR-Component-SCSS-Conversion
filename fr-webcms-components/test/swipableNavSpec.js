import React from 'react';
import SwipableNav, { SwipableNavItem } from 'uniqlo/SwipableNav';
import Swipable from 'core/Swipable';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { spy } from 'sinon';
import { expect } from 'chai';

describe('SwipableNav', () => {
  let ThemedSwipableNav;
  const nativeTouchData = (val) =>
   ({
     changedTouches: [{ clientX: val }],
   });

  beforeEach(() => {
    ThemedSwipableNav = injectTheme(SwipableNav);
  });

  it('should render SwipableNav components and its children.', () => {
    const swipableNode = TestUtils.renderIntoDocument(
      <ThemedSwipableNav>
        <SwipableNavItem text="See All" link="#" active />
        <SwipableNavItem text="CottonCashmere" link="#" />
      </ThemedSwipableNav>
    );
    const swipeNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, SwipableNavItem);
    expect(swipeNodes.length).to.equal(2);
  });

  it('should render SwipableNav  default selected  with activeIndex passed.', () => {
    const swipableNode = TestUtils.renderIntoDocument(
      <ThemedSwipableNav activeIndex={2} style={{ width: '100PX' }}>
        <SwipableNavItem text="See All" link="#" />
        <SwipableNavItem text="See All" link="#" />
        <SwipableNavItem text="CottonCashmere" link="#" activeStyle={{ color: 'rgb(0, 0, 2)' }}/>
      </ThemedSwipableNav>
    );
    const swipeNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, SwipableNavItem);
    const childNode = ReactDOM.findDOMNode(swipeNodes[2]);
    expect(childNode.style.color).to.equal('rgb(0, 0, 2)');

    const renNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, Swipable);
    const domNode = ReactDOM.findDOMNode(renNodes[0]);
    const node = domNode.querySelector('div');
    expect(node.style['-webkit-transform']).to.equal('translateX(-66.66666666666667%)');
    TestUtils.Simulate.touchMove(node, nativeTouchData(10));
    TestUtils.Simulate.touchMove(node, nativeTouchData(4));
    expect(node.style['-webkit-transform']).to.equal('translateX(-100%)');
    TestUtils.Simulate.touchEnd(node);
    expect(node.style['-webkit-transform']).to.equal('translateX(-100%)');

  });

  it('should render SwipableNavItem components with its props passed.', () => {
    const swipableNode = TestUtils.renderIntoDocument(
      <ThemedSwipableNav>
        <SwipableNavItem text="See All" link="#" />
        <SwipableNavItem text="CottonCashmere" link="#" target="_blank"/>
      </ThemedSwipableNav>
    );
    const swipeNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, SwipableNavItem);
    const domNode = ReactDOM.findDOMNode(swipeNodes[0]);
    expect(domNode.getAttribute('href')).to.equal('#');
    expect(domNode.getAttribute('target')).to.equal('_self');
    expect(domNode.textContent).to.equal('See All');
    const dom2Node = ReactDOM.findDOMNode(swipeNodes[1]);
    expect(dom2Node.getAttribute('target')).to.equal('_blank');
  });

  it('should trigger the onPress event', () => {
    const opPressSpy = spy();
    const swipableNode = TestUtils.renderIntoDocument(
      <ThemedSwipableNav>
        <SwipableNavItem text="See All" link="#" />
        <SwipableNavItem text="CottonCashmere" link="#" onPress={opPressSpy} />
      </ThemedSwipableNav>
    );
    const swipeNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, SwipableNavItem);
    const childNode = ReactDOM.findDOMNode(swipeNodes[1]);
    TestUtils.Simulate.mouseDown(childNode);
    expect(opPressSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

});
