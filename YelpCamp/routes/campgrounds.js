// 483, 510, 518, 523, 527

const express = require("express");
const router = express.Router();
// 441
const catchAsync = require("../utilities/catchAsync");

// 406
const Campground = require("../models/campground");

// 510
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");
// 521
const campgrounds = require("../controllers/campgrounds");

// Render campgrounds
// 408, 523, 527
router
  .route("/")
  .get(catchAsync(campgrounds.index))
  // Create a new campground
  // 410, 440, 441, 444, 487, 527
  // .post(
  //   isLoggedIn,
  //   validateCampground,
  //   catchAsync(campgrounds.createCampground)
  // );
  .post((req, res) => {
    res.send(req.body);
  });

// deliver form of new campground
// 410, 510
router.get("/new", isLoggedIn, campgrounds.renderNew);

// 523
// 409, 465 (populate), 520
router
  .route("/:id")
  .get(catchAsync(campgrounds.showCampground))
  // 411, 445, 517
  .put(
    isLoggedIn,
    isAuthor,
    validateCampground,
    catchAsync(campgrounds.editCampground)
  )
  // 412
  .delete(isLoggedIn, catchAsync(campgrounds.deleteCampground));

// 411
router.get(
  "/:id/edit",
  isLoggedIn,
  isAuthor,
  catchAsync(campgrounds.renderEditForm)
);

module.exports = router;
