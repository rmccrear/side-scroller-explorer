
function doSpriteMovement() {
    // Food movement - moves from right to left and repeats
    if(food.x < 0) {
        food.x = 400;
        food.y = randomNumber(100, 250);
        food.velocity=randomNumber(-1, -3);
    }
    
    // Enemy movement - moves from right to left and repeats
    if(enemy.x < 0) {
        enemy.x = 400;
        enemy.y = randomNumber(100, 250);
        enemy.velocity = randomNumber(-1, -3);
    }
}