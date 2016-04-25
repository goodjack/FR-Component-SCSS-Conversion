import React from 'react';
import Text from 'Text';
import Heading from 'Heading';
import Image from 'core/Image';
import ThisOrThat from 'uniqlo/ThisOrThat';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';

/* global expect */

describe('ThisOrThat', () => {
  let ThemedThisOrThat;

  beforeEach(() => {
    ThemedThisOrThat = injectTheme(ThisOrThat);
  });

  it('should render all the props passed', () => {
    const props = {
      id: 'ThisOrThatId',
      className: 'className',
      style: { width: 50 },
      thisImageSrc: 'https://facebook.github.io/react/img/logo_og.png',
      thatImageSrc: 'https://facebook.github.io/react/img/logo_og.png',
      overlayText: 'OR',
      primaryHeading: 'UNIQLO ASK',
      secondaryHeading: 'Pattern or Plain for the Weekend?',
      thisLink: 'http://www.uniqlo.com/jp/stylingbook/pc/style/7790',
      thatLink: 'http://www.uniqlo.com/jp/stylingbook/pc/style/7746',
    };
    const render = TestUtils.renderIntoDocument(<ThemedThisOrThat {...props } />);

    expect(render.props.id).to.equal('ThisOrThatId');
    expect(render.props.className).to.equal('className');
    expect(render.props.style.width).to.equal(50);
    expect(render.props.thisImageSrc).to.equal('https://facebook.github.io/react/img/logo_og.png');
    expect(render.props.thatImageSrc).to.equal('https://facebook.github.io/react/img/logo_og.png');
    expect(render.props.overlayText).to.equal('OR');
    expect(render.props.primaryHeading).to.equal('UNIQLO ASK');
    expect(render.props.secondaryHeading).to.equal('Pattern or Plain for the Weekend?');
    expect(render.props.thisLink).to.equal('http://www.uniqlo.com/jp/stylingbook/pc/style/7790');
    expect(render.props.thatLink).to.equal('http://www.uniqlo.com/jp/stylingbook/pc/style/7746');
  });

  it('should check the Image component rendered', () => {
    const render = TestUtils.renderIntoDocument(<ThemedThisOrThat
      primaryHeading="UNIQLO ASK"
      secondaryHeading="Pattern or Plain for the Weekend?"
      thisImageSrc="https://facebook.github.io/react/img/logo_og.png"
      thatImageSrc="https://facebook.github.io/react/img/logo_og.png"
      thisLink="http://www.uniqlo.com/jp/stylingbook/pc/style/7790"
      thatLink="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      overlayText="OR"
      targetwindow="_blank"
    />
  );
    const ImagePlusTextDomNode = TestUtils.scryRenderedComponentsWithType(render, Image);
    expect(ImagePlusTextDomNode.length).to.equal(2);
  });

  it('should check the Heading component rendered', () => {
    const render = TestUtils.renderIntoDocument(<ThemedThisOrThat
      primaryHeading="UNIQLO ASK"
      secondaryHeading="Pattern or Plain for the Weekend?"
      thisImageSrc="https://facebook.github.io/react/img/logo_og.png"
      thatImageSrc="https://facebook.github.io/react/img/logo_og.png"
      thisLink="http://www.uniqlo.com/jp/stylingbook/pc/style/7790"
      thatLink="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      overlayText="OR"
      targetwindow="_blank"
    />
  );
    const ImagePlusTextDomNode = TestUtils.scryRenderedComponentsWithType(render, Heading);
    expect(ImagePlusTextDomNode.length).to.equal(2);
  });

  it('should render image of ThisOrThat component', () => {
    const render = TestUtils.renderIntoDocument(<ThemedThisOrThat
      primaryHeading="UNIQLO ASK"
      secondaryHeading="Pattern or Plain for the Weekend?"
      thisImageSrc="https://facebook.github.io/react/img/logo_og.png"
      thatImageSrc="https://facebook.github.io/react/img/logo.png"
      thisLink="http://www.uniqlo.com/jp/stylingbook/pc/style/7790"
      thatLink="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      overlayText="OR"
      targetwindow="_blank"
    />
  );

    const ThisOrThatDomNode = TestUtils.scryRenderedComponentsWithType(render, Image);
    expect(ThisOrThatDomNode[0].props.source).
      to.equal('https://facebook.github.io/react/img/logo_og.png');
    expect(ThisOrThatDomNode[1].props.source).
      to.equal('https://facebook.github.io/react/img/logo.png');
  });

  it('should check the Text component rendered', () => {
    const render = TestUtils.renderIntoDocument(<ThemedThisOrThat
      primaryHeading="UNIQLO ASK"
      secondaryHeading="Pattern or Plain for the Weekend?"
      thisImageSrc="https://facebook.github.io/react/img/logo_og.png"
      thatImageSrc="https://facebook.github.io/react/img/logo.png"
      thisLink="http://www.uniqlo.com/jp/stylingbook/pc/style/7790"
      thatLink="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
      overlayText="OR"
      targetwindow="_blank"
    />
  );

    const ThisOrThatDomNode = TestUtils.scryRenderedComponentsWithType(render, Text);
    expect(ThisOrThatDomNode.length).to.equal(1);
  });

});
