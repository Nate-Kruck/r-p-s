export function checkResult(player, computer) {
    // draw
    if (player === computer) {
        return 'draw';
    
    // paper over rock - computer W  
    } else if (player === 'rock' && computer === 'paper') {
        return 'lose';
    // rock over scissors - player W
    } else if (player === 'rock' && computer === 'scissors') {
        return 'win';
    // paper over rock - player W
    } else if (player === 'paper' && computer === 'rock') {
        return 'win';
    // scissors over paper - computer w
    } else if (player === 'paper' && computer === 'scissors') {
        return 'lose';
    // rock over scissors computer W
    } else if (player === 'scissors' && computer === 'rock') {
        return 'lose';
    // scissors over paper - player W
    } else if (player === 'scissors' && computer === 'paper') {
        return 'win';
    }
}