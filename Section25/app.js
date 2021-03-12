//////////////////////////////////////////
// Lesson 256
//////////////////////////////////////////

/*
Three ways to do an event
    a) inline
    
        <h1>Events</h1>
        <button onclick="alert('you clicked me!'); alert('stop clicking')">Click Me!</button>
    b) on jss
        #v2
    c) eventListener


 
*/

// Exercise 59
{/* <h1 onclick="console.log('boo')">Inline Events Suck...</h1>
<button id="btn" onclick="console.log('clicked')">Click Me</button> */}

//////////////////////////////////////////
// Lesson 257
//////////////////////////////////////////
const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log("YOU CLICKED ME!")
    console.log("I HOPE IT WORKED!!")
}

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!")
}

btn.onmouseenter = scream;

document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!')
}

//////////////////////////////////////////
// Lesson 258
//////////////////////////////////////////

const btn3 = document.querySelector('#v3');
btn3.addEventListener('click', function () {
    alert("CLICKED!");
})

function twist() {
    console.log("TWIST!")
}
function shout() {
    console.log("SHOUT!")
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist)
tasButton.addEventListener('click', shout)

// Ex 60
function hello() {
    console.log("hello")
}

function bye() {
    console.log("goodbye")
}

// const helbtn = document.querySelector("#hello");
// const byebtn = document.querySelector("#goodbye");
// helbtn.addEventListener('click', hello)
// byebtn.addEventListener('click', bye)

//////////////////////////////////////////
// Lesson 259
//////////////////////////////////////////

const button = document.querySelector('#l259');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//////////////////////////////////////////
// Lesson 260
//////////////////////////////////////////
const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}

//////////////////////////////////////////
// Lesson 261
//////////////////////////////////////////
document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key)
//     console.log(e.code)
// })
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

window.addEventListener('keydown', function (e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break
        default:
            console.log("IGNORED!")
    }
})

//////////////////////////////////////////
// Lesson 262 FORMS
//////////////////////////////////////////

const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function (e) {
    // prevents the default action
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

//////////////////////////////////////////
// Lesson 263 Input and change
//////////////////////////////////////////
const input = document.querySelector('input');

// input.addEventListener('change', function (e) {
//     console.log("CASKDJASKJHD")
// })

input.addEventListener('input', function (e) {
    h1.innerText = input.value;
})

//////////////////////////////////////////
// Lesson 264 Bubbling
//////////////////////////////////////////
const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

button.addEventListener('click', function (e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation();
})
container.addEventListener('click', function () {
    container.classList.toggle('hide');
})