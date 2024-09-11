function isType(n, type) {
  return typeof n === type;
}

const isArray = (n) => isType(n, "array");
const isObject = (n) =>
  isType(n, "object") &&
  !isFunction(n) &&
  !isArray(n) &&
  n !== null &&
  !(n instanceof RegExp);
const isFunction = (n) => isType(n, "function");

const replica = function (target, ...sources) {
  sources.forEach((source) => {
    Object.entries(source).forEach(([key, value]) => {
      if (isObject(value) && isObject(target[key])) {
        replica(target[key], value);
      } else {
        target[key] = value;
      }
    });
  });
  return target;
};
;