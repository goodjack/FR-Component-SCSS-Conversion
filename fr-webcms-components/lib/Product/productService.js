'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getImageUrl = exports.getImageUrl = function getImageUrl(images, colorCode) {
  if (images) {
    for (var index = 0; index < images.length; index++) {
      var color = images[index];
      if (color.colorCode === colorCode) {

        return color.url;
      }
    }
  }

  return null;
};

var getColorCode = exports.getColorCode = function getColorCode(data, srcUrl) {
  var colorArray = data.images.swatch.urls;
  var colorCode = colorArray.reduce(function (url, color) {
    return url || color.url === srcUrl && color.colorCode;
  }, false);
  return colorCode;
};

var getSKUInfo = exports.getSKUInfo = function getSKUInfo(product, sku) {
  var skuInfo = product.SKUs.reduce(function (skuData, skuObj) {
    return skuData || skuObj.id === sku && skuObj;
  }, false);
  return skuInfo;
};

var getProductSize = exports.getProductSize = function getProductSize(product, colorId) {
  var size = [];
  var skuArray = [];
  var minimum = void 0;
  var maximum = void 0;
  product.SKUs.forEach(function (SKus) {
    var splitSku = SKus.id.split('-');
    var skuString = splitSku[0] + '-' + splitSku[1];
    if (skuString === colorId) {
      size.push(SKus.sizeCode);
      skuArray.push(SKus);
    }
  });

  var minSize = size[0];
  var maxSize = size[0];
  size.forEach(function (sizes, index) {
    if (index + 1 <= size.length) {
      if (minSize > size[index + 1]) {
        minSize = size[index + 1];
      }

      if (maxSize < size[index + 1]) {
        maxSize = size[index + 1];
      }
    }
  });
  skuArray.forEach(function (skus) {
    if (skus.sizeCode === minSize) {
      minimum = skus.size;
    }

    if (skus.sizeCode === maxSize) {
      maximum = skus.size;
    }
  });
  return minimum + '~' + maximum;
};

var getFillerCount = exports.getFillerCount = function getFillerCount(tileType, ProductGridTiles) {
  var productCount = 0;
  var tileCountSmall = 4;
  var tileCountLarge = 3;
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

var format = exports.format = function format(prices) {
  var price = null;
  if (prices !== null || prices !== undefined || prices !== '') {
    price = Number(prices).toLocaleString();
  } else {
    price = '';
  }

  return price;
};

var getProductInfo = exports.getProductInfo = function getProductInfo(selectedColor, products) {
  var productTileId = products.defaultSKU.split('-');
  var formProductId = productTileId[0] + '-' + selectedColor + '-' + productTileId[2] + '-000';
  var productInfo = products.SKUs.reduce(function (productData, product) {
    return productData || product.id === formProductId && product;
  }, false);
  return productInfo;
};