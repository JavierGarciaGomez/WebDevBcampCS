const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wdbAY", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Name is required"]
    },
    content: {
        type: String,
        required: [true, "Content is required"]
    }
});

const Article = mongoose.model("Article", articleSchema);


app.route("/articles")
    .get((req, res) => {
        Article.find((err, foundArticles) => {
            console.log(foundArticles);
        })
    })
    .post((req, res) => {
        const article = new Article({
            title: req.body.title,
            content: req.body.content
        });

        article.save((err) => {
            if (!err) {
                res.send("Success");
            } else {
                res.send(err);
            }
        });
    })
    .delete((req, res) => {
        Article.deleteMany((err) => {
            if (!err) {
                res.send("Successfully deleted all articles");
            } else {
                res.send(err);
            }
        });
    });

// 370
app.route("/articles/:articleTitle")
    .get((req, res) => {
        let articleTitle = req.params.articleTitle;
        Article.findOne({
            title: articleTitle
        }, (err, foundArticle) => {
            if (foundArticle) {
                console.log(foundArticle);
                res.send("Success");
            } else {
                res.send(err);
            }

        })
    }).put((req, res) => {
        let articleTitle = req.params.articleTitle;
        Article.update({ // search parameter
            title: articleTitle
        }, { // update parameter
            title: req.body.title,
            content: req.body.content
        }, {
            overwrite: true
        }, (err, foundArticle) => { // callback
            if (foundArticle) {
                console.log(foundArticle);
                res.send("Success");
            } else {
                res.send(err);
            }

        })
    }).patch((req, res) => {
        let articleTitle = req.params.articleTitle;
        Article.update({ // search parameter
            title: articleTitle
        }, { // update parameter
            $set: req.body
        }, (err, foundArticle) => { // callback
            if (foundArticle) {
                console.log(foundArticle);
                res.send("Success");
            } else {
                res.send(err);
            }

        })
    }).delete((req, res) => {
        let articleTitle = req.params.articleTitle;
        Article.deleteOne({
            title: articleTitle
        }, (err) => {
            if (!err) {
                res.send("Successfully deleted the article");
            } else {
                res.send(err);
            }
        });
    });




app.listen(3000, function () {
    console.log("Server started on port 3000");
});