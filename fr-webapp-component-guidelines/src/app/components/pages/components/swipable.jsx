import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Swipable from 'uniqlo-ui/lib/core/Swipable';
import {Text, Image} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'swipable-code';
import PanCode from 'swipable-pan-code';
import DisplayCode from 'swipable-display-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const BreadCrumbDocsPage = React.createClass({

  render() {
    let desc = `Swipable component  render Swipable Items  which  will be swipable for the content  `;

    let componentInfo = [
      {
        name: 'Swipable Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Swipable root element.',
          },
          {
            name: 'selectedIndex',
            type: 'number',
            header: 'optional',
            desc: 'The index of the item need to be selected by default',
          },
          {
            name: 'display',
            type: 'number',
            header: 'optional',
            desc: 'Number of items displayed in the view port.',
          },
          {
            name: 'pan',
            type: 'bool',
            header: 'optional',
            desc: 'If pan is true the items will have a scroll effect on swipe',
          },
          {
            name: 'speed',
            type: 'number',
            header: 'optional',
            desc: 'Speed of prev and next transitions in milliseconds.',
          },
        ],

      },
      {
        name: 'Swipable Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the BreadItem\'s root element.',
          },
          {
            name: 'hoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the hover-styles of the root element.',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'The link to be provided for  the BreadItem.',
          },
          {
            name: 'target',
            type: 'string',
            header: 'optional',
            desc: 'Whether the linked to be opened in a new window or not.',
          },
          {
            name: 'text',
            type: 'string',
            header: 'optional',
            desc: 'The text to be displayed in breadItem.',
          },
        ],
      },
    ];

    const styles = {
      rootStyle: {
        fontSize: '0.8125rem',
        letterSpacing: '0.02em',
      },
      link:{
        color: '#535353',
      },
      hovered:{
        color: '#FF0000',
      },
      lastItem:{
        color: '#a9a9a9'
      },
      img: {
        width: '100%',
      },
    };


    return (
      <ComponentDoc
        name="Swipable"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Swipable} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Swipable>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334"  style={styles.img} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" style={styles.img} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"  style={styles.img} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334"  style={styles.img} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"  style={styles.img}  />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" style={styles.img} />
              </Swipable>
            </div>
          </ClearFix>
        </CodeExample>

        <CodeExample code={DisplayCode}>
          <ClearFix>
            <div>
              <Swipable display={2}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334"  style={styles.img} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" style={styles.img} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"  style={styles.img} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334"  style={styles.img} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"  style={styles.img}  />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" style={styles.img} />
              </Swipable>
            </div>
          </ClearFix>

        </CodeExample>

        <CodeExample code={PanCode}>
          <ClearFix>
            <div>
              <Swipable pan={true}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334"  style={{width:'100px'}} />
                  <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"  style={{width:'100px'}} />
                  <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334"  style={{width:'100px'}} />
                  <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"  style={{width:'100px'}}  />
                  <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" style={{width:'100px'}} />
              </Swipable>
            </div>
          </ClearFix>

        </CodeExample>


      </ComponentDoc>
    );
  },

});

export default BreadCrumbDocsPage;
