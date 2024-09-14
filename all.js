const all = function (object) {
  const entries = Object.entries(object);

  return Promise.all(
    entries.map(async ([key, value]) => {
      try {
        const resolvedValue = await value;
        return [key, resolvedValue];
      } catch (error) {
        throw error; // Re-throw to be caught by Promise.all
      }
    })
  ).then((resolvedEntries) => Object.fromEntries(resolvedEntries));
};
