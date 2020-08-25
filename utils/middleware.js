const logger = require("./logger");

const requestLogger = (request, response, next) => {
  logger.info("Method:", request.method);
  logger.info("Path:  ", request.path);
  logger.info("Body:  ", request.body);
  logger.info("---");
  next();
};

const errorHandler = (error, request, response, next) => {
  logger.error(error.message);
  if (error.name === "CastError" && error.kind === 'ObjectId') {
    return response.status(400).send({ error: "malformatted id" });
  } else if (error.name === "ValidationError") {
  }

  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

module.exports = {
  requestLogger,
  errorHandler,
  unknownEndpoint,
};