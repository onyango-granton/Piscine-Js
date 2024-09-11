const deepCopy = function (obj) {
  if (Array.isArray(obj)) {
    return Object.freeze([...obj]);
  } else {
    return Object.freeze({ ...obj });
  }
};


const test11 = function () {
  const r = Math.random();
  const obj = [r, Object.freeze([r, Object.freeze([r])])];
  const copy = deepCopy(obj);
  //eq(copy, obj);
  console.log(obj[1][1], copy[1][1])
  return obj[1][1] !== copy[1][1];
}

console.log(test11())