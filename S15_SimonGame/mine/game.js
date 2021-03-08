const HEADING = $('h1');
const BUTTONCOLORS = ['red', 'green', 'yellow', 'blue'];
let gamePattern = [];
let playerPattern = [];
let buttons = $('.btn');
let level = 0;
let round = 0;
console.log(buttons);

document.addEventListener('keydown', (event) => {
    changeHeading('Level 1');
    nextSequence();
});


$(".btn").click(function (evt) {
    let playerColor = $(this).attr("id");

    playSound(playerColor);
    animateBtn(playerColor);
    playerPattern.push(playerColor);
    if (playerPattern[round] === gamePattern[round]) {
        if (round < level) {
            round++;
        } else {
            level++;
            changeHeading("Level " + level);
            setTimeout(function () {
                nextSequence();
            }, 1000);

            round = 0;
            playerPattern = [];
        }
    } else {
        gamePattern = [];
        playerPattern = [];
        playSound('wrong');
        changeHeading("Level " + level + ". Game over. Press any key to restart");
        level = 1;

        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);


    }
    console.log('player:');
    console.log(playerPattern);
    console.log('game:');
    console.log(gamePattern);
});

function testLevel() {
    console.log('enter testLevel');
    for (let i = 0; i < gamePattern.length; i++) {
        if (playerPattern[i] === gamePattern[i]) {
            console.log('vas bien');
            nextSequence();
        } else {
            console.log("Has perdido");
            return;
        }
    }
}


function nextSequence() {
    let randomNumber = Math.floor((Math.random() * 4));
    let randomChosenColor = BUTTONCOLORS[randomNumber];
    gamePattern.push(randomChosenColor);
    animateBtn(randomChosenColor);
    playSound(randomChosenColor);
}

function playSound(value) {
    soundFile = 'sounds/' + value + '.mp3';
    let sound = new Audio(soundFile);
    sound.play();
}

function changeHeading(newHeading) {
    HEADING.text(newHeading);
}

function animateBtn(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}