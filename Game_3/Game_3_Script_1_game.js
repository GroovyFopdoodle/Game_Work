import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection, score} from './Game_3_Script_2_snake.js';
import {update as updateFood, draw as drawFood} from './Game_3_Script_4_food.js';
import {outsideGrid} from './Game_3_Script_5_grid.js';

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('game-board');

function main(currentTime){
    if (gameOver){
        if (confirm('You lost, Final score was 'score - 1'. Press ok to restart')){
            window.location = '/';
        }
        else {window.close()}
    }
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    window.requestAnimationFrame(main);
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    
    
    lastRenderTime = currentTime;
    console.log("Render");

    update();
    draw();
}

window.requestAnimationFrame(main);

function update(){
    updateSnake();
    updateFood();
    checkDeath();
}

function draw(){
    gameBoard.innerHTML = '';
    drawSnake(gameBoard);
    drawFood(gameBoard);
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
