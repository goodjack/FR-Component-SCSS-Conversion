export default {
  textInput: {
    showHint: true,
  },
  sectionTitle: {
    showSubTitle: true,
  },
  coordinate: {
    styleUrl: 'http://style.uniqlo.com/api/v0/styleDetail.json',
    productLink: 'http://www.uniqlo.com/jp/stylingbook/pc/style/',
  },
  grid: {
    maxCols: 12,
  },
  gridCell: {
    rootClass: 'div',
    colSpan: 1,
    rowSpan: 1,
  },
  badge: {
    maxLimit: null,
    position: 'left',
  },
  youtube: {
    allowAutoplay: false,
    allowLooping: false,
    allowFullScreen: true,
    showControls: true,
    showRelatedVideos: false,
    embedUrlPrefix: 'https://www.youtube.com/embed/',
  },
  modal: {
    dialogHeight: '500px',
    dialogWidth: '500px',
    dialogTopPosition: '50px',
  },
  proxyLink: {
    textDecoration: 'underline',
  },
  hero: {
    titleLinesToShow: 3,
    subtitleLinesToShow: 3,
    textLinesToShow: 3,
    textOverlayMaxWidth: '50%',
  },
  instagram: {
    instagramApiUrl: 'https://api.instagram.com/oembed/',
    instagramImageUrl: 'http://instagr.am/p/',
    captionLinesToShow: 3,
    containerHeight: 350,
  },
  overlay: {
    containerHeight: 300,
  },
};
