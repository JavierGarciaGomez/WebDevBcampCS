// 483, 510, 518, 523, 527, 530, 531, 534
const express = require("express");
const router = express.Router();
// 441
const catchAsync = require("../utilities/catchAsync");
// 510
const { isLoggedIn, isAuthor, validateCampground } = require("../middleware");
// 521
const campgrounds = require("../controllers/campgrounds");
// 527
const multer = require("multer");
// 530
const { storage } = require("../cloudinary");
// 527, 530
const upload = multer({ storage });

// Render campgrounds
// 408, 523, 527,531
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
  // 527 multer update, 531

  .post(
    isLoggedIn,

    upload.array("image"),
    validateCampground,
    catchAsync(campgrounds.createCampground)
  );

// deliver form of new campground
// 410, 510
router.get("/new", isLoggedIn, campgrounds.renderNew);

// 523
// 409, 465 (populate), 520, 534
router
  .route("/:id")
  .get(catchAsync(campgrounds.showCampground))
  // 411, 445, 517
  .put(
    isLoggedIn,
    isAuthor,
    upload.array("image"),
    validateCampground,
    catchAsync(campgrounds.updateCampground)
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
