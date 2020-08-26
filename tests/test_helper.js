const Note = require("../models/Note");
const User = require("../models/User");

const initialNotes = [
  {
    content: "HTML is easy",
    important: false,
  },
  {
    content: "Browser can execute only Javascript",
    important: true,
  },
];

const nonExistingId = async () => {
  const note = new Note({ content: "willremovethissoon" });
  await note.save();
  await note.remove();

  return note._id.toString();
};

const notesInDb = async () => {
  const notes = await Note.find({});
  return notes.map((note) => note.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((note) => note.toJSON());
};

module.exports = {
  initialNotes,
  nonExistingId,
  notesInDb,
  usersInDb,
};
