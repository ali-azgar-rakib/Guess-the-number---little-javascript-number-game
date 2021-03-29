'use strict';

const button = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreField = document.querySelector('.score');
const finalNumber = document.querySelector('.number');
const body = document.querySelector('body');
const again = document.querySelector('.again');
const inputField = document.querySelector('.guess');
let currentHighScore = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;



scoreField.textContent = score;
currentHighScore.textContent = highScore;




button.addEventListener('click', () => {
    let guess = Number(inputField.value);
    if (!guess) {
        message.textContent = '⚠ Dude,You have to enter a number';
    } else if (guess == secretNumber) {
        message.textContent = '🎉 You won Bro ! Chill !!'
        finalNumber.textContent = secretNumber;
        body.style.backgroundColor = '#60b347';
        finalNumber.style.width = '30rem';
        if (highScore > score) {
            currentHighScore.textContent = highScore;
        } else {
            highScore = score;
            currentHighScore.textContent = highScore;
        }

    } else if (score <= 1) {
        message.textContent = '🤯 You Lost The Game';
        score--;
        scoreField.textContent = score;
    } else if (guess > secretNumber) {
        message.textContent = '🚄 Number is too high';
        score--;
        scoreField.textContent = score;
    } else if (guess < secretNumber) {
        message.textContent = '🚄 Number is too low';
        score--;
        scoreField.textContent = score;
    }
});


// agin button 
again.addEventListener('click', () => {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    message.textContent = 'Start guessing...';
    scoreField.textContent = score;
    inputField.value = '';
    body.style.backgroundColor = '#222';
    finalNumber.style.width = '15rem';
    finalNumber.textContent = '?';

});



