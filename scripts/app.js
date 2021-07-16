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
  if (currentPlayer === playerOne) {
    if (event.target.innerHTML === '') {
      event.target.innerHTML = '🌸'
      gameStatus.innerHTML = `Player Two's Turn`
    } else if (event.target.innerHTML !== '') {
      gameStatus.innerHTML = 'This square has already been played Please, pick again!'
    }
    currentPlayer = playerTwo
  } else {
    if (event.target.innerHTML === '') {
      event.target.innerHTML = '🌈'
      gameStatus.innerHTML = `Player One's Turn`
    }else if (event.target.innerHTML !== '') {
      gameStatus.innerHTML = 'This square has already been played. Please, pick again!'
    }
    currentPlayer = playerOne
  }
    
}

//  Events
cells.forEach(cell => {
  cell.addEventListener('click', handleClick)
})