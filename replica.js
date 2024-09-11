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
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!target.hasOwnProperty(key) || !isObject(target[key])) {
          target[key] = {};
        }
        replica(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  });
  return target;
}

console.log(
  replica(
    {},
    Object.freeze({ line: "Replicants are like any other machine" }),
    Object.freeze({ author: "Rich" })
  )
);

console.log(replica({ con: console.log }, { reg: /hello/ }));

console.log(replica({ a: 4 }, { a: { b: 1 } }).a.b);

console.log(replica({ a: 2 }, { a: [4] }).a);