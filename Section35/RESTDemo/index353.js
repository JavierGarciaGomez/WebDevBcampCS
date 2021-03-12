/////////////////////////////////////
// L353
/////////////////////////////////////

const express = require('express');
const app = express();

// 353 urlendonced parsig
app.use(express.urlencoded({ extended: true }))
// 353 urlendonced parsing json
app.use(express.json());

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
})

app.post('/tacos', (req, res) => {
    console.log(req.body)
    res.send("POST /tacos response")
})

app.listen(3000, () => {
    console.log("ON PORT 3000. Oh yeah")
})
