const every = function (array, func) {
    let res = []

    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) == false) {
          return false;
        }
    }

    return true
}


const some = function (array, func) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (func(array[i], i, array) == true) {
      return true;
    }
  }

  return false;
};

const none = (array, func) => !(some(array,func))