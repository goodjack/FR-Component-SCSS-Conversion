import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Youtube from 'uniqlo-ui/core/Youtube';
import ComponentDoc from '../../component-doc';
import Code from 'youtube-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const YoutubeDocsPage = React.createClass({

  render() {
    let desc = `This component renders youtube video.`;
    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Youtube\'s root element.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Id of the Youtube\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'ClassName for the Youtube\'s root element.',
          },
          {
            name: 'source',
            type: 'string',
            header: 'required',
            desc: ' Video Id of the Youtube video to be played.',
          },
          {
            name: 'allowFullScreen',
            type: 'boolean',
            header: 'optional',
            desc: 'Youtube embed src parameter to enable or disable fullscreen property.',
          },
          {
            name: 'allowAutoplay',
            type: 'boolean',
            header: 'optional',
            desc: 'Youtube video player property to enable or disable autoplay.',
          },
          {
            name: 'showControls',
            type: 'boolean',
            header: 'optional',
            desc: 'Youtube video player property to show or hide controls.',
          },
          {
            name: 'allowLooping',
            type: 'boolean',
            header: 'optional',
            desc: 'Youtube video player property to enable or disable video play looping.',
          },
          {
            name: 'showRelatedVideos',
            type: 'boolean',
            header: 'optional',
            desc: 'Youtube video player property to show videos related to current video.',
          },
          {
            name: 'youtubeEmbedUrlPrefix',
            type: 'string',
            header: 'optional',
            desc: 'Youtube embed url part to be prefixed with video Id.',
          },
          {
            name: 'origin',
            type: 'string',
            header: 'optional',
            desc: 'Origin parameter to append with youtube embed src.',
          },
        ],
      }
    ];

    return (
      <ComponentDoc
        name="Youtube"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Youtube} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>
        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Youtube source="gHcfGU0zim8" style={{width: 500, height: 200}}/>
            </div>
            <br/>
            <div>
              <Youtube source="gHcfGU0zim8" allowAutoplay={true} style={{width: 500, height: 200}} />
            </div>
            <br/>
            <div>
              <Youtube source="gHcfGU0zim8" showControls={false} style={{width: 500, height: 200}}/>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default YoutubeDocsPage;
