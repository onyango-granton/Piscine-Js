const isObject = (a) =>
  typeof a === "object" &&
  !(
    a instanceof Set ||
    a instanceof RegExp ||
    a instanceof Array ||
    a instanceof Map
  );
const replica = function (target, ...sources) {
  sources.forEach (source => {
    Object.entries(source).forEach(([key, value]) => {
      if (isObject(value) && isObject(target[key])) {
        replica(target[key], value);
      } else {
        target[key] = value;
      }
    });
  })
  return target;
};
