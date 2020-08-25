const notesRouter = require("express").Router();
const Note = require("../models/note");

// get all notes
notesRouter.get("/", async (request, response) => {
  const notes = await Note.find({});
  response.json(notes);
});

// get note by id
notesRouter.get("/:id", async (request, response) => {
  // try {
  const note = await Note.findById(request.params.id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
  // } catch (error) {
  //   next(error);
  // }
});

// add note
notesRouter.post("/", async (request, response) => {
  const body = request.body;

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });
  // try {
  const savedNote = await note.save();
  response.json(savedNote);
  // } catch (error) {
  //   next(error);
  // }
});

// delete note by id
notesRouter.delete("/:id", async (request, response) => {
  // try {
  await Note.findByIdAndRemove(request.params.id);
  response.status(204).end();
  // } catch (error) {
  //   next(error);
  // }
});

// update
notesRouter.put("/:id", (request, response, next) => {
  const body = request.body;

  const note = {
    content: body.content,
    important: body.important,
  };

  Note.findByIdAndUpdate(request.params.id, note, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote);
    })
    .catch((error) => next(error));
});

module.exports = notesRouter;