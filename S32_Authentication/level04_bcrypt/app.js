require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const mongoose = require('mongoose');
g
// 384
const bcrypt = require("bcrypt");
const saltRounds = 10;


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));


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
        // hash function
        const password = req.body.password;

        // searching if the user exists
        User.findOne({
            email: username
        }, (err, foundUser) => {
            if (!err) {
                if (foundUser) {
                    // Bcrypt
                    bcrypt.compare(password, foundUser.password, (err, result) => {
                        if (result) {
                            res.render('secrets');
                        }
                    })
                }
            } else {
                console.log(err);
            }

        })

    });

app.route("/register")
    .get((req, res) => res.render('register'))
    .post((req, res) => {
        // 384 bcrypt
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            const user = new User({
                email: req.body.username,
                password: hash
            });
            user.save((err) => {
                res.render('secrets');
            });
        })


    });

app.listen(3000, () => console.log("Server started onr port 3000"));