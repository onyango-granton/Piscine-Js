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


const personnel = {
  lukeSkywalker: {
    id: 5,
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  sabineWren: {
    id: 82,
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  zebOrellios: {
    id: 22,
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  ezraBridger: {
    id: 15,
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  calebDume: {
    id: 11,
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
};

console.log(reduceCurry((acc, [k, v]) => acc.concat(" ", `${k}:${v.id}`))(
  personnel,
  "personnel:"
))