function isObject(obj) {
  return typeof (obj) === 'object' && obj !== null;
}

/**
*  A recursive merge between two objects.
*
*  @param base     - the object whose properties are to be overwritten. It
*                    should be either the root level or some nested level.
*  @param override - an object containing properties to be overwritten. It
*                    should have the same structure as the object object.
*/
const extend = (base, override) => {

  const mergedObject = {};

  // Loop through each key in the base object
  Object.keys(base).forEach((key) => {

    const baseProp = base[key];
    let overrideProp;

    if (isObject(override)) overrideProp = override[key];

    // Recursive call extend if the prop is another object, else just copy it over
    mergedObject[key] = isObject(baseProp) && !Array.isArray(baseProp) ?
      extend(baseProp, overrideProp) : baseProp;

  });

  // Loop through each override key and override the props in the
  // base object
  if (isObject(override)) {

    Object.keys(override).forEach((overrideKey) => {

      const overrideProp = override[overrideKey];

      // Only copy over props that are not objects
      if (!isObject(overrideProp) || Array.isArray(overrideProp)) {
        mergedObject[overrideKey] = overrideProp;
      }

    });
  }

  return mergedObject;
};

export default extend;
