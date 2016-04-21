import React from 'react';
import Container from 'uniqlo-ui/core/Container';
import Heading from 'uniqlo-ui/Heading';
import TapableGrid from 'uniqlo-ui/uniqlo/TapableGrid';
import TapableItem from 'uniqlo-ui/uniqlo/TapableGrid/TapableItem';

const NormalTapableGrid = () => (
  <div>
    <Container bgColor="#fff" height={300} width={280}>
      <Heading headingText="SHOP NOW" type="h6"/>
      <TapableGrid
        cellPadding={0}
        columns={2}
        cellHeight={115}
        cellWidth={140}
        variation="normal"
      >
        <TapableItem
          heading="NEW ARRIVALS"
          description="See all new items added this week."
        />
        <TapableItem
          heading="ONLINE EXCLUSIVES"
          description="Items and prices you can only fing here."
        />
        <TapableItem
          heading="WEEKLY PROMOTIONS"
          description="Stock up on specially-priced cold weather essential."
        />
        <TapableItem
          heading="SALE"
          description="Shop 100s of seasonal markdowns before they sell out."
        />
      </TapableGrid>
    </Container>
  </div>
);

export default NormalTapableGrid;
