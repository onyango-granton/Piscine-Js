const every = function (array, func) {
    let res = []

    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) == true) {
            res.push(array[i])
        }
    }

    return array.length === res.length
}


const some = function (array, func) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array) == true) {
      res.push(array[i]);
    }
  }

  return res.length > 0;
};

const none = function (array, func) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array) == true) {
      res.push(array[i]);
    }
  }

  return res.length === 0;
};