//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// 310 Lodash
// Load the full build.
let _ = require('lodash');


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


// 296
const posts = [];


// 276, 278, 298
app.get("/", (req, res) => {
  for (post of posts) {
    console.log(post.title);
  }

  res.render('home', {
    homeStartingContent: homeStartingContent,
    posts: posts
  });
})

// 284
app.get("/about", (req, res) => {
  res.render('about', {
    aboutContent: aboutContent,
  });
})

// 284
app.get("/contact", (req, res) => {
  res.render('contact', {
    contactContent: contactContent,
  });
})

// 288
app.get("/compose", (req, res) => {
  res.render('compose', {});
})

// 290, 294, 296
app.post("/compose", (req, res) => {
  const post = {
    title: req.body.postTitle,
    post: req.body.post
  }
  posts.push(post);
  res.redirect('/');
})

// 306, 308, 310 express routing
app.get('/posts/:postName', (req, res) => {
  // 310 lodash
  let requestedTitle = _.lowerCase(req.params.postName);
  posts.forEach(post => {
    let postTitle = _.lowerCase(post.title);
    console.log(postTitle);
    if (requestedTitle === postTitle) {
      res.render('post', {
        post: post
      });
    }
  });

})





app.listen(3000, function () {
  console.log("Server started on port 3000");
});