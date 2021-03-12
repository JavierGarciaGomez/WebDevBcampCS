// 221 For each

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function print(element) {
    console.log(element)
}

console.log("Lesson 221")
numbers.forEach(print)

console.log("numbers.forEach(function)")
numbers.forEach(function (element) {
    if (element % 2 === 0) {
        console.log(element)
    }
})



// for (let el of numbers) {
//     console.log(el);
// }

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2019
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]

movies.forEach(function (movie) {
    console.log(`${movie.title} - ${movie.score}/100`)
})

// 222
console.log(222)

const doubles = numbers.map(function (num) {
    return num * 2;
})

console.log(doubles)

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})
console.log(titles)

// Exercise 47
const names = ["  Alberto  ", " Brianda "]

function cleanNames(arr) {
    const newArr = arr.map(function (name) {
        return name.trim();
    })
    return newArr;
}

const newNames = cleanNames(names)
console.log(newNames);

// 223
console.log(223)

// const add = function(x,y) {
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

const add = (a, b) => a + b;
let result = add(4, 3)
console.log("The result is " + result)

const square = num => {
    return num * num;
}

// Exercise 48
const greet = (name) => "Hey " + name + "!"
console.log(greet("Laura"));

// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1
// }

//224
console.log(224)

const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// const newMovies = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score / 10}`
// })


// IMPLICIT RETURN
const newMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
))

console.log(newMovies)

// 226
console.log("226 TimeOut")
console.log("HELLO!!!...")
setTimeout(() => {
    console.log("...are you still there?")
}, 3000)

console.log("GOODBYE!!")

const id = setInterval(() => {
    console.log(Math.random())
}, 2000);

// clearInterval(id);

// 227
console.log(227)

numbers.filter(n => {
    return n < 10
})

const badMovies = movies.filter(m => m.score < 70)
const recentMovies = movies.filter(m => m.year > 2000)

console.log(recentMovies)
console.log(badMovies)

// const goodMovies = movies.filter(m => m.score > 80)
// const goodTitles = goodMovies.map(m => m.title)

movies.filter(m => m.score > 80).map(m => m.title);

// Exercise 49
userNames = ['mark', 'stacy12345678910']
function validUserNames(arr) {
    const res = arr.filter(n => n.length < 10);
    return res;
}


// 228
console.log(228)
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

let exams75 = exams.every(score => score >= 75)
console.log(exams75)
let recentMovies2 = movies.some(movie => movie.year > 2015)
console.log(recentMovies2)

function allEvens(arr) {
    return arr.every(num => num % 2 === 0);
}


// 229
console.log(229)
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)

// const total = prices.reduce((total, price) => {
//     return total + price
// })

const total = prices.reduce((total, price) => total + price)
console.log(total)

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
const highestRated = movies.reduce((bestMovie, currMovie) => {
    if (currMovie.score > bestMovie.score) {
        return currMovie;
    }
    return bestMovie;
})


// We can provide an initial value as the 2nd arg to reduce:
const evens = [2, 4, 6, 8];
evens.reduce((sum, num) => sum + num) //20
evens.reduce((sum, num) => sum + num, 100) //120
