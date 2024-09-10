const defaultCurry = function (obj1) {
  return function (obj2) {
    let returnRes = {};
    Object.entries(obj1).forEach(([key, value]) => {
      returnRes[key] = value;
    });
    Object.entries(obj2).forEach(([key, value]) => {
      if (key in returnRes) {
        returnRes[key] = value;
      } else {
        returnRes[key] = value;
      }
    });
    return returnRes;
  };
};

const mapCurry = function (func) {
  return function (obj) {
    const shallowCopy = { ...obj };
    Object.entries(shallowCopy).forEach(([key, value]) => {
      shallowCopy[func([key, value])[0]] = func([key, value])[1];
      delete shallowCopy[key];
    });
    return shallowCopy;
  };
};

const reduceCurry = function (func) {
  return function (obj, initialValue) {
    let shallowCopy = { ...obj };
    let keyArr = Object.keys(shallowCopy);
    let valArr = Object.values(shallowCopy);

    if (initialValue == null) {
      initialValue = keyArr[0] + valArr[0];
      for (let i = 1; i < keyArr.length; ) {
        for (let j = 1; j < valArr.length; j++) {
          initialValue = func(initialValue, [keyArr[i], `${valArr[i]}`]);
          i++;
        }
        break;
      }
    } else {
      for (let i = 0; i < keyArr.length; ) {
        for (let j = 0; j < valArr.length; j++) {
          initialValue = func(initialValue, [keyArr[i], valArr[i]]);
          i++;
        }
        break;
      }
    }

    return initialValue;
  };
};

const filterCurry = function (func) {
  return function (obj) {
    const shallowCopy = { ...obj };
    Object.entries(shallowCopy).forEach(([key, value]) => {
      if (!func([key, value])) {
        delete shallowCopy[key];
      }
    });
    return shallowCopy;
  };
};

const reduceScore = function (obj, initialValue) {
  initialValue == null ? (initialValue = 0) : null;
  Object.entries(obj).forEach(([key]) => {
    if (obj[key].isForceUser) {
      Object.entries(obj[key]).forEach(([key, value]) => {
        if (key != "id" && key != "isForceUser") {
          console.log(initialValue);
          initialValue += value;
        }
      });
    }
  });
  return initialValue;
};

const filterForce = function (obj) {
  let shallowCopy = { ...obj };
  Object.entries(shallowCopy).forEach(([key]) => {
    if (shallowCopy[key].shootingScore < 80) {
      delete shallowCopy[key];
    }
  });
  Object.entries(shallowCopy).forEach(([key]) => {
    if (!shallowCopy[key].isForceUser) {
      delete shallowCopy[key];
    }
  });
  return shallowCopy;
};

const mapAverage = function (obj) {
  let shallowCopy = { ...obj };
  Object.entries(shallowCopy).forEach(([key, value]) => {
    let keySum = 0;
    Object.entries(shallowCopy[key]).forEach(([key, value]) => {
      if (key != "id" && key != "isForceUser") {
        keySum += value;
      }
    });
    shallowCopy[key].avarageScore = keySum / 2;
  });

  return shallowCopy;
};
