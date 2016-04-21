import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import FilmStrip, { FilmStripItem } from 'uniqlo-ui/FilmStrip';
import TextInputGroup from 'uniqlo-ui/TextInputGroup';
import ComponentDoc from '../../component-doc';
import Code from 'film-strip-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const TextDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = `This FilmStrip component renders the Carousel component inline by default. style can be override for customisation.`;

    let componentInfo = [
      {
        name: 'FilmStrip Props',
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
            desc: 'Id of the FilmStrip\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'ClassName for the FilmStrip\'s root element.',
          },
          {
            name: 'display',
            type: 'string',
            header: 'optional',
            desc: 'display is the number of images in one slide.',
          },
        ],
      },
      {
        name: 'FilmStripItem Props',
        infoArray: [
          {
            name: 'imageSource',
            type: 'string',
            header: 'optional',
            desc: ' Source of the Image\'s root element.',
          },
          {
            name: 'link',
            type: 'string',
            header: 'optional',
            desc: 'The link to be provided for  the linkText.',
          },
          {
            name: 'imageContainerStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the image container.',
          },
          {
            name: 'imageStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the image.',
          },
          {
            name: 'stripStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the stripItem.',
          },
          {
            name: 'targetwindow',
            type: 'string',
            header: 'optional',
            desc: 'specifies the link to opened in new window or self',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="FilmStrip"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{ marginBottom: '22px' }}>
          <CodeBlock>
          {
            '//Import statement:\nimport { FilmStrip, FilmStripItem } from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <FilmStrip display={3}>
                <FilmStripItem
                  imageSource="http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
                  link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
                  targetwindow="_blank"
                 />
                <FilmStripItem
                  imageSource="http://m5.paperblog.com/i/29/298811/uniqlo-philippines-fall-winter-collection-201-L-jzylce.jpeg"
                  link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
                  targetwindow="_blank"
                />
                <FilmStripItem
                  imageSource="http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-18.jpg"
                  link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
                  targetwindow="_blank"
                />
                <FilmStripItem
                  imageSource="http://m5.paperblog.com/i/29/298811/uniqlo-philippines-fall-winter-collection-201-L-jzylce.jpeg"
                  link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
                  targetwindow="_blank"
                />
                <FilmStripItem
                  imageSource="http://thebestfashionblog.com/wp-content/uploads/2012/08/Uniqlo-Denim-Autumn-Winter-2012-2013-Look-Book-10-600x802.jpg"
                  link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
                  targetwindow="_blank"
                />
                <FilmStripItem
                  imageSource="http://thebestfashionblog.com/wp-content/uploads/2012/07/Menswear-Essentials-in-Uniqlo-Fall-Winter-2012-2013-19.jpg"
                  link="http://www.uniqlo.com/jp/stylingbook/pc/style/7746"
                  targetwindow="_blank"
                />
              </FilmStrip>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default TextDocsPage;
