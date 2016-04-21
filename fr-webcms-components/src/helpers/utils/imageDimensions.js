
export const getImageDimensions = (originalHeight, originalWidth, resizedHeight, resizedWidth) => {
  const aspectRatio = originalWidth / originalHeight;
  let imageWidth;
  let imageHeight;
  let marginTop;
  let marginLeft;
  if ((resizedWidth / resizedHeight) > aspectRatio) {
    imageWidth = Math.round(aspectRatio * resizedHeight);
    imageHeight = resizedHeight;
    marginLeft = (resizedWidth - imageWidth) / 2;
  } else {
    imageHeight = Math.round(resizedWidth / aspectRatio);
    imageWidth = resizedWidth;
    marginTop = (resizedHeight - imageHeight) / 2;
  }

  return { imageWidth, imageHeight, marginTop, marginLeft };
};
