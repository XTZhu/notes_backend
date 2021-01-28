const app = require("./app"); // varsinainen Express-sovellus
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);
const io = require("socket.io")(server, { origins: "*:*" });

io.on("connection", socket => {
  socket.send("Hello!");

  socket.on("message", data => {
    console.log(data);
  });
  socket.send("message");
});

server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
