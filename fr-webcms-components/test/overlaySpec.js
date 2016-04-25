import React from 'react';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import ReactDOM from 'react-dom';
import Button from 'Button';
import Overlay from 'Overlay';

/* global expect */

describe('Overlay', () => {
  // injectTapEventPlugin();
  let ThemedOverlay;

  beforeEach(() => {
    ThemedOverlay = injectTheme(Overlay);
  });

  it('checks the overlay is rendred properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedOverlay
      imageSrc = "http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
      title = "COMFORT AT HOME"
      subtitle = "Experience the domestic bliss of lounge wear"
      linkText = "SHOP"
      variation ="overlay"
    />
    );
    const DomNode = TestUtils.scryRenderedComponentsWithType(render, Overlay);
    expect(DomNode).to.be.defined; // eslint-disable-line no-unused-expressions
  });

  it('checks the position of overlay is rendred properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedOverlay
      imageSrc = "http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
      variation ="overlay"
    />
    );
    const domNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'div');
    expect(domNode[0].style.position).to.equal('relative');
  });

  it('checks the exact number of button is rendred properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedOverlay
      imageSrc = "http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
      variation ="overlay"
    >
      <Button label="MEN" link="#"/>
      <Button label="WOMEN"/>
      <Button label="BABY"/>
      <Button label="GIRL"/>
      <Button label="BOY"/>
    </ThemedOverlay>);
    const domNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'button');
    expect(domNode.length).to.equal(5);
  });

  it('checks the text content of button is rendred properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedOverlay
      imageSrc = "http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
      variation ="overlay"
    >
      <Button label="MEN" link="#"/>
      <Button label="WOMEN"/>
    </ThemedOverlay>);
    const domNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'button');
    expect(domNode[0].textContent).to.equal('MEN');
  });

  it('checks the link props of button is set properly', () => {
    const render = TestUtils.renderIntoDocument(<ThemedOverlay
      imageSrc = "http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
      variation ="overlay"
    >
      <Button label="MEN" link="google"/>
      <Button label="WOMEN"/>
      <Button label="BABY"/>
      <Button label="GIRL"/>
      <Button label="BOY"/>
    </ThemedOverlay>);
    const domNode = TestUtils.scryRenderedComponentsWithType(render, Button);
    expect(domNode[0].props.link).to.equal('google');
  });
  it('checks the overlay is hidden before  click', () => {
    const render = TestUtils.renderIntoDocument(<ThemedOverlay
      imageSrc = "http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
      variation ="overlay"
      className = "overlay"
    >
      <Button label="MEN" link="google"/>
      <Button label="WOMEN"/>
      <Button label="BABY"/>
      <Button label="GIRL"/>
      <Button label="BOY"/>
    </ThemedOverlay>);
    const DomNode = ReactDOM.findDOMNode(render);
    expect(DomNode.querySelectorAll('.overlay')[0].style.display).to.equal('none');
  });

  it('checks the overlay is shown on  click', () => {
    const render = TestUtils.renderIntoDocument(<ThemedOverlay
      imageSrc = "http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
      variation ="overlay"
      title = "COMFORT AT HOME"
      subtitle = "Experience the domestic bliss of lounge wear"
      linkText = "SHOP"
      className = "overlay"
    >
      <Button label="MEN" link="google"/>
      <Button label="WOMEN"/>
      <Button label="BABY"/>
      <Button label="GIRL"/>
      <Button label="BOY"/>
    </ThemedOverlay>);
    let renderedNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'a');
    const anchorElem = ReactDOM.findDOMNode(renderedNode[0]);
    TestUtils.Simulate.click(anchorElem);
    renderedNode = ReactDOM.findDOMNode(render);
    expect(renderedNode.querySelectorAll('.overlay')[0].style.display).to.equal('block');
  });

});
