function replica(target, ...sources) {
  sources.forEach((source) => {
    Object.keys(source).forEach((key) => {
      if (
        typeof source[key] === "object" &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        if (!target[key]) {
          target[key] = {};
        }
        replica(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    });
  });
  return target;
}
