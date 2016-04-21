import React from 'react';
import ProductGrid, {Fillers} from 'uniqlo-ui/ProductGrid';
import TileButton from 'uniqlo-ui/ButtonTile/TileButton';
import ImageTile from 'uniqlo-ui/ImageTile';
import ButtonTile from 'uniqlo-ui/ButtonTile';
const userName = 'admin';
const password = 'ar1ak3@123';
const content = 'application/graphql';
const ProductGridExample = () => (
  <div>
  <ProductGrid
    variationType="Multi-Small"
    catelogPath="341"
    userName = {userName}
    password = {password}
    content  = {content}
    products="079911,159700,159699"
    catelogUrl="/catalog"
    prioritized="079911,159700"
    dePrioritized="159690,159701,15970"
    >
    <Fillers display="Always">
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test"/>
      <ButtonTile imageSrc="https://goo.gl/OiNmpt">
        <TileButton title="women" link="#" color="#ff0" target="_blank"/>
        <TileButton title="men" link="#" color="#cf0" target="_blank" />
        <TileButton title="kids" link="#" color="#fc0" target="_blank"/>
        <TileButton title="baby" link="#" color="#cc0" target="_blank"/>
      </ButtonTile>
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test" />
    </Fillers>
</ProductGrid>
  <ProductGrid
    variationType="Multi-Large"
    catelogPath="321"
    userName = {userName}
    password = {password}
    content  = {content}
    products="079911,159700,159699"
    catelogUrl="/catalog"
    prioritized="079911,159700"
    dePrioritized="159690,159701,159702"
    >
    <Fillers display="Cover">
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test"/>
      <ButtonTile imageSrc="https://goo.gl/OiNmpt">
        <TileButton title="women" link="#" color="#ff0" target="_blank"/>
        <TileButton title="men" link="#" color="#cf0" target="_blank" />
        <TileButton title="kids" link="#" color="#fc0" target="_blank"/>
        <TileButton title="baby" link="#" color="#cc0" target="_blank"/>
      </ButtonTile>
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test" />
    </Fillers>
  </ProductGrid>
  <ProductGrid
    variationType="Single-Small"
    catelogPath="321"
    userName = {userName}
    password = {password}
    content  = {content}
    products="079911,159700,159699"
    catelogUrl="/catalog"
    prioritized="079911,159700"
    dePrioritized="159690,159701,159702"
    >
    <Fillers display="Cover">
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test"/>
      <ButtonTile imageSrc="https://goo.gl/OiNmpt">
        <TileButton title="women" link="#" color="#ff0" target="_blank"/>
        <TileButton title="men" link="#" color="#cf0" target="_blank" />
        <TileButton title="kids" link="#" color="#fc0" target="_blank"/>
        <TileButton title="baby" link="#" color="#cc0" target="_blank"/>
      </ButtonTile>
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test" />
    </Fillers>
  </ProductGrid>
  <ProductGrid
    variationType="Single-Large"
    catelogPath="321"
    userName = {userName}
    password = {password}
    content  = {content}
    products="079911,159700,159699"
    catelogUrl="/catalog"
    prioritized="079911,159700"
    dePrioritized="159690,159701,159702"
    >
    <Fillers display="Cover">
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test"/>
      <ButtonTile imageSrc="https://goo.gl/OiNmpt">
        <TileButton title="women" link="#" color="#ff0" target="_blank"/>
        <TileButton title="men" link="#" color="#cf0" target="_blank" />
        <TileButton title="kids" link="#" color="#fc0" target="_blank"/>
        <TileButton title="baby" link="#" color="#cc0" target="_blank"/>
      </ButtonTile>
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test" />
    </Fillers>
  </ProductGrid>
  <ProductGrid
    variationType="Two-Column"
    catelogPath="321"
    userName = {userName}
    password = {password}
    content  = {content}
    products="079911,159700,159699"
    catelogUrl="/catalog"
    prioritized="079911,159700"
    dePrioritized="159690,159701,159702"
    >
    <Fillers display="Cover">
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test"/>
      <ButtonTile imageSrc="https://goo.gl/OiNmpt">
        <TileButton title="women" link="#" color="#ff0" target="_blank"/>
        <TileButton title="men" link="#" color="#cf0" target="_blank" />
        <TileButton title="kids" link="#" color="#fc0" target="_blank"/>
        <TileButton title="baby" link="#" color="#cc0" target="_blank"/>
      </ButtonTile>
      <ImageTile imageSrc="https://goo.gl/Rs8Swl" link="#" target="_blank" alternateText="test" />
    </Fillers>
  </ProductGrid>
</div>
);

export default ProductGridExample;
