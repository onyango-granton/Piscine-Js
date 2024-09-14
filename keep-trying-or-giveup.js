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
  return (...args) => {
    let newErr;
    try {
      return setTimeout(() => callback(...args), delay);
    } catch (e) {
      newErr = e;
    }

    throw newErr;
  };
};
