
export const getImageUrl = function getImageUrl(images, colorCode) {
  if (images) {
    for (let index = 0; index < images.length; index++) {
      const color = images[index];
      if (color.colorCode === colorCode) {

        return color.url;
      }
    }
  }

  return null;
};

export const getColorCode = function getColorCode(data, srcUrl) {
  const colorArray = data.images.swatch.urls;
  const colorCode = colorArray.
   reduce((url, color) => url || color.url === srcUrl && color.colorCode, false);
  return colorCode;
};

export const getSKUInfo = function getSKUInfo(product, sku) {
  const skuInfo = product.SKUs.
   reduce((skuData, skuObj) => skuData || skuObj.id === sku && skuObj, false);
  return skuInfo;
};

export const getProductSize = function getProductSize(product, colorId) {
  const size = [];
  const skuArray = [];
  let minimum;
  let maximum;
  product.SKUs.forEach((SKus) => {
    const splitSku = SKus.id.split('-');
    const skuString = `${splitSku[0]}-${splitSku[1]}`;
    if (skuString === colorId) {
      size.push(SKus.sizeCode);
      skuArray.push(SKus);
    }
  });

  let minSize = size[0];
  let maxSize = size[0];
  size.forEach((sizes, index) => {
    if ((index + 1) <= size.length) {
      if (minSize > size[index + 1]) {
        minSize = size[index + 1];
      }

      if (maxSize < size[index + 1]) {
        maxSize = size[index + 1];
      }
    }
  });
  skuArray.forEach((skus) => {
    if (skus.sizeCode === minSize) {
      minimum = skus.size;
    }

    if (skus.sizeCode === maxSize) {
      maximum = skus.size;
    }
  });
  return `${minimum}~${maximum}`;
};

export const getFillerCount = function getFillerCount(tileType, ProductGridTiles) {
  let productCount = 0;
  const tileCountSmall = 4;
  const tileCountLarge = 3;
  /* Calculating the number of fillers for Large and Small */
  if (tileType === 'small') {
    if (ProductGridTiles % tileCountSmall === 0) {
      productCount = 0;
    } else {
      productCount = tileCountSmall - ProductGridTiles % tileCountSmall;
    }
  } else {
    if (ProductGridTiles % tileCountLarge === 0) {
      productCount = 0;
    } else {
      productCount = tileCountLarge - ProductGridTiles % tileCountLarge;
    }
  }

  return productCount;
};

export const format = function format(prices) {
  let price = null;
  if (prices !== null || prices !== undefined || prices !== '') {
    price = Number(prices).toLocaleString();
  } else {
    price = '';
  }

  return price;
};

export const getProductInfo = function getProductInfo(selectedColor, products) {
  const productTileId = products.defaultSKU.split('-');
  const formProductId = `${productTileId[0]}-${selectedColor}-${productTileId[2]}-000`;
  const productInfo = products.SKUs.
   reduce((productData, product) => productData || product.id === formProductId && product, false);
  return productInfo;
};
