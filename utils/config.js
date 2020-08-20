require("dotenv").config();

const PORT = process.env.PORT;
// const MONGODB_URI = process.env.MONGODB_URI;
// const MONGODB_URI = "mongodb://foouser:foopwd@localhost:27017/note-app?authSource=admin";
const MONGODB_URI = "mongodb://localhost/note-app";

module.exports = {
  PORT,
  MONGODB_URI,
};
