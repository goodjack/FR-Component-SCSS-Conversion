import React from 'react';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';
import ComponentDoc from '../../../component-doc';
import gridCode from '!raw!uniqlo-ui/core/Grid/';
import gridCellCode from '!raw!uniqlo-ui/core/GridCell';
import gridReadmeText from './README';
import GridExampleBasic from './ExampleBasic';
import gridExampleBasicCode from '!raw!./ExampleBasic';
import GridExampleMultiLine from './ExampleMultiLine';
import gridExampleMultiLineCode from '!raw!./ExampleMultiLine';
import GridExampleComplex from './ExampleComplex';
import gridExampleComplexCode from '!raw!./ExampleComplex';
import GridExampleUnpadded from './ExampleUnpadded';
import gridExampleUnpaddedCode from '!raw!./ExampleUnpadded';

let componentInfo = [
  {
    name: 'Grid Props',
    infoArray: [
      {
        name: 'cellHeight',
        type: 'number',
        header: 'default: 180',
        desc: 'Number of px for one cell height',
      },
      {
        name: 'cellPadding',
        type: 'number',
        header: 'default: 10',
        desc: 'Padding/spacing between child elements in pixels.',
      },
      {
        name: 'children',
        type: 'any',
        header: 'default: null',
        desc: 'Grid Tiles that will be in Grid List.',
      },
      {
        name: 'maxCols',
        type: 'number',
        header: 'default: 12',
        desc: 'Number of columns.',
      },
      {
        name: 'style',
        type: 'object',
        header: 'optional',
        desc: 'Override the inline-styles of the root element.',
      },
    ],
  },
  {
      name: 'GridCell Props',
      infoArray: [
        {
          name: 'children',
          type: 'node',
          header: 'default: null',
          desc: 'Grid Tiles that will be in Grid List.',
        },
        {
          name: 'colSpan',
          type: 'number',
          header: 'default: 1',
          desc: 'Width of the tile in number of grid cells.',
        },
        {
          name: 'rootClass',
          type: 'union',
          header: 'default: \'div\'',
          desc: 'Either a string used as tag name for the tile root element, or a ReactComponent. This is useful when you have, for example, a custom implementation of a navigation link (that knowsabout your routes) and you want to use it as primary tile action. In case you pass a ReactComponent, please make sure that it passes all props, accepts styles overrides and render it\'s children.',
        },
        {
          name: 'rowSpan',
          type: 'number',
          header: 'default: 1',
          desc: 'Height of the tile in number of grid cells.',
        },
        {
          name: 'style',
          type: 'object',
          header: 'object',
          desc: 'Override the inline-styles of the root element.',
        },
      ],
    },
];

const Grid = () => (
  <div>
    <MarkdownElement text={gridReadmeText} />
    <CodeExample code={gridExampleBasicCode}>
      <GridExampleBasic />
    </CodeExample>
    <CodeExample code={gridExampleMultiLineCode}>
      <GridExampleMultiLine />
    </CodeExample>
    <CodeExample code={gridExampleUnpaddedCode}>
      <GridExampleUnpadded />
    </CodeExample>
    <CodeExample code={gridExampleComplexCode}>
      <GridExampleComplex />
    </CodeExample>
    <ComponentDoc
      name=""
      componentInfo={componentInfo} />
  </div>
);

export default Grid;
