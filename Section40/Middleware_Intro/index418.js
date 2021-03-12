// 415
const express = require('express');
const app = express();
const morgan = require('morgan');

// 419
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send("YOU NEED A PASSWORD!")
}

// 415
app.use(morgan('tiny'));

// 416
// app.use((req, res, next) => {
//     res.send('Hijacked')
//     next();
// })

// 417
app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method.toUpperCase(), req.path)
    next();
})

// 418
app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

// 415
app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})


// 419
app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

// 418
app.use((req, res) => {
    res.status(404).send('NOT FOUND!')
})

// 415
app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})