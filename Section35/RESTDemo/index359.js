/////////////////////////////////////
// L356-360
/////////////////////////////////////

const express = require('express');
const app = express();
const path = require('path');
// 362
const methodOverride = require('method-override')

// 360
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'Lol, that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        comment: 'Skyler comment'
    },
    {
        id: uuid(),
        username: 'Sk8er',
        comment: 'Skate'
    },
    {
        id: uuid(),
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
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments');
})

// *******************************************
// SHOW - details about one particular comment
// *******************************************
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment })
})

// 362
// *******************************************
// EDIT - renders a form to edit a comment
// *******************************************
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment })
})

// 361
// *******************************************
// UPDATE - updates a particular comment
// *******************************************
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);

    //get new text from req.body
    const newCommentText = req.body.comment;
    //update the comment with the data from req.body:
    foundComment.comment = newCommentText;
    //redirect back to index (or wherever you want)
    res.redirect('/comments')
})



app.listen(3000, () => {
    console.log("ON PORT 3000!")
})