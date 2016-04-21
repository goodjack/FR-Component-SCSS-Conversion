"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getImageDimensions = exports.getImageDimensions = function getImageDimensions(originalHeight, originalWidth, resizedHeight, resizedWidth) {
  var aspectRatio = originalWidth / originalHeight;
  var imageWidth = void 0;
  var imageHeight = void 0;
  var marginTop = void 0;
  var marginLeft = void 0;
  if (resizedWidth / resizedHeight > aspectRatio) {
    imageWidth = Math.round(aspectRatio * resizedHeight);
    imageHeight = resizedHeight;
    marginLeft = (resizedWidth - imageWidth) / 2;
  } else {
    imageHeight = Math.round(resizedWidth / aspectRatio);
    imageWidth = resizedWidth;
    marginTop = (resizedHeight - imageHeight) / 2;
  }

  return { imageWidth: imageWidth, imageHeight: imageHeight, marginTop: marginTop, marginLeft: marginLeft };
};