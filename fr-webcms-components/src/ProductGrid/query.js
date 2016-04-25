export const query = function query(categoryId, productIds) {
  const queryString = productIds ? 'list' : 'search';
  const queryData = productIds ? 'productID' : 'category';
  const queryIds = productIds ? productIds : categoryId;
  return `query catalog {
  ${queryString}(${queryData}: "${queryIds}") {
    total
    count
    items {
      alteration {
        increment
        unit
        minLength
        type
        doubleWidth
      }
      desc
      onlinePriority
      salesStart
      onlineClassification
      defaultSKU
      defaultColor
      onlineDisplayLinks
      onlineID
      productID
      onlineStock
      onlineDeliveryDate
      onlineCategory
      category
      title
      originalPrice
      onlineProductClass
      SKUs {
        ...skuUnit
      }
      images {
        family {
          ...imageInfo
        }
        main {
          ...imageInfo
        }
        swatch {
          ...imageInfo
        }
      }
      review {
        count
        average
      }
    }
  }
}

fragment imageInfo on SKUImageInfoType {
  height
  width
  urls {
    colorCode
    url
  }
}

fragment skuUnit on productunit {
  onlineSalesStatus
  salesStart
  lengthCode
  onlineOnly
  currentPrice
  limitedOffer
  multiBuy
  onlineRealStock
  sizeCode
  onlineStock
  size
  discount
  id
  PLUs
  onlineLowStock
  maxLength
  color
  length
  active
  colorCode
}`;
};
