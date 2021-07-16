// Ultimate Tic Tac TouchEvent
// A play button should start the game 

// A two player game. Players alternate placing their marker in a cell in the table. The objective is to get three markers in a row in each small game. If you've gotten three mini-games in a row, the game is won. If no player can get three in a row and the cells are all filled, it's a draw.

// DOM Variables

const miniGrid = document.querySelector('.mini-grid')
const newGameBtn = document.querySelector('.new-game')

// Game Variables

const width = 3
const miniGridCellCount = width * width
const cells = []


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
  event.target.innerHTML = 'X'
}

//  Events
cells.forEach(cell => {
  cell.addEventListener('click', handleClick)
})