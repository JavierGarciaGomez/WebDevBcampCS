// 484

const express = require("express");
// 484 mergeparams to accepth the params
const router = express.Router({ mergeParams: true });
// 441
const catchAsync = require("../utilities/catchAsync");
// 442
const ExpressError = require("../utilities/ExpressError");
// 445, 464
const { reviewSchema } = require("../schemas");

const Review = require("../models/review");
const Campground = require("../models/campground");

// 464 Joi validation middleware
const validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// 463 review
router.post(
  "/",
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

router.delete(
  "/:reviewId",
  catchAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/campgrounds/${id}`);
  })
);

module.exports = router;
