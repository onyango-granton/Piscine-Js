const fold = function (array, func, accumulator) {
    for (let i = 0; i < array.length; i++) {
      accumulator = func(accumulator, array[i], i, array);
    }
    return accumulator;
}

const foldRight = function (array, func, accumulator) {
  for (let i = array.length - 1 ; i >= 0; i--) {
    accumulator = func(accumulator, array[i], i, array);
  }
  return accumulator;
};

const reduce = function (array, func, accumulator) {
  if (accumulator == null) {
    accumulator = 0;
  }
  for (let i = 0; i < array.length; i++) {
    accumulator = func(accumulator, array[i], i, array);
  }
  return accumulator;
};

const reduceRight = function (array, func, accumulator) {
    if (accumulator == null) {
        accumulator = 0
    }
  for (let i = array.length - 1; i >= 0; i--) {
    accumulator = func(accumulator, array[i], i, array);
  }
  return accumulator;
};