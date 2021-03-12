// =====================
// 166. BASIC IF/ELSE
// =====================
let random = Math.random();
if (random < 0.5) {
    console.log("YOUR NUMBER IS LESS THAN 0.5!!!")
} else {
    console.log("YOUR NUMBER IS GREATER (OR EQUAL) THAN 0.5!!!")
}
console.log("this is a random number" + random);

// =====================
// 167. PROMPT EXAMPLE
// =====================

const dayOfWeek = prompt('ENTER A DAY').toLowerCase();

if (dayOfWeek === 'monday') {
    console.log("UGHHH I HATE MONDAYS!")
} else if (dayOfWeek === 'saturday') {
    console.log("YAY I LOVE SATURDAYS!")
} else if (dayOfWeek === 'friday') {
    console.log("FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK!")
} else {
    console.log("MEH")
}



// =====================
// TICKET PRICE EXAMPLE
// =====================

// 0-5 - FREE
// 5 - 10 CHILD $10 
// 10 - 65 ADULT $20 
// 65+ SENIOR $10

const age = 890;

if (age < 5) {
    console.log("You are a baby.  You get in for free!")
} else if (age < 10) {
    console.log("You are a child.  You pay $10")
} else if (age < 65) {
    console.log("You are an adult. You pay $20")
} else {
    console.log("You are a senior. You pay $10")
}


// exercise 22

function getColor(phrase) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase == "stop") {
        console.log('red')
    } else if (phrase == "slow") {
        console.log("yellow")
    } else if (phrase == "go") {
        console.log("green")
    } else {
        console.log("purple")
    }

    //AND THIS LINE ↑↑↑↑↑
}

// =====================
// 169 NESTING CONDITIONALS
// =====================

const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password!");
    } else {
        console.log("Password cannot contain spaces!")
    }
} else {
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

// Exercise 23

// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// DO NOT TOUCH ANYTHING BELOW (please) 
if (num <= 100) {
    if (num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {
        if (num % 2 === 0) {
            console.log("YOU GOT ME!");
        }
    }
}

//170

const userInput = "HA";

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

// if (0) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (NaN) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (undefined) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (' ') {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }


//171


// =====================
// LOGICAL AND OPERATOR
// =====================
const password = prompt("Enter your password");
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("VALID PASSWORD!")
} else {
    console.log("INCORRECT FORMAT FOR PASSWORD!")
}

// =====================
// REVISITING AGE EXAMPLE
// =====================

// 0-5 free 
// 5-10 $10 
// 10-65 $20
// 65+ free

const age = 100;
if ((age >= 0 && age < 5) || age >= 65) {
    console.log("FREE");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age >= 10 && age < 65) {
    console.log("$20")
} else {
    console.log("INVALID AGE!")
}

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!!");
// }

// =====================
// COMBINING && and ||
// =====================
const age = 8;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY OR A SENIOR!")
}


// Exercise 24
const mystery = 'P1234567'; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log("YOU GOT IT!!!");
}