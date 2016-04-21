import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Label from 'uniqlo-ui/Label';
import ComponentDoc from '../../component-doc';
import Code from 'label-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const LabelDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = `This component renders the text inline by default. style can be override for customisation`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Label\'s root element.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Set the id of Label\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'Set the class of Label\'s root element.',
          },
          {
            name: 'background',
            type: 'string',
            header: 'default: black',
            desc: 'Set the background color of Label.',
          },
          {
            name: 'foreground',
            type: 'string',
            header: 'default: white',
            desc: 'Set the color of label text.',
          },
          {
            name: 'text',
            type: 'string',
            header: 'required',
            desc: 'Label text to be displayed.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Label"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Label} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <Label
              style={{borderRadius: '5px', fontWeight: 'bold'}}
              background="black"
              foreground="white"
              text="WOMEN"
            />
            <Label
              style={{borderRadius: '5px', backgroundColor: 'black', color: 'white', fontWeight: 'bold'}}
              text="新作"
            />
            <br />
            <br />
            <div>
              <Label
                text="This is a label text just to show default label style"
              />
            </div>
            <br />
            <div>
              <Label
                background="green"
                foreground="white"
                text="Label text"
              />
            </div>
            <br />
            <div>
              <Label
                background="Red"
                style={{ lineHeight: "50px", fontSize: 50, border: '1px solid black' }}
                text="A very Big and long Label"
              />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default LabelDocsPage;
