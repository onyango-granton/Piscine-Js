import { readFile } from "fs/promises";
import http from "http";
import path from "path";
import url from "url";

let hostname = "127.0.0.1";
let port = 5000;

let server = http.createServer(async (req, res) => {
  let guestName = url.parse(req.url).pathname.slice(1);

  let fileName = guestName + ".json";

  if (!guestName) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/plain");
    res.end("Guest name is missing in the URL.");
    return;
  }

  try {
    // Read the file with the guest's name
    //let content = await readFile(`./guests/${fileName}`, { encoding: "utf8" });
    let content = await readFile(path.join("guests",fileName), {
      encoding: "utf8",
    });
    //console.log(content)
    let contentJson = JSON.parse(content);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(contentJson));
  } catch (e) {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end(`File for guest "${guestName}" not found or invalid JSON.`);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

export {server}