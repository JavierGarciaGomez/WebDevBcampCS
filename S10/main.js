// 125 Random numbers
console.log('*********************125. Random number *********************');
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

console.log('*********************126. Conditionals *********************');
if (randomNum > 8) {
    console.log('You got a high score')
} else if (randomNum > 6) {
    console.log('Definitely, Maybe');
} else {
    console.log('Never is gonna happen');
}

console.log('*********************127. Comparators *********************');
console.log('*********************128. Combining comparators *********************');
// && || !
console.log('*********************131. Arrays *********************');
let myArray = ['pepe', 2, true];
console.log(myArray.includes('pepe'))
console.log(myArray.includes('tom'))

console.log('*********************132. Adding elements to an array *********************');
console.log('My array: ' + myArray)
console.log('pushing 3 numbers');
myArray.push(4, 5, 6);
console.log('My array: ' + myArray)
console.log('popping');
myArray.pop();
console.log('My array: ' + myArray)

// Fizzbuzz challenge
let numFB = 1;
let fizBuzzArray = [];

function fizBuzz() {
    if (numFB % 3 === 0) {
        if (numFB % 5 === 0) {
            fizBuzzArray.push('FizzBuzz');
        } else {
            fizBuzzArray.push('Fizz');
        }

    } else if (numFB % 5 == 0) {
        fizBuzzArray.push('Buzz')
    } else {
        fizBuzzArray.push(numFB);
    }


    console.log(fizBuzzArray);
    numFB++;
};

for (let i = 1; i <= 15; i++) {
    fizBuzz();
}

console.log('*********************EX. Who\'s buying lunch *********************');

function whosPaying(names) {
    /******Don't change the code above*******/

    //Write your code here.

    let randomNum = Math.floor(Math.random() * names.length)
    return names[randomNum] + ' is going to buy lunch today!';

    /******Don't change the code below*******/
}

console.log(whosPaying(['Javier', 'Humberto']))

console.log('*********************134. Control statements: While *********************');
// while
console.log('*********************136. Control statements: For *********************');
console.log('*********************EX. Fibonacci *********************');

function fibonacciGenerator(n) {
    let array = [0]
    let num1 = 0;
    let num2 = 1;
    let num3 = 1;

    if (n === 0) {
        return ''
    }
    for (let i = 2; i <= n; i++) {
        console.log(num1 + ' ' + num2 + ' ' + num3);

        array.push(num2);
        num1 = num2;
        num2 = num3;
        num3 = num1 + num2;
    }

    return array;
}

console.log(fibonacciGenerator(0))