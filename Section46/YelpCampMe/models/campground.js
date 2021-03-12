// ..., 461, 468
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// 468
const Review = require('./review')

const CampgroundSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    // 461
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }]
});

// 468
CampgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
})

module.exports = mongoose.model('Campground', CampgroundSchema);