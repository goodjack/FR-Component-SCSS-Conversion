import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Accordion from 'uniqlo-ui/lib/Accordion';
import AccordionItem from 'uniqlo-ui/lib/Accordion/AccordionItem';
import Heading from 'uniqlo-ui/lib/Heading';
import Text from 'uniqlo-ui/lib/Text';
import IconButton from 'uniqlo-ui/lib/IconButton';
import ComponentDoc from '../../component-doc';
import Code from 'accordion-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
import ActionMinus from 'uniqlo-ui/lib/SvgIcons/action/ActionMinus';
import ActionPlus from 'uniqlo-ui/lib/SvgIcons/action/ActionPlus';

const AccordionDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = `This component renders the Accordion and will support all of its props and events.
     style can be override for customisation`;

    let componentInfo = [
      {
        name: 'Accordion Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Accordion\'s root element.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Id of the Accordion\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'ClassName for the Accordion\'s root element.',
          },
          {
            name: 'expandMultipleTab',
            type: 'boolean',
            header: 'optional',
            desc: 'Open the mutiple tabs at the same time.',
          },
        ],
      },

      {
        name: 'AccordionItem Props',
        infoArray: [
          {
            name: 'expandTab',
            type: 'boolean',
            header: 'optional',
            desc: 'If expandTab is true, Tab content will be visible.',
          },
          {
            name: 'showIcon',
            type: 'string',
            header: 'optional',
            desc: 'Icon shows when the content is visible.',
          },
          {
            name: 'hideIcon',
            type: 'string',
            header: 'optional',
            desc: 'Icon shows when the content is hide.',
          },
          {
            name: 'contentStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Content Container\'s root element.',
          },
          {
            name: 'headingStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Heading Container\'s root element.',
          },
          {
            name: 'tileStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the tile Container\'s root element.',
          },
          {
            name: 'iconButtonStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the iconButtonStyle\'s root element.',
          },
          {
            name: 'showIconStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the showIcon\'s root element.',
          },
          {
            name: 'hideIconStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the hideIcon\'s root element.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Accordion"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{ marginBottom: '22px' }}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Accordion, AccordionItem, Heading, Text} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Accordion expandMultipleTab>
                <AccordionItem expandTab
                  showIcon="ActionMinus"
                  hideIcon="ActionPlus"
                >
                  <Heading type="h3" headingText="section1" />
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                  </Text>
                </AccordionItem>
                <AccordionItem expandTab
                  showIcon="ActionMinus"
                  hideIcon="ActionPlus"
                >
                  <Heading type="h3" headingText="section2" />
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                  </Text>
                </AccordionItem>
                <AccordionItem
                  showIcon="ActionMinus"
                  hideIcon="ActionPlus"
                >
                  <Heading type="h3" headingText="section3" />
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum
                  </Text>
                </AccordionItem>
              </Accordion>
            </div>
            <br />
            <br />
            <br />
              <div>
                <Accordion>
                  <AccordionItem expandTab
                    showIcon="ActionMinus"
                    hideIcon="ActionPlus"
                  >
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                  </AccordionItem>
                  <AccordionItem expandTab
                    showIcon="ActionMinus"
                    hideIcon="ActionPlus"
                  >
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                  </AccordionItem>
                  <AccordionItem
                    showIcon="ActionMinus"
                    hideIcon="ActionPlus"
                  >
                    <Text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est laborum
                    </Text>
                  </AccordionItem>
                </Accordion>
              </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default AccordionDocsPage;
