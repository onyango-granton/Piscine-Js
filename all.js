const all = function (object) {
  return new Promise(async (resolve, reject) => {
    let returnresult = {};

    for (const key in object) {
      try {
        returnresult[key] = await object[key];
      } catch (e) {
        reject(e);
      }
    }
    resolve(returnresult);
  });
};
