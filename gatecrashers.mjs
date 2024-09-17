import http from "http";
import fs from "fs/promises";
import path from "path";

const PORT = 5000;

const AUTHORIZED_USERS = {
  Caleb_Squires: "abracadabra",
  Tyrique_Dalton: "abracadabra",
  Rahima_Young: "abracadabra",
};

function authenticateUser(req) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;

  const encodedCredentials = authHeader.split(" ")[1];
  const decodedCredentials = Buffer.from(
    encodedCredentials,
    "base64"
  ).toString();
  const [username, password] = decodedCredentials.split(":");

  if (AUTHORIZED_USERS[username] === password) {
    return username;
  }
  return null;
}

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  const authenticatedUser = authenticateUser(req);

  if (!authenticatedUser) {
    res.statusCode = 401;
    res.setHeader("WWW-Authenticate", 'Basic realm="Restricted Access"');
    res.end(JSON.stringify({ error: "Authorization Required" }));
    return;
  }

  if (req.method === "POST") {
    try {
      const guestName = path.basename(
        new URL(req.url, `http://${req.headers.host}`).pathname
      );

      if (!guestName) {
        throw new Error("Guest name is missing in the URL.");
      }

      let body = "";
      for await (const chunk of req) {
        body += chunk.toString();
      }

      const fileName = `${guestName}.json`;
      const filePath = path.join(process.cwd(), "guests", fileName);

      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, body);

      res.statusCode = 201;
      res.end(body);
    } catch (error) {
      console.error("Server error:", error);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: "server failed" }));
    }
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ error: "method not allowed" }));
  }
});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    resolve(server);
});

export { server };
