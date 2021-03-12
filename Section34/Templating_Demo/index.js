///////////////////////////////////
//// Lesson 339
///////////////////////////////////

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
// Takes the currently name and joins it with /views
// So instead of using the currently directory it goes where index.js is saved
app.set('views', path.join(__dirname, '/views'))


app.get('/', (req, res) => {
    // This sends the file home.ejs
    res.render('home');
    // res.send('HI')
})

app.listen(3000, () => {
    console.log("Listening on port 3000")
})

///////////////////////////////////
//// Lesson 341
///////////////////////////////////

// EJS TAGS
// Tags
// <% 'Scriptlet' tag, for control-flow, no output
// <%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
// <%= Outputs the value into the template (HTML escaped)
// <%- Outputs the unescaped value into the template
// <%# Comment tag, no execution, no output
// <%% Outputs a literal '<%'
// %> Plain ending tag
// -%> Trim-mode ('newline slurp') tag, trims following newline
// _%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

///////////////////////////////////
//// Lesson 342
///////////////////////////////////

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    // This passes a parameter to the random.ejs
    res.render('random', { num })
})

///////////////////////////////////
//// Lesson 343
///////////////////////////////////

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.render('subreddit', { subreddit });
})

///////////////////////////////////
//// Lesson 344 conditionals
///////////////////////////////////
// random number

///////////////////////////////////
//// Lesson 345 loop
///////////////////////////////////

app.get('/cats', (req, res) => {
    const cats = [
        'Blue', 'Rocket', 'Monty', 'Stephanie', 'Winston'
    ]
    res.render('cats', { cats })
})

///////////////////////////////////
//// Lesson 346 Subrredit demo
///////////////////////////////////

const redditData = require('./data.json');
console.log(redditData)

app.get('/rs/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit]
    console.log(data)
    if (data) {
        res.render('subreddit', { ...data });
    } else {
        res.render('notfound', { subreddit })
    }

})

///////////////////////////////////
//// Lesson 347 Serving static access
///////////////////////////////////

app.use(express.static(path.join(__dirname, 'public')))

// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/views'))

// app.get('/', (req, res) => {
//     res.render('home')
// })


// app.get('/rand', (req, res) => {
//     const num = Math.floor(Math.random() * 10) + 1;
//     res.render('random', { num })
// })

// app.listen(3000, () => {
//     console.log("LISTENING ON PORT 3000")
// })