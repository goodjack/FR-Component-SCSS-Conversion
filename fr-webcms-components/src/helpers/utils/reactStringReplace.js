import {
  isRegExp,
  escapeRegExp,
  isString,
  isArray,
  flatten,
} from 'lodash';

const replaceString = (str, match, fn) => {
  if (str === '') {
    return str;
  } else if (!str || !isString(str)) {
    throw new TypeError('First argument to react-string-replace#replaceString must be a string');
  }

  let re = match;
  if (!isRegExp(re)) {
    re = new RegExp(`(${escapeRegExp(re)})`, 'gi');
  }

  const result = str.split(re);
  for (let index = 1, length = result.length; index < length; index += 2) {
    result[index] = fn(result[index], index);
  }

  return result;
};

const reactStringReplace = (source, match, fn) => {
  const sources = (!isArray(source)) ? [source] : source;
  return flatten(sources.map((part) =>
    isString(part) ? replaceString(part, match, fn) : part
  ));
};

export default reactStringReplace;
