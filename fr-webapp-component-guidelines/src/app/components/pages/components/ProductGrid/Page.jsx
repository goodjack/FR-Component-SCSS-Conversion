import React from 'react';
import CodeExample from '../../../CodeExample';
//import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';
import ComponentDoc from '../../../component-doc';

//import gridCode from '!raw!uniqlo-ui/lib/ProductGrid/';
import gridReadmeText from './README';
import gridExampleSimpleCode from '!raw!./ExampleSimple';
import ProductGridExample from './ExampleSimple';

let componentInfo = [
  {
    name: 'Props',
    infoArray: [
      {
        name: 'catelogPath',
        type: 'string',
        header: 'default:null',
        desc: 'CatelogID for the products to display',
      },
      {
        name: 'catelogUrl',
        type: 'string',
        header: 'default:null',
        desc: ' URL for loading the products to display',
      },
      {
        name: 'cellHeight',
        type: 'string',
        header: 'optional',
        desc: 'Number of px for one cell height.',
      },
      {
        name: 'children',
        type: 'node',
        header: 'optional',
        desc: 'Fillers to accommodate the empty spaces.',
      },
      {
        name: 'dePrioritized',
        type: 'string',
        header: 'optional',
        desc: 'Product Ids to display in low priority .',
      },
      {
        name: 'padding',
        type: 'string',
        header: 'optional',
        desc: 'Number of px for the padding/spacing between items.',
      },
      {
        name: 'prioritized',
        type: 'string',
        header: 'optional',
        desc: 'ProductIds to display in high priority.',
      },
      {
        name: 'products',
        type: 'string',
        header: 'optional',
        desc: 'Default ProductIds to display without having any priorities.',
      },
      {
        name: 'style',
        type: 'string',
        header: 'optional',
        desc: 'Override the inline-styles of the root element.',
      },
      {
        name: 'variationType',
        type: 'string',
        header: 'default:Single-Small',
        desc: '\'small\' will display 4 tile in a row \'large\' will display 3 tile in a row.',
      },
      {
        name: 'ratingLinkUrl',
        type: 'string',
        desc: 'pass the url link to the Rating Text',
      },
      {
        name: 'alternateText',
        type: 'string',
        desc: 'pass the alternate text to the colorPicker',
      },
    ],
  },
];

const ProductGrid = () => (
  <div>
    <MarkdownElement text={gridReadmeText} />
    <CodeExample code={gridExampleSimpleCode}>
      <ProductGridExample/>
    </CodeExample>
    <ComponentDoc
      name=""
      componentInfo={componentInfo} />
  </div>
);

export default ProductGrid;
