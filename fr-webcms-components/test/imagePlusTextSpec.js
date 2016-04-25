import React from 'react';
import ReactDOM from 'react-dom';
import Text from 'Text';
import Image from 'core/Image';
import ImagePlusText from 'uniqlo/ImagePlusText';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';

/* global expect */

describe('ImagePlusText', () => {
  let ThemedImagePlusText;

  beforeEach(() => {
    ThemedImagePlusText = injectTheme(ImagePlusText);
  });

  it('should render all the props passed', () => {
    const ImagePlusTextProps = {
      id: 'ImagePlusTextId',
      className: 'className',
      style: { width: 50 },
      imageSrc: 'https://facebook.github.io/react/img/logo_og.png',
      imageTitle: 'altText',
      imageStyle: { width: 100 },
      text: 'textContent',
      textStyle: { width: 150 },
      link: 'http://www.uniqlo.com/jp/stylingbook/pc/style/7746',
      linkText: 'Link Text',
      linkStyle: { width: 200 },
      targetwindow: '_blank',
      variation: 'imageRight',
    };
    const render = TestUtils.renderIntoDocument(<ThemedImagePlusText {...ImagePlusTextProps } />);

    expect(render.props.id).to.equal('ImagePlusTextId');
    expect(render.props.className).to.equal('className');
    expect(render.props.style.width).to.equal(50);
    expect(render.props.imageSrc).to.equal('https://facebook.github.io/react/img/logo_og.png');
    expect(render.props.imageTitle).to.equal('altText');
    expect(render.props.imageStyle.width).to.equal(100);
    expect(render.props.text).to.equal('textContent');
    expect(render.props.textStyle.width).to.equal(150);
    expect(render.props.link).to.equal('http://www.uniqlo.com/jp/stylingbook/pc/style/7746');
    expect(render.props.linkText).to.equal('Link Text');
    expect(render.props.linkStyle.width).to.equal(200);
    expect(render.props.targetwindow).to.equal('_blank');
    expect(render.props.variation).to.equal('imageRight');
  });

  it('should check the Image component rendered', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImagePlusText
      variation="imageTop"
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      text="sample Text"
      linkText="SHOP THE LOOK"
      targetwindow="_blank"
      link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
    />
  );
    const ImagePlusTextDomNode = TestUtils.scryRenderedComponentsWithType(render, Image);
    expect(ImagePlusTextDomNode.length).to.equal(1);
  });

  it('should check the image source', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImagePlusText
      variation="imageLeft"
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
    />
  );
    const ImagePlusTextDomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'img');
    expect(ImagePlusTextDomNode.src).to.equal('https://facebook.github.io/react/img/logo_og.png');
  });

  it('should render image of ImagePlusText component', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImagePlusText
      variation="imageBottom"
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      text="sample Text"
      linkText="SHOP THE LOOK"
      targetwindow="_blank"
      link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
    />
  );
    const ImagePlusTextAltTextNode = ReactDOM.findDOMNode(render);
    expect(ImagePlusTextAltTextNode.querySelector('img').getAttribute('src'))
    .to.equal('https://facebook.github.io/react/img/logo_og.png');
  });

  it('should check the anchor link', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImagePlusText
      variation="imageTop"
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      text="Learn about the science behind the HEATTECH"
      linkText="SHOP THE LOOK"
      targetwindow="_blank"
      link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
    />
  );
    const ImagePlusTextDomNode = TestUtils.findRenderedDOMComponentWithTag(render, 'a');
    expect(ImagePlusTextDomNode.getAttribute('href')).
      to.equal('http://www.uniqlo.com/jp/stylingbook/pc/style/7746');
  });

  it('should check the Text component rendered', () => {
    const render = TestUtils.renderIntoDocument(<ThemedImagePlusText
      variation="imageBottom"
      imageSrc="https://facebook.github.io/react/img/logo_og.png"
      text="sample Text"
      linkText="SHOP THE LOOK"
      targetwindow="_blank"
      link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
    />
  );
    const ImagePlusTextDomNode = TestUtils.scryRenderedComponentsWithType(render, Text);
    expect(ImagePlusTextDomNode.length).to.equal(1);
  });

});
