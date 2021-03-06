// 405, 406, 408, 409, 410, 411, 440, 444, 445, 463, 464, 465, 483, 485, 486, 529

// 529
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

console.log("*****529 ENV TEST", process.env.SECRET);

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

// 506
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

// 483
const campgroundRoutes = require("./routes/campgrounds");
// 484
const reviewRoutes = require("./routes/reviews");
// 507
const userRoutes = require("./routes/users");

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
// 506
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// 487 passing flash params, 512
app.use((req, res, next) => {
  console.log("*****req.session****", req.session);
  res.locals.currentUser = req.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// 506 test register user
app.get("/fakeUser", async (req, res) => {
  const user = new User({ email: "colt@gmail.com", username: "colttt" });
  const newUser = await User.register(user, "chicken");
  res.send(newUser);
});

// 483 using the route
app.use("/campgrounds", campgroundRoutes);
// 484 using the route
app.use("/campgrounds/:id/reviews", reviewRoutes);
// 507
app.use("/", userRoutes);

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
