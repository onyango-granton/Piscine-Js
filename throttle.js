
function debounce(func, waitTime) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), waitTime);
  };
}

const throttle = function (func, wait) {
    return debounce(func,wait)
}

const opThrottle = function (func, wait, options) {
    
}
