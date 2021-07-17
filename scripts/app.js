// Ultimate Tic Tac TouchEvent
// A play button should start the game 

// A two player game. Players alternate placing their marker in a cell in the table. The objective is to get three markers in a row in each small game. If you've gotten three mini-games in a row, the game is won. If no player can get three in a row and the cells are all filled, it's a draw.

// DOM Variables

const miniGrid = document.querySelector('.mini-grid')
const newGameBtn = document.querySelector('.new-game')
const gameStatus = document.querySelector('#game-status')



// Game Variables

const width = 3
const miniGridCellCount = width * width
const cells = []
const playerOne = '🌸'
const playerTwo = '🌈'


let currentPlayer = playerOne


// Functions

function createMiniGrid() {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div')
    cell.setAttribute('value', i)
    cells.push(cell)
    miniGrid.appendChild(cell)
  }
  
}
createMiniGrid()




function handleClick(event) {
  // turn taking
  if (currentPlayer === playerOne) {
    if (event.target.innerHTML === '') {
      event.target.innerHTML = '🌸'
      gameStatus.innerHTML = 'Go, Player Two!'
      currentPlayer = playerTwo
    } else {
      currentPlayer = playerOne
      gameStatus.innerHTML = 'This square has already been played. Please, choose again!'
    } 
  }
  if (currentPlayer === playerTwo) {
    if (event.target.innerHTML === '') {
      event.target.innerHTML = '🌈'
      gameStatus.innerHTML = 'Go, Player One!'
      currentPlayer = playerOne
    } else {
      currentPlayer = playerTwo
    }
  }
  // check for winner in ROWS
  if ((cells[0].innerHTML === '🌸' && cells[1].innerHTML === '🌸' && cells[2].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      miniGrid.classList.add('player-one-win')
    } else if ((cells[3].innerHTML === '🌸' && cells[4].innerHTML === '🌸' && cells[5].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      miniGrid.classList.add('player-one-win')
    } else if ((cells[6].innerHTML === '🌸' && cells[7].innerHTML === '🌸' && cells[8].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      miniGrid.classList.add('player-one-win')
    } else if ((cells[0].innerHTML === '🌈' && cells[1].innerHTML === '🌈' && cells[2].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      miniGrid.classList.add('player-two-win')
    } else if ((cells[3].innerHTML === '🌈' && cells[4].innerHTML === '🌈' && cells[5].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      miniGrid.classList.add('player-two-win')
    } else if ((cells[6].innerHTML === '🌈' && cells[7].innerHTML === '🌈' && cells[8].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      miniGrid.classList.add('player-two-win')
    }
    //  Check for winner in columns
  if ((cells[0].innerHTML === '🌸' && cells[3].innerHTML === '🌸' && cells[6].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      miniGrid.classList.add('player-one-win')
    } else if ((cells[1].innerHTML === '🌸' && cells[4].innerHTML === '🌸' && cells[7].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      miniGrid.classList.add('player-one-win')
    } else if ((cells[2].innerHTML === '🌸' && cells[5].innerHTML === '🌸' && cells[8].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      miniGrid.classList.add('player-one-win')
    } else if ((cells[0].innerHTML === '🌈' && cells[3].innerHTML === '🌈' && cells[6].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      miniGrid.classList.add('player-two-win')
    } else if ((cells[1].innerHTML === '🌈' && cells[4].innerHTML === '🌈' && cells[7].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      miniGrid.classList.add('player-two-win')
    } else if ((cells[2].innerHTML === '🌈' && cells[5].innerHTML === '🌈' && cells[8].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      miniGrid.classList.add('player-two-win')
    }
    // Check for winner in diagonals
  if ((cells[0].innerHTML === '🌸' && cells[4].innerHTML === '🌸' && cells[8].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      miniGrid.classList.add('player-one-win')
    } else if ((cells[2].innerHTML === '🌸' && cells[4].innerHTML === '🌸' && cells[6].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      miniGrid.classList.add('player-one-win')
    } else if ((cells[0].innerHTML === '🌈' && cells[4].innerHTML === '🌈' && cells[8].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      miniGrid.classList.add('player-two-win')
    } else if ((cells[2].innerHTML === '🌈' && cells[4].innerHTML === '🌈' && cells[6].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      miniGrid.classList.add('player-two-win')
    }
  // Check for draw
  if ((cells[0].innerHTML !== '' && cells[1].innerHTML !== '' && cells[2].innerHTML !== '' 
    && cells[3].innerHTML !== '' && cells[4].innerHTML !== '' && cells[5].innerHTML !== '' 
    && cells[6].innerHTML !== '' && cells[7].innerHTML !== '' && cells[8].innerHTML !== '')) {
        gameStatus.innerHTML = `It's a draw`
        miniGrid.classList.add('draw')
      }
}

//  Events
cells.forEach(cell => {
  cell.addEventListener('click', handleClick)
})

