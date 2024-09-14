const all = function(obj) {
  return new Promise(async (resolve, reject) => {
      let returnresult = {};
      Object.keys(obj).forEach(async(key) => {
          try {
            returnresult[key] = await obj[key]
          } catch (e) {
              reject(e)
          }
      })
    resolve(returnresult);
  });
}
