function deepMerge(target, ...sources) {
  if (!sources.length) return target;
  const [source, ...rest] = sources;

  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof target[key] === "object" && typeof source[key] === "object") {
        target[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }

  return deepMerge(target, ...rest);
}

function replica(target, ...sources) {
  return deepMerge(target, ...sources);
}
