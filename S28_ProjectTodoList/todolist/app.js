// 265
const express = require("express");
const bodyParser = require("body-parser");
// 342
const mongoose = require("mongoose");
const app = express();
// 348 lodash
const _ = require('lodash');
// 266
// 272 MODULES
app.set('view engine', 'ejs'); // calling ejs

app.use(express.static('public')); // calling public files
// 270
app.use(bodyParser.urlencoded({
    extended: true
})); // using bodyparser
// 342
mongoose.connect("mongodb://localhost:27017/wdbAY", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 342
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }
});
// 346
const listSchema = {
    name: String,
    items: [itemSchema]
}
// 342
const Item = mongoose.model("Item", itemSchema);
// 346
const List = mongoose.model('List', listSchema);


// 342 Insert items (I used the seeds/item.js)
// 343 Rendering the items

// 265, 266, 268, 271, 272, 342, 343
app.get("/", (req, res) => {
    Item.find((err, foundItems) => {
        res.render('list', {
            listTitle: "Today",
            items: foundItems
        });
    });
});

// 268, 271, 344, 347
app.post("/", (req, res) => {
    let itemName = req.body.newItem;
    let listName = req.body.listName;
    let item = new Item({
        name: itemName
    });

    if (listName === "Today") {
        item.save();
        res.redirect("/");
    } else {
        List.findOne({
            name: listName
        }, (err, foundList) => {
            foundList.items.push(item);
            foundList.save();
            res.redirect("/" + listName);
        });
    }
})

// 345, 348
app.post("/delete", (req, res) => {
    let checkedItemId = req.body.checkbox;
    let listName = req.body.listName;

    if (listName === "Today") {
        Item.findByIdAndRemove(req.body.checkbox, (err) => {});
        res.redirect("/");
    } else {
        List.findOne({
            name: listName
        }, (err, foundList) => {
            List.findOneAndUpdate({
                name: listName
            }, {
                $pull: {
                    items: {
                        _id: checkedItemId
                    }
                }
            }, (err, foundList) => {
                if (!err) {
                    res.redirect("/" + listName);
                }
            })
        });
    }


})

// 346, 348
app.get("/:listName", (req, res) => {
    let listName = _.capitalize(req.params.listName);
    List.findOne({
        name: listName
    }, (err, foundList) => {
        if (!err) {
            if (!foundList) {
                console.log("not founded");
                let item1 = new Item({
                    name: 'Go to the meeting'
                });
                const list = new List({
                    name: listName,
                    items: [item1]
                })
                list.save();
                res.redirect("/" + listName);
            } else {
                console.log("founded");
                res.render('list', {
                    listTitle: foundList.name,
                    items: foundList.items
                });
            }
        }
    });
})

// 271
app.get("/about", (req, res) => {
    res.render("about", {

    });
})

app.listen(3000, () => console.log("Server started onr port 3000"));