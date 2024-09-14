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
    if (options == null) {
        return() => 0
    }

  let timeout;
  let lastArgs;
  let lastThis;

  return function (...args) {
    const callNow = !timeout && options.leading;
    lastArgs = args;
    lastThis = this;

    if (!timeout) {
      if (callNow) {
        func.apply(lastThis, lastArgs); // Leading call
      }
      timeout = setTimeout(() => {
        timeout = null;
        if (options.trailing && lastArgs) {
          func.apply(lastThis, lastArgs); // Trailing call
          lastArgs = null; // Reset after trailing execution
        }
      }, delay);
    }
  };
};
