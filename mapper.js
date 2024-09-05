const map = function (array, mapMethod) {
  let res2 = [];
  for (let i = 0; i < array.length; i++) {
      let res = mapMethod(array[i], i, array)
      res2.push(res)
  }
  return res2;
};

const flatMap = function (array, flatMapMethod) {
  let res2 = [];
  for (let i = 0; i < array.length; i++) {
      let res = flatMapMethod(array[i], i, array)
      if (Array.isArray(res)) {
          res2.push(...res)
      } else {
          res2.push(res)
      }
  }

  return res2;
};
