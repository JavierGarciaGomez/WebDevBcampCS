//////////////////////////////////
// Lesson 379
//////////////////////////////////

//379
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

//380

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});


const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({
    title: 'Amadeus',
    year: 1986,
    score: 9.2,
    rating: 'R'
});

// 381
// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ])
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })

// 382
console.log("*****************382*****************")
Movie.find({}).then(data => console.log(data))
console.log("+++383. Find movies with pg-13");
Movie.find({ rating: 'PG-13' }).then(data => console.log(data))

// 383 Update
console.log("*****************383 Update*****************")
Movie.updateOne({ title: 'Amadeus' }, { year: 1984 })
    .then(res => console.log(res))
// updateAll
// findOneAndUpdate
// findAndModify

// 384 Delete
// remove
// findOneAndRemove
// findOneAndDelete
// Movie.remove({title: 'Amelie'})
// Movie.findOneAndDelete({title: 'Alien'}).then( m=> console.log(m)) 
