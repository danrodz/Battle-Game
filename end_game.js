function endGame() {
  //Remove the keyboard listener to end the game
  stage.removeEventListener('click', movePlayer);
}
