import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import IconButton from 'uniqlo-ui/IconButton';
import ComponentDoc from '../../component-doc';
import Code from 'iconbutton-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
import ActionGrade from 'uniqlo-ui/lib/SvgIcons/action/grade';
import ActionFadeButton from 'uniqlo-ui/lib/SvgIcons/action/AddFavoriteBorder';
import Image from 'uniqlo-ui/core/Image';

const IconButtonDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = `This component extends the current button element to display the font icon as well svg icon`;
    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the TextField\'s root element.',
          },
          {
            name: 'hoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the hoverStyle style of button.',
          },

          {
            name: 'iconclassName',
            type: 'string',
            header: 'optional',
            desc: 'Attach the class to button.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Pass the id of button.',
          },
          {
            name: 'disable',
            type: 'boolean',
            header: 'optional',
            desc: 'Disable the button if sets true.',
          },
          {
            name: 'iconImageSrc',
            type: 'string',
            header: 'optional',
            desc: 'Image source for render the icon image',
          },
          {
            name: 'iconImageStyles',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the icon image.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onMouseLeave',
            header: 'function(event)',
            desc: 'Callback function that is fired when the iconbutton is' +
                  'unhovered.',
          },
          {
            name: 'onMouseEnter',
            header: 'function(event)',
            desc: 'Callback function that is fired when the iconbutton is' +
                  'uhovered.',
          },
          {
            name: 'onTouchTap',
            header: 'function(event)',
            desc: 'Callback function that is fired when the iconbutton is' +
                  'clicked.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Button"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{ marginBottom: '22px' }}>
          <CodeBlock>
          {
            '//Import statement:\nimport {IconButton} from \'uniqlo-ui/lib/IconButton\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <IconButton ><ActionGrade /></IconButton>
              <IconButton><ActionGrade/></IconButton>
              <IconButton>
                <ActionFadeButton fill="red" stroke="#000000" strokeWidth="0.5"/>
              </IconButton>
              <IconButton
                iconclassName="muidocs-icon-custom-github"
                style={{ backgroundColor: 'red' }}
              />
              <IconButton>
                <Image
                  source="https://facebook.github.io/react/img/logo_og.png"
                  style={{ width: 25, height: 25 }}
                />
              </IconButton>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default IconButtonDocsPage;
