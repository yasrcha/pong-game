function startingGame() {
    ballInitialPosition();
    ballMoviment();
    verifyCollide()
    
    requestAnimationFrame(startingGame) // Make an animation loop;
}