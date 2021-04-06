const http = require("http");
const { Socket } = require("node:dgram");

const server = http.createServer();

server.on("connection", (socket) => {
  console.log("New Connection");
});
server.listen(3000);
console.log("Listener on port 3000");
