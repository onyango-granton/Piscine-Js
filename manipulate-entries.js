const filterEntries = function (obj, func) {
  const shallowCopy = { ...obj };
  Object.entries(shallowCopy).forEach(([key, value]) => {
    if (!func([key, value])) {
      delete shallowCopy[key];
    }
  });
  return shallowCopy;
};

const mapEntries = function (obj, func) {
  const shallowCopy = { ...obj };
  Object.entries(shallowCopy).forEach(([key, value]) => {
    shallowCopy[func([key, value])[0]] = func([key,value])[1];
    delete shallowCopy[key];
  });
  return shallowCopy;
};

const reduceEntries = function (obj, func, initialValue) {
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
        initialValue = func(initialValue, [keyArr[i], `${valArr[i]}`]);
        i++;
      }
      break;
    }
  }

  return initialValue;
};

const totalCalories = function (obj) {
  let totalCalories = 0;
  let shallowCopy = { ...obj };
  Object.entries(shallowCopy).forEach(([key, value]) => {
    if (key in nutritionDB) {
      console.log(key, nutritionDB[key]);
      totalCalories += (nutritionDB[key].calories * value) / 100;
    }
  });

  return Math.round(totalCalories * 10) / 10;
};

const lowCarbs = function (obj) {
  let shallowCopy = { ...obj };
  Object.entries(shallowCopy).forEach(([key, value]) => {
    let carbs = (nutritionDB[key].carbs * value) / 100;
    if (carbs >= 50) {
      delete shallowCopy[key];
    }
  });
  return shallowCopy;
};

const cartTotal = function (obj) {
  let shallowCopy = { ...obj };
  let nutritionCopy = { ...nutritionDB };

  Object.keys(nutritionCopy).forEach((key) => {
    if (!(key in shallowCopy)) {
      delete nutritionCopy[key];
    }
  });

  Object.entries(shallowCopy).forEach(([key, value]) => {
    Object.entries(nutritionCopy[key]).forEach(([key1, value1]) => {
      nutritionCopy[key][key1] = (value1 * value) / 100;
    });
  });

  return nutritionCopy;
};


const groceriesCart1 = { oil: 500, onion: 230, garlic: 220, paprika: 480 }
console.log(
  mapEntries(groceriesCart1, ([k, v]) => [
    v > 250 ? `✔️${k}` : `❌${k}`,
    v - 250,
  ])
);