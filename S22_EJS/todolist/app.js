// 265

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// 266
// 272 MODULES
const date = require(__dirname + "/date.js");
console.log(date);


app.set('view engine', 'ejs'); // calling ejs

app.use(express.static('public')); // calling public files
// 270
app.use(bodyParser.urlencoded({
    extended: true
})); // using bodyparser



// 268
const items = ['Buy food', 'Cook food', 'Eat food'];
// 271
const workItems = [];



// 265, 266, 268, 271, 272
app.get("/", (req, res) => {
    console.log("**************265 Templates**************************");
    console.log("**************266 EJS**************************");
    console.log("**************267 Code inside EJS**************************");


    // chech if is saturday or sunday
    // if (today.getDay() === 6 || today.getDay() === 0) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";
    // }
    console.log("**************268 Passing data from webpage to server**************************");
    console.log(items);
    // 268

    // 272
    let day = date.getDate();


    // 265, 268, 271
    res.render('list', {
        listTitle: day,
        items: items
    });
});

// 268
app.post("/", (req, res) => {
    console.log(req.body);
    let newItem = req.body.newItem;
    // 271
    console.log(`+++++++++++++Printing the body from app.post ${req.body}`);
    if (req.body.listName === "Work") {
        workItems.push(newItem);
        res.redirect("/work");
    } else {
        items.push(newItem);
        res.redirect("/");
    }
})

// 271
app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        items: workItems
    });
})


// 271
app.get("/about", (req, res) => {
    res.render("about", {

    });
})

/* 267 EJS TAGS
<% 'Scriptlet' tag, for control-flow, no output
<%_ ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
<%= Outputs the value into the template (HTML escaped)
<%- Outputs the unescaped value into the template
<%# Comment tag, no execution, no output
<%% Outputs a literal '<%'
%> Plain ending tag
-%> Trim-mode ('newline slurp') tag, trims following newline
_%> ‘Whitespace Slurping’ ending tag, removes all whitespace after it

*/


app.listen(3000, () => console.log("Server started onr port 3000"));