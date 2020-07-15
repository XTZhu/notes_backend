const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(morgan("combined"));

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(requestLogger);

let notes = [
  {
    id: 1,
    content: "HTML is easy!",
    date: "2019-05-30T17:30:31.098Z",
    important: false,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-31T14:30:31.098Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol!",
    date: "2019-05-28T17:30:32.098Z",
    important: true,
  },
  {
    content: "a new note...",
    date: "2020-07-12T15:45:30.136Z",
    important: true,
    id: 4,
  },
  {
    content: "just goodnight",
    date: "2020-07-12T15:55:47.774Z",
    important: false,
    id: 5,
  },
  {
    content: "hey hey hey",
    date: "2020-07-12T15:58:08.635Z",
    important: false,
    id: 6,
  },
  {
    content: "？？？",
    date: "2020-07-12T15:59:04.429Z",
    important: true,
    id: 7,
  },
  {
    content: "aaaa",
    date: "2020-07-12T15:59:24.259Z",
    important: true,
    id: 8,
  },
  {
    content: "haha",
    date: "2020-07-12T16:00:05.755Z",
    important: false,
    id: 9,
  },
];

// homepage
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// get all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// get note by id
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  const note = notes.find((note) => note.id === id);
  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

// delete note by id
app.delete("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  notes = notes.filter((note) => note.id !== id);
  response.status(204).end();
});

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map((n) => n.id)) : 0;
  return maxId + 1;
};

// add note
app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: "content missing",
    });
  }
  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  };
  notes = notes.concat(note);
  response.json(note);
});

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
