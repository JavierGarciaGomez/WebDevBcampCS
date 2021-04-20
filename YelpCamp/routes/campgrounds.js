// 483, 510, 518

const express = require("express");
const router = express.Router();
// 441
const catchAsync = require("../utilities/catchAsync");
// 442
const ExpressError = require("../utilities/ExpressError");
// 406
const Campground = require("../models/campground");
// 445, 464
const { campgroundSchema } = require("../schemas");
// 510
const { isLoggedIn } = require("../middleware");

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

// 518
const isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission to do that");
    return res.redirect(`/campgrounds/%{id}`);
  }
  next();
};

// Render campgrounds
// 408
router.get(
  "/",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.find();
    res.render("campgrounds/index", { campgrounds });
  })
);

// deliver form of new campground
// 410, 510
router.get("/new", isLoggedIn, (req, res) => {
  res.render("campgrounds/new");
});

// Create a new campground
// 410, 440, 441, 444, 487
router.post(
  "/",
  isLoggedIn,
  validateCampground,
  catchAsync(async (req, res, next) => {
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    // flash added
    req.flash("success", "Succesfully made a new campground");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// 409, 465 (populate)
router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
      .populate("reviews")
      .populate("author");
    if (!campground) {
      req.flash("error", "Cannot find the campground");
      return res.redirect("/campgrounds");
    }
    console.log(campground);
    res.render("campgrounds/show", { campground });
  })
);

// 411
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if (!campground.author.equals(req.user._id)) {
      req.flash("error", "You do not have permission to do that");
      return res.redirect(`/campgrounds/{$id}`);
    }

    res.render("campgrounds/edit", { campground });
  })
);

// 411, 445, 517
router.put(
  "/:id",
  isLoggedIn,
  validateCampground,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    // 517

    const camp = await Campground.findByIdAndUpdate(id, {
      ...req.body.campground,
    });
    req.flash("success", "Succesfully updated a campground");
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

// 412
router.delete(
  "/:id",
  isLoggedIn,
  catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash("success", "Campground successfully added");
    res.redirect("/campgrounds");
  })
);

module.exports = router;
