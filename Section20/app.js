function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

function greet(firstName, lastName) {
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

function repeat(str, numTimes) {
    let result = '';
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    console.log(result);
}

function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        return false;
    }
    return x + y;
}





// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()

// Ex 35
function printHeart() {
    console.log("<3");
}

// Ex 36

function rant(message) {
    for (let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

// Ex 37

function isSnakeEyes(num1, num2) {
    if (num1 == 1 && num1 == num2) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

// Ex 38

function multiply(num1, num2) {
    return num1 * num2;
}

// Ex 39

function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    else return false;
}

// Ex40
function lastElement(arr) {
    if (arr.length) {
        return arr[arr.length - 1];
    }
    return null;
}

// Ex41
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

//42
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

//43
const days = {
    1: 'Monday',
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
}

const returnDay = (number) => {
    if (number < 1 || number > 7) {
        return null;
    }
    return (days[number])
}
