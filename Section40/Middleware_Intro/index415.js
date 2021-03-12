// 415
const express = require('express');
const app = express();
const morgan = require('morgan');

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

// 415
app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})

// 415
app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})