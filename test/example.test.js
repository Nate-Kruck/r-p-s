// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { checkResult } from '../check-result.js';

const test = QUnit.test;

test('should tell you if its a string', function(assert) {
    //Arrange
    const choice = 0;
    
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = checkResult(choice);
    
    //Assert
    // Make assertions about what is expected versus the actual result
    assert.equal(expected, actual === 'rock' || actual === 'paper' || actual === 'scissors');
});
