import React from 'react';
import ReactDOM from 'react-dom';
import Tabs, { Tab } from 'uniqlo/Tabs';
import RollOverImage from 'RollOverImage';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('Tabs', () => {

  it('should render Tab components as children.', () => {
    const tabSetNode = TestUtils.renderIntoDocument(
      <Tabs cols={3} defaultTabIndex={0}>
        <Tab
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
        />
        <Tab
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
        />
      </Tabs>
    );
    const tabNodes = TestUtils.scryRenderedComponentsWithType(tabSetNode, Tab);
    expect(tabNodes.length).to.equal(2);
    const tabSet = TestUtils.findRenderedComponentWithType(tabSetNode, Tabs);
    expect(tabSet.props.defaultTabIndex).to.equal(0);
  });

  it('Tabs should render text with given props.', () => {
    const tabSetNode = TestUtils.renderIntoDocument(
      <Tabs cols={3}>
        <Tab
          text="some text"
          target="_blank"
          link="some_place"
        />
      </Tabs>
    );
    const tabNode = TestUtils.findRenderedComponentWithType(tabSetNode, Tab);
    const linkNode = TestUtils.findRenderedDOMComponentWithTag(tabNode, 'a');
    expect(linkNode.textContent).to.equal('some text');
    expect(linkNode.getAttribute('href')).to.equal('some_place');
    expect(linkNode.getAttribute('target')).to.equal('_blank');
  });

  it('should render RollOverImage component if image is passed as props', () => {
    const tabSetNode = TestUtils.renderIntoDocument(
      <Tabs
        cols={3}
      >
        <Tab
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
        />
      </Tabs>
    );

    const tabNode = TestUtils.findRenderedComponentWithType(tabSetNode, Tab);
    const rollOverImageNode = TestUtils.scryRenderedComponentsWithType(tabNode, RollOverImage);
    expect(rollOverImageNode.length).to.equal(1);
  });

  it('should switch between rollOverImage and defaultImage on mouseEnter and mouseLeave respectively.', () => {
    const tabSetNode = TestUtils.renderIntoDocument(
      <Tabs cols={3}>
        <Tab
          defaultStyle={{ color: 'red' }}
          hoverStyle={{ color: 'black' }}
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
        />
      </Tabs>
    );

    const tabNode = TestUtils.findRenderedComponentWithType(tabSetNode, Tab);
    const rollOverImageNode = TestUtils.scryRenderedComponentsWithType(tabNode, RollOverImage);
    const linkNode = TestUtils.findRenderedDOMComponentWithTag(rollOverImageNode[0], 'a');
    const imageNode = TestUtils.findRenderedDOMComponentWithTag(rollOverImageNode[0], 'img');

    TestUtils.Simulate.mouseOver(linkNode);
    expect(
      imageNode
      .getAttribute('src'))
      .to.equal('http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif'
    );

    TestUtils.Simulate.mouseLeave(linkNode);
    expect(
      imageNode
      .getAttribute('src'))
      .to.equal('http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif'
    );
  });

  it('should trigger onTabChange callback on clicking a tab.', () => {
    const onTabChangeSpy = spy();
    const tabSetNode = TestUtils.renderIntoDocument(
      <Tabs
        onTabChange={onTabChangeSpy}
        cols={3}
      >
        <Tab
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
        />
      </Tabs>
    );

    const tabNode = TestUtils.findRenderedComponentWithType(tabSetNode, Tab);
    const rootDiv = TestUtils.scryRenderedDOMComponentsWithTag(tabNode, 'div');
    TestUtils.Simulate.mouseDown(rootDiv[0]);
    TestUtils.Simulate.mouseEnter(rootDiv[0]);
    TestUtils.Simulate.mouseLeave(rootDiv[0]);
    expect(onTabChangeSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should trigger onPress callback on clicking a tab.', () => {
    const onPressSpy = spy();
    const tabSetNode = TestUtils.renderIntoDocument(
      <Tabs
        cols={3}
      >
        <Tab
          onPress={onPressSpy}
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
        />
      </Tabs>
    );

    const tabNode = TestUtils.findRenderedComponentWithType(tabSetNode, Tab);
    const rootDiv = TestUtils.scryRenderedDOMComponentsWithTag(tabNode, 'div');
    TestUtils.Simulate.mouseDown(rootDiv[0]);
    expect(onPressSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should display content according to tab selection', () => {
    const tabSetNode = TestUtils.renderIntoDocument(
      <Tabs defaultTabIndex={0}>
        <Tab
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
        >
          ONE
        </Tab>
        <Tab
          defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
          hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
        >
          TWO
        </Tab>
      </Tabs>
    );
    const tabNode = TestUtils.scryRenderedComponentsWithType(tabSetNode, Tab);
    const rootDiv = TestUtils.scryRenderedDOMComponentsWithTag(tabNode[1], 'div');
    let content = ReactDOM.findDOMNode(tabSetNode);
    expect(content.textContent).to.equal('ONE');
    TestUtils.Simulate.mouseDown(rootDiv[0]);
    content = ReactDOM.findDOMNode(tabSetNode);
    expect(content.textContent).to.equal('TWO');
  });

  it('should change content when the defaultTabIndex changes', () => {
    const TestComp = React.createClass({
      changeIndex() {
        this.setState({
          defaultIndex: 1,
        });
      },

      render() {
        let openIndex = 0;
        if (this.state && this.state.defaultIndex) {
          openIndex = this.state.defaultIndex;
        }

        return (
          <div onClick={this.changeIndex}>
            <Tabs defaultTabIndex={openIndex}>
              <Tab
                defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
                hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
              >
                ONE
              </Tab>
              <Tab
                defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
                hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
              >
                TWO
              </Tab>
            </Tabs>
          </div>
        );
      },
    });
    const tabSetNode = TestUtils.renderIntoDocument(<TestComp />);
    const tabNode = TestUtils.findRenderedComponentWithType(tabSetNode, Tabs);
    expect(tabNode.props.defaultTabIndex).to.equal(0);
    const content = ReactDOM.findDOMNode(tabSetNode);
    expect(content.textContent).to.equal('ONE');
    TestUtils.Simulate.click(content);
    expect(tabNode.props.defaultTabIndex).to.equal(1);
    expect(content.textContent).to.equal('TWO');
  });
});
