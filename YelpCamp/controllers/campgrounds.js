// 521, 531, 534, 541

const Campground = require("../models/campground");
const { cloudinary } = require("../cloudinary");
// 541 geocoding
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
// mapbox token
const mapBoxToken = process.env.MAPBOX_TOKEN;
console.log(process.env.MAPBOX_TOKEN);
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

module.exports.index = async (req, res) => {
  const campgrounds = await Campground.find();
  res.render("campgrounds/index", { campgrounds });
};

module.exports.renderNew = (req, res) => {
  res.render("campgrounds/new");
};

// 531, 541
module.exports.createCampground = async (req, res, next) => {
  const geoData = await geocoder
    .forwardGeocode({
      query: req.body.campground.location,
      limit: 1,
    })
    .send();
  const campground = new Campground(req.body.campground);
  // 542
  campground.geometry = geoData.body.features[0].geometry;
  // 531
  campground.images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));
  // 531
  console.log(campground);
  campground.author = req.user._id;
  await campground.save();

  // flash added
  req.flash("success", "Succesfully made a new campground");
  res.redirect(`/campgrounds/${campground._id}`);
};

module.exports.showCampground = async (req, res) => {
  const campground = await Campground.findById(req.params.id)
    // 520
    .populate({ path: "reviews", populate: { path: "author" } });
  console.log(campground);

  if (!campground) {
    req.flash("error", "Cannot find the campground");
    return res.redirect("/campgrounds");
  }
  console.log(campground);
  res.render("campgrounds/show", { campground });
};

module.exports.renderEditForm = async (req, res) => {
  const { id } = req.params;
  const campground = await Campground.findById(id);
  if (!campground) {
    req.flash("error", "Cannot find that campground");
    return res.redirect("/campgrounds");
  }

  res.render("campgrounds/edit", { campground });
};

// 534
module.exports.updateCampground = async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  const images = req.files.map((file) => ({
    url: file.path,
    filename: file.filename,
  }));
  camp.images.push(...images);
  await camp.save();
  if (req.body.deleteImages) {
    for (let filename of req.body.deleteImages) {
      await cloudinary.uploader.destroy(filename);
    }
    await camp.updateOne({
      $pull: { images: { filename: { $in: req.body.deleteImages } } },
    });
    console.log(camp);
  }

  req.flash("success", "Succesfully updated a campground");
  res.redirect(`/campgrounds/${camp._id}`);
};

module.exports.deleteCampground = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  req.flash("success", "Campground successfully added");
  res.redirect("/campgrounds");
};
