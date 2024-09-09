function pick(obj, stringArr) {
  let resObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(stringArr) && stringArr.includes(key)) {
      // console.log(key)
      resObj[key] = value;
    } else if (stringArr === key) {
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

// const user = { firstName: 'John', lastName: 'Doe', age: 32, ageVerified: false }
// console.log(pick(user, "ageVerifiedD"));