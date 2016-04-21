import React from 'react';
import {ClearFix, Mixins, Paper} from 'material-ui';
import {List, ListItem, Image} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import CodeNormal from 'list-code-normal';
import CodeImage from 'list-code-image';
import CodeHorizotal from 'list-code-horizontal';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const { StyleResizable } = Mixins;
const ListPage = React.createClass({

  mixins: [StyleResizable, LinkedStateMixin],

  render() {
    let desc = 'Lists are used to present multiple items vertically or horizontally as a single continuous element.';

    let componentInfo = [
      {
        name: 'List Properties',
        infoArray: [
          {
            name: 'children',
            type: 'node',
            header: '',
            desc: 'These are usually ListItems that are passed to be part of the list.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the root element.',
          },
          {
            name: 'orientation',
            type: 'string',
            header: 'default:vertical',
            desc: 'List rendering orientation vertical or horizontal.',
          },
        ],
      },
      {
        name: 'ListItem Properties',
        infoArray: [
          {
            name: 'autoGenerateNestedIndicator',
            type: 'bool',
            header: 'default:true',
            desc: `Generate a nested list indicator icon when nested list items are detected.
               Set to false if you do not want an indicator auto-generated. Note that an indicator will
               not be created if a rightIcon has been specified.`,
          },
          {
            name: 'children',
            header: 'optional',
            type: 'node',
            desc: 'List for nested list passed into the ListItem',
          },
          {
            name: 'initiallyOpen',
            type: 'bool',
            header: 'default:false',
            desc: 'Controls whether or not the child ListItems are initially displayed.',
          },
          {
            name: 'imageSrc',
            type: 'string',
            header: 'optional',
            desc: 'Set the source of image.',
          },
          {
            name: 'hoverImageSrc',
            type: 'string',
            header: 'optional',
            desc: 'Set the source of rollover image.',
          },
          {
            name: 'innerDivStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style prop for the innder div element.',
          },
          {
            name: 'insetChildren',
            type: 'bool',
            header: 'dafault:false',
            desc: `If true, the children will be indented by 52px.
               Only needed if there is no left avatar or left icon.`,
          },
          {
            name: 'leftIcon',
            type: 'string',
            header: 'optional',
            desc: 'This is the SvgIcon name to be displayed on the left side.',
          },
          {
            name: 'rightIcon',
            type: 'string',
            header: 'optional',
            desc: 'This is the SvgIcon name to be displayed on the right side.',
          },
          {
            name: 'rightToggle',
            type: 'string',
            header: 'optional',
            desc: 'This is the Toggle icon name to display on the right side.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the root element.',
          },
          {
            name: 'hoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the hover styles of the root element.',
          },
        ],
      },
      {
        name: 'List Item Events',
        infoArray: [
          {
            name: 'onMouseEnter',
            type: 'function',
            header: 'optional',
            desc: 'Called when the mouse is over the ListItem.',
          },
          {
            name: 'onMouseLeave',
            type: 'function',
            header: 'optional',
            desc: 'Called when the mouse is no longer over the ListItem.',
          },
          {
            name: 'onTouchTap',
            type: 'function',
            header: 'optional',
            desc: 'Called when a touch tap event occures on the component.',
          },
          {
            name: 'onNestedListToggle',
            type: 'function',
            header: 'optional',
            desc: 'Called when the ListItem toggles its nested ListItems.',
          },
        ],
      },
    ];

    const styles = {
      vertical: {
        marginRight: 24,
        border: 'solid 1px #d9d9d9',
        width: '250',
      },
      horizontal: {
        marginRight: 24,
        border: 'solid 1px #d9d9d9',
        height: 40,
      },
      imageList: {
        paddingTop: 10,
        borderTop: 'dotted 2px #000',
        width: '150',
      },
      item: {
        paddingBottom: 0,
        paddingLeft: 0,
      },
    };

    return (
      <ComponentDoc
        name="List"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {List,ListItem} from \'uniqlo-ui\';\n\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={CodeNormal}>
          <ClearFix>
            <div style={styles.vertical}>
              <List>
                <ListItem link="http://google.com"
                  leftIcon="Favorite" primaryTogglesNestedList={true} label="Sent Mail" />
                <ListItem link="http://google.com" leftIcon="Star" hoverEffect={false} label="Inbox" />
                <ListItem
                  leftIcon="ActionGrade"
                  initiallyOpen={false}
                  hoverStyle={{ backgroundColor: '#CCC'}}
                  label="Inbox" >
                  <List>
                    <ListItem link="http://google.com"
                      leftIcon="Favorite" primaryTogglesNestedList={true} label="Send" />
                    <ListItem link="http://google.com"
                        leftIcon="ActionGrade" primaryTogglesNestedList={true} label="Inbox" />
                  </List>
                </ListItem>
              </List>
            </div>
          </ClearFix>
        </CodeExample>

        <CodeExample code={CodeImage}>
          <ClearFix>
            <div style={styles.imageList} >
              <List >
                <ListItem
                  link="http://google.com"
                  innerDivStyle={styles.item}
                  imageSrc="https://im.uniqlo.com/images/jp/pc/img/l4/btn_l4_anchor04.gif"
                  hoverImageSrc="https://im.uniqlo.com/images/jp/pc/img/l4/btn_l4_anchor01.gif" />
                <ListItem
                  link="http://google.com"
                  innerDivStyle={styles.item}
                  imageSrc="https://im.uniqlo.com/images/jp/pc/img/l4/btn_l4_anchor01.gif" />
                <ListItem
                  link="http://google.com"
                  innerDivStyle={styles.item}
                  imageSrc="https://im.uniqlo.com/images/jp/pc/img/l4/btn_l4_anchor02.gif" />
                <ListItem
                  link="http://google.com"
                  innerDivStyle={styles.item}
                  imageSrc="https://im.uniqlo.com/images/jp/pc/img/l4/btn_l4_anchor05.gif" />
              </List>
            </div>
          </ClearFix>
        </CodeExample>

        <CodeExample code={CodeHorizotal}>
          <ClearFix>
            <div style={styles.horizontal}>
              <List orientation="horizontal">
                <ListItem link="http://google.com" leftIcon="Favorite" label="Sent mail" />
                <ListItem link="http://google.com" leftIcon="Star" label="Drafts" />
                <ListItem link="http://google.com" leftIcon="Favorite" label="Drafts" />
                <ListItem link="http://google.com" leftIcon="Star" label="Drafts" />
              </List>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },
});

export default ListPage;
