import React, {PropTypes} from 'react';
import {ClearFix, Paper} from 'material-ui';
import Image from 'uniqlo-ui/core/Image';
import {
  Carousel,
  Tab,
  TabbedCarousel,
  Tabs,
  Text
} from 'uniqlo-ui';
import ComponentDoc from '../../component-doc';
// import Code from 'carousel-code';
import CodeExample from '../../CodeExample';
import CodeBlock from '../../CodeExample/CodeBlock';

const TabbedCarouselPage = React.createClass({

  getInitialState() {
    return {
    };
  },

  render() {
    let desc = `This component renders the core html tab structure`;

    let componentInfo = [
      {
        name: 'TabbedCarousel Props',
        infoArray: [
          {
            name: 'position',
            type: 'String',
            header: 'optional',
            desc: 'The position of the tab head',
          },
        ],
      },
    ];
    let style = {
      width:'100%',
    };
    const tabStyle = {
      lineHeight: '12px',
    };
    // defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby.gif"
    // hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby_o.gif"
    const sample = [
      `
      <TabbedCarousel>
        <Tabs style={tabStyle}>
          <Tab type="text"
              alternateText="alternate image text"
              defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
              hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
          />
          <Tab type="text"
            alternateText="alternate image text"
            defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
            hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
          />
          <Tab type="text"
              alternateText="alternate image text"
              defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids.gif"
              hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids_o.gif"
          />
          <Tab type="text"
              alternateText="alternate image text"
              defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby.gif"
              hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby_o.gif"
          />
        </Tabs>
        <Carousel animation={'scroll'}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-01" style={style} />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-02" style={style} />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-knit-promo-block-01" style={style} />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-sweatshirts-and-sweatpants-promo-block-01" style={style} />
        </Carousel>
      </TabbedCarousel>`,
      `
      <TabbedCarousel position={'bottom'}>
        <Tabs cols={4} fitContainer={true} style={tabStyle}>
          <Tab type="text"
              alternateText="alternate image text"
              defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
              hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
          />
          <Tab type="text"
            alternateText="alternate image text"
            defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
            hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
          />
          <Tab type="text"
              alternateText="alternate image text"
              defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids.gif"
              hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids_o.gif"
          />
          <Tab type="text"
              alternateText="alternate image text"
              defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby.gif"
              hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby_o.gif"
          />
        </Tabs>
        <Carousel animation={'scroll'}  autoScroll={true}>
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-01" style={style} />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-02" style={style} />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-knit-promo-block-01" style={style} />
          <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-sweatshirts-and-sweatpants-promo-block-01" style={style} />
        </Carousel>
      </TabbedCarousel>`
    ];
    return (
      <ComponentDoc
        name="TabbedCarousel"
        desc={desc}
        componentInfo={componentInfo}>

        <Paper style = {{marginBottom: '22px'}}>
          <CodeBlock>
          {
            '//Import statement:\nimport {TabbedCarousel, Tabs, Tab, Carousel} from \'uniqlo-ui\';\n\n' +
            '//See uniqlo-ui/lib/index.js for more\n'
          }
          </CodeBlock>
        </Paper>
        <CodeExample code={sample[0]}>
          <ClearFix>
            <TabbedCarousel>
              <Tabs style={tabStyle}>
                <Tab type="text"
                    alternateText="alternate image text"
                    defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
                    hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
                />
                <Tab type="text"
                  alternateText="alternate image text"
                  defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
                  hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
                />
                <Tab type="text"
                    alternateText="alternate image text"
                    defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids.gif"
                    hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids_o.gif"
                />
                <Tab type="text"
                    alternateText="alternate image text"
                    defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby.gif"
                    hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby_o.gif"
                />
              </Tabs>
              <Carousel animation={'scroll'} height={380}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-01" style={style}/>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-02" style={style} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-knit-promo-block-01" style={style} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-sweatshirts-and-sweatpants-promo-block-01" style={style} />
              </Carousel>
            </TabbedCarousel>
          </ClearFix>
        </CodeExample>
        <CodeExample code={sample[1]}>
          <ClearFix>
            <TabbedCarousel position={'bottom'}>
              <Tabs style={tabStyle}>
                <Tab type="text"
                    alternateText="alternate image text"
                    defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women.gif"
                    hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_women_o.gif"
                />
                <Tab type="text"
                  alternateText="alternate image text"
                  defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men.gif"
                  hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_men_o.gif"
                />
                <Tab type="text"
                    alternateText="alternate image text"
                    defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids.gif"
                    hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_kids_o.gif"
                />
                <Tab type="text"
                    alternateText="alternate image text"
                    defaultImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby.gif"
                    hoverImage="http://im.uniqlo.com/images/jp/pc/img/feature/uq/limited/women/150206-anc-btn_baby_o.gif"
                />
              </Tabs>
              <Carousel animation={'scroll'} autoScroll={true} height={380}>
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-01" style={style} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-outerwear-and-blazers-promo-block-02" style={style} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-knit-promo-block-01" style={style} />
                <Image source="http://uniqlo.scene7.com/is/image/UNIQLO/us-pc-160115-w-sweatshirts-and-sweatpants-promo-block-01" style={style} />
              </Carousel>
            </TabbedCarousel>
          </ClearFix>
        </CodeExample>
      </ComponentDoc>
    );
  },

});

export default TabbedCarouselPage;
