import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import Filters from 'uniqlo-ui/lib/Filter';
import ComponentDoc from '../../component-doc';
import Code from 'filter-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const FilterDocsPage = React.createClass({


  render() {
    console.log(Filters);
    let desc = `This component display the Filters for product`;
    const sizeData = "32,34,36,38,40";
    const colorData = "RED,BLUE,BROWN,GREY,GREEN";
    const featureData = "LONG SLEEVE,3/4 SLEEVE,SHORT SLEEVE,SUPIMA COTTON,STRAIGHT BOAT NECK,HEATTECH,MODAL LINEN,SUPIMA MODEL";
    const lengthData = "XS,S,M,L,XL,XXl";
    const sortData = "Featured,New Arrival First,Price: Low To High,Price: High To Low,Customer Rating";
    let componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'sizeData',
            type: 'string',
            header: 'required',
            desc: 'Pass the size data to render Grid-Cells',
          },
          {
            name: 'colorData',
            type: 'string',
            header: 'required',
            desc: 'Pass the color data to render Grid-Cells.',
          },
          {
            name: 'featureData',
            type: 'string',
            header: 'required',
            desc: 'Pass the feature data to render Grid-Cells.',
          },
          {
            name: 'lengthData',
            type: 'string',
            header: 'required',
            desc: 'Pass the length data to render Grid-Cells.',
          },
          {
            name: 'sortData',
            type: 'string',
            header: 'required',
            desc: 'Pass the sort data to render Grid-Cells.',
          },
        ],
      },
    ];

    return (
      <ComponentDoc
        name="Chip"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport Filter from \'uniqlo-ui/lib/Filter\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>

        <CodeExample code={Code}>
          <ClearFix>
            <div>
              <Filters
                sizeData = {sizeData}
                sortData ={sortData}
                colorData ={colorData}
                lengthData ={lengthData}
                featureData ={featureData}
                sortImage = "images/sort.jpg"
                sortClickImg="images/sortclick.jpg"
                colorImage="images/color.jpg"
                colorClickImg="images/colorclick.jpg"
                lengthImage="images/length.jpg"
                lengthClickImg="images/lengthclick.jpg"
                priceImage="images/price.jpg"
                priceClickImg="images/priceclick.jpg"
                featureImage="images/feature.jpg"
                featureClickImg="images/featureclick.jpg"
                sizeImage="images/size.jpg"
                sizeClickImg="images/sizeclick.jpg"
                waterMarkImage="images/uniqloWaterMark.jpg"
                plusSign="images/plus.jpg"
                tickSign="images/tick.jpg"
                />
            </div>
          </ClearFix>
          <ClearFix>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default FilterDocsPage;
