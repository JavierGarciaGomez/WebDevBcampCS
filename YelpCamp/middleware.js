// 445, 464
const { campgroundSchema, reviewSchema } = require("./schemas");
// 442
const ExpressError = require("./utilities/ExpressError");
// 406
const Campground = require("./models/campground");
const Review = require("./models/review");

// 510
module.exports.isLoggedIn = (req, res, next) => {
  console.log("req.user...", req.user);
  if (!req.isAuthenticated()) {
    console.log(req.path, req.originalUrl);
    // 514
    req.session.returnTo = req.originalUrl;
    req.flash("error", "You must be signed in");
    return res.redirect("/login");
  }
  next();
};

// 445 Joi validation middleware
module.exports.validateCampground = (req, res, next) => {
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
module.exports.isAuthor = async (req, res, next) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission to do that");
    return res.redirect(`/campgrounds/%{id}`);
  }
  next();
};

// 464 Joi validation middleware
module.exports.validateReview = (req, res, next) => {
  const { error } = reviewSchema.validate(req.body);
  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(msg, 400);
  } else {
    next();
  }
};

// 520
module.exports.isReviewAuthor = async (req, res, next) => {
  const { id, reviewId } = req.params;
  const review = await Campground.findById(reviewId);
  if (!review.author.equals(req.user._id)) {
    req.flash("error", "You do not have permission to do that");
    return res.redirect(`/campgrounds/%{id}`);
  }
  next();
};
