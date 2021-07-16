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
const winRow = [[0, 1, 2], [3, 4, 5], [6, 7, 8]
const winColumn = [[0, 3, 6], [1, 4, 7], [2, 5, 8]]
const winDiagonal = [[0, 4, 8], [2, 4, 6]]
console.log(winRow)
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

function winCheck() {

}


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
  // logic to check for winner in ROWS


}

//  Events
cells.forEach(cell => {
  cell.addEventListener('click', handleClick)
})