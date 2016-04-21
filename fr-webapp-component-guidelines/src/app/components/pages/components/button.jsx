import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {Button} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'button-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const ButtonPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  onPressTitle(text) {
    alert(text);
  },

  render() {
    let desc = 'This component renders the core html button';

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the button element.',
          },
          {
            name: 'labelStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the label style of button.',
          },
          {
            name: 'hoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the hoverStyle style of button.',
          },
          {
            name: 'label',
            type: 'string',
            header: 'optional',
            desc: 'Display the text over button.',
          },
          {
            name: 'className',
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
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onMouseLeave',
            header: 'function(event)',
            desc: 'Callback function that is fired when the button is' +
                  'unhovered.',
          },
          {
            name: 'onMouseEnter',
            header: 'function(event)',
            desc: 'Callback function that is fired when the button is' +
                  'uhovered.',
          },
          {
            name: 'onTouchTap',
            header: 'function(event)',
            desc: 'Callback function that is fired when the button is' +
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
            '//Import statement:\nimport {Button} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Button label="Click me" labelStyle={{ color: 'red', display: 'block' }}/>
            </div>
            <br/>
            <div>
              <Button
                label="LOG IN"
                style={{ backgroundColor: 'red', color: 'white', fontSize: 15 }}
                hoverStyle ={{ backgroundColor: 'blue', color: 'black', fontSize: 20 }}
                labelStyle={{ color: 'white', display: 'block' }}
                onMouseEnter={function () {
                  console.log(this);
                }}

                onTouchTap={function () { console.log('from docs page'); }}/>
            </div>
            <br/>
            <div>
              <Button label="PREVIEW"/>

            </div>
            <br/>
            <div>
              <Button disabled = {true} label="Disabled Button"/>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ButtonPage;
