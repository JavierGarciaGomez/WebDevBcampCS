// 405, 406, 408, 409, 410, 411

// 405
const express = require("express");
const path = require("path");
// 406
const mongoose = require("mongoose");
// 411
const methodOverride = require("method-override");
// 406
const Campground = require("./models/campground");

// 406
mongoose.connect("mongodb://localhost:27017/yelpcamp2", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// 406
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error;"));
db.once("open", () => {
  console.log("Database connected");
});

// 405
const app = express();

// 405
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 410 parse the request
app.use(express.urlencoded({ extended: true }));
// 411
app.use(methodOverride("_method"));

// 405
// 405
app.get("/", (req, res) => {
  res.render("home");
});

// 408
app.get("/campgrounds", async (req, res) => {
  const campgrounds = await Campground.find();
  res.render("campgrounds/index", { campgrounds });
});

// 410
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

// 410
app.post("/campgrounds", async (req, res) => {
  const campground = new Campground(req.body.campground);
  await campground.save();
  res.redirect(`/campgrounds/${campground._id}`);
});

// 409
app.get("/campgrounds/:id", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/show", { campground });
});

// 411
app.get("/campgrounds/:id/edit", async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  res.render("campgrounds/edit", { campground });
});

// 411
app.put("/campgrounds/:id", async (req, res) => {
  res.send("It worked");
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
