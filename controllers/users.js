const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  try {
    const user = await User.find({}).populate("notes", {
      content: 1,
      date: 1,
    });
    response.json(user);
  } catch (error) {
    console.log(error, "获取所有用户出错");
  }
});

usersRouter.post("/", async (request, response) => {
  const body = request.body;
  console.log(body, "body");

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});

module.exports = usersRouter;
