// 102

console.log('JavaScript');
// alert('Hello');

// 103 Data types
console.log("103 Data Types: string, number, boolean");
console.log("5 " + typeof (5));
console.log("Javier " + typeof ("Javier"));
console.log("true " + typeof (true));

// 104
// let userName = prompt("What's your name?");
var userName = 'Javier';
console.log('Hello ' + userName);

userName = 'Humberto';
console.log('Hello ' + userName);

// Exercise 
function test() {
    var a = "3";
    var b = "8";

    /***********Do not change the code above 👆*******/
    //Write your code on lines 7 - 9:
    var c = a;
    a = b;
    b = c;
    /***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}

// 108 concatenation
// 109 .length
// challenge
let message = 'En un lugar de la mancha';
console.log(`your message: ${message} has ${message.length} characters so you have ${140-message.length} characters left of 140`)
// 110. 
console.log('*********************110. Slice *********************');
let message110 = "En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo " +
    "de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor";

console.log("Slice from 0 to 140 ---> " + message110.slice(0, 140));
console.log("Slice 0 ---> " + message110.slice(0));
console.log();

// 111. uppercase
console.log('*********************111. Uppercase *********************');
// challenge
userName = 'javIEr';
console.log(userName);
userName = (userName.slice(0, 1)).toUpperCase() + (userName.slice(1, userName.length)).toLowerCase()
console.log(userName);

// 113. MATH
console.log('*********************113. Math *********************');

// challenge
let dogAge = 0.5;
console.log(`The human age is ${(dogAge-2)*4+21}`)

// 114 increment and decrement

// 115. Functions
function getSomeMilk() {
    console.log('Get out');
    console.log('Go to store');
    console.log('Buy some milk');
}

getSomeMilk();



// 119. Paraneter functions
// EXERCISE
function lifeInWeeks(age) {

    /************Don't change the code above************/

    //Write your code here.
    let yearLeft = 90 - age;
    console.log(`You have ${yearLeft*365} days, ${yearLeft*52} weeks, and ${yearLeft*12} months left.`);
    /*************Don't change the code below**********/
}

lifeInWeeks(35);


// 121. Functions with return

// 123
// EXERCISE
//Create your function below this line.
function bmiCalculator(weight, height) {
    return weight / Math.pow(height, 2)
}

var bmi = bmiCalculator(65, 1.80);
console.log(bmi);

//The first parameter should be the weight and the second should be the height.




/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/