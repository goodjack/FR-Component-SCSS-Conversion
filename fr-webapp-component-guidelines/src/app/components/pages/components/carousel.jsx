import React from 'react';
import {ClearFix, Paper} from 'material-ui';
import {Carousel, CarouselTile, CarouselHead} from 'uniqlo-ui';
import {Text, Image, SectionImage} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
// import Code from 'carousel-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';
const CarouselPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  onPressTitle(text) {
    // alert(text);
  },


  render() {
    let desc = `This component renders the core html carousel`;

    let componentInfo = [
      {
        name: 'Carousel Props',
        infoArray: [
          {
            name: 'tabHead',
            type: 'Boolean',
            header: 'optional',
            desc: 'Flag to represent whether the carousel should display head. Default is true.',
          },
          {
            name: 'animation',
            type: 'String',
            header: 'optional',
            desc: 'Animation for the carousel component. It should be one of "scroll", "fade", "none". Default is "none".',
          },
          {
            name: 'autoScroll',
            type: 'Boolean',
            header: 'optional',
            desc: 'Validation whether the selection of tab head is auto on time interval. Default is false.',
          },
          {
            name: 'delay',
            type: 'Number',
            header: 'optional',
            desc: 'Delay for tiles to stay in one slide on animation. "animation" property should be true. Default delay is 4000 (4s).',
          },
          {
            name: 'height',
            type: 'number',
            header: 'optional',
            desc: 'Height of the carousel.',
          },
          {
            name: 'navHead',
            type: 'Boolean',
            header: 'optional',
            desc: 'Boolean to show/hide navigation arrow head. Default is false.',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Style for carousel component.',
          },
          {
            name: 'tabPosition',
            type: 'String',
            header: 'optional',
            desc: 'Position of the tab head of the carousel. Should be one of "top", "bottom". Default is "bottom".',
          },
          {
            name: 'display',
            type: 'number',
            header: 'optional',
            desc: 'Number of tiles to be displayed on the carousel. Default is 1.',
          },
          {
            name: 'scroll',
            type: 'number',
            header: 'optional',
            desc: 'Number of tiles to scroll on the carousel. Default is 1.',
          },
          {
            name: 'navStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style for navigation arrow on carousel',
          },
          {
            name: 'navHoverStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style for navigation arrow on carousel when mouse is on the navigator',
          },
        ],
      }, {
        name: 'CarouselTile Props',
        infoArray: [
          {
            name: 'animation',
            type: 'String',
            header: 'optional',
            desc: 'Animation for the carousel component. It should be one of "scroll", "fade", "none". Default is "none".',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Style for carousel component.',
          },
          {
            name: 'tilePosition',
            type: 'String',
            header: 'optional',
            desc: 'Position of the tab head of the carousel. Should be one of "top", "bottom". Default is "bottom". Passed from Carousel component.',
          },
        ],
      },

      {
        name: 'CarouselHead Props',
        infoArray: [
          {
            name: 'highlightStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style to be applied on the individual tab head on selection',
          },
          {
            name: 'style',
            type: 'object',
            header: 'optional',
            desc: 'Style for carousel component.',
          },
          {
            name: 'contentStyle',
            type: 'object',
            header: 'optional',
            desc: 'Style to be applied on the individual tab head children on selection.',
          },
        ],
      },
    ];
    let style = {
      tile: {
        backgroundColor: 'red',
        border: '1px solid white',
      },
      wrapper: {
        display: 'inline-block',
        float: 'left',
        margin: 10,
        width: 380,
        border: '1px dotted'
      },
      highlight: {
        border: 'none',
        backgroundColor: '#424242',
      },
      headStyle: {
        color: 'white',
      },
      multi: {
        display: 'inline-block',
        float: 'left',
        margin: 10,
        width: 380,
        border: '1px dotted'
      },
      text: {
        textAlign: 'center',
        fontSize: '2em',
      },
    };
    let head = Object.assign({}, style.wrapper, {
      width: 750,
    });
    const sample = [
      `
      <Carousel autoScroll={true} style={head} animation={'scroll'} tabHead={false} navHead={true}>
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-01" />
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-02" />
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-knit-promo-block-01" />
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-sweatshirts-and-sweatpants-promo-block-01" />
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-shirts-and-blouses-promo-block-01" />
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-dresses-and-skirts-promo-block-01" />
        <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-knits-and-tees-promo-block-01" />
      </Carousel>`,
      `
      <Carousel autoScroll={true} style={style.multi} animation={'fade'} tabHead={true} display={1}>
        <CarouselTile style={style.tile}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334?$prod$" />
        </CarouselTile>
        <CarouselTile style={style.tile}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491?$prod$" />
        </CarouselTile>
        <CarouselTile style={style.tile}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_03_163333?$prod$" />
        </CarouselTile>
        <CarouselTile style={style.tile}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527?$prod$" />
        </CarouselTile>
        <CarouselTile style={style.tile}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_09_158825?$prod$" />
        </CarouselTile>
        <CarouselTile style={style.tile}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_69_174518?$prod$" />
        </CarouselTile>
        <CarouselTile style={style.tile}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_69_163341?$prod$" />
        </CarouselTile>
      </Carousel>`,
      `
      <Carousel autoScroll={true} animation={'fade'} tabHead={false} navHead={false} current={3} totalTile={4}>
        <CarouselTile style={style.text}>
          <Text>Offer 50 %</Text>
        </CarouselTile>
        <CarouselTile style={style.text}>
          <Text>Summer Sale</Text>
        </CarouselTile>
        <CarouselTile style={style.text}>
          <Text>New Arrivals</Text>
        </CarouselTile>
        <CarouselTile style={style.text}>
          <Text>Checkout the in store offer</Text>
        </CarouselTile>
      </Carousel>`,
    ];
    return (
      <ComponentDoc
        name="Carousel"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {Carousel, CarouselTile, CarouselHead} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>
        <CodeExample code={sample[0]}>
          <ClearFix>
            <Carousel autoScroll={true} style={head} animation={'scroll'} tabHead={false} navHead={true}>
              <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-01" />
              <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-02" />
              <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-knit-promo-block-01" />
              <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-sweatshirts-and-sweatpants-promo-block-01" />
              <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-shirts-and-blouses-promo-block-01" />
              <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-dresses-and-skirts-promo-block-01" />
              <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-knits-and-tees-promo-block-01" />
            </Carousel>
          </ClearFix>
        </CodeExample>
        <CodeExample code={sample[1]}>
          <ClearFix>
            <Carousel autoScroll={false} style={style.multi} animation={'fade'} tabHead={true} display={1}>
              <CarouselTile style={style.tile}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_67_163334?$prod$" />
              </CarouselTile>
              <CarouselTile style={style.tile}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_75_157491?$prod$" />
              </CarouselTile>
              <CarouselTile style={style.tile}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_03_163333?$prod$" />
              </CarouselTile>
              <CarouselTile style={style.tile}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_31_170527?$prod$" />
              </CarouselTile>
              <CarouselTile style={style.tile}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_09_158825?$prod$" />
              </CarouselTile>
              <CarouselTile style={style.tile}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_69_174518?$prod$" />
              </CarouselTile>
              <CarouselTile style={style.tile}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/goods_69_163341?$prod$" />
              </CarouselTile>
            </Carousel>
          </ClearFix>
        </CodeExample>

        <CodeExample code={sample[2]}>
          <ClearFix>
            <Carousel autoScroll={true} animation={'fade'} tabHead={false} navHead={false}  current={3} totalTile={4}>
              <CarouselTile style={style.text}>
                <Text>Offer 50 %</Text>
              </CarouselTile>
              <CarouselTile style={style.text}>
                <Text>Summer Sale</Text>
              </CarouselTile>
              <CarouselTile style={style.text}>
                <Text>New Arrivals</Text>
              </CarouselTile>
              <CarouselTile style={style.text}>
                <Text>Checkout the in store offer</Text>
              </CarouselTile>
            </Carousel>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default CarouselPage;
