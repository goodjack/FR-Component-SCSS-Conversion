import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {RadioButtonGroup} from 'uniqlo-ui';
import {RadioButton} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
import Code from 'radio-button-group-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const RadioButtonDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  _getRadioGroupValue(event, selected){
      alert(selected);
  },

  render() {
    let desc = `These components extend their current radio elements and
               will support all of its props and events.`;

    let componentInfo = [
      {
        name: 'Radio Button Group',
        infoArray: [
          {
            name: 'defaultSelected',
            type: 'string',
            header: 'optional',
            desc: 'Sets the default radio button to be the one whose value matches ' +
                'defaultSelected (case-sensitive). This will override any individual radio ' +
                'button with the defaultChecked or checked property stated.',
          },
          {
            name: 'labelPosition',
            type: 'oneOf ["left", "right"]',
            header: 'optional',
            desc: 'Where the label will be placed for all radio buttons. Options include ' +
                '"left" and "right" (case-sensitive). This will override any labelPosition ' +
                'properties defined for an individual radio button.',
          },
          {
            name: 'name',
            type: 'string',
            header: 'required',
            desc: 'The name that will be applied to all radio buttons inside it.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the RadioButtonGroup\'s root element.',
          },
          {
            name: 'valueSelected',
            type: 'string',
            header: 'optional',
            desc: 'The value of the currently selected radio button.',
          },
        ],
      },
      {
        name: 'Radio Button Group Methods',
        infoArray: [
          {
            name: 'getSelectedValue',
            header: 'RadioButtonGroup.getSelectedValue()',
            desc: 'Returns the string value of the radio button that is currently selected. If nothing ' +
                'has been selected, an empty string is returned.',
          },
          {
            name: 'setSelectedValue',
            header: 'RadioButtonGroup.setSelectedValue(newSelectionValue)',
            desc: 'Sets the selected radio button to the radio button whose value matches ' +
                'newSelectionValue',
          },
          {
            name: 'clearValue',
            header: 'RadioButtonGroup.clearValue()',
            desc: 'Clears the selected value for the radio button group.',
          },
        ],
      },
      {
        name: 'Radio Button Group Events',
        infoArray: [
          {
            name: 'onChange',
            type: 'function(event, selected)',
            header: 'optional',
            desc: 'Callback function that is fired when a radio button has been clicked. Returns ' +
                'the event and the value of the radio button that has been selected.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Radio Button Group"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statements:\n' +
            'import RadioButton from \'uniqlo-ui/lib/radio-button\';\n' +
            'import RadioButtonGroup from \'uniqlo-ui/lib/radio-button-group\';\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <RadioButtonGroup name="shipSpeed" defaultSelected="not_light" >
                <RadioButton
                  value="light"
                  label="prepare for light speed"
                  style={{marginBottom:16}} />
                <RadioButton
                  value="not_light"
                  label="light speed too slow"
                  style={{marginBottom:16}} />
                <RadioButton
                  value="ludicrous"
                  label="go to ludicrous speed"
                  style={{marginBottom:16}}
                  disabled={true}/>
              </RadioButtonGroup>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
    return <div> {'Hello World'} </div>;
  },

});

export default RadioButtonDocsPage;
