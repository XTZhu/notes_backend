const mongoose = require("mongoose");
const config = require("./utils/config");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

// const password = process.argv[2];

// const url = `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/note-app?retryWrites=true`;

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// const note = new Note({
//   content: "Callback-functions suck",
//   date: new Date(),
//   important: true,
// });

/*
note.save().then(response => {
  console.log('note saved!');
  mongoose.connection.close();
})
*/

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note);
  });
  mongoose.connection.close();
});
