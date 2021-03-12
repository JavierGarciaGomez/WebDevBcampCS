//////////////////
// Lesson 321
//////////////////
// This opens the math file in the same folder
const math = require('./math')
console.log("Printing math" + math)
console.log(math.helloString)
console.log("Pi is" + math.PI)
console.log(math.square(9));
console.log("Printing with shortcut" + math.PIShortcut)

let { PI, square } = require('./math');

//////////////////
// Lesson 322
//////////////////
let cats = require('./shelter')
console.log("REQUIRED AN ENTIRE DIRECTORY!", cats)
