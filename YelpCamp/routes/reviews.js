// 484

const express = require("express");
// 484 mergeparams to accepth the params
const router = express.Router({ mergeParams: true });
// 441
const catchAsync = require("../utilities/catchAsync");

const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");

const reviews = require("../controllers/reviews");

// 463 review
router.post("/", isLoggedIn, validateReview, catchAsync(reviews.createReview));

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  catchAsync(reviews.deleteReview)
);

module.exports = router;
