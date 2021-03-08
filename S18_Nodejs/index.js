//jshint esversion:6

console.log('Hello world, from Node');
// 223
// filesystem module
const fs = require('fs');
fs.copyFileSync("file1.txt", "file2.txt");

// 224
let superheroes = require('superheroes');
console.log(superheroes.random());

console.log(superheroes.length);