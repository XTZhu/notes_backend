const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Note = require("../models/note");
const { initialNotes, notesInDb, nonExistingId } = require("./test_helper");

const api = supertest(app);

beforeEach(async () => {
  await Note.deleteMany({});

  const noteObjects = initialNotes.map(async (note) => new Note(note));
  const promiseArray = noteObjects.map((note) => note.save());
  await Promise.all(promiseArray);
});

test("note are returned as json", async () => {
  await api
    .get("/api/notes")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all notes are returned", async () => {
  const response = await api.get("/api/notes");

  expect(response.body).toHaveLength(initialNotes.length);
});

test("the first note is about HTTP methods", async () => {
  const response = await api.get("/api/notes");

  const contents = response.body.map((r) => r.content);

  expect(contents).toContain("Browser can execute only Javascript");
});

test("a valid note can be addad", async () => {
  const newNote = {
    content: "async/await make simplifies making async calls",
    important: true,
  };
  await api
    .post("/api/notes")
    .send(newNote)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  const notesAtEnd = await notesInDb();
  expect(notesAtEnd).toHaveLength(initialNotes.length + 1);

  const contents = notesAtEnd((r) => r.content);
  expect(contents).toContain("async/await make simplifies making async calls");
});

test("note without content is not addad", async () => {
  const newNote = {
    important: true,
  };
  await api.post("/api/notes").send(newNote).expect(400);

  const notesAtEnd = await notesInDb();
  expect(notesAtEnd).toHaveLength(initialNotes.length);
});

test("a specific note can be viewed", async () => {
  const notesAtStart = await notesInDb();

  const noteToView = notesAtStart[0];

  const resultNote = await api
    .get(`/api/notes/${noteToView.id}`)
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(resultNote.body).toEqual(noteToView);
});

test("a note can be deleted", async () => {
  const notesAtStart = await notesInDb();
  const noteToDelete = notesAtStart[0];

  await api.delete(`/api/notes/${noteToDelete.id}`).expect(204);

  const notesAtEnd = await notesInDb();

  expect(notesAtEnd).toHaveLength(initialNotes.length - 1);

  const contents = notesAtEnd.map((r) => r.content);

  expect(contents).not.toContain(noteToDelete.content);
});

afterAll(() => {
  mongoose.connection.close();
});
