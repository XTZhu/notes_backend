require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");

const notesRouter = require("./controllers/notes");
const logger = require("./utils/logger");
const config = require("./utils/config");

app.use(express.static("build"));
app.use(express.json());
app.use(cors());

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

app.use(morgan("combined"));

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(requestLogger);

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);

  if (error.name === "CastError" && error.kind === "ObjectId") {
    return response.status(400).send({ error: "malformatted id" });
  } else if(error.name === 'ValidationError'){

  }

  next(error);
};
app.use(errorHandler);

app.listen(config.PORT, () => {
  logger.info(`Server running on port ${config.PORT}`);
});

/** 
 const app = require('./app')
const http = require('http')
const config = require('./utils/config')
const logger = require('./utils/logger')

const server = http.createServer(app)


*/
