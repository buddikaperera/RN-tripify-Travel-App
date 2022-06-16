export const IMAGES = {
  TRIPIFY_BANNER: require('./images/14.png'),
  EMPTY_LIST: require('./images/emptiyList.png'),
};

export const ICONS = {
  BACK: require('./icons/back-arrow.png'),
};

export const THUMBNAILS = {
  0: require('./images/trip-thumnails/1.png'),
  1: require('./images/trip-thumnails/2.png'),
  2: require('./images/trip-thumnails/3.png'),
  3: require('./images/trip-thumnails/4.png'),
  4: require('./images/trip-thumnails/5.png'),
  5: require('./images/trip-thumnails/6.png'),
  6: require('./images/trip-thumnails/7.png'),
  7: require('./images/trip-thumnails/8.png'),
  8: require('./images/trip-thumnails/9.png'),
  9: require('./images/trip-thumnails/10.png'),
};

export const RANDOM_THUMBNAIL = () => {
  const rand = Math.floor(Math.random() * 10);
  // console.log(rand);
  return THUMBNAILS[rand];
};
