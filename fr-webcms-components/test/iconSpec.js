import React from 'react';
import Favorite from 'SvgIcons/action/Favorite';
import TestUtils from 'react-addons-test-utils';
import injectTheme from './fixtures/injectTheme';
import Icon from 'core/Icon';
import Null from 'core/Null';

// import ActionGrade from 'SvgIcons/action/grade';

/* global expect */

describe('Icon', () => {
  let ThemedIcon;

  beforeEach(() => {
    ThemedIcon = injectTheme(Icon);
  });

  it('should work with default arguments', () => {
    const component = TestUtils.renderIntoDocument(<ThemedIcon name ="Favorite" />);
    const FavoriteNode = TestUtils.scryRenderedComponentsWithType(component, Favorite);
    expect(FavoriteNode).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });
  it('should work with false arguments', () => {
    const component = TestUtils.renderIntoDocument(<ThemedIcon name ="Any" />);
    const Node = TestUtils.scryRenderedComponentsWithType(component, Null);
    expect(Node).to.not.be.undefined; // eslint-disable-line no-unused-expressions
  });

});
