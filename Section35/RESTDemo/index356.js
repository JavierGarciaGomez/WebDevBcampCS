/////////////////////////////////////
// L356
/////////////////////////////////////

const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const comments = [
    {
        username: 'Todd',
        comment: 'Lol, that is so funny!'
    },
    {
        username: 'Skyler',
        comment: 'Skyler comment'
    },
    {
        username: 'Sk8er',
        comment: 'Skate'
    },
    {
        username: 'Woof',
        comment: 'woof'
    },
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

// **********************************
// 357 NEW - renders a form
// **********************************
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})
// **********************************
// 357 CREATE - creates a new comment
// **********************************
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment })
    res.redirect('/comments');
})

app.listen(3000, () => {
    console.log("ON PORT 3000!")
})