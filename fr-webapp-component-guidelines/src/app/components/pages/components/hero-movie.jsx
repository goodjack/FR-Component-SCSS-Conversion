import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import HeroMovie from 'uniqlo-ui/uniqlo/HeroMovie';
import ComponentDoc from '../../component-doc';
import Code from 'hero-movie-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const HeroMovieDocsPage = React.createClass({

  getInitialState() {
    return {
      showVideoPopup: false,
    };
  },
  render() {
    let desc = `This will render the HeroMovie component `;

    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the HeroMovies\'s root element.',
          },
          {
            name: 'playButtonStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override inline play Icon style.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'sets the id of HeroMovie element.'
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'sets the className of HeroMovie element.'
          },
          {
            name: 'imageSrc',
            type: 'string',
            header: 'required',
            desc: 'Hero cover image src.',
          },
          {
            name: 'imageTitle',
            type: 'string',
            header: 'optional',
            desc: 'Value of image alt attribute.',
          },
          {
            name: 'videoId',
            type: 'string',
            header: 'optional',
            desc: 'Video id of youtube video to be played.',
          },
          {
            name: 'text',
            type: 'string',
            header: 'optional',
            desc: 'Text to be displayed along with the play icon.',
          },
          {
            name: 'iconSrc',
            type: 'string',
            header: 'optional',
            desc: 'Source url of the icon image of IconButton component.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="HeroMovie"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: 22}}>
          <CodeBlock>
          {
            '//Import statement:\nimport HeroMovie from \'uniqlo-ui/lib/uniqlo/hero-movie\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
	        <HeroMovie
	          imageSrc="images/heroMovie.jpg"
	          videoId="e0SzgsoEh54" text="PlayIcon" iconSrc="images/play_icon.png"
	          imageTitle="imageAltText"
	        />
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default HeroMovieDocsPage;
