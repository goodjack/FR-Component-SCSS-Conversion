import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Image from 'uniqlo-ui/core/Image';
import ComponentDoc from '../../component-doc';
import Code from 'image-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const ImageDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },
  onLoad() {
    alert('Image Loaded successfully!!');
  },

  render() {
    let desc = `This component will render the Image provided `;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Image\'s root element.',
          },
          {
            name: 'source',
            type: 'string',
            header: 'default: null',
            desc: ' Source of the Image\'s root element.',
          },
          {
            name: 'alternateText',
            type: 'string',
            header: 'optional',
            desc: ' Alternate text if the Image is not displayed.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Id of the Image\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'className for the Image\'s root element.',
          },
        ],

      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'onLoad',
            header: 'function(event)',
            desc: 'Invoked when load completes successfully.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Image"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Image} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Image alternateText= "React.JS" source="https://facebook.github.io/react/img/logo_og.png"/>
            </div>
            <br/>
            <div>
              <Image
                source="https://facebook.github.io/react/img/logo_og.png"
                style={{width: 50, height: 50}}
                onLoad={this.onLoad}
              />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ImageDocsPage;
