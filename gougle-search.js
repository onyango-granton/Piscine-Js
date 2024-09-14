async function queryServers(serverName, q) {
  const promises = [
    getJSON(`/${serverName}?q=${q}`),
    getJSON(`/${serverName}_backup?q=${q}`),
  ];

  const result = await Promise.race(promises);
  return result;
}

async function gougleSearch(query) {
  const searchTypes = ["web", "image", "video"];

  const searches = searchTypes.map((type) =>
    timeout(80, queryServers(type, query))
  );

  const results = await Promise.all(searches);

  return searchTypes.reduce((acc, type, index) => {
    acc[type] = results[index];
    return acc;
  }, {});
}

async function timeout(ms, promise) {
  return Promise.race([
    promise,
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("timeout")), ms)
    ),
  ]);
}
