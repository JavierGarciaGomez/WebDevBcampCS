let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dicePlayer1 = document.querySelector('.img1');
let dicePlayer2 = document.querySelector('.img2');

let result = document.querySelector('h1');

dicePlayer1.setAttribute('src', getFileName(randomNumber1));
dicePlayer2.setAttribute('src', getFileName(randomNumber2));

function getFileName(randomNumber) {
    let fileName = "images/dicex.png"
    fileName = fileName.replace('x', randomNumber);
    return fileName;
}

if (randomNumber1 > randomNumber2) {
    result.innerHTML = "🚩 Play 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    result.innerHTML = "Play 2 Wins! 🚩";
} else {
    result.textContent = 'Draw!'
}