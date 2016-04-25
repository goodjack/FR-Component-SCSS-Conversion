import React from 'react';
import ReactDOM from 'react-dom';
import ImagePlusText from 'uniqlo/ImagePlusText';
import ProxyLink from 'core/ProxyLink';
import PopupSlider from 'uniqlo/PopupSlider';
import Hero from 'uniqlo/Hero';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

describe('PopupSlider', () => {
  let ThemedPopupSlider;

  beforeEach(() => {
    ThemedPopupSlider = injectTheme(PopupSlider);
  });

  it('should capture all the props passed to sliderPopup component', () => {

    const sliderPopup = TestUtils.renderIntoDocument(<ThemedPopupSlider
      title="HEATTECH"
      subTitle="Heat-Genarating Clothing"
      linkText="See How to Layer HEATTECH"
      imageSrc="images/sample-f.png"
    >
      <ImagePlusText
        variation="imageTop"
        imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
        text="Learn about the science behind the HEATTECH"
        linkText="SHOP LOOK"
        link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      />
      <ImagePlusText
        variation="imageTop"
        imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"
        text="Learn about the science behind the HEATTECH"
        linkText="SHOP LOOK"
        link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      />
    </ThemedPopupSlider>);
    expect(sliderPopup.props.title).to.equal('HEATTECH');
    expect(sliderPopup.props.subTitle).to.equal('Heat-Genarating Clothing');
    expect(sliderPopup.props.linkText).to.equal('See How to Layer HEATTECH');
    expect(sliderPopup.props.imageSrc).to.equal('images/sample-f.png');
  });

  it('should render the Hero for PopupSlider component when props passed', () => {

    const render = TestUtils.renderIntoDocument(<ThemedPopupSlider
      title="HEATTECH"
      subTitle="Heat-Genarating Clothing"
      linkText="See How to Layer HEATTECH"
      imageSrc="images/sample-f.png"
    >
      <ImagePlusText
        variation="imageTop"
        imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
        text="Learn about the science behind the HEATTECH"
        linkText="SHOP LOOK"
        link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      />
    </ThemedPopupSlider>);
    const hero = TestUtils.scryRenderedComponentsWithType(render, Hero);
    const heroNode = ReactDOM.findDOMNode(hero[0]);
    expect(heroNode.querySelector('h1').textContent).to.equal('HEATTECH');
    expect(heroNode.querySelector('h3').textContent).to.equal('Heat-Genarating Clothing');
  });

  it('should render the ProxyLink for PopupSlider component when props passed', () => {
    const render = TestUtils.renderIntoDocument(<ThemedPopupSlider
      title="HEATTECH"
      subTitle="Heat-Genarating Clothing"
      linkText="See How to Layer HEATTECH"
      imageSrc="images/sample-f.png"
    >
      <ImagePlusText
        variation="imageTop"
        imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
        text="Learn about the science behind the HEATTECH"
        linkText="SHOP LOOK"
        link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      />
    </ThemedPopupSlider>);
    const renNode = TestUtils.scryRenderedComponentsWithType(render, ProxyLink);
    const renderedNode = ReactDOM.findDOMNode(renNode[0]);
    expect(renderedNode.textContent).to.equal('See How to Layer HEATTECH');
  });

  it('should render the ImagePlusText when link clicked', () => {
    const render = TestUtils.renderIntoDocument(<ThemedPopupSlider
      title="HEATTECH"
      subTitle="Heat-Genarating Clothing"
      linkText="See How to Layer HEATTECH"
      imageSrc="images/sample-f.png"
    >
      <ImagePlusText
        variation="imageTop"
        imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
        text="Learn about the science behind the HEATTECH"
        linkText="SHOP LOOK"
        link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      />
      <ImagePlusText
        variation="imageTop"
        imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
        text="Learn about the science behind the HEATTECH"
        linkText="SHOP LOOK"
        link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      />
    </ThemedPopupSlider>);
    const renNode = TestUtils.scryRenderedComponentsWithType(render, ProxyLink);
    const renderedNode = ReactDOM.findDOMNode(renNode[0]);
    let childrenNodes = TestUtils.scryRenderedComponentsWithType(render, ImagePlusText);
    expect(childrenNodes.length).to.equal(0);
    TestUtils.Simulate.click(renderedNode);
    childrenNodes = TestUtils.scryRenderedComponentsWithType(render, ImagePlusText);
    expect(childrenNodes.length).to.equal(2);
  });

});
