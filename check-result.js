
// rock = 1
// paper = 2
// scissors = 3

export default function checkResult(player, computer) {
    // draw
    if (player === computer) {
        return 0;
    
    // paper over rock - computer W  
    } else if (player === 1 && computer === 2) {
        return 2;
    // rock over scissors - player W
    } else if (player === 1 && computer === 3) {
        return 1;
    // paper over rock - player W
    } else if (player === 2 && computer === 1) {
        return 2;
    // scissors over paper - computer w
    } else if (player === 2 && computer === 3) {
        return 3;
    // rock over scissors computer W
    } else if (player === 3 && computer === 1) {
        return 1;
    // scissors over paper - player W
    } else if (player === 3 && computer === 2) {
        return 3;
    }
}