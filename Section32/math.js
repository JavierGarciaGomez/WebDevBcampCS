const helloString = "Hello, im in math.js"
const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

module.exports.helloString = helloString;
module.exports.add = add;
module.exports.PI = PI;
module.exports.square = square;

// abbreviation

exports.squareShortcut = square;
exports.PIShortcut = PI;


