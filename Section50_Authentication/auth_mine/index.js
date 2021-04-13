// 497, 498
const express = require("express");
const app = express();
const User = require("./models/user");

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// 499
const session = require("express-session");

// 497 mongoose connection
mongoose
  .connect("mongodb://localhost:27017/loginDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });

// 496 EJS
app.set("view engine", "ejs");
app.set("views", "views");

// 497 access to request.body
app.use(express.urlencoded({ extended: true }));
// 499
app.use(session({ secret: "notagoodsecret" }));

const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

// 496
app.get("/", (req, res) => {
  res.send("THIS IS THE HOME PAGE");
});

app.get("secret", (req, res) => {
  res.send("This is secret! You cannot see me");
});

// 496 registration form
app.get("/register", (req, res) => {
  res.render("register");
});

// 498
app.post("/register", async (req, res) => {
  console.log(req.body);
  const { password, username } = req.body;

  // const hash = await bcrypt.hash(password, 12);
  console.log("got hashed");
  const user = new User({ username, password });

  console.log(user);
  await user.save();
  console.log("user saved");
  req.session.user_id = user._id;
  res.redirect("/");
});

// 499
app.get("/login", (req, res) => {
  res.render("login");
});

// 499
app.post("/login", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  // const user = await User.findOne({ username });
  const foundUser = await User.findAndValidate(username, password);
  console.log(foundUser);
  // const isValidUser = bcrypt.compare(password, user.password);
  if (foundUser) {
    req.session.user_id = foundUser._id;
    res.redirect("/secret");
  } else {
    res.redirect("/login");
  }
});

// 500
app.post("/logout", (req, res) => {
  req.session.user_id = null;
  // req.session.destroy();
  res.redirect("/login");
});

app.get("/secret", requireLogin, (req, res) => {
  res.render("secret");
});

app.get("/topsecret", requireLogin, (req, res) => {
  res.send("TOP SECRET!!!");
});

app.listen(3000, () => {
  console.log("SERVING YOUR APP!");
});
