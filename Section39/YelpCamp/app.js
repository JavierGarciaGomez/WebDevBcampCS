// L405
const express = require('express');
const app = express();
const path = require('path');
// L406
const mongoose = require('mongoose');
const Campground = require('./models/campground')
// L411
const methodOverride = require('method-override');

// L406
mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// L406
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


//L405
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// 410
app.use(express.urlencoded({ extended: true }));
// 411
app.use(methodOverride('_method'))


// L405
app.get('/', (req, res) => {
    // res.send('Hello, from Yelp Camp!');
    res.render('home')
})

//L406
// app.get('/makecampground', async (req, res) => {
//     const camp = new Campground({ title: 'My Backyard', description: 'cheap camping' });
//     await camp.save();
//     res.send(camp);
// })

//L408
app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds })
});

// L410
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
})
// 409
app.post('/campgrounds', async (req, res) => {
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
})

// L409
app.get('/campgrounds/:id', async (req, res,) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', { campground });
});
// 411
app.get('/campgrounds/:id/edit', async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
})
// 411
app.put('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`)
});

// 412
app.delete('/campgrounds/:id', async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
})

// L405
app.listen(3000, () => {
    console.log('Serving on port 3000')
})