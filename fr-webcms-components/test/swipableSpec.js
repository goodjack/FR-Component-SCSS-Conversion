import React from 'react';
import ReactDOM from 'react-dom';
import Swipable from 'core/Swipable';
import Image from 'core/Image';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

describe('Swipable', () => {
  const nativeTouchData = (val) =>
   ({
     changedTouches: [{ clientX: val }],
   });

  it('should render Swipable components as children.', () => {
    const swipableNode = TestUtils.renderIntoDocument(
      <Swipable>
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334" />
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
      </Swipable>
    );
    const swipeNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, Image);
    expect(swipeNodes.length).to.equal(2);
    const renNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, Swipable);
    expect(renNodes[0].props.pan).to.equal(false);
    expect(renNodes[0].props.display).to.equal(1);
  });

  it('should render display items when  display props passed.', () => {
    const swipableNode = TestUtils.renderIntoDocument(
      <Swipable display={2}>
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334" />
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
      </Swipable>
    );
    const renNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, Swipable);
    const domNode = ReactDOM.findDOMNode(renNodes[0]);
    expect(domNode.querySelector('div').childNodes[0].style.width).to.equal('50%');
    expect(domNode.querySelector('div').childNodes[1].style.width).to.equal('50%');
  });

  it('should swipe items when touchMove event occures.', () => {
    const swipableNode = TestUtils.renderIntoDocument(
        <Swipable display={2} style={{ width: '100px' }} >
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
        </Swipable>
    );
    const renNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, Swipable);
    const domNode = ReactDOM.findDOMNode(renNodes[0]);
    const node = domNode.querySelector('div');
    expect(node.style['-webkit-transform']).to.equal('translateX(0%)');
    TestUtils.Simulate.touchMove(node, nativeTouchData(10));
    TestUtils.Simulate.touchMove(node, nativeTouchData(4));
    expect(node.style['-webkit-transform']).to.equal('translateX(-100%)');
    TestUtils.Simulate.touchEnd(node);
    expect(node.style['-webkit-transform']).to.equal('translateX(0%)');
  });

  it('should swipe pan  when pan props passed true.', () => {
    const swipableNode = TestUtils.renderIntoDocument(
        <Swipable display={2} style={{ width: '100px' }} pan >
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
        </Swipable>
    );
    const renNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, Swipable);
    const domNode = ReactDOM.findDOMNode(renNodes[0]);
    const node = domNode.querySelector('div');
    expect(node.style['-webkit-transform']).to.equal('translateX(0%)');
    TestUtils.Simulate.touchMove(node, nativeTouchData(10));
    TestUtils.Simulate.touchMove(node, nativeTouchData(4));
    expect(node.style['-webkit-transform']).to.equal('translateX(-100%)');
    TestUtils.Simulate.touchEnd(node);
    expect(node.style['-webkit-transform']).to.equal('translateX(-100%)');
  });

  it('should default swipe into the position  when selectedIndex props passed.', () => {
    const swipableNode = TestUtils.renderIntoDocument(
        <Swipable display={2} style={{ width: '100px' }} pan selectedIndex={2}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" />
        </Swipable>
    );
    const renNodes = TestUtils.scryRenderedComponentsWithType(swipableNode, Swipable);
    const domNode = ReactDOM.findDOMNode(renNodes[0]);
    const node = domNode.querySelector('div');
    expect(node.style['-webkit-transform']).to.equal('translateX(-50%)');
    TestUtils.Simulate.touchMove(node, nativeTouchData(10));
    TestUtils.Simulate.touchMove(node, nativeTouchData(4));
    expect(node.style['-webkit-transform']).to.equal('translateX(-100%)');
    TestUtils.Simulate.touchEnd(node);
    expect(node.style['-webkit-transform']).to.equal('translateX(-100%)');
  });

});
