import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("request arrived");
  res.end("ola");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});