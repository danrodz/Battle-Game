function availableTiles() {
  if (player1Health > 0 && player2Health > 0) {
    if (turn.control) {
      // to highlight elements upwards
      if (playerOne > 10) {
        if (
          map[player1Row - 1][player1Column] !== BLOCKED &&
          gameObjects[player1Row - 1][player1Column] !== PLAYER2
        ) {
          document
            .getElementById(playerOne - 10 + '')
            .classList.add('flashing', 'hoverable');

          if (playerOne > 20) {
            if (
              map[player1Row - 2][player1Column] !== BLOCKED &&
              gameObjects[player1Row - 2][player1Column] !== PLAYER2
            ) {
              document
                .getElementById(playerOne - 20 + '')
                .classList.add('flashing2', 'hoverable');

              if (playerOne > 30) {
                if (
                  map[player1Row - 3][player1Column] !== BLOCKED &&
                  map[player1Row - 2][player1Column] !== BLOCKED &&
                  gameObjects[player1Row - 3][player1Column] !== PLAYER2
                ) {
                  document
                    .getElementById(playerOne - 30 + '')
                    .classList.add('flashing3', 'hoverable');
                }
              }
            }
          }
        }
      }
      // to highlight elements downwards
      if (playerOne < 91) {
        if (
          map[player1Row + 1][player1Column] !== BLOCKED &&
          gameObjects[player1Row + 1][player1Column] !== PLAYER2
        ) {
          document
            .getElementById(playerOne + 10 + '')
            .classList.add('flashing', 'hoverable');

          if (playerOne < 81) {
            if (
              map[player1Row + 2][player1Column] !== BLOCKED &&
              gameObjects[player1Row + 2][player1Column] !== PLAYER2
            ) {
              document
                .getElementById(playerOne + 20 + '')
                .classList.add('flashing2', 'hoverable');

              if (playerOne < 71) {
                if (
                  map[player1Row + 3][player1Column] !== BLOCKED &&
                  gameObjects[player1Row + 3][player1Column] !== PLAYER2
                ) {
                  document
                    .getElementById(playerOne + 30 + '')
                    .classList.add('flashing3', 'hoverable');
                }
              }
            }
          }
        }
      }
      // to highlight elements to the left
      if (playerOne % 10 !== 1) {
        if (
          map[player1Row][player1Column - 1] !== BLOCKED &&
          gameObjects[player1Row][player1Column - 1] !== PLAYER2
        ) {
          document
            .getElementById(playerOne - 1 + '')
            .classList.add('flashing', 'hoverable');

          if (playerOne % 10 !== 2) {
            if (
              map[player1Row][player1Column - 2] !== BLOCKED &&
              gameObjects[player1Row][player1Column - 2] !== PLAYER2
            ) {
              document
                .getElementById(playerOne - 2 + '')
                .classList.add('flashing2', 'hoverable');

              if (playerOne % 10 !== 3) {
                if (
                  map[player1Row][player1Column - 3] !== BLOCKED &&
                  gameObjects[player1Row][player1Column - 3] !== PLAYER2
                ) {
                  document
                    .getElementById(playerOne - 3 + '')
                    .classList.add('flashing3', 'hoverable');
                }
              }
            }
          }
        }
      }
      // to highlight elements to the right
      if (playerOne % 10 !== 0) {
        if (
          map[player1Row][player1Column + 1] !== BLOCKED &&
          gameObjects[player1Row][player1Column + 1] !== PLAYER2
        ) {
          document
            .getElementById(playerOne + 1 + '')
            .classList.add('flashing', 'hoverable');

          if (playerOne % 10 !== 9) {
            if (
              map[player1Row][player1Column + 2] !== BLOCKED &&
              gameObjects[player1Row][player1Column + 2] !== PLAYER2
            ) {
              document
                .getElementById(playerOne + 2 + '')
                .classList.add('flashing2', 'hoverable');

              if (playerOne % 10 !== 8) {
                if (
                  map[player1Row][player1Column + 3] !== BLOCKED &&
                  gameObjects[player1Row][player1Column + 3] !== PLAYER2
                ) {
                  document
                    .getElementById(playerOne + 3 + '')
                    .classList.add('flashing3', 'hoverable');
                }
              }
            }
          }
        }
      }
    } else {
      // player 2's tiles
      // to highlight elements upwards
      if (playerTwo > 10) {
        if (
          map[player2Row - 1][player2Column] !== BLOCKED &&
          gameObjects[player2Row - 1][player2Column] !== PLAYER1
        ) {
          document
            .getElementById(playerTwo - 10 + '')
            .classList.add('flashing4', 'hoverable');

          if (playerTwo > 20) {
            if (
              map[player2Row - 2][player2Column] !== BLOCKED &&
              gameObjects[player2Row - 2][player2Column] !== PLAYER1
            ) {
              document
                .getElementById(playerTwo - 20 + '')
                .classList.add('flashing5', 'hoverable');

              if (playerTwo > 30) {
                if (
                  map[player2Row - 3][player2Column] !== BLOCKED &&
                  map[player2Row - 2][player2Column] !== BLOCKED &&
                  gameObjects[player2Row - 3][player2Column] !== PLAYER1
                ) {
                  document
                    .getElementById(playerTwo - 30 + '')
                    .classList.add('flashing6', 'hoverable');
                }
              }
            }
          }
        }
      }
      // to highlight elements downwards
      if (playerTwo < 91) {
        if (
          map[player2Row + 1][player2Column] !== BLOCKED &&
          gameObjects[player2Row + 1][player2Column] !== PLAYER1
        ) {
          document
            .getElementById(playerTwo + 10 + '')
            .classList.add('flashing4', 'hoverable');

          if (playerTwo < 81) {
            if (
              map[player2Row + 2][player2Column] !== BLOCKED &&
              gameObjects[player2Row + 2][player2Column] !== PLAYER1
            ) {
              document
                .getElementById(playerTwo + 20 + '')
                .classList.add('flashing5', 'hoverable');

              if (playerTwo < 71) {
                if (
                  map[player2Row + 3][player2Column] !== BLOCKED &&
                  gameObjects[player2Row + 3][player2Column] !== PLAYER1
                ) {
                  document
                    .getElementById(playerTwo + 30 + '')
                    .classList.add('flashing6', 'hoverable');
                }
              }
            }
          }
        }
      }
      // to highlight elements to the left
      if (playerTwo % 10 !== 1) {
        if (
          map[player2Row][player2Column - 1] !== BLOCKED &&
          gameObjects[player2Row][player2Column - 1] !== PLAYER1
        ) {
          document
            .getElementById(playerTwo - 1 + '')
            .classList.add('flashing4', 'hoverable');

          if (playerTwo % 10 !== 2) {
            if (
              map[player2Row][player2Column - 2] !== BLOCKED &&
              gameObjects[player2Row][player2Column - 2] !== PLAYER1
            ) {
              document
                .getElementById(playerTwo - 2 + '')
                .classList.add('flashing5', 'hoverable');

              if (playerTwo % 10 !== 3) {
                if (
                  map[player2Row][player2Column - 3] !== BLOCKED &&
                  gameObjects[player2Row][player2Column - 3] !== PLAYER1
                ) {
                  document
                    .getElementById(playerTwo - 3 + '')
                    .classList.add('flashing6', 'hoverable');
                }
              }
            }
          }
        }
      }
      // to highlight elements to the right
      if (playerTwo % 10 !== 0) {
        if (
          map[player2Row][player2Column + 1] !== BLOCKED &&
          gameObjects[player2Row][player2Column + 1] !== PLAYER1
        ) {
          document
            .getElementById(playerTwo + 1 + '')
            .classList.add('flashing4', 'hoverable');

          if (playerTwo % 10 !== 9) {
            if (
              map[player2Row][player2Column + 2] !== BLOCKED &&
              gameObjects[player2Row][player2Column + 2] !== PLAYER1
            ) {
              document
                .getElementById(playerTwo + 2 + '')
                .classList.add('flashing5', 'hoverable');

              if (playerTwo % 10 !== 8) {
                if (
                  map[player2Row][player2Column + 3] !== BLOCKED &&
                  gameObjects[player2Row][player2Column + 3] !== PLAYER1
                ) {
                  document
                    .getElementById(playerTwo + 3 + '')
                    .classList.add('flashing6', 'hoverable');
                }
              }
            }
          }
        }
      }
    }
  }
}
