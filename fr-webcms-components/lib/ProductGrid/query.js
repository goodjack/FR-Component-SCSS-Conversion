'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var query = exports.query = function query(categoryId, productIds) {
  var queryString = productIds ? 'list' : 'search';
  var queryData = productIds ? 'productID' : 'category';
  var queryIds = productIds ? productIds : categoryId;
  return 'query catalog {\n  ' + queryString + '(' + queryData + ': "' + queryIds + '") {\n    total\n    count\n    items {\n      alteration {\n        increment\n        unit\n        minLength\n        type\n        doubleWidth\n      }\n      desc\n      onlinePriority\n      salesStart\n      onlineClassification\n      defaultSKU\n      defaultColor\n      onlineDisplayLinks\n      onlineID\n      productID\n      onlineStock\n      onlineDeliveryDate\n      onlineCategory\n      category\n      title\n      originalPrice\n      onlineProductClass\n      SKUs {\n        ...skuUnit\n      }\n      images {\n        family {\n          ...imageInfo\n        }\n        main {\n          ...imageInfo\n        }\n        swatch {\n          ...imageInfo\n        }\n      }\n      review {\n        count\n        average\n      }\n    }\n  }\n}\n\nfragment imageInfo on SKUImageInfoType {\n  height\n  width\n  urls {\n    colorCode\n    url\n  }\n}\n\nfragment skuUnit on productunit {\n  onlineSalesStatus\n  salesStart\n  lengthCode\n  onlineOnly\n  currentPrice\n  limitedOffer\n  multiBuy\n  onlineRealStock\n  sizeCode\n  onlineStock\n  size\n  discount\n  id\n  PLUs\n  onlineLowStock\n  maxLength\n  color\n  length\n  active\n  colorCode\n}';
};