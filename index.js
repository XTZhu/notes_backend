const app = require("./app"); // varsinainen Express-sovellus
const http = require("http");
const config = require("./utils/config");
const logger = require("./utils/logger");

const server = http.createServer(app);
const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.send("Hello!");

  socket.on("message", data => {
    console.log(data);
  });

  socket.on("salutations", (elem1, elem2, elem3) => {
    console.log(elem1, elem2, elem3);
  });
});


server.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});
