export default function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let pos = 0; pos < keysA.length; pos++) {
    if (!bHasOwnProperty(keysA[pos]) || objA[keysA[pos]] !== objB[keysA[pos]]) {
      return false;
    }
  }

  return true;
}
