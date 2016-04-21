import React from 'react';
import ReactDOM from 'react-dom';
import List, { ListItem } from 'core/List';
import injectTheme from './fixtures/injectTheme';
import TestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { spy } from 'sinon';

describe('List', () => {
  let ThemedList;
  beforeEach(() => {
    ThemedList = injectTheme(List);
  });

  it('should display all list items when render the component', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedList>
        <ListItem link="http://google.com" label="Test1" />
        <ListItem link="http://google.com" label="Test2" />
      </ThemedList>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
    expect(renNode.length).to.equal(2);
  });

  it('should have the orientation horizontal when orientation props horizontal is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedList orientation="horizontal">
        <ListItem link="http://google.com" label="Test1" />
        <ListItem link="http://google.com" label="Test2" />
      </ThemedList>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
    const item = ReactDOM.findDOMNode(renNode[0]);
    expect(item.style.float).to.equal('left');
  });

  it('should have the orientation vertical when orientation props vertical is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedList orientation="vertical">
        <ListItem link="http://google.com" label="Test1" />
        <ListItem link="http://google.com" label="Test2" />
      </ThemedList>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
    const item = ReactDOM.findDOMNode(renNode[0]);
    expect(item.style.float).to.equal('');
  });

  it('should have the default orientation vertical when no orientation props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedList>
        <ListItem link="http://google.com" label="Test1" />
        <ListItem link="http://google.com" label="Test2" />
      </ThemedList>
    );
    const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
    const item = ReactDOM.findDOMNode(renNode[0]);
    expect(item.style.float).to.equal('');
  });

  it('should override the styles of the root element when style  props is passed', () => {
    const render = TestUtils.renderIntoDocument(
      <ThemedList orientation="horizontal" style={{ boxShadow: '10px 10px 5px red' }} >
        <ListItem link="http://google.com" label="Test1" />
        <ListItem link="http://google.com" label="Test2" />
      </ThemedList>
    );
    const ListDOMNode = ReactDOM.findDOMNode(render);
    expect(ListDOMNode.style.boxShadow).to.equal('red 10px 10px 5px');
  });

  describe('ListItem', () => {
    it('should display nested list indicator icon when nested list items are detected', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" label="Test1" />
          <ListItem
            initiallyOpen
            autoGenerateNestedIndicator
            label="Inbox"
          ><List>
              <ListItem link="http://google.com" label="Test1" />
              <ListItem link="http://google.com" label="Test2" />
            </List>
          </ListItem>
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[1]);
      expect(renDomNode.querySelector('path').getAttribute('d')).to.equal('M7 14l5-5 5 5z');
    });

    it('should not display nested list indicator icon when autoGenerateNestedIndicator props false is passed', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" label="Test1" />
          <ListItem
            initiallyOpen
            autoGenerateNestedIndicator={false}
            label="Inbox"
          ><List>
              <ListItem link="http://google.com" label="Test1" />
              <ListItem link="http://google.com" label="Test2" />
            </List>
          </ListItem>
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedDOMComponentsWithTag(render, 'button');
      if (renNode.length > 0) {
        expect(renNode.querySelector('path').getAttribute('d')).to.not.equal('M7 14l5-5 5 5z');
      }
    });

    it('should  display its nestedItems when List children passed', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" label="Test1" />
          <ListItem
            initiallyOpen
            autoGenerateNestedIndicator={false}
            label="Inbox"
          ><List>
              <ListItem link="http://google.com" label="Test3" />
              <ListItem link="http://google.com" label="Test4" />
            </List>
          </ListItem>
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, List);
      const renChildNode = TestUtils.scryRenderedComponentsWithType(renNode[1], ListItem);
      expect(renChildNode.length).to.equal(2);
    });

    it('should be open the nested list when initiallyOpen props true is passed', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" label="Test1" />
          <ListItem
            initiallyOpen
            autoGenerateNestedIndicator={false}
            label="Inbox"
          ><List>
              <ListItem link="http://google.com" label="Test3" />
              <ListItem link="http://google.com" label="Test4" />
            </List>
          </ListItem>
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, List);
      const renDomNode = ReactDOM.findDOMNode(renNode[1]);
      expect(renDomNode.style.display).to.not.equal('none');
    });

    it('should override the inner div style when innerDivStyle props is passed', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
            <ListItem link="http://google.com" label="Test3"innerDivStyle={{ border: '2px solid red' }} />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      expect(renDomNode.childNodes[0].querySelector('div').style.border).to.equal('2px solid red');
    });

    it('should have be indented the children if there is no left avatar or left icon', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" label="Test1" />
          <ListItem
            initiallyOpen
            insetChildren
            label="Inbox"
          ><List>
              <ListItem link="http://google.com" label="Test3" />
              <ListItem link="http://google.com" label="Test4" />
            </List>
          </ListItem>
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[1]);
      expect(renDomNode.childNodes[0].querySelector('div').style.padding).to.have.string('52px');
    });

    it('should have the left icon when leftIcon props is passed', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" label="Test3" leftIcon="ActionGrade" />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      expect(renDomNode.querySelector('path').getAttribute('d')).to.equal('M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z');
    });

    it('should dispaly the nested items on tapping on the label', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" label="Test1" />
          <ListItem
            initiallyOpen
            label="Inbox"
          ><List>
              <ListItem link="http://google.com" label="Test3" />
            </List>
          </ListItem>
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[1]);
      const node = renDomNode.childNodes[0].querySelector('div');
      const renList = TestUtils.scryRenderedComponentsWithType(render, List);
      const listNode = ReactDOM.findDOMNode(renList[1]);
      expect(listNode.style.display).to.not.equal('none');
      TestUtils.Simulate.click(node);
      expect(listNode.style.display).to.equal('none');
    });

    it('should display the image when imageSrc props is passed', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" imageSrc="https://im.uniqlo.com/images/jp/pc/img/l4/btn_l4_anchor04.gif" label="Test3" />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      expect(renDomNode.querySelector('img').getAttribute('src')).to.equal('https://im.uniqlo.com/images/jp/pc/img/l4/btn_l4_anchor04.gif');
    });

    it('should have the right icon when rightIcon props is passed', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" rightIcon="ActionGrade" label="Test3" />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      expect(renDomNode.querySelector('path').getAttribute('d')).to.equal('M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z');
    });

    it('should have the right toggle element when rightToggle props is passed', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" rightToggle="ActionGrade" label="Test3" />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      expect(renDomNode.querySelector('path').getAttribute('d')).to.equal('M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z');
    });

    it('should override the inline-styles of the root element', () => {
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" leftIcon="ActionGrade"
            style={{ border: '2px solid red' }}
            label="Test3"
          />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      expect(renDomNode.querySelector('a').style.border).to.equal('2px solid red');
    });

    it('should trigger the onTouchTap event when a touch tap event occures', () => {
      const touchTapSpy = spy();
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" onTouchTap={touchTapSpy} label="Test3" />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      const node = renDomNode.childNodes[0].querySelector('div');
      TestUtils.Simulate.click(node);
      expect(touchTapSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
    });

    it('should trigger the onMouseEnter event when the mouse is over the ListItem', () => {
      const mouseEnterSpy = spy();
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" onMouseEnter={mouseEnterSpy} label="Test3" />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      const node = renDomNode.childNodes[0].querySelector('div');
      TestUtils.Simulate.mouseEnter(node);
      expect(mouseEnterSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
    });

    it('should trigger the onMouseLeave when the mouse is no longer over the ListItem', () => {
      const mouseLeaveSpy = spy();
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem link="http://google.com" onMouseLeave={mouseLeaveSpy} label="Test3" />
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      const node = renDomNode.childNodes[0].querySelector('div');
      TestUtils.Simulate.mouseLeave(node);
      expect(mouseLeaveSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
    });

    it('should trigger the onNestedListToggle when the ListItem toggles its nested ListItems', () => {
      const nestedListToggleSpy = spy();
      const render = TestUtils.renderIntoDocument(
        <ThemedList>
          <ListItem
            initiallyOpen
            onNestedListToggle={nestedListToggleSpy}
            label="Inbox"
          ><List>
              <ListItem link="http://google.com" label="Test3" />
            </List>
          </ListItem>
        </ThemedList>
      );
      const renNode = TestUtils.scryRenderedComponentsWithType(render, ListItem);
      const renDomNode = ReactDOM.findDOMNode(renNode[0]);
      const node = renDomNode.childNodes[0].querySelector('div');
      TestUtils.Simulate.click(node);
      expect(nestedListToggleSpy.called).to.be.ok; // eslint-disable-line no-unused-expressions
    });
  });

});
