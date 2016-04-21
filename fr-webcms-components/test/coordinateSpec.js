import React from 'react';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import productData from './fixtures/styleDetailAPIResponse';
import Coordinate from 'Coordinate';
import Heading from 'Heading';
import Carousel, { CarouselHead, CarouselTile, NavHead } from 'Carousel';
import sinon from 'sinon';
import ReactDOM from 'react-dom';

/* global expect */

describe('Coordinate', () => {
  // injectTapEventPlugin();
  let ThemedCoordinate;

  let server = null;

  beforeEach(() => {
    ThemedCoordinate = injectTheme(Coordinate);

    server = sinon.fakeServer.create();
    sinon.xhr.supportsCORS = true;
  });

  afterEach(() => {
    server.restore();
  });

  it('Should check the API requesting and response', (done) => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const component = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746"
        mainCopy="ミドルゲージクルーネックベスト"
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();

    // wait a bit for promise.all trigger and dom population
    setTimeout(() => {
      let componentList = TestUtils.scryRenderedComponentsWithType(component, Carousel);
      expect(componentList.length).to.equal(1);
      componentList = TestUtils.scryRenderedComponentsWithType(component, CarouselHead);
      expect(componentList.length).to.equal(1);
      componentList = TestUtils.scryRenderedComponentsWithType(component, NavHead);
      expect(componentList.length).to.equal(2);
      componentList = TestUtils.scryRenderedComponentsWithType(component, CarouselTile);
      expect(componentList.length).to.equal(3);
      componentList = TestUtils.scryRenderedDOMComponentsWithTag(component, 'a');
      expect(componentList.length).to.equal(3);
      done();
    }, 10);
  });

  it('Should handle 404 errors gracefully', () => {
    const component = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746"
        mainCopy="ミドルゲージクルーネックベスト"
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    let componentList = TestUtils.scryRenderedComponentsWithType(component, Carousel);
    expect(componentList.length).to.equal(0);
    componentList = TestUtils.scryRenderedComponentsWithType(component, Heading);
    expect(componentList.length).to.equal(2);
  });

  it('Should handle other errors gracefully', () => {
    const errorResponse = {
      name: 'An Internal Error Has Occurred.',
      message: 'An Internal Error Has Occurred.',
      url: '\/api\/v0\/styleDetail.json?lang=asdf&amp;locale=jp&amp;limit=4&amp;styleId=7746',
    };
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [500, { 'Content-Type': 'application/json' }, JSON.stringify(errorResponse)]
    );
    const component = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746"
        mainCopy="ミドルゲージクルーネックベスト"
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    let componentList = TestUtils.scryRenderedComponentsWithType(component, Carousel);
    expect(componentList.length).to.equal(0);
    componentList = TestUtils.scryRenderedComponentsWithType(component, Heading);
    expect(componentList.length).to.equal(2);
  });

  it('Should render mainCopy when the props is passed', () => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746"
        mainCopy="ミドルゲージクルーネックベスト"
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    const heading = TestUtils.findRenderedDOMComponentWithTag(render, 'h2');
    expect(heading.textContent).to.equal('ミドルゲージクルーネックベスト');
  });

  it('Should render subCopy when the props is passed', () => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746"
        mainCopy="ミドルゲージクルーネックベスト"
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    const heading = TestUtils.findRenderedDOMComponentWithTag(render, 'h3');
    expect(heading.textContent).to.equal('スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ');
  });

  it('Should check the styleId', () => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746"
        mainCopy="ミドルゲージクルーネックベスト"
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    expect(render.props.styleId).to.equal('7746');
  });

  it('Should check the Id  when the props is passed', () => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746" id="CoordinateId"
        mainCopy="ミドルゲージクルーネックベスト"
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    const DomNode = ReactDOM.findDOMNode(render);
    expect(DomNode.getAttribute('id')).to.equal('CoordinateId');
  });

  it('Should check the ClassName  when the props is passed', () => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746" className="Coordinate"
        mainCopy="ミドルゲージクルーネックベスト"
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    const DomNode = ReactDOM.findDOMNode(render);
    expect(DomNode.getAttribute('class')).to.equal('Coordinate');
  });

  it('Should check the style when the props is passed', () => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746" className="Coordinate"
        mainCopy="ミドルゲージクルーネックベスト" style={{ color: 'red' }}
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    const DomNode = ReactDOM.findDOMNode(render);
    expect(DomNode.style.color).to.equal('red');
  });

  it('Should check the mainCopyStyle when the props is passed', () => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746" className="Coordinate"
        mainCopy="ミドルゲージクルーネックベスト" mainCopyStyle={{ color: 'red' }}
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    const heading = TestUtils.findRenderedDOMComponentWithTag(render, 'h2');
    expect(heading.style.color).to.equal('red');
  });

  it('Should check the subCopyStyle when the props is passed', () => {
    server.respondWith(
      'POST',
      'http://style.uniqlo.com/api/v0/styleDetail.json?lang=ja&locale=jp&limit=4&styleId=7746',
      [200, { 'Content-Type': 'application/json' }, JSON.stringify(productData)]
    );
    const render = TestUtils.renderIntoDocument(
      <ThemedCoordinate lang="ja" limit="4" locale="jp" styleId="7746" className="Coordinate"
        mainCopy="ミドルゲージクルーネックベスト" subCopyStyle={{ color: 'red' }}
        subCopy="スリムボーイフレンドフィットアンクルジーンズスリムボーイフレンドフィットアンクルジーンズ"
      />);
    server.respond();
    const heading = TestUtils.findRenderedDOMComponentWithTag(render, 'h3');
    expect(heading.style.color).to.equal('red');
  });

});
