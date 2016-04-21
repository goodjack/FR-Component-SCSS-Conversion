import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Rating from 'uniqlo-ui/lib/Rating';
import ComponentDoc from '../../component-doc';
import Code from 'rating-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const RatingDocsPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  onPressTitle(text) {
    alert(text);
  },

  render() {
    let desc = `This component renders the Rating Component by default. style can be override for customisation`;
    console.log('RatingStar', Rating);
    let componentInfo = [
      {
        className: React.PropTypes.string,
        emptyStyle: React.PropTypes.object,
        fullStyle: React.PropTypes.object,
        halfStyle: React.PropTypes.object,
        id: React.PropTypes.string,
        maxCount: React.PropTypes.number,
        ratingCount: React.PropTypes.number,
        ratingStyle: React.PropTypes.object,
        style: React.PropTypes.object,
        name: 'Props',
        infoArray: [
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Override the inline-styles of the Rating\'s root element.',
          },
          {
            name: 'className',
            type: 'string',
            header: 'optional',
            desc: 'Pass the className of the Rating\'s root element.',
          },
          {
            name: 'id',
            type: 'string',
            header: 'optional',
            desc: 'Pass the id of the Rating\'s root element.',
          },
          {
            name: 'maxCount',
            type: 'number',
            header: 'optional',
            desc: 'pass the max number of stars to the Rating\'s  component.',
          },
          {
            name: 'ratingCount',
            type: 'number',
            header: 'mandatory',
            desc: 'pass the max number of stars to the Rating\'s  component.',
          },
          {
            name: 'fullStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the style of full star of  Rating\'s component.',
          },
          {
            name: 'halfStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the style of half star of  Rating\'s component.',
          },
          {
            name: 'emptyStyle',
            type: 'object',
            header: 'optional',
            desc: 'Override the style of empty star of  Rating\'s component.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Rating"
        desc={desc}
        componentInfo={componentInfo}>
        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Rating} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Rating fullStyle = {{
                fill: 'red',
              }} size = "Medium" ratingCount={3.5} maxCount ={7}/>
            </div>
          </ClearFix>
          <ClearFix>
            <div>
              <Rating fullStyle = {{
                fill: 'Brown',
              }} size = "Small" ratingCount={4} maxCount ={7}/>
            </div>
          </ClearFix>
          <ClearFix>
            <div>
              <Rating fullStyle = {{
                fill: 'Brown',
              }} size = "Large" ratingCount={4} maxCount ={7}/>
            </div>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default RatingDocsPage;
