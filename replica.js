function replica(target, ...sources) {
  sources.forEach((source) => {
    target = Object.assign(target, source);
  });
  return target;
}
