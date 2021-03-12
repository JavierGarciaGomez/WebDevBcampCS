const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
// 421
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const Campground = require('./models/campground');
// 441
const catchAsync = require('./utils/catchAsync');
// 442
const ExpressError = require('./utils/ExpressError');
// 443
const Joi = require("joi");
// 445
const { CampgroundSchema } = require('./schemas.js');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

// 421
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// 445
const validateCampground = (req, res, next) => {
    // const campgroundSchema = Joi.object({
    //     campground: Joi.object({
    //         title: Joi.string().required(),
    //         price: Joi.number().required().min(0),
    //     }).required()
    // })
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400);
    } else {
        next();
    }
    const result = campgroundSchema.validate(req.body);
}

app.get('/', (req, res) => {
    res.render('home')
});

// 445
app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds })
}));
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new');
})

// ..., 440, 441, 442, 444
app.post('/campgrounds', validateCampground, catchAsync(async (req, res, next) => {
    // deleted 441
    // try {
    //     const campground = new Campground(req.body.campground);
    //     await campground.save();
    //     res.redirect(`/campgrounds/${campground._id}`)
    // } catch (e) {
    //     next(e);
    // }
    //442
    // deleted 444
    // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
    // // ...
    // const campground = new Campground(req.body.campground);
    // await campground.save();
    // res.redirect(`/campgrounds/${campground._id}`)

    // 444 - deleted 445
    // const campgroundSchema = Joi.object({
    //     campground: Joi.object({
    //         title: Joi.string().required(),
    //         price: Joi.number().required().min(0)
    //     }).required()
    // })
    // const {error} = campgroundSchema.validate(req.body);
    // if(error){
    //     const msg = error.details.map(el => el.message).join(',')
    //     throw new ExpressError(msg, 400);
    // }
    // const result = campgroundSchema.validate(req.body);
    // console.log(result);
    // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
    // // ...
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`)
}))

// ... 441
app.get('/campgrounds/:id', catchAsync(async (req, res,) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', { campground });
}));

// ... 441
app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', { campground });
}))

// ... 441
app.put('/campgrounds/:id', validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`)
}));

// ... 441
app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}))

// 442
app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404))
})

// 440 (in case of next), 442 (handling app.all(*))
app.use((err, req, res, next) => {
    //442-443
    // const { statusCode = 500, message = 'Something went wrong' } = err;
    // deleted 443
    // res.status(statusCode).send(message);
    //440 - 442
    // res.send("Oh boy, something went wrong!")
    //443
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh no, smth went wrong'
    res.status(statusCode).render('error', { err });
})


app.listen(3000, () => {
    console.log('Serving on port 3000')
})