import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {RadioButton} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'radio-button-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const RadioButtonDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = `These components extend their current radio elements and
               will support all of its props and events.`;

    let componentInfo = [
      {
        name: 'Radio Button Props',
        infoArray: [
          {
            name: 'defaultChecked',
            type: 'bool',
            header: 'default:false',
            desc: 'The default value of the radio button when the page finishes loading.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the RadioButton\'s root element.',
          },
          {
            name: 'value',
            type: 'string',
            header: 'optional',
            desc: 'The value of our radio button component.',
          },
          {
            name: 'label',
            type: 'node',
            header: 'optional',
            desc: 'The text that is displayed beside the radio button.',
          },
          {
            name: 'labelStyle',
            type: 'object',
            header: 'optional',
            desc: 'Overrides the inline-styles of the RadioButton element label.',
          },
          {
            name: 'labelPosition',
            type: 'oneOf ["left", "right"]',
            header: 'default:"right"',
            desc: 'Where the label will be placed next to the radio button. Options include ' +
                '"left" and "right" (case-sensitive). Default option is "right".',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Radio Button"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statements:\n' +
            'import RadioButton from \'uniqlo-ui/lib/radio-button\';\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <RadioButton  style = {{marginBottom: '16px'}} value = "23" label="prepare for light speed"  />
              <RadioButton  style = {{marginBottom: '16px'}} value = "20" label="light speed too slow" labelPosition="left" />
              <RadioButton  style = {{marginBottom: '16px'}} value = "20" label="light speed too slow" labelStyle={{color: 'blue'}} />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
    return <div> {'Hello World'} </div>;
  },

});

export default RadioButtonDocsPage;
