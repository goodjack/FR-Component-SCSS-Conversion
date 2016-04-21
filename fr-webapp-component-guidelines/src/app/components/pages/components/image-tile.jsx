import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {ImageTile} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'image-tile-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const ImageTileDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },
  onLoad() {
    alert('ImageTile Loaded successfully!!');
  },

  render() {
    let desc = `This component will render the ImageTile provided `;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
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
            desc: 'Id of the ImageTile\'s root element.',
          },
          {
            name: 'imageStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline style of image',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'Provide link to ImageTile.',
          },
          {
            name: 'imageSrc',
            type: 'object',
            header: 'default:null',
            desc: ' Source of the ImageTile\'s root element.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the ImageTile\'s root element.',
          },
          {
            name: 'tileSize',
            type: 'string',
            header: 'default:small',
            desc: 'Decide the size of ImageTile\'s root element.',
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
        name="ImageTile"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport ImageTile from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <ImageTile imageSrc= "https://facebook.github.io/react/img/logo_og.png" link= "#" tileSize="large"/>
            <ImageTile imageSrc= "http://www.w3schools.com/images/w3schools_green.jpg" link= "#" tileSize="small"/>
            <ImageTile imageSrc= "https://facebook.github.io/react/img/logo_og.png" link= "#"/>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ImageTileDocsPage;
