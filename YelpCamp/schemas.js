// 445 Joi validation middleware
const Joi = require("joi");
// joi schema

// 531
module.exports.campgroundSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required(),
    location: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string().required(),
    // deleted 531
    // image: Joi.string().required(),
  }).required(),
  deleteImages: Joi.array(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required(),
    body: Joi.string().required(),
  }).required(),
});
