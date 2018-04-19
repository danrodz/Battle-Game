function fight() {
  // player 1 attacks
  if (turn.control !== true) {
    if (turn.defend) {
      player2Health -= player1Power[0] / 2;
    } else {
      player2Health -= player1Power[0];
      player1Health -= player2Power[0];
    }
    turn.fight = !turn.fight;
  } else {
    if (turn.defend) {
      player1Health -= player2Power[0] / 2;
    } else {
      player1Health -= player2Power[0];
      player2Health -= player1Power[0];
    }
    turn.fight = !turn.fight;
  }

  if (player1Health <= 0 || player2Health <= 0) {
    endGame();
  }

  document.querySelector('#p1health').textContent = '' + player1Health + '%';

  document.querySelector('#p2health').textContent = '' + player2Health + '%';

  document.querySelector('#p1healthBar').style.width = '' + player1Health + '%';

  document.querySelector('#p2healthBar').style.width = '' + player2Health + '%';

  render();
}
