import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import ButtonTile from 'uniqlo-ui/ButtonTile';
import TileButton from 'uniqlo-ui/ButtonTile';
import ComponentDoc from '../../component-doc';
import Code from 'button-tile-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const ButtonTileDocsPage = React.createClass({

  render() {
    let desc = 'This component extends button and image components to show the ButtonTile';

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the ButtonTile\'s root element.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'id of the Button Tile root element',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'The css class name of the Button Tile root element',
          },
          {
            name: 'imageSrc',
            type: 'string',
            header: 'required',
            desc: 'supplies the image path supplied to image component.',
          },
          {
            name: 'imageStyle',
            type: 'string',
            header: 'optional',
            desc: 'overrides the styles of the image component',
          },
          {
            name: 'listStyle',
            type: 'string',
            header: 'optional',
            desc: 'overrides the inline-styles of Tile Button list',
          },
          {
            name: 'listItemStyle',
            type: 'string',
            header: 'optional',
            desc: 'overrides the inline-styles of each Tile Button',
          },
          {
            name: 'buttonStyle',
            type: 'string',
            header: 'optional',
            desc: 'Overrides the styles of the button component.',
          },
          {
            name: 'title',
            type: 'string',
            header: 'required',
            desc: 'supplies the text to be displayed over button component.',
          },
          {
            name: 'link',
            type: 'string',
            header: 'required',
            desc: 'supplies the link to be mapped on clicking the button in buttonTile.',
          },
          {
            name: 'color',
            type: 'string',
            header: 'optional',
            desc: 'Overrides the backgroundColor of the button.',
          },
          {
            name: 'targetwindow',
            type: 'string',
            header: 'optional',
            desc: 'supplies the target window to be mapped.',
          },
        ],
      },
    ];

    let buttonUrl = 'https://fastretail.s3-ap-northeast-1.amazonaws.com/fr-ariake-stage/';
    buttonUrl += 'publish/asset-manager/producttileimage1.90f761a0-b46b-11e5-bb7e-d9305fcaae55.jpg';

    return (
      <ComponentDoc
        name="ButtonTile"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{ marginBottom: '22px' }}>
          <CodeBlock>
          {
            '//Import statement:\nimport {ButtonTile, ButtonTileOption} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <ButtonTile
                imageSrc={buttonUrl}
                tileSize="large">
                <TileButton title="WOMEN" link="/WOMEN" color="#fc0001" targetwindow="_blank" />
                <TileButton title="MEN" link="/Men" color="#010082" targetwindow="_blank" />
              </ButtonTile>
              <ButtonTile imageStyle={{ height: '340px' }}
                imageSrc="https://facebook.github.io/react/img/logo_og.png" tileSize="small">
                <TileButton title="WOMEN" link="/women" color="#fc0001" targetwindow="_blank" />
                <TileButton title="MEN" link="/men" color="#010082" targetwindow="_blank" />
                <TileButton title="KIDS" link="/kids" color="#50b4f0" targetwindow="_blank" />
                <TileButton title="BABY" link="/baby" color="#95c904" targetwindow="_blank" />
              </ButtonTile>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ButtonTileDocsPage;
