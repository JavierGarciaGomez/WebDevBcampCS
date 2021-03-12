// 395
// requiring mongoose
const mongoose = require('mongoose');

// creating the schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetable', 'dairy']
    }
})


// creating the model
const Product = mongoose.model('Product', productSchema);

// export
module.exports = Product;