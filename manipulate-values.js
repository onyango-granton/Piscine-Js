const filterValues = function (obj, func) {
  let shallowCopy = { ...obj };
  Object.entries(shallowCopy).forEach(([key, value]) => {
    if (!func(value)) {
      delete shallowCopy[key];
    }
  });
  return shallowCopy;
};

const mapValues = function (obj, func) {
  let shallowCopy = { ...obj };
  Object.entries(shallowCopy).forEach(([key, value]) => {
    shallowCopy[key] = func(value);
  });
  return shallowCopy;
};

const reduceValues = function (obj, func, initialValue) {
  initialValue == null ? (initialValue = 0) : null;
  let shallowCopy = { ...obj };
  Object.values(shallowCopy).forEach((value) => {
    initialValue += func(0, value);
  });

  return initialValue;
};
