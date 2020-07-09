// import functions and grab DOM elements
import checkResult from './check-result.js';
// import getRandomThrow from './get-random-throw.js';

const button = document.querySelector('play-button');
const winner = document.querySelector('wins');
const loser = document.querySelector('losses');
const draw = document.querySelector('draws');
// const results = document.querySelector('results');
const message = document.querySelector('user-message');
// initialize state
let wins = 0;
// let losses = 0;
let totalDraws = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    const game = checkResult();

    const playButton = document.querySelector('input:checked');

    const won = playButton.value === game;
    

    if (won) {
        message.textContent = 'Winner!';
        wins++;
        winner.textContent = wins;
    } else if (draw) {
        message.textContent = 'Losser';
        totalDraws++;
        loser.textContent = totalDraws;
    } /* else {
        message.textContent = 'Draw!';
        totalDraws++;
        draw.textContent = totalDraws;
    } */
});


