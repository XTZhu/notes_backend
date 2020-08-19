const mongoose = require("mongoose");
const url = process.env.MONGODB_URI;

mongoose.set("useFindAndModify", false);

// if ( process.argv.length<3 ) {
//   console.log('Please provide the password as an argument: node mongo.js <password>')
//  process.exit(1)
// }

// const password = process.argv[2]

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minlength: 5,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

noteSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Note", noteSchema);
