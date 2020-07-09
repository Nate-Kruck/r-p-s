// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { checkResult } from '../check-result.js';

const test = QUnit.test;

test('Should return okay since paper beats rock', (expect) => {
    //Arrange
    //const choice = 0;
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'rock';
    
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(player, computer); 
    

    // Expect
    // Make assertions about what is expected versus the actual result
    
    expect.equal(actual, 'win');
});
test('Should return okay since paper loses to scissors', (expect) => {
    
    //Arrange
    //const choice = 0;
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'scissors';
    
    const actual = checkResult(player, computer);
    
    expect.equal(actual, 'lose');
});

test('Should return okay since a draw would happen if both players choose paper', (expect) => {

    //Arrange
    //const choice = 0;
    // Set up your arguments and expectations
    const player = 'paper';
    const computer = 'paper';
    
    // Call the function you're testing and set the result to a 
    //Act 
    const actual = checkResult(player, computer);
    
    // Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, 'draw');

});