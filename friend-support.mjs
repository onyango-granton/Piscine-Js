import { readFile } from "fs/promises";
import http from "http";
import url from "url";
import path from "path";

const hostname = "127.0.0.1";
const port = 5000;

const server = http.createServer(async (req, res) => {
  const guestName = url.parse(req.url).pathname.slice(1);
  const fileName = guestName + ".json";

  if (!guestName) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Guest name is missing in the URL.");
    return;
  }

  try {
    const content = await readFile(path.join("guests", fileName), {
      encoding: "utf8",
    });
    const contentJson = JSON.parse(content);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(contentJson));
  } catch (e) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end(`File for guest "${guestName}" not found or invalid JSON.`);
  }
});

export function startServer() {
  return new Promise((resolve) => {
    server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
      resolve(server);
    });
  });
}

export { server };
