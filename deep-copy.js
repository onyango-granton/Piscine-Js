const deepCopy = function (obj) {
  if (Array.isArray(obj)) {
    let arrCopy = []
    for (let i = 0; i < obj.length; i++){
      arrCopy[i] = deepCopy(obj[i])
    }
    return arrCopy;
  } else {
    let objCopy = {}
    for (let key in obj) {
      objCopy[key] = deepCopy(obj[key])
    }
    return objCopy;
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