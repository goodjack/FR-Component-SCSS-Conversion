import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import SectionAnchorBar from 'uniqlo-ui/SectionAnchorBar';
import SectionAnchorBarItem from 'uniqlo-ui/SectionAnchorBar/SectionAnchorBarItem';
import ComponentDoc from '../../component-doc';
import Code from 'section-anchor-bar-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const SectionAnchorBarDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  onPress(text, e) {
    alert(text + ' ' + e.target.innerText);
  },

  render() {
    let desc = `This component renders the SectionAnchorBar and will support all of its props and events.
     style can be override for customisation`;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Text\'s root element.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Id of the SectionAnchorBar\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'ClassName for the SectionAnchorBar\'s root element.',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'Link represents the path to be map.',
          },
          {
            name: 'title',
            type: 'string',
            header: 'required',
            desc: 'Title string is to display the text.',
          },
          {
            name: 'arrowStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the Navigation arrow styles of the SectionAnchorBar.',
          },
          {
            name: 'dividerStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the Divider styles of the SectionAnchorBar.',
          },
          {
            name: 'listItemStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the list Item styles of the SectionAnchorBar.',
          },
          {
            name: 'textStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the text styles of the SectionAnchorBar.',
          },
          {
            name: 'listStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the list styles of the SectionAnchorBar.',
          },
        ],
      },
      {
        name: 'Events',
        infoArray: [
          {
            name: 'onClick',
            header: 'function(event)',
            desc: 'Callback function that is fired when the each section clicked.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="SectionAnchorBar"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {SectionAnchorBar} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <SectionAnchorBar>
                <SectionAnchorBarItem title="Section1" link="/section1"
                  onClick={this.onPress.bind(this, 'You Pressed')}/>
                <SectionAnchorBarItem title="Section2" link="/section2"
                  onClick={this.onPress.bind(this, 'You Pressed')}/>
                <SectionAnchorBarItem title="Section3" link="/section3"
                  onClick={this.onPress.bind(this, 'You Pressed')}/>
                <SectionAnchorBarItem title="Section4" link="/section4"
                  onClick={this.onPress.bind(this, 'You Pressed')}/>
              </SectionAnchorBar>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default SectionAnchorBarDocsPage;
