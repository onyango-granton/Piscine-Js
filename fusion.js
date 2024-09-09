const fusion = function (obj1, obj2) {
  let result = {};

  Object.keys(obj1).forEach((key) => {
    if (key in obj2) {
      if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
        result[key] = obj1[key].concat(obj2[key]);
      } else if (
        typeof obj1[key] === "string" &&
        typeof obj2[key] === "string"
      ) {
        result[key] = obj1[key] + " " + obj2[key];
      } else if (
        typeof obj1[key] === "number" &&
        typeof obj2[key] === "number"
      ) {
        result[key] = obj1[key] + obj2[key];
      } else if (
        typeof obj1[key] === "object" &&
        typeof obj2[key] === "object" &&
        !Array.isArray(obj1[key]) &&
        !Array.isArray(obj2[key])
      ) {
        result[key] = fusion(obj1[key], obj2[key]);
      } else {
        result[key] = obj2[key];
      }
    } else {
      result[key] = obj1[key];
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (!(key in result)) {
      result[key] = obj2[key];
    }
  });

  return result;
};
