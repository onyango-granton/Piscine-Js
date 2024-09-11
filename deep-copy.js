const deepCopy = function (obj) {
  if (Array.isArray(obj)) {
    let arrCopy = []
    for (let i = 0; i < obj.length; i++){
      arrCopy[i] = deepCopy(obj[i])
    }
    return arrCopy;
  } else if (typeof(obj) === 'object' && !Array.isArray(obj) && !(typeof(obj) === 'function') && !(obj instanceof RegExp)){
    let objCopy = {}
    for (let key in obj) {
      objCopy[key] = deepCopy(obj[key])
    }
    return objCopy;
  } else {
    return obj
  }
};


console.log(/ghhh/ instanceof RegExp)