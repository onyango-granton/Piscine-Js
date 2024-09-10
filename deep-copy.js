const deepCopy = function (obj) {
  if (Array.isArray(obj)) {
    return [...obj];
  } else {
    return { ...obj };
  }
};
