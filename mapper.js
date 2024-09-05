const map = function (array, mapMethod) {
  let res2 = [];
  for (let i = 0; i < array.length; i++) {
    const result = flatMapMethod(array[i]);
    if (Array.isArray(result)) {
      res2.push(...result);
    } else if (result !== undefined) {
      res2.push(result);
    } else {
      res2.push("undefined");
    }
  }
  return res2;
};

const flatMap = function (array, flatMapMethod) {
  let res2 = [];
  for (let i = 0; i < array.length; i++) {
    const result = flatMapMethod(array[i]);
    if (Array.isArray(result)) {
      res2.push(...result);
    } else if (result !== undefined) {
      res2.push(result);
    } else {
      res2.push("undefined");
    }
  }

  return res2;
};
