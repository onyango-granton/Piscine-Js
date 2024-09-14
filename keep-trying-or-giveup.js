const retry = function (count, callback) {
  return async (...args) => {
    let catchError;
    for (let i = 0; i <= count; i++) {
      try {
        return await callback(...args);
      } catch (e) {
        catchError = e;
      }
    }
    throw catchError;
  };
};

const timeout = function (delay, callback) {
    return async (...args) => {
        let timeout = new Promise((_, func) => {
          setTimeout(() => func(new Error("timeout")),delay);
        })
        return Promise.race([timeout, callback(...args)])
  }
};
