// 405, 406, 408, 409, 410, 411, 440, 444, 445, 463, 464, 465, 483, 485, 486

// 405
const express = require("express");
const path = require("path");
// 406
const mongoose = require("mongoose");
// 411
const methodOverride = require("method-override");
// 406
const Campground = require("./models/campground");
// 421
const ejsMate = require("ejs-mate");
// 486
const session = require("express-session");
// 487 flash
const flash = require("connect-flash");

// 442
const ExpressError = require("./utilities/ExpressError");
// 444
const Joi = require("joi");
// 445, 464
const { campgroundSchema, reviewSchema } = require("./schemas");
// 463

// 483
const campgrounds = require("./routes/campgrounds");
// 484
const reviews = require("./routes/reviews");

// 406, 485
mongoose.connect("mongodb://localhost:27017/yelpcamp2", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// 406
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error;"));
db.once("open", () => {
  console.log("Database connected");
});

// 405
const app = express();
// 421
app.engine("ejs", ejsMate);

// 405
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 410 parse the request
app.use(express.urlencoded({ extended: true }));
// 411
app.use(methodOverride("_method"));

// 485 public directory
// app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));

// 486 express-sessions
const sessionConfig = {
  secret: "a simple secret",
  resave: false,
  saveUninitialized: true,
  // cookie will expire in a week
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionConfig));
app.use(flash());

// 487 passing flash params
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// 483 using the route
app.use("/campgrounds", campgrounds);
// 484 using the route
app.use("/campgrounds/:id/reviews", reviews);

// 405
// 405
app.get("/", (req, res) => {
  res.render("home");
});

// 442
app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

// 440, 442, 443 error handler
app.use((err, req, res, next) => {
  // const { statusCode = 500, message = "Default error message" } = err;
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "New default error message";
  }
  res.status(statusCode).render("error", { err });
  // res.send("Something went wrong");
});

// 405
app.listen(3000, () => {
  console.log("Serving on post 3000");
});

// // 406
// app.get("/makecampground", async (req, res) => {
//   const camp = new Campground({
//     title: "My Backyard",
//     description: "cheap camping",
//   });
//   await camp.save();
//   res.send(camp);
// });
