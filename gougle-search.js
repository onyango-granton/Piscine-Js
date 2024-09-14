async function queryServers(serverName, q) {
  const promises = [
    getJSON(`/serverName?q=${q}`),
    getJSON(`/serverName_backup?q=${q}`),
  ];


  const result = await Promise.race(promises);
  return result;
}

async function googleSearch(q) {
  try {
    const timeout = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error("timeout"));
      }, 80);
    });

    const results = await Promise.all([
      queryServers("web", q),
      queryServers("image", q),
      queryServers("video", q),
    ]).then((results) => {
      return {
        web: results[0],
        image: results[1],
        video: results[2],
      };
    });

    return results;
  } catch (error) {
    return error;
  }
}
