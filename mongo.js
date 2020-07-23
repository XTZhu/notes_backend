const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

if (process.argv.length < 3) {
  console.log(
    "please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const url = `mongodb+srv://fullstack:${process.env.MONGO_PWD}@cluster0.v5zr7.mongodb.net/note-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const noteScheme = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteScheme);

Note.find({}).then((result) => {
  result.forEach((note) => {
    console.log(note);
  });
  mongoose.connection.close();
});
