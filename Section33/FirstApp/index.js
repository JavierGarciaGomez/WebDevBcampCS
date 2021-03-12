///////////////////////////
// Lesson 331
//////////////////////////

// This download does not include the node_modules folder
// REMEMBER TO RUN "npm install" first, to tell NPM to download the needed packages
const express = require("express");
const app = express();
console.dir(app);

// app.use(() => {
//     console.log("WE GOT A NEW REQUEST!!")
// })

// app.listen(3000, () => {
//     console.log("Listening on port 3000")
// })

///////////////////////////
// Lesson 332
//////////////////////////

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })

// app.listen(3100, () => {
//     console.log("Listening on port 3000")
// })

///////////////////////////
// Lesson 333
//////////////////////////

app.get('/cats', (req, res) => {
    console.log("cat request")
    res.send('POST REQUEST TO /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/dogs', (req, res) => {
    res.send('POST REQUEST TO /pets. WOOF')
})

app.listen(8080, () => {
    console.log("Listening on port 8080")
})

app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

// app.get('*', (req, res) => {
//     res.send('I cant find the path')
// })

///////////////////////////
// Lesson 334
//////////////////////////

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`
    <h1>Browsing the ${subreddit} subreddit</h1>
    <p>A paragraph</p>
    `)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID: ${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('NOTHING FOUND IF NOTHING SEARCHED!')
    } else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

// app.get('*', (req, res) => {
//     res.send(`I don't know that path!`)
// })




// // /cats => 'meow'
// // /dogs => 'woof'
// // '/' 



// app.listen(8080, () => {
//     console.log("LISTENING ON PORT 8080")
// })
