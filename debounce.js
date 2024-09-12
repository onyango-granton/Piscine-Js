function debounce(func, waitTime) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), waitTime);
  };
}

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
