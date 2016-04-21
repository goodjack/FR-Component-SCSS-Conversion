import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Hero from 'uniqlo-ui/uniqlo/Hero';
import ComponentDoc from '../../component-doc';
import Code from 'hero-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const HeroDocsPage = React.createClass({

  getInitialState() {
    return {
      showVideoPopup: false,
    };
  },
  render() {
    let desc = `This will render the Hero component.`;

    const containerStyle = {
      height: '320px',
    };

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'sets the className of HERO\'s root element.'
          },
          {
            name: 'imageTitle',
            type: 'string',
            header: 'optional',
            desc: 'Sets the alt attribute of the image element.',
          },
          {
            name: 'imageSrc',
            type: 'string',
            header: 'required',
            desc: ' Source url of image.',
          },
          {
            name: 'subtitle',
            type: 'string',
            header: 'optional',
            desc: 'Subtitle to display in the component.',
          },
          {
            name: 'text',
            type: 'string',
            header: 'optional',
            desc: 'Text to display the paragraph text.',
          },
          {
            name: 'title',
            type: 'string',
            header: 'optional',
            desc: 'Title to display in the component.',
          },
          {
            name: 'variation',
            type: 'string',
            header: 'required',
            desc: 'Sets the variation of HERO element to be used. Should be either of "imageRight" or "imageLeft" or "overlay".',
          },
          {
            name: 'screenRatio',
            type: 'string',
            header: 'required',
            desc: 'Sets the ratio of width image and text should Occupy. Eg: Value "40:60" and variation type "imageRight" sets image width to 60% and text area width to 40%.',
          },
          {
            name: 'textOverlayMaxWidth',
            type: 'string',
            header: 'optional',
            desc: 'Sets the max width of textarea in overlay variation.',
          },
          {
            name: 'textareaBgColor',
            type: 'string',
            header: 'optional',
            desc: 'Sets the background color of text area of the component.',
          },
          {
            name: 'icon',
            type: 'string',
            header: 'optional',
            desc: 'Name of the svg icon to be displayed in the component.',
          },
          {
            name: 'iconText',
            type: 'string',
            header: 'optional',
            desc: 'Text to be displayed along icon in the component.',
          },
          {
            name: 'linkText',
            type: 'string',
            header: 'optional',
            desc: 'Text of the link to be displayed in the component.',
          },
          {
            name: 'linkUrl',
            type: 'string',
            header: 'optional',
            desc: 'href value of the link in the component.',
          },
          {
            name: 'linkFontWeight',
            type: 'string',
            header: 'optional',
            desc: 'fontWeight of the link text in the component.',
          },
          {
            name: 'linkFontSize',
            type: 'string',
            header: 'optional',
            desc: 'fontSize of the link text in the component.',
          },
          {
            name: 'linkTextDecoration',
            type: 'string',
            header: 'optional',
            desc: 'link-decoration property of the link text in the component.',
          },
          {
            name: 'navToOverlayComp',
            type: 'bool',
            header: 'optional',
            desc: 'If set to true, calls overlay component on link click.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Hero"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport Hero from \'uniqlo-ui/lib/hero\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div style={containerStyle}>
              <Hero
                variation="imageRight"
                title="セーター・ カーディガン"
                subtitle="SWEATERS & CARDIGANS"
                text="コットンカシミヤ、ミドルゲージカシミヤ100% ラムウール。どんなシーンでも活用できる デザイン豊富なラインナップ"
                imageSrc="images/hero1.jpg"
                imageTitle="imageAltText"
                screenRatio="40:60"
              />
            </div>
            <br />
            <div style={containerStyle}>
              <Hero
                variation="imageLeft"
                text="コットンカシミヤ、ミドルゲージカシミヤ100% ラムウール。どんなシーンでも活用できる デザイン豊富なラインナップ"
                textStyle={{color: 'red'}}
                imageSrc="images/hero3.jpg"
                imageTitle="imageAltText"
                icon="Instagram"
                iconText="2 days ago"
              />
            </div>
            <br />
            <div style={containerStyle}>
              <Hero
                variation="overlay"
                imageSrc="images/hero2.jpg"
                imageTitle="imageAltText"
                subtitle="SWEATERS & CARDIGANS"
                text="コットンカシミヤ、ミドルゲージカシミヤ100% ラムウール。どんなシーンでも活用できる デザイン豊富なラインナップ"
                linkText="Shop This Look"
                linkUrl="http://www.google.com"
                navToOverlayComp={false}
              />
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default HeroDocsPage;
