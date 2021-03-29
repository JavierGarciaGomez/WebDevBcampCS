// 405, 406, 408, 409, 410, 411, 440, 444, 445, 463, 464, 465

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
// 441
const catchAsync = require("./utilities/catchAsync");
// 442
const ExpressError = require("./utilities/ExpressError");
// 444
const Joi = require("joi");
// 445, 464
const { campgroundSchema, reviewSchema } = require("./schemas");
// 463
const Review = require("./models/review");

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
// 421
app.engine("ejs", ejsMate);

// 405
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 410 parse the request
app.use(express.urlencoded({ extended: true }));
// 411
app.use(methodOverride("_method"));

// 445 Joi validation middleware
const validateCampground = (req, res, next) => {
  // if (!req.body.campground)
  //   throw new ExpressError("Invalid Campground Data", 400);

  const { error } = campgroundSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// 464
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// 405
// 405
app.get("/", (req, res) => {
  res.render("home");
});

// Render campgrounds
// 408
app.get(
  "/campgrounds",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find();
    res.render("campgrounds/index", { campgrounds });
  })
);

// deliver form of new campground
// 410
app.get("/campgrounds/new", (req, res) => {
  res.render("campgrounds/new");
});

// Create a new campground
// 410, 440, 441, 444
app.post(
  "/campgrounds",
  validateCampground,
  catchAsync(async (req, res) => {
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// 409, 465 (populate)
app.get(
  "/campgrounds/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id).populate(
      "reviews"
    );
    console.log(campground);
    res.render("campgrounds/show", { campground });
  })
);

// 411
app.get(
  "/campgrounds/:id/edit",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render("campgrounds/edit", { campground });
  })
);

// 411, 445
app.put(
  "/campgrounds/:id",
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// 412
app.delete("/campgrounds/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/campgrounds");
});

// 463 review
app.post(
  "/campgrounds/:id/reviews",
  validateReview,
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
    console.log(campground);
  })
);

app.delete(
  "/campgrounds/:id/reviews/:reviewId",
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
  })
);

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
