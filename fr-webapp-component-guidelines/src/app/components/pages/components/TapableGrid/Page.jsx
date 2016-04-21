import React from 'react';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';
import ComponentDoc from '../../../component-doc';
import gridCode from '!raw!uniqlo-ui/core/Grid/';
import gridCellCode from '!raw!uniqlo-ui/core/GridCell';
// import gridReadmeText from './README';
import NormalTapableGrid from './NormalTapableGrid';
import normalTapableGridCode from '!raw!./NormalTapableGrid';
import SpacedTapableGrid from './SpacedTapableGrid';
import spacedTapableGridCode from '!raw!./SpacedTapableGrid';


let componentInfo = [
  {
    name: 'TapableGrid Props',
    infoArray: [
      {
        name: 'variation',
        type: 'string',
        header: 'default: normal',
        desc: 'The type or variation of the TapableItems.'
        +' It can be one among \'normal\', \'spaced\', \'modular\'',
      },
      {
        name: 'columns',
        type: 'number',
        header: 'default: 2',
        desc: 'Number of columns in which the items are to be displayed. ',
      },
      {
        name: 'cellWidth',
        type: 'number',
        header: 'default: null',
        desc: 'If you want to specify a custom width for each cell use this property. '+
        'If not specified, the width of the container will be divided equally among the cells.',
      },
      {
        name: 'cellPadding',
        type: 'number',
        header: 'default: 15',
        desc: 'Padding or spacing between each cells in pixels.',
      },
      {
        name: 'cellHeight',
        type: 'number',
        header: 'default: null',
        desc: 'Height of each cell (in other words, the Height of one row). '+
        'If this is not specified, the cell would take the height of the image/text inside it. '+
        'This is a required prop if you\'re using \'rowSpan\' property of TapableItems.',
      },
    ],
  },
  {
    name: 'TapableItem Props',
    infoArray: [
      {
        name: 'accentColor',
        type: 'string',
        header: 'default: black',
        desc: 'Accent color for the text content and border of each TapableItem',
      },
      {
        name: 'heading',
        type: 'string',
        header: 'default: null',
        desc: 'Heading text inside a cell',
      },
      {
        name: 'description',
        type: 'string',
        header: 'default: null',
        desc: 'Description text inside a cell',
      },
      {
        name: 'imageSrc',
        type: 'string',
        header: 'default: null',
        desc: 'Source or path of image to be displayed in the cell',
      },
    ],
  },
];

const Grid = () => (
  <div>
    {/* <MarkdownElement text={gridReadmeText} /> */}
    <CodeExample code={normalTapableGridCode}>
      <NormalTapableGrid />
    </CodeExample>
    <CodeExample code={spacedTapableGridCode}>
      <SpacedTapableGrid />
    </CodeExample>
    <ComponentDoc
      name=""
      componentInfo={componentInfo} />
  </div>
);

export default Grid;
