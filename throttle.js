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


// const opThrottle = function (func, delay, options = {}) {
//     let timeout
//     let leadingCalled = false

//     return (...args) => {
//         const callNow = options.leading && !leadingCalled;

//         if (callNow) {
//           func(...args);
//           leadingCalled = true;
//         }

//         if (!timeout) {
//             if (!options.leading) {
//                 func(...args);
//             }
          
//           timeout = setTimeout(() => {
//               timeout = null;
//               leadingCalled = false
//           }, delay);
//         }
//     }
// }


const opThrottle = function (
  func,
  delay,
  options = { leading: true, trailing: true }
) {
  let timeout;
  let lastArgs;
  let lastThis;
  let lastCallTime = 0;

  return function (...args) {
    const now = Date.now();
    const remaining = delay - (now - lastCallTime);

    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > delay) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      lastCallTime = now;
      func.apply(lastThis, lastArgs);
    } else if (!timeout && options.trailing) {
      timeout = setTimeout(() => {
        lastCallTime = options.leading ? 0 : Date.now();
        timeout = null;
        func.apply(lastThis, lastArgs);
      }, remaining);
    }
  };
};