// 496, 497, 498
const express = require('express');
const app = express();
const User = require('./models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
// 499
const session = require('express-session');


// 497
mongoose.connect('mongodb://localhost:27017/loginDemo', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// 496
app.set('view engine', 'ejs');
app.set('views', 'views');

// 497
app.use(express.urlencoded({ extended: true }));
// 499
app.use(session({ secret: 'notagoodsecret' }))

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

// 496
app.get('/', (req, res) => {
    res.send('THIS IS THE HOME PAGE')
})

// 496
app.get('/register', (req, res) => {
    res.render('register')
})

// 497
app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const user = new User({ username, password })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/')
})

// 498
app.get('/login', (req, res) => {
    res.render('login')
})
// 498
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const foundUser = await User.findAndValidate(username, password);
    if (foundUser) {
        req.session.user_id = foundUser._id;
        res.redirect('/secret');
    }
    else {
        res.redirect('/login')
    }
})

// 500
app.post('/logout', (req, res) => {
    req.session.user_id = null;
    // req.session.destroy();
    res.redirect('/login');
})

app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})
app.get('/topsecret', requireLogin, (req, res) => {
    res.send("TOP SECRET!!!")
})

app.listen(3000, () => {
    console.log("SERVING YOUR APP!")
})

