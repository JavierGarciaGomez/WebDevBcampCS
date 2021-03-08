//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/wdbAY", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true]
    },
    password: {
        type: String,
        required: [true]
    }
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => res.render('home'));

app.route('/login')
    .get((req, res) => res.render('login'))
    .post((req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        // searching if the user exists
        User.findOne({
            email: username
        }, (err, foundUser) => {
            if (!err) {
                if (foundUser) {
                    if (foundUser.password = password) {
                        res.render('secrets');
                    }
                }
            } else {
                console.log(err);
            }

        })

    });

app.route("/register")
    .get((req, res) => res.render('register'))
    .post((req, res) => {
        const user = new User({
            email: req.body.username,
            password: req.body.password
        });
        user.save((err) => {
            res.send('Completed');
        })
    });

app.listen(3000, () => console.log("Server started onr port 3000"));