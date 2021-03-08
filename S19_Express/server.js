// 227
const express = require("express");
const app = express();
// 235 requiring body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));

// 228 instructions for a get request: To the home route
/*
app.get("/", (req, res) =>
    // console.log("******************REQUEST*************************");
    // console.log(request);
    // console.log("******************RESPONSE*************************");
    // console.log(response);
    res.send("<h1>Hello, world, from Express </h1>")
);
*/

// 230
app.get("/contact", (req, res) =>
    res.send("Contact me at: javieron.garcia@gmail.com")
);

// 230
app.get("/about", (req, res) =>
    res.send("<h1> Hi, Im Javier </h1> <h2> A software developer </h2>")
)

// install nodemon

// 234
app.get("/", (req, res) =>
    res.sendFile(__dirname + "/index.html")
);

// 235 POST REQUEST
app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.body.num1);
    res.send("The result of the calculation is " + (Number(req.body.num1) + Number(req.body.num2)));
})

// 235 install body parser

// 237
app.get("/bmicalc", (req, res) =>
    res.sendFile(__dirname + "/bmiCalc.html")
);

app.post("/bmicalc", (req, res) => {
    let weight = (Number(req.body.weight));
    let height = (Number(req.body.height));
    let result = weight / (height * height);

    res.send("Your bmi is " + result);
})

// 237

// 227 listen to a port in the server and a function
app.listen(3000, function () {
    console.log("Server started on port 3000");
});