function replica(target, ...sources) {
  const result = Object.assign({}, target);
  sources.forEach((source) => {
    result.a = Object.assign({}, result.a, source.a); 
  });
  return result;
}

