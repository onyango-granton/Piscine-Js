const throttle = function (func, delay) {
  let timeout;
  return (...args) => {
    if (!timeout) {
      func(...args);
      timeout = setTimeout(() => {
        timeout = null;
      }, delay);
    }
  };
};


const opThrottle = function (func, delay, options = {}) {
    let timeout
    let leadingCalled = false

    return (...args) => {
        const callNow = options.leading && !leadingCalled;

        if (callNow) {
          func(...args);
          leadingCalled = true;
        }

        if (!timeout) {
            if (!options.leading) {
                func(...args);
            }
          
          timeout = setTimeout(() => {
              timeout = null;
              leadingCalled = false
          }, delay);
        }
    }
}