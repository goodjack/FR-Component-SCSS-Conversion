import React from 'react';
import SocialMediaPost from 'uniqlo/SocialMediaPost';
import Image from 'core/Image';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import sinon from 'sinon';

describe('SocialMediaPost', () => {
  let ThemedSocialMediaPost;
  let server = null;
  const facebookData = {
    images: [
      { source: 'testURL' },
      { source: 'testURL' },
      { source: 'testURL' },
      { source: 'testURL' },
      { source: 'testURL' },
      { source: 'testURL' },
      { source: 'http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527' },
    ],
    name: 'test content http://test.com #hello testing @auth',
    link: 'http://test.com',
    from: {
      name: 'Author',
    },
  };

  const twitterData = {};
  twitterData.user = {};
  twitterData.entities = {};
  twitterData.entities.media = [{}];
  twitterData.text = 'test content http://test.com #hello testing @auth';
  twitterData.user[`screen_name`] = 'Author';
  twitterData.entities.media[0][`media_url`] = 'http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527';

  beforeEach(() => {
    ThemedSocialMediaPost = injectTheme(SocialMediaPost);
    server = sinon.fakeServer.create();
    sinon.xhr.supportsCORS = true;
  });

  afterEach(() => {
    server.restore();
  });

  it('should render SocialMediaPost component when no post id is passed.', () => {
    const renNode = TestUtils.renderIntoDocument(
      <ThemedSocialMediaPost
        title="test title"
        type="twitter"
        imageSrc = "http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
        content="Test"
        titleImage="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
        style={{ width: 50 }}
        imageStyle={{ width: 50 }}
        titleStyle={{ width: 50 }}
      />
    );
    expect(renNode.props.title).to.equal('test title');
    expect(renNode.props.type).to.equal('twitter');
    expect(renNode.props.style.width).to.equal(50);
    expect(renNode.props.imageStyle.width).to.equal(50);
    expect(renNode.props.titleStyle.width).to.equal(50);
    const imageNodes = TestUtils.scryRenderedComponentsWithType(renNode, Image);
    expect(imageNodes.length).to.equal(2);
  });

  it('should render SocialMediaPost when facebook post id passed to the component', () => {
    server.respondWith('GET', '/social/facebook?id=1186570351383399', [200, { 'Content-Type': 'text/html' }, JSON.stringify(facebookData)]);
    const render = TestUtils.renderIntoDocument(
      <ThemedSocialMediaPost
        postId="1186570351383399"
        type="facebook"
        titleImage="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
      />
    );
    server.respond();
    const renNode = TestUtils.scryRenderedComponentsWithType(render, Image);
    expect(renNode.length).to.equal(2);
    const renDomNode = ReactDOM.findDOMNode(render);
    expect(renDomNode.querySelector('h4').textContent).to.equal('@ Author');
  });

  it('should render SocialMediaPost when Twitter post id passed to the component', () => {
    server.respondWith('GET', '/social/twitter?id=1186570351383399', [200, { 'Content-Type': 'text/html' }, JSON.stringify(twitterData)]);
    const render = TestUtils.renderIntoDocument(
      <ThemedSocialMediaPost
        postId="1186570351383399"
        type="twitter"
        titleImage="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
      />
    );
    server.respond();
    const renNode = TestUtils.scryRenderedComponentsWithType(render, Image);
    expect(renNode.length).to.equal(2);
    const renDomNode = ReactDOM.findDOMNode(render);
    expect(renDomNode.querySelector('h4').textContent).to.equal('@ Author');
  });

  it('should render text only SocialMediaPost when variation props textOnly passed to the component', () => {
    server.respondWith('GET', '/social/twitter?id=1186570351383399', [200, { 'Content-Type': 'text/html' }, JSON.stringify(twitterData)]);
    const render = TestUtils.renderIntoDocument(
      <ThemedSocialMediaPost
        postId="1186570351383399"
        variation="textOnly"
        type="twitter"
        titleImage="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"
      />
    );
    server.respond();
    const renNode = TestUtils.scryRenderedComponentsWithType(render, Image);
    expect(renNode.length).to.equal(1);
  });
});
