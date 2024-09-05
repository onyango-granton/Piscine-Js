const filter = function (array, func) {
    let res = []
    for (let i = 0; i < array.length; i++){
        if (func(array[i], i, array) == true) {
            res.push(array[i])
        }
    }
    return res
}

const reject = function (array, func) {
    let res = []
    for (let i = 0; i < array.length; i++) {
      if (func(array[i], i, array) == true) {
        continue;
      } else {
         res.push(array[i]); 
      }
    }
    return res
}

const partition = function (array, func) {
    let trueRes = []
    let falseRes = []
    for (let i = 0; i < array.length; i++) {
      if (func(array[i], i, array) == true) {
        trueRes.push(array[i])
      } else {
        falseRes.push(array[i])
      }
    }
    return [trueRes,falseRes]
};