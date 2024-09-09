function pick(obj, stringArr) {
  let resObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (stringArr.includes(key)) {
      resObj[key] = value;
    }
  });
  return resObj;
}

function omit(obj, stringArr) {
  let resObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (!stringArr.includes(key)) {
      resObj[key] = value;
    }
  });
  return resObj;
}

// const newUser = { ageVerified: false , age : 32}
// console.log(pick(newUser,'age'))