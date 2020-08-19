const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const notesRouter = require("./controllers/notes");
const {
  requestLogger,
  errorHandler,
  unknownEndpoint,
} = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");
// const morgan = require("morgan");
// app.use(morgan("combined"));

logger.info("connecting to", config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: "foouser",
    pass: "foopwd",
  })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(requestLogger);

app.use("/api/notes", notesRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

module.exports = app;
