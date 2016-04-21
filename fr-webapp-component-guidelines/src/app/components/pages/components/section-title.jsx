import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import SectionTitle from 'uniqlo-ui/SectionTitle';
import ComponentDoc from '../../component-doc';
import Code from 'section-title-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const SectionTitlePage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = `A Section Title
    component is a basic component which shows title and subtitle of a section in a page`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'anchorId',
            type: 'string',
            header: 'optional',
            desc: 'anchorId is for unique identification of each anchor element',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'id of the Section Title root element',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'The css class name of the Section Title root element',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of Section Title root container',
          },
          {
            name: 'title',
            type: 'string',
            header: 'required',
            desc: 'This exposes the title of the section to be displayed',
          },
          {
            name: 'subtitle',
            type: 'string',
            header: 'optional',
            desc: 'It exposes the subtitle that is to be displayed',
          },
          {
            name: 'titlestyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the title',
          },
          {
            name: 'subtitleStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the style of the subtitle container',
          },
          {
            name: 'dividerStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the divider',
          },
          {
            name: 'viewType',
            type: 'string',
            header: 'optional',
            desc: 'viewType represents the display mode of Section Title.supported types:regular, regular without subhead ',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="SectionTitle"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {SectionTitle} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <SectionTitle dividerStyle={{backgroundColor: 'grey'}} title="カーディガン" subtitle="CARDIGANS"
                viewType="regular with subhead"/>
              <SectionTitle title="ワンピース・チュニック" subtitle="CARDIGANS"
                viewType="regular without subhead"/>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default SectionTitlePage;
