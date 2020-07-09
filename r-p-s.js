// import functions and grab DOM elements
import { checkResult } from './check-result.js';
import { getRandomThrow } from './get-random-throw.js';


const button = document.querySelector('#play-button');
const winnerScreen = document.querySelector('#wins');
const loserScreen = document.querySelector('#losses');
const drawScreen = document.querySelector('#draws');
const resultsScreen = document.querySelector('#results');
const choiceScreen = document.querySelector('#choices');

// initialize state
let wins = 0;
let draws = 0;
let choices = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    choices++;
    const computer = getRandomThrow();
    const checkedRadio = document.querySelector('input:checked');
    const playerGuess = checkedRadio.value;

    const winDraw = wins + draws;
    const lossData = choices - winDraw;

    const result = checkResult(playerGuess, computer);

// conditional

    if (result === 'win') {
        wins++;
        winnerScreen.textContent = 'You are the winner!';
    }
    
    if (result === 'draw') {
        draws++;
        drawScreen.textContent = 'You tied!';
    }
    
    if (result === 'lose') {
        loserScreen.textContent = 'You are the loser!';
    }

    choiceScreen.textContent = `Choices: ${choices}`;
    winnerScreen.textContent = `Wins: ${wins}`;
    loserScreen.textContent = `Losses: ${lossData}`;
    resultsScreen.textContent = `Results: ${result}`;
});


