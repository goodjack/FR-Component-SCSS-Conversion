import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import ProxyLink from 'uniqlo-ui/core/ProxyLink';
import Image from 'uniqlo-ui/core/Image';
import ComponentDoc from '../../component-doc';
import Code from 'proxy-link-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const onClick = () => {
    alert('callback method called');
};

const ProxyLinkDocsPage = React.createClass({

  render() {
    let desc = `This will render the ProxyLink component `;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'rootClass',
            type: 'string',
            header: 'optional',
            desc: 'sets the className of root element.'
          },
          {
            name: 'linkText',
            type: 'string',
            header: 'optional',
            desc: 'Text of the link to be displayed.',
          },
          {
            name: 'linkUrl',
            type: 'string',
            header: 'optional',
            desc: 'value of href to be set for the link.',
          },
          {
            name: 'textColor',
            type: 'string',
            header: 'optional',
            desc: 'sets the color of the link text.',
          },
          {
            name: 'fontWeight',
            type: 'string',
            header: 'optional',
            desc: 'fontWeight of the link text.',
          },
          {
            name: 'fontSize',
            type: 'string',
            header: 'optional',
            desc: 'fontSize of the link text.',
          },
          {
            name: 'textDecoration',
            type: 'string',
            header: 'optional',
            desc: 'link-decoration property of the link text.',
          },
          {
            name: 'targetwindow',
            type: 'string',
            header: 'optional',
            desc: 'supplies the target window to be mapped.',
          },
          {
            name: 'children',
            type: 'node',
            header: 'optional',
            desc: 'The ProxyLink component will be wrapped around this child component.',
          },
        ],
      },
      {
        name: 'Methods',
        infoArray: [
          {
            name: 'onClickEvent',
            header: 'function(event)',
            desc: 'Invoked upon click event on the component.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="ProxyLink"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport ProxyLink from \'uniqlo-ui/lib/core/proxy-Link\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
          <ProxyLink
            linkText="This is link text"
            linkUrl="http://www.google.com"
          />
          <br/>
          <br/>
          <ProxyLink
            linkText="This is 2nd link text"
            linkUrl="http://www.google.com"
            textColor="blue"
            textDecoration="none"
            fontSize="2em"
          />
          <br/>
          <br/>
          <ProxyLink linkUrl="http://www.uniqlo.com">
            <Image source="https://facebook.github.io/react/img/logo_og.png" style={{width: '100%'}}/>
          </ProxyLink>
          <ProxyLink onClickEvent={onClick}>
            <Image source="https://facebook.github.io/react/img/logo_og.png" style={{width: '100%'}}/>
          </ProxyLink>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default ProxyLinkDocsPage;
