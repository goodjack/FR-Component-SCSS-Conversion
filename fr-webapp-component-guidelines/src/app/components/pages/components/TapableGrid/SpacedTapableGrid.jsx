import React from 'react';
import Container from 'uniqlo-ui/core/Container';
import Heading from 'uniqlo-ui/Heading';
import Text from 'uniqlo-ui/Text';
import TapableGrid from 'uniqlo-ui/uniqlo/TapableGrid';
import TapableItem from 'uniqlo-ui/uniqlo/TapableGrid/TapableItem';

const SpacedTapableGrid = () => (
  <div>
    <Container bgColor="#fff" height={300} width={300}>
      <Heading headingText="SHOP NOW" type="h4" />
      <TapableGrid
        cellPadding={15}
        columns={2}
        cellHeight={130}
        cellWidth={130}
        variation="spaced"
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
          description="Specially-priced cold weather essential."
        />
        <TapableItem
          heading="SALE"
          description="Shop 100s of seasonal markdowns before they sell out."
        />
      </TapableGrid>
    </Container>
  </div>
);

export default SpacedTapableGrid;
