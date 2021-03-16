// 445 Joi validation middleware
const Joi = require("joi");
// joi schema

module.exports.campgroundSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required(),
    location: Joi.string().required,
    price: Joi.number().required().min(0),
    description: Joi.string().required(),
    image: Joi.string().required(),
  }).required(),
});
