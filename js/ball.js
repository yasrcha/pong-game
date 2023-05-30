let ball = document.getElementById('ball')

let ballDiameter = 20;

let xBallPosition = 450 - ballDiameter;
let yBallPosition = 300 - ballDiameter;

let ballXVelocity = 3;
let ballYVelocity = 3;

let scenarioWidth = 900;
let scenarioHeight = 600;

function ballInitialPosition() {
    ball.style.cssText = "visibility: visible"
    ball.style.left = `${xBallPosition}px`;
    ball.style.top = `${yBallPosition}px`;
}

function ballMoviment() {
    xBallPosition += ballXVelocity;
    yBallPosition += ballYVelocity;
}

function verifyCollide() {
    if (xBallPosition > scenarioWidth - ballDiameter || xBallPosition < 0) {
        ballXVelocity *= -1
    } else if (yBallPosition > scenarioHeight - ballDiameter || yBallPosition < 0) {
        ballYVelocity *= -1
    }
}