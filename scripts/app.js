// Ultimate Tic Tac TouchEvent
// A play button should start the game 

// A two player game. Players alternate placing their marker in a cell in the table. The objective is to get three markers in a row in each small game. If you've gotten three mini-games in a row, the game is won. If no player can get three in a row and the cells are all filled, it's a draw.

// DOM Variables

const newGameBtn = document.querySelector('.new-game')
const gameStatus = document.querySelector('#game-status')
const mainGridContainer = document.querySelector('.main-grid')
const cell = document.querySelectorAll('.cell')






// Game Variables

const width = 3
const miniGridCellCount = width * width
const cells = []
const playerOne = '🌸'
const playerTwo = '🌈'
const mainGrid = []
let miniGrid 


let currentPlayer = playerOne
let currentGrid = mainGrid

// Functions

function createGameGrid() {
  for (let i = 0; i < 9; i++) {
    miniGrid = document.createElement('div')
    miniGrid.setAttribute('class', 'mini-'+ i)
    miniGrid.classList.add('mini-grid')
    mainGrid.push(miniGrid)
    mainGridContainer.appendChild(miniGrid)
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div')
      cell.setAttribute('value', 'c' + i)
      cells.push(cell)
      miniGrid.appendChild(cell)
    }
  }
}

createGameGrid()

// link to the dom variables for the nine grids created above
const gridOne = document.querySelector('.mini-0')
const gridTwo = document.querySelector('.mini-1')
const gridThree = document.querySelector('.mini-2')
const gridFour = document.querySelector('.mini-3')
const gridFive = document.querySelector('.mini-4')
const gridSix = document.querySelector('.mini-5')
const gridSeven = document.querySelector('.mini-6')
const gridEight = document.querySelector('.mini-7')
const gridNine = document.querySelector('.mini-8')

console.log(gridOne, gridTwo, gridThree, gridFour, gridFive, gridSix, gridSeven, gridEight, gridNine)

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
      gridOne.classList.add('player-one-win')
      
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
      miniGrid.div.classList.add('player-one-win')
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
        miniGrid.div.classList.add('draw')
      }
  // Function to direct grid available for the next move
  
}

//  Events
cells.forEach(cell => {
  cell.addEventListener('click', handleClick)
})

