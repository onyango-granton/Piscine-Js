import { readFile } from "fs/promises";
import http from "http";
import path from "path";

const PORT = 5000;

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  try {
    const guestName = path.basename(
      new URL(req.url, `http://${req.headers.host}`).pathname
    );

    if (!guestName) {
      throw new Error("Guest name is missing in the URL.");
    }

      const fileName = `${guestName}.json`;
      console.log(fileName)
      const filePath = path.join(process.cwd(),"guests", fileName);
      console.log(filePath);

    try {
      const content = await readFile(filePath, { encoding: "utf8" });
      const contentJson = JSON.parse(content);

      res.statusCode = 200;
      res.end(JSON.stringify(contentJson));
    } catch (error) {
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  } catch (error) {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "guest not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export { server };
