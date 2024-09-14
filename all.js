const all = function (obj) {
  return new Promise(async (resolve, reject) => {
    let returnresult = {};

    for (const key in obj) {
      try {
        returnresult[key] = await obj[key];
      } catch (e) {
        reject(e);
      }
    }
    resolve(returnresult);
  });
};
