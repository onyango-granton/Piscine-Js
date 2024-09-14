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


function opThrottle(func, wait, options) {
  let timer, savedArgs, savedThis;

  return function () {
    if (timer) {
      savedThis = this;
      savedArgs = arguments;
      return;
    }

    const timeup = () => {
      if (options?.trailing === true && savedArgs) {
        func.apply(savedThis, savedArgs);
        savedThis = savedArgs = null;
        timer = setTimeout(timeup, wait);
      } else {
        timer = null;
      }
    };

    if (options?.leading === true) {
      func.apply(this, arguments);
    } else {
      savedThis = this;
      savedArgs = arguments;
    }
    timer = setTimeout(timeup, wait);
  };
}