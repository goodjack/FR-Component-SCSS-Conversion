export const objToParams = (obj) => Object.keys(obj)
  .map(key => `${key}=${obj[key]}`)
  .join('&');

export const generateUrl = (prefix, paramsObj) => {
  const concatParams = objToParams(paramsObj);
  return `${prefix}?${concatParams}`;
};
