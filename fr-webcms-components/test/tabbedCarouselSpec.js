import React from 'react';
import TabbedCarousel from 'TabbedCarousel';
import Tabs, { Tab } from 'uniqlo/Tabs';
import Carousel from 'Carousel';
import Text from 'Text';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';

describe('TabbedCarousel', () => {
  it('should Render the Carousel and Tabs', () => {
    const result = TestUtils.renderIntoDocument(<TabbedCarousel>
        <Tabs cols={2}>
          <Tab
            text="Head 1"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
          <Tab
            text="Head 2"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
        </Tabs>
        <Carousel height={400}>
          <Text>Some Text for the carousel</Text>
          <Text>Some Text for the carousel</Text>
        </Carousel>
      </TabbedCarousel>);
    const carousel = TestUtils.findRenderedComponentWithType(result, Carousel);
    expect(carousel.props.autoScroll).to.equal(false);
    expect(carousel.props.display).to.equal(1);
    expect(carousel.props.tabHead).to.equal(false);
    expect(carousel.props.navHead).to.equal(false);
    expect(carousel.props.scroll).to.equal(1);
    expect(carousel.props.current).to.equal(0);
    const tabset = TestUtils.findRenderedComponentWithType(result, Tabs);
    expect(typeof tabset.props.onTabChange).to.equal('function');
  });

  it('should override Carousel props', () => {
    const positive = true;
    const negative = false;
    const result = TestUtils.renderIntoDocument(<TabbedCarousel>
        <Tabs cols={2}>
          <Tab
            text="Head 1"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
          <Tab
            text="Head 2"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
        </Tabs>
        <Carousel autoScroll={positive} animation={'scroll'} tabHead={negative} navHead={positive}>
          <Text>Some Text for the carousel</Text>
          <Text>Some Text for the carousel</Text>
        </Carousel>
      </TabbedCarousel>);
    const carousel = TestUtils.findRenderedComponentWithType(result, Carousel);

    // expect(carousel.props.autoScroll).to.equal(false);
    expect(carousel.props.display).to.equal(1);
    expect(carousel.props.tabHead).to.equal(false);
    expect(carousel.props.navHead).to.equal(false);
    expect(carousel.props.scroll).to.equal(1);
    expect(carousel.props.current).to.equal(0);
    const tabset = TestUtils.findRenderedComponentWithType(result, Tabs);
    expect(typeof tabset.props.onTabChange).to.equal('function');
  });

  it('should render the first Tabs and Carousel when more than one is supplied', () => {
    const result = TestUtils.renderIntoDocument(<TabbedCarousel>
        <Tabs cols={2}>
          <Tab
            text="Head 1"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
          <Tab
            text="Head 2"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
        </Tabs>
        <Tabs cols={2}>
          <Tab
            text="Head 3"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
          <Tab
            text="Head 4"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
        </Tabs>
        <Carousel height={400}>
          <Text>Some Text for the carousel</Text>
          <Text>Some Text for the carousel</Text>
        </Carousel>
      </TabbedCarousel>);
    const carousel = TestUtils.findRenderedComponentWithType(result, Carousel);
    const tabset = TestUtils.findRenderedComponentWithType(result, Tabs);
    const tabsetDOM = ReactDOM.findDOMNode(tabset);
    const carouselDOM = ReactDOM.findDOMNode(carousel);
    expect(tabsetDOM.childNodes[0].textContent).to.equal('Head 1');
    expect(carouselDOM.childNodes[0].textContent).to.contains('carousel');
  });

  it('should render Carousel as first element', () => {
    const result = TestUtils.renderIntoDocument(<TabbedCarousel position={'bottom'}>
        <Tabs cols={2}>
          <Tab
            text="Head 1"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
          <Tab
            text="Head 2"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
        </Tabs>
        <Carousel height={400}>
          <Text>Some Text for the carousel</Text>
          <Text>Some Text for the carousel</Text>
        </Carousel>
      </TabbedCarousel>);
    const resultDOM = ReactDOM.findDOMNode(result);
    expect(resultDOM.childNodes[0].textContent).to.contains('carousel');
    expect(resultDOM.childNodes[0].textContent).to.not.contains('Head');
  });

  it('should Update the props of the carousel when the user selects tab', () => {
    const result = TestUtils.renderIntoDocument(<TabbedCarousel>
        <Tabs cols={2}>
          <Tab
            text="Head 1"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
          <Tab
            text="Head 2"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
        </Tabs>
        <Carousel height={400}>
          <Text>Some Text for the carousel</Text>
          <Text>Some Text for the carousel</Text>
        </Carousel>
      </TabbedCarousel>);
    const carousel = TestUtils.findRenderedComponentWithType(result, Carousel);
    const tabset = TestUtils.findRenderedComponentWithType(result, Tabs);
    expect(tabset.props.defaultTabIndex).to.equal(0);
    expect(tabset.props.defaultTabIndex).to.equal(0);
    tabset.props.onTabChange(1);
    expect(carousel.props.current).to.equal(1);
    expect(tabset.props.defaultTabIndex).to.equal(1);
  });

  it('should not Update the props of the carousel when the click triggers with invalid value', () => {
    const result = TestUtils.renderIntoDocument(<TabbedCarousel>
        <Tabs cols={2}>
          <Tab
            text="Head 1"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
          <Tab
            text="Head 2"
            link="http://www.uniqlo.com/jp/store/feature/uq/new/baby/"
          />
        </Tabs>
        <Carousel height={400}>
          <Text>Some Text for the carousel</Text>
          <Text>Some Text for the carousel</Text>
        </Carousel>
      </TabbedCarousel>);
    const carousel = TestUtils.findRenderedComponentWithType(result, Carousel);
    const tabset = TestUtils.findRenderedComponentWithType(result, Tabs);
    tabset.props.onTabChange();
    expect(carousel.props.current).to.equal(0);
  });
});
