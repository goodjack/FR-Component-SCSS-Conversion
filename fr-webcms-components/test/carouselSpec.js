import React from 'react';
import Carousel, { CarouselHead, CarouselTile, NavHead } from 'Carousel';
import Text from 'Text';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('Carousel', () => {
  const positive = true;
  const negative = false;
  describe('Rendering:', () => {
    it('should render the components with CarouselTile and CarouselHead passed to it', () => {
      const style = {
        border: '1px solid',
      };
      const result = TestUtils.renderIntoDocument(<Carousel height={400}>
        <CarouselTile style={style}>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselHead>
          <Text>OUTERWEAR</Text>
          <Text>OUTERWEAR</Text>
        </CarouselHead>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      const head = TestUtils.scryRenderedComponentsWithType(result, CarouselHead);
      expect(tiles.length).to.equal(2);
      expect(head.length).to.equal(1);
      const headContent = ReactDOM.findDOMNode(head[0]);
      expect(headContent.childNodes.length).to.equal(2);
    });

    it('should render the components with CarouselTile', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400}>
          <Text>Some Text for the carousel</Text>
          <Text>Some Text for the carousel</Text>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      expect(tiles.length).to.equal(2);
    });

    it('should pass style and update highlightStyle on selection to CarouselHead', () => {
      const style = {
        backgroundColor: 'red',
      };
      const highlightStyle = {
        backgroundColor: 'blue',
      };
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabPosition={'bottom'}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselHead style={style} highlightStyle={highlightStyle}>
          <Text>OUTERWEAR</Text>
          <Text>OUTERWEAR</Text>
        </CarouselHead>
      </Carousel>);
      const head = TestUtils.scryRenderedComponentsWithType(result, CarouselHead);
      const headContent = ReactDOM.findDOMNode(head[0]);
      const firstChild = headContent.childNodes[0];
      const secondChild = headContent.childNodes[1];
      const firstChildStyle = firstChild.getAttribute('style');
      const secondChildStyle = secondChild.getAttribute('style');
      expect(firstChildStyle).to.contains('background-color:blue');
      expect(secondChildStyle).to.contains('background-color:red');
    });

    it('should not render carousel head when tabHead prop on Carousel is false', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabHead={negative}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselHead>
          <Text>OUTERWEAR</Text>
          <Text>OUTERWEAR</Text>
        </CarouselHead>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      const head = TestUtils.scryRenderedComponentsWithType(result, CarouselHead);
      expect(tiles.length).to.equal(2);
      expect(head.length).to.equal(0);
    });

    it('should render carousel head when tabHead is true and CarouselHead component is not passed', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabHead={positive} tabPosition={'top'}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      const head = TestUtils.scryRenderedComponentsWithType(result, CarouselHead);
      expect(tiles.length).to.equal(2);
      expect(head.length).to.equal(1);
      const headContent = ReactDOM.findDOMNode(head[0]);
      expect(headContent.childNodes.length).to.equal(2);
    });

    it('should render carousel head with childrens equal ot the count of CarouselTile', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabHead={positive}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      let head = TestUtils.scryRenderedComponentsWithType(result, CarouselHead);
      head = ReactDOM.findDOMNode(head[0]);
      expect(head.childNodes.length).to.equal(3);
    });

    it('should render carousel with arrow head when navHead is true', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} navHead={positive}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const nav = TestUtils.scryRenderedComponentsWithType(result, NavHead);
      expect(nav.length).to.equal(2);
    });

    it('should render carousel without arrow head when navHead is false', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} navHead={negative}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const nav = TestUtils.scryRenderedComponentsWithType(result, NavHead);
      expect(nav.length).to.equal(0);
    });

    it('should render an text passed in carouseltile', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} navHead={positive}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const nav = TestUtils.scryRenderedComponentsWithType(result, Text);
      expect(nav.length).to.equal(1);
    });

    it('should render the carouseltile in view port according to the display property', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} navHead={positive} display={2}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      expect(tiles[0].props.style.width).to.equal('50%');
      expect(tiles[1].props.style.width).to.equal('50%');
    });

    it('NavHead should render arrow based on direction prop', () => {
      const upArrow = TestUtils.renderIntoDocument(<NavHead direction={'up'} />);
      const rightArrow = TestUtils.renderIntoDocument(<NavHead direction={'right'} navStyle={{ color: 'red' }}/>);
      const downArrow = TestUtils.renderIntoDocument(<NavHead direction={'down'} size={5}/>);
      const leftArrow = TestUtils.renderIntoDocument(<NavHead direction={'left'}/>);
      const tempArrow = TestUtils.renderIntoDocument(<NavHead direction={'none'}/>);
      const up = ReactDOM.findDOMNode(upArrow);
      const upStyle = up.childNodes[0].getAttribute('style');
      expect(upStyle).to.contains('border-bottom-color:black');
      const down = ReactDOM.findDOMNode(downArrow);
      const downStyle = down.childNodes[0].getAttribute('style');
      expect(downStyle).to.contains('border-top-color:black');
      const right = ReactDOM.findDOMNode(rightArrow);
      expect(right.childNodes[0].getAttribute('style')).to.contains('border-right-color:red');
      const left = ReactDOM.findDOMNode(leftArrow);
      expect(left.childNodes[0].getAttribute('style')).to.contains('border-left-color:black');
      const temp = ReactDOM.findDOMNode(tempArrow);
      const tempStyle = temp.childNodes[0].getAttribute('style');
      expect(tempStyle).to.not.contains('border-right-color:black');
      expect(tempStyle).to.not.contains('border-left-color:black');
      expect(tempStyle).to.not.contains('border-top-color:black');
      expect(tempStyle).to.not.contains('border-bottom-color:black');
    });
  });

  describe('Animation:', () => {
    it('should change the tile prop current if autoScroll is set to true', (done) => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} autoScroll={positive} delay={1000}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      expect(tiles[0].props.current).to.equal(0);
      setTimeout(() => {
        expect(tiles[0].props.current).to.equal(1);
        done();
      }, 1200);
    });

    it('should have transition to left if autoScroll is set to true animation is set to scroll', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} autoScroll={positive} delay={1000} animation={'scroll'}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      const tile = ReactDOM.findDOMNode(tiles[0]);
      const style = tile.getAttribute('style');
      expect(style).to.contains('transition:left');
    });

    it('should have transition to opacity if autoScroll is set to true animation is set to fade', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} autoScroll={positive} delay={1000} animation={'fade'}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      const tile = ReactDOM.findDOMNode(tiles[0]);
      const style = tile.getAttribute('style');
      expect(style).to.contains('transition:opacity');
    });

    it('highlightStyle should be applied to active CarouselHead', (done) => {
      const style = {
        backgroundColor: 'red',
      };
      const highlightStyle = {
        backgroundColor: 'blue',
      };
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabPosition={'bottom'} autoScroll={positive} delay={150}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselHead style={style} highlightStyle={highlightStyle}>
          <Text>OUTERWEAR</Text>
          <Text>OUTERWEAR</Text>
        </CarouselHead>
      </Carousel>);
      const head = TestUtils.scryRenderedComponentsWithType(result, CarouselHead);
      let headContent = ReactDOM.findDOMNode(head[0]);
      let firstChild = headContent.childNodes[0];
      let secondChild = headContent.childNodes[1];
      let firstChildStyle = firstChild.getAttribute('style');
      let secondChildStyle = secondChild.getAttribute('style');
      expect(firstChildStyle).to.contains('background-color:blue');
      expect(secondChildStyle).to.contains('background-color:red');
      setTimeout(() => {
        headContent = ReactDOM.findDOMNode(head[0]);
        firstChild = headContent.childNodes[0];
        secondChild = headContent.childNodes[1];
        firstChildStyle = firstChild.getAttribute('style');
        secondChildStyle = secondChild.getAttribute('style');
        expect(firstChildStyle).to.contains('background-color: red');
        expect(secondChildStyle).to.contains('background-color: blue');
        done();
      }, 200);
    });

  });

  describe('Events:', () => {
    it('should change the active slide when the user click on carousel head', () => {
      const style = {
        backgroundColor: 'red',
      };
      const highlightStyle = {
        backgroundColor: 'blue',
      };
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabPosition={'bottom'}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselHead style={style} highlightStyle={highlightStyle}>
          <Text>OUTERWEAR</Text>
          <Text>OUTERWEAR</Text>
        </CarouselHead>
      </Carousel>);
      const head = TestUtils.scryRenderedComponentsWithType(result, CarouselHead);
      const headContent = ReactDOM.findDOMNode(head[0]);
      TestUtils.Simulate.click(headContent);
      const firstChild = headContent.childNodes[1];
      TestUtils.Simulate.click(firstChild);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      expect(tiles[0].props.current).to.equal(1);
    });

    it('should change the active slide forward when the user click on navigation head', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabHead={negative} navHead={positive}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      const head = TestUtils.scryRenderedComponentsWithType(result, NavHead);
      const nextHead = ReactDOM.findDOMNode(head[1]);
      TestUtils.Simulate.click(nextHead);

      expect(tiles[0].props.current).to.equal(1);
    });

    it('should change the active slide backward when the user click on navigation head', () => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabHead={negative} navHead={positive}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
      const head = TestUtils.scryRenderedComponentsWithType(result, NavHead);
      const prevHead = ReactDOM.findDOMNode(head[0]);
      TestUtils.Simulate.click(prevHead);

      expect(tiles[0].props.current).to.equal(2);
    });

    it('should update the style the user move the mouseover on navigation head', () => {
      const navStyle = {
        backgroundColor: 'red',
      };
      const navHoverStyle = {
        color: 'red',
        backgroundColor: 'blue',
      };
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabHead={negative} navHead={positive} navStyle={navStyle} navHoverStyle={navHoverStyle}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const head = TestUtils.scryRenderedComponentsWithType(result, NavHead);
      let prevHead = ReactDOM.findDOMNode(head[0]);
      let prevStyle = prevHead.getAttribute('style');
      expect(prevStyle).to.contains('background-color:red');
      TestUtils.Simulate.mouseOver(prevHead);
      prevHead = ReactDOM.findDOMNode(head[0]);
      prevStyle = prevHead.getAttribute('style');
      expect(prevStyle).to.contains('background-color: blue');
      TestUtils.Simulate.mouseOut(prevHead);
      prevHead = ReactDOM.findDOMNode(head[0]);
      prevStyle = prevHead.getAttribute('style');
      expect(prevStyle).to.contains('background-color: red');
    });
    it('NavHead should trigger the event supplied in onTouchTap', () => {
      const onTouchTapSpy = spy();
      const upArrow = TestUtils.renderIntoDocument(<NavHead direction={'up'} onTouchTap={onTouchTapSpy} size={10}/>);
      const up = ReactDOM.findDOMNode(upArrow);
      TestUtils.Simulate.click(up);
      expect(onTouchTapSpy.called).to.equal(true);
      const downArrow = TestUtils.renderIntoDocument(<NavHead direction={'down'} onTouchTap={onTouchTapSpy} value={'hello'}/>);
      const down = ReactDOM.findDOMNode(downArrow);
      TestUtils.Simulate.click(down);
      expect(onTouchTapSpy.getCall(1).args[0]).to.be.equal('hello');
    });

    it('should render the carouseltile in view port according to the display property', (done) => {
      const onSlideSpy = spy();
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabHead={positive} autoScroll={positive} delay={100} display={2} onSlide={onSlideSpy}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      const heads = TestUtils.scryRenderedComponentsWithType(result, CarouselHead);
      let lastHead = ReactDOM.findDOMNode(heads[0]);
      lastHead = ReactDOM.findDOMNode(lastHead.childNodes[2]);
      TestUtils.Simulate.click(lastHead);
      setTimeout(() => {
        const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
        expect(tiles[0].props.current).to.equal(1);
        expect(onSlideSpy.called).to.be.equal(true);
        done();
      }, 450);
    });

    it('should run two cycles of scrolling', (done) => {
      const result = TestUtils.renderIntoDocument(<Carousel height={400} tabHead={positive} autoScroll={positive} delay={50} display={2} animation={'scroll'}>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
        <CarouselTile>
          <Text>Some Text for the carousel</Text>
        </CarouselTile>
      </Carousel>);
      setTimeout(() => {
        const tiles = TestUtils.scryRenderedComponentsWithType(result, CarouselTile);
        expect(tiles[0].props.current).to.equal(0);
        done();
      }, 525);
    });
  });
});
