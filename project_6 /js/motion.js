// move player
function movePlayer(event) {
  if (turn.control) {
    var playerRow = player1Row;
    var playerColumn = player1Column;
    var otherPlayer = PLAYER2;
    var player = PLAYER1;
    var otherPlayerRow = player2Row;
    var otherPlayerColumn = player2Column;
  } else {
    var playerRow = player2Row;
    var playerColumn = player2Column;
    var otherPlayer = PLAYER1;
    var player = PLAYER2;
    var otherPlayerRow = player1Row;
    var otherPlayerColumn = player1Column;
  }

  // The 12 possible directions that the player can move
  var UP1 = 1;
  var UP2 = 2;
  var UP3 = 3;

  var DOWN1 = 4;
  var DOWN2 = 5;
  var DOWN3 = 6;

  var LEFT1 = 7;
  var LEFT2 = 8;
  var LEFT3 = 9;

  var RIGHT1 = 10;
  var RIGHT2 = 11;
  var RIGHT3 = 12;

  // variable to store the direction allowed
  var validDirection;

  // find target's element's position in map array
  var direction = getComputedStyle(event.target);
  var directionRow = parseInt(direction.top) / SIZE();
  var directionColumn = parseInt(direction.left) / SIZE();
  var directionChosen = map[directionRow][directionColumn];

  // if movement is vertical
  if (
    directionRow > playerRow - 4 &&
    directionColumn == playerColumn &&
    directionRow < playerRow + 4 &&
    directionChosen !== BLOCKED &&
    gameObjects[directionRow][directionColumn] !==
      gameObjects[otherPlayerRow][otherPlayerColumn]
  ) {
    // if movement is upwards & path is clear
    if (directionRow > playerRow - 4 && directionRow < playerRow) {
      if (directionRow == playerRow - 1) {
        validDirection = UP1;
      }
      if (
        directionRow == playerRow - 2 &&
        map[directionRow + 1][directionColumn] !== BLOCKED &&
        gameObjects[directionRow + 1][directionColumn] !== otherPlayer
      ) {
        validDirection = UP2;
      }
      if (
        directionRow == playerRow - 3 &&
        map[directionRow + 2][directionColumn] !== BLOCKED &&
        map[directionRow + 1][directionColumn] !== BLOCKED &&
        gameObjects[directionRow + 2][directionColumn] !== otherPlayer &&
        gameObjects[directionRow + 1][directionColumn] !== otherPlayer
      ) {
        validDirection = UP3;
      }
    }
    // if movement is downwards & path is clear
    if (directionRow < playerRow + 4 && directionRow > playerRow) {
      if (directionRow == playerRow + 1) {
        validDirection = DOWN1;
      }
      if (
        directionRow == playerRow + 2 &&
        map[directionRow - 1][directionColumn] !== BLOCKED &&
        gameObjects[directionRow - 1][directionColumn] !== otherPlayer
      ) {
        validDirection = DOWN2;
      }
      if (
        directionRow == playerRow + 3 &&
        map[directionRow - 2][directionColumn] !== BLOCKED &&
        map[directionRow - 1][directionColumn] !== BLOCKED &&
        gameObjects[directionRow - 2][directionColumn] !== otherPlayer &&
        gameObjects[directionRow - 1][directionColumn] !== otherPlayer
      ) {
        validDirection = DOWN3;
      }
    }
  }

  // if movement is horizontal
  if (
    directionColumn > playerColumn - 4 &&
    directionRow == playerRow &&
    directionColumn < playerColumn + 4 &&
    directionChosen !== BLOCKED &&
    gameObjects[directionRow][directionColumn] !==
      gameObjects[otherPlayerRow][otherPlayerColumn]
  ) {
    // if movement is to the left & path is clear
    if (directionColumn > playerColumn - 4 && directionColumn < playerColumn) {
      if (directionColumn == playerColumn - 1) {
        validDirection = LEFT1;
      }
      if (
        directionColumn == playerColumn - 2 &&
        map[directionRow][directionColumn + 1] !== BLOCKED &&
        gameObjects[directionRow][directionColumn + 1] !== otherPlayer
      ) {
        validDirection = LEFT2;
      }
      if (
        directionColumn == playerColumn - 3 &&
        map[directionRow][directionColumn + 2] !== BLOCKED &&
        map[directionRow][directionColumn + 1] !== BLOCKED &&
        gameObjects[directionRow][directionColumn + 2] !== otherPlayer &&
        gameObjects[directionRow][directionColumn + 1] !== otherPlayer
      ) {
        validDirection = LEFT3;
      }
    }

    // if movement is to the right & path is clear
    if (directionColumn < playerColumn + 4 && directionColumn > playerColumn) {
      if (directionColumn == playerColumn + 1) {
        validDirection = RIGHT1;
      }
      if (
        directionColumn == playerColumn + 2 &&
        map[directionRow][directionColumn - 1] !== BLOCKED &&
        gameObjects[directionRow][directionColumn - 1] !== otherPlayer
      ) {
        validDirection = RIGHT2;
      }
      if (
        directionColumn == playerColumn + 3 &&
        map[directionRow][directionColumn - 2] !== BLOCKED &&
        map[directionRow][directionColumn - 1] !== BLOCKED &&
        gameObjects[directionRow][directionColumn - 2] !== otherPlayer &&
        gameObjects[directionRow][directionColumn - 1] !== otherPlayer
      ) {
        validDirection = RIGHT3;
      }
    }
  }

  if (turn.control) {
    // move the player to the chosen direction
    switch (validDirection) {
      case UP1:
        gameObjects[player1Row][player1Column] = 0;
        player1Row--;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case UP2:
        gameObjects[player1Row][player1Column] = 0;
        player1Row -= 2;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case UP3:
        gameObjects[player1Row][player1Column] = 0;
        player1Row -= 3;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case DOWN1:
        gameObjects[player1Row][player1Column] = 0;
        player1Row++;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case DOWN2:
        gameObjects[player1Row][player1Column] = 0;
        player1Row += 2;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case DOWN3:
        gameObjects[player1Row][player1Column] = 0;
        player1Row += 3;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case LEFT1:
        gameObjects[player1Row][player1Column] = 0;
        player1Column--;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case LEFT2:
        gameObjects[player1Row][player1Column] = 0;
        player1Column -= 2;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case LEFT3:
        gameObjects[player1Row][player1Column] = 0;
        player1Column -= 3;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case RIGHT1:
        gameObjects[player1Row][player1Column] = 0;
        player1Column++;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case RIGHT2:
        gameObjects[player1Row][player1Column] = 0;
        player1Column += 2;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
      case RIGHT3:
        gameObjects[player1Row][player1Column] = 0;
        player1Column += 3;
        gameObjects[player1Row][player1Column] = PLAYER1;
        turn.control = false;
        turn.fight = false;
        break;
    }
  } else {
    // move the player to the chosen direction
    switch (validDirection) {
      case UP1:
        gameObjects[player2Row][player2Column] = 0;
        player2Row--;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case UP2:
        gameObjects[player2Row][player2Column] = 0;
        player2Row -= 2;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case UP3:
        gameObjects[player2Row][player2Column] = 0;
        player2Row -= 3;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case DOWN1:
        gameObjects[player2Row][player2Column] = 0;
        player2Row++;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case DOWN2:
        gameObjects[player2Row][player2Column] = 0;
        player2Row += 2;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case DOWN3:
        gameObjects[player2Row][player2Column] = 0;
        player2Row += 3;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case LEFT1:
        gameObjects[player2Row][player2Column] = 0;
        player2Column--;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case LEFT2:
        gameObjects[player2Row][player2Column] = 0;
        player2Column -= 2;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case LEFT3:
        gameObjects[player2Row][player2Column] = 0;
        player2Column -= 3;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case RIGHT1:
        gameObjects[player2Row][player2Column] = 0;
        player2Column++;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case RIGHT2:
        gameObjects[player2Row][player2Column] = 0;
        player2Column += 2;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
      case RIGHT3:
        gameObjects[player2Row][player2Column] = 0;
        player2Column += 3;
        gameObjects[player2Row][player2Column] = PLAYER2;
        turn.control = true;
        turn.fight = true;
        break;
    }
  }

  renderObjects();
}
