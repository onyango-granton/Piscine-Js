const defaultCurry = function (obj1) {
    return function (obj2) {
        let returnRes = {}
        Object.entries(obj1).forEach(([key, value]) => {
            returnRes[key] = value
        })
        Object.entries(obj2).forEach(([key, value]) => {
            if (key in returnRes) {
              returnRes[key] = value
            } else {
                returnRes[key] = value
          }
        });
        return returnRes
    }
}

const mapCurry = function (func) {
    return function (obj) {
        const shallowCopy = { ...obj };
        Object.entries(shallowCopy).forEach(([key, value]) => {
          shallowCopy[func([key, value])[0]] = func([key, value])[1];
          delete shallowCopy[key];
        });
        return shallowCopy;
    }
}


const reduceCurry = function (func) {
    return function (obj, initialValue) {
        initialValue == null ? (initialValue = 0) : null;
        let shallowCopy = { ...obj };
        Object.values(shallowCopy).forEach((value) => {
          initialValue += func(0, value);
        });

        return initialValue;
    }
}

const filterCurry = function (func) {
    return function (obj) {
        const shallowCopy = { ...obj };
        Object.entries(shallowCopy).forEach(([key, value]) => {
          if (!func([key, value])) {
            delete shallowCopy[key];
          }
        });
        return shallowCopy;
    }
}

console.log(
  defaultCurry({
    http: 403,
    connection: "close",
    contentType: "multipart/form-data",
  })({
    http: 200,
    connection: "open",
    requestMethod: "GET",
  })
);