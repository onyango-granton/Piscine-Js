function opDebounce(func, waitTime, options = {}) {
  let timeout;
  let leadingCalled = false;

  return function (...args) {
    const callNow = options.leading && !leadingCalled;

    clearTimeout(timeout);

    if (callNow) {
      func.apply(this, args);
      leadingCalled = true;
    }

    timeout = setTimeout(() => {
      if (!options.leading) {
        func.apply(this, args);
      }
      leadingCalled = false;
    }, waitTime);
  };
}

const isObject = function (obj) {
    return typeof(obj) === 'object' && !Array.isArray(obj)
}

function throttle(func, wait, options) {
  var leading = true,
    trailing = true;

  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return opDebounce(func, wait, {
    leading: leading,
    maxWait: wait,
    trailing: trailing,
  });
}

const opThrottle = function (func, wait, options) {};
