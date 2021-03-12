// ==============
// 210 FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch()

// ==============
// 211 BLOCK SCOPE
// ==============
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }
// console.log(radius);
// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     let msg = "ASKLDJAKLSJD";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

// ==============
// 212 LEXICAL SCOPE
// ==============

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}


// 213 Function expressions

// function add(x, y) {
//     return x + y;
// }

const add = function (x, y) {
    return x + y;
}

// Ex 44
//NOTE: Udemy's coding exercise platform does NOT support the ** operator.  You'll need to multiply a number by itself or use the Math.pow() method.

const square = function (num) {
    return Math.pow(num, 2);
}

// ======================
// 214 FUNCTIONS AS ARGUMENTS
// ======================

console.log(214);
function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        f()
    }
}

function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}

console.log("Im calling call Twice(rollDie)")
callTwice(rollDie)

// ====================
// 215 RETURNING FUNCTIONS
// ====================

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

// 216

const myMath = {
    PI: 3.14159,
    square(num) {
        return num * num;
    },
    cube(num) {
        return num ** 3;
    }
}

const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

const meow2 = cat.meow;

// Ex 45

const square = {
    area: function (x) {
        return x * x;
    },
    perimeter: function (x) {
        return 4 * x;
    }
}

// Ex 46

const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
};


// 218


// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// hello.toUpperCase();

// console.log("AFTER!")

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!")
    }
}

