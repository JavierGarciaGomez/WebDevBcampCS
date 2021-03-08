console.log('Test');

console.log('**********************162 Event Listeners to Button************************');

document.querySelector('button').addEventListener('click', handleClick);

function handleClick(event) {
    console.log('button clicked');
    let source = event.target;
    if (source.classList.contains('w')) {
        console.log('W printed');
    }

}

// Challenge
let buttons = document.querySelectorAll('.drum');
// buttons.forEach(element => {
//     element.addEventListener('click', handleClick);
// });

for (let button of buttons) {
    button.addEventListener('click', handleClick)
}

console.log('**********************163 Higher Order Functions************************');
document.querySelector('button').addEventListener('click', () => console.log('a'));

function add(n1, n2) {
    return n1 + n2;
}

function mult(n1, n2) {
    return n1 * n2;
}

function calculator(n1, n2, funct) {
    return funct(n1, n2);
}

console.log(calculator(4, 3, add));
console.log(calculator(8, 8, mult));

// debugger
// calculator(3,4 mult)

console.log('**********************165 Play sounds JavaScript************************');
// let sound = new Audio('sounds/crash.mp3');
// sound.play();

for (let button of buttons) {
    button.addEventListener('click', handleClickNew)
}

function handleClickNew(event) {
    console.log(this)
}

console.log('**********************166 Objects************************');

let houseKeeper = {
    name: 'Mary',
    yearsOfExperience: 5,
    cleaningRepertoire: ['bathroom', 'lobby', 'bedroom']
}

console.log(houseKeeper)
console.table(houseKeeper)
console.log(houseKeeper.name);

// constructor
function HouseKeeper(name, yearsOfExperience, cleaningRepertoire) {
    this.name = name,
        this.yearsOfExperience = yearsOfExperience,
        this.cleaningRepertoire = cleaningRepertoire
}

let houseKeeper1 = new HouseKeeper('Pepa', 3, ['bed', 'kitchen'])
let houseKeeper2 = new HouseKeeper('Carla', 0, ['kitchen'])

console.log(houseKeeper1);

console.log('**********************167 Switch************************');

for (let button of buttons) {
    button.addEventListener('click', handleClickNewer)
}

function handleClickNewer() {
    var buttonInnerHtml = this.innerHTML;
    console.log('bih' + buttonInnerHtml);
    let soundFile;
    switch (buttonInnerHtml) {
        case 'w':
            soundFile = 'sounds/tom-1.mp3';
            break;

        case 'a':
            soundFile = 'sounds/tom-2.mp3';
            break;
        case 's':
            soundFile = 'sounds/tom-3.mp3';
            break;
        case 'd':
            soundFile = 'sounds/tom-4.mp3';
            break;
        case 'j':
            soundFile = 'sounds/snare.mp3';
            break;
        case 'k':
            soundFile = 'sounds/crash.mp3';
            break;
        case 'l':
            soundFile = 'sounds/kick-bass.mp3';
            break;
    }

    console.log(soundFile);
    let sound = new Audio(soundFile);
    sound.play();
    animation(buttonInnerHtml);



}

console.log('**********************168 Objects methods************************');

function HouseKeeper2(name, yearsOfExperience, cleaningRepertoire) {
    this.name = name,
        this.yearsOfExperience = yearsOfExperience,
        this.cleaningRepertoire = cleaningRepertoire,

        this.clean = function () {
            console.log('Im cleaning');
        }
}

let houseKeeper3 = new HouseKeeper2();

houseKeeper3.clean();

console.log('**********************170 Keyboard events************************');
document.addEventListener('keydown', function (event) {
    console.log('key pressed');
    console.log(event);
    console.log(event.key);
    if (event.key === 'a') {
        console.log('a was pressed');
    }
    makeSound(event.key)
})

function makeSound(key) {
    switch (key) {
        case 'w':
            soundFile = 'sounds/tom-1.mp3';
            break;

        case 'a':
            soundFile = 'sounds/tom-2.mp3';
            break;
        case 's':
            soundFile = 'sounds/tom-3.mp3';
            break;
        case 'd':
            soundFile = 'sounds/tom-4.mp3';
            break;
        case 'j':
            soundFile = 'sounds/snare.mp3';
            break;
        case 'k':
            soundFile = 'sounds/crash.mp3';
            break;
        case 'l':
            soundFile = 'sounds/kick-bass.mp3';
            break;
    }
    console.log(soundFile);
    let sound = new Audio(soundFile);
    sound.play();
    animation(key);

}


console.log('**********************171 Animation************************');

function animation(key) {
    document.querySelector("." + key).classList.toggle('pressed');
    setTimeout(() => {
        document.querySelector("." + key).classList.toggle('pressed');
    }, 100);

}