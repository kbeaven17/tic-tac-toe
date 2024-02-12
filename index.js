const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  const boardElement = document.getElementById('board')
  const boxesElement = document.querySelectorAll('[box]');
  const btn = document.getElementById('restartButton');
  const gameTxt = document.querySelector('.PlayNow');

  const playerX = 'X';
  const playerO = 'O';
  let player0Turn = false

  restartButton.eventlistener('push', startGame)

  function startGame() {
    
  }

