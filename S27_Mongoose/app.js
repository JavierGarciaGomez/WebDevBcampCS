// 336
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/wdbAY", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// 336 CREATING A SCHEMA
// const fruitSchema = new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });
// 338 VAlidation in the schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});


// 336 Model
// the first parameter (FRUIT) is the individual of the collection (fruits)
// the second parameter is the schema
const Fruit = mongoose.model("Fruit", fruitSchema);

// The object
const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit"
});

// 336 save the object
// fruit.save();

// 336 challenge

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = new mongoose.model("Person", personSchema);
const person = new Person({
    name: "John",
    age: 37
});

// person.save();

const orange = new Fruit({
    name: "Orage",
    rating: 8,
    review: "Nice"
})

const banana = new Fruit({
    name: "Banana",
    rating: 9,
    review: "Great"
})

// insertmany
// Fruit.insertMany([orange, banana], function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits");
//     }
// })

////////////////// 337 Reading
Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        console.log(fruits);
    }
})

// 337 challenge
Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(fruit => console.log(fruit.name))
    }
});


// 338 testing the validator
let fruit2 = new Fruit({
    rating: 7,
    review: "Pretty solid as a fruit"
});
// fruit2.save();

// 339 update and delete
Fruit.updateOne({
    _id: '5ff65bb46405dc31acce533b'
}, {
    name: "Peach"
}, err => {
    if (err) {
        console.log(err)
    } else {
        console.log('succesfully updated');
    }
});



// 339 delete
Fruit.deleteOne({
    name: 'Peach'
}, (err) => {
    //
});


//  delete Many

Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();
        fruits.forEach(fruit => console.log(fruit.name))
    }
});

// 340 establishing relationships
const newPersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema // the relationship
});

const NewPerson = new mongoose.model("NewPerson", newPersonSchema);
const newPerson = new NewPerson({
    name: "Amy",
    age: 12,
    favouriteFruit: orange
});

newPerson.save();