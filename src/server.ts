import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "ERROR" }));
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});