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


const opThrottle = function (func, delay, options = {}) {
  let timeout;
  let lastExecTime = 0;
  const { leading = true, trailing = true } = options;

  return function (...args) {
    const currentTime = Date.now();
    const hasNotBeenCalled = lastExecTime === 0;

    if (hasNotBeenCalled && !leading) {
      lastExecTime = currentTime;
    }

    const remainingDelay = delay - (currentTime - lastExecTime);

    function exec() {
      func.apply(this, args);
      lastExecTime = Date.now();
    }

    if (hasNotBeenCalled && leading) {
      exec();
    } else if (remainingDelay <= 0) {
      clearTimeout(timeout);
      exec();
    } else if (trailing) {
      clearTimeout(timeout);
      timeout = setTimeout(exec, remainingDelay);
    }
  };
};