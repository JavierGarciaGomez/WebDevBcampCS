// 394
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

// 395 Requiring the model
const Product = require('./models/product');
// 399 method override
const methodOverride = require('method-override')

// 394
mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// 394 ejs set views    
app.set('views', path.join(__dirname, 'views'));
// 394 set ejs
app.set('view engine', 'ejs');
// 398 midleware to parse
app.use(express.urlencoded({ extended: true }));
// 399
app.use(methodOverride('_method'))


//400
const categories = ['fruit', 'vegetable', 'dairy'];

// 396 get products
// app.get('/products', async (req, res) => {
//     const products = await Product.find({})
//     console.log(products)
//     res.render('products/index', { products })
//     // res.send('ALL PRODUCTS WILL BE HERE')
// })

// 402
app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

// 398 product new
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

// 398 post
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

// 397 products details
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    console.log(product)
    res.render('products/show', { product })
})

// 399 product update
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

// 399
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

// 401
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})






// 394 port listening
app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


