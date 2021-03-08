// 342
const express = require("express");
const mongoose = require("mongoose");
const app = express();


mongoose.connect("mongodb://localhost:27017/wdbAY", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    }
});

const Item = mongoose.model("Item", itemSchema);

let item1 = new Item({
    name: 'Buy food'
});
let item2 = new Item({
    name: 'Buy food'
});
let item3 = new Item({
    name: 'Buy food'
});

Item.insertMany([item1, item2, item3], function (err) {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        console.log("Succesfully saved all the items");
    }
})