import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {Collage, CollageItem} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'collage-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const CollageDocsPage = React.createClass({

  render() {
    let desc = `Collage component  render swipable collage items with a link `;

    let componentInfo = [
      {
        name: 'Collage Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Collage\'s root element.',
          },
          {
            name: 'cellPadding',
            type: 'number',
            header: 'optional',
            desc: 'The space between collage items',
          },
          {
            name: 'cellHeight',
            type: 'number',
            header: 'optional',
            desc: 'Height of the small collage item. The big image height will be double of this cellHeight',
          },
          {
            name: 'cellWidth',
            type: 'number',
            header: 'optional',
            desc: 'Width of the small collage item. The big image width will be double of this cellWidth',
          },
        ],

      },
      {
        name: 'CollageItem Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the CollageItem\'s root element.',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'The link to be provided for  the CollageItem.',
          },
          {
            name: 'target',
            type: 'string',
            header: 'optional',
            desc: 'Whether the linked to be opened in a new window or not.',
          },
          {
            name: 'imageSrc',
            type: 'string',
            header: 'optional',
            desc: 'Image URL of the collage item.',
          },
          {
            name: 'altText',
            type: 'string',
            header: 'optional',
            desc: 'The alt text to  be added to the image.',
          },
        ],
      },
    ];

    const styles = {
      imgBig: {
        border:'1px solid #CCC',
        width:'99%',
        height: '99%'
      },
      imgSmall: {
        border:'1px solid #CCC',
        width:'98%',
        height: '97%'
      }
    };


    return (
      <ComponentDoc
        name="Collage"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Collage, CollageItem} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Collage cellHeight={100} cellWidth={100} >
                <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" style={styles.imgBig} />
                <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"   style={styles.imgSmall} />
                <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527"  style={styles.imgSmall} />
                <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"  style={styles.imgBig} />
                <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527" style={styles.imgSmall} />
                <CollageItem imageSrc="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491"  style={styles.imgSmall} />
              </Collage>
            </div>
          </ClearFix>

        </CodeExample>


      </ComponentDoc>
    );
  },

});
//https://react.parts/web?search=swipe
export default CollageDocsPage;
