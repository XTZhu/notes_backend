require("dotenv").config();

const PORT = process.env.PORT;
// const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_URI = "mongodb://foouser@localhost:27017/?authSource=admin";

module.exports = {
  PORT,
  MONGODB_URI,
};
