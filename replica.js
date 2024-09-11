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

function replica(target, ...sources) {
  for (const source of sources) {
    for (const [key, value] of Object.entries(source)) {
      if (isObject(value)) {
        target[key] = target[key] ?? {};
        replica(target[key], value);
      } else {
        target[key] = value;
      }
    }
  }
  return target;
}
