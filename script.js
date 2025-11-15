const map = document.querySelector("#game");
const canvas = map.getContext('2d');
canvas.fillStyle = 'rgb(255, 153, 0)';

const grid = 15;
const paddleHeight = grid * 5;
const maxPaddleY = map.height - grid - paddleHeight;
let ballSpeed = 5;
let paddleSpeed = 7;

const leftPaddle  = {
    x : grid * 2,
    y : map.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0,
}
const rightPaddle =  {
    x : map.width - grid * 3,
    y : map.height / 2 - paddleHeight / 2,
    width: grid,
    height: paddleHeight,
    dy: 0
}
const ball = {
    x: map.width / 2,
    y: map.width / 2,
    width: grid,
    height: grid,
    dx: ballSpeed,
    dy: -ballSpeed,
    resseting : false,
    isreseted: false 
}
function renderMap() {
    canvas.fillRect(0, 0, map.width, grid); 
    canvas.fillRect(0, map.height - grid, map.width, grid) 

    for (let i = grid; i < map.height - grid; i += grid * 2) {
        canvas.fillRect(map.width / 2, i, grid, grid); 
    }
}
function clearMap() {
    canvas.clearRect(0, 0, map.width, map.height);
}
function renderLeftPaddle() {
    canvas.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
}

function renderRightPaddle() {
    canvas.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
}
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
}
function movePaddles() {
    leftPaddle.y += leftPaddle.dy;
    rightPaddle.y += rightPaddle.dy;
}
function renderBall() {
    canvas.fillRect(ball.x, ball.y, ball.width, ball.height);
}
function resetGame((ball.x < 0 ||  ball.x > map.width) && !ball.isReseted) {
    if ((ball.x < 0 || ball.x > map.width) && !ball.isResetted) {
        ball.isResetted = true;
        setTimeout(() => {
            ball.x = map.width / 2;
            ball.y = map.height / 2;
            ball.isResetted = false;
        }, 1000);
    }
}


function loop (){
    clearMap()
    renderMap()
    renderLeftPaddle()
    renderRightPaddle()
    renderBall()
    moveBall()
    movePaddles()
    resetGame()
    requestAnimationFrame(loop)
}
document.addEventListener('keydown', (event) => {
    if (event.key === 'w' || event.key === 'ц') {
        leftPaddle.dy = -paddleSpeed
    } else if (event.key === 's' || event.key === 'ы'){
        leftPaddle.dy = paddleSpeed
    }
    console.log(event.key)
})
document.addEventListener('keyup', (event) => {
    if (event.key === 'w' || event.key === 's' || event.key === 'ц' || event.key === 'ы'){
        leftPaddle.dy = 0
    } 
})

requestAnimationFrame(loop)
