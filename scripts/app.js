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


// GRID ONE
function handleClickOne(event) {
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
      gridOne.classList.add('player-one-win')
    } else if ((cells[6].innerHTML === '🌸' && cells[7].innerHTML === '🌸' && cells[8].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridOne.classList.add('player-one-win')
    } else if ((cells[0].innerHTML === '🌈' && cells[1].innerHTML === '🌈' && cells[2].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridOne.classList.add('player-two-win')
    } else if ((cells[3].innerHTML === '🌈' && cells[4].innerHTML === '🌈' && cells[5].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridOne.classList.add('player-two-win')
    } else if ((cells[6].innerHTML === '🌈' && cells[7].innerHTML === '🌈' && cells[8].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridOne.classList.add('player-two-win')
    }
    //  Check for winner in columns
  if ((cells[0].innerHTML === '🌸' && cells[3].innerHTML === '🌸' && cells[6].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridOne.classList.add('player-one-win')
    } else if ((cells[1].innerHTML === '🌸' && cells[4].innerHTML === '🌸' && cells[7].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridOne.classList.add('player-one-win')
    } else if ((cells[2].innerHTML === '🌸' && cells[5].innerHTML === '🌸' && cells[8].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridOne.classList.add('player-one-win')
    } else if ((cells[0].innerHTML === '🌈' && cells[3].innerHTML === '🌈' && cells[6].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridOne.classList.add('player-two-win')
    } else if ((cells[1].innerHTML === '🌈' && cells[4].innerHTML === '🌈' && cells[7].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridOne.classList.add('player-two-win')
    } else if ((cells[2].innerHTML === '🌈' && cells[5].innerHTML === '🌈' && cells[8].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridOne.classList.add('player-two-win')
    }
    // Check for winner in diagonals
  if ((cells[0].innerHTML === '🌸' && cells[4].innerHTML === '🌸' && cells[8].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridOne.classList.add('player-one-win')
    } else if ((cells[2].innerHTML === '🌸' && cells[4].innerHTML === '🌸' && cells[6].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridOne.classList.add('player-one-win')
    } else if ((cells[0].innerHTML === '🌈' && cells[4].innerHTML === '🌈' && cells[8].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridOne.classList.add('player-two-win')
    } else if ((cells[2].innerHTML === '🌈' && cells[4].innerHTML === '🌈' && cells[6].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridOne.classList.add('player-two-win')
    }
  // Check for draw
  if ((cells[0].innerHTML !== '' && cells[1].innerHTML !== '' && cells[2].innerHTML !== '' 
    && cells[3].innerHTML !== '' && cells[4].innerHTML !== '' && cells[5].innerHTML !== '' 
    && cells[6].innerHTML !== '' && cells[7].innerHTML !== '' && cells[8].innerHTML !== '')) {
        gameStatus.innerHTML = `It's a draw`
        gridOne.classList.add('draw')
      }
  // Function to direct grid available for the next move

}

// GRID TWO
function handleClickTwo(event) {
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
  if ((cells[9].innerHTML === '🌸' && cells[10].innerHTML === '🌸' && cells[11].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridTwo.classList.add('player-one-win')
      
    } else if ((cells[12].innerHTML === '🌸' && cells[13].innerHTML === '🌸' && cells[14].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridTwo.classList.add('player-one-win')
    } else if ((cells[15].innerHTML === '🌸' && cells[16].innerHTML === '🌸' && cells[17].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridTwo.classList.add('player-one-win')
    } else if ((cells[9].innerHTML === '🌈' && cells[10].innerHTML === '🌈' && cells[11].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridTwo.classList.add('player-two-win')
    } else if ((cells[12].innerHTML === '🌈' && cells[13].innerHTML === '🌈' && cells[14].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridTwo.classList.add('player-two-win')
    } else if ((cells[15].innerHTML === '🌈' && cells[16].innerHTML === '🌈' && cells[17].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridTwo.classList.add('player-two-win')
    }
    //  Check for winner in columns
  if ((cells[9].innerHTML === '🌸' && cells[12].innerHTML === '🌸' && cells[15].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridTwo.div.classList.add('player-one-win')
    } else if ((cells[10].innerHTML === '🌸' && cells[13].innerHTML === '🌸' && cells[16].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridTwo.classList.add('player-one-win')
    } else if ((cells[11].innerHTML === '🌸' && cells[14].innerHTML === '🌸' && cells[17].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridTwo.classList.add('player-one-win')
    } else if ((cells[9].innerHTML === '🌈' && cells[12].innerHTML === '🌈' && cells[15].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridTwo.classList.add('player-two-win')
    } else if ((cells[10].innerHTML === '🌈' && cells[13].innerHTML === '🌈' && cells[16].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridTwo.classList.add('player-two-win')
    } else if ((cells[11].innerHTML === '🌈' && cells[14].innerHTML === '🌈' && cells[17].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridTwo.classList.add('player-two-win')
    }
    // Check for winner in diagonals
  else if ((cells[9].innerHTML === '🌸' && cells[13].innerHTML === '🌸' && cells[17].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridTwo.classList.add('player-one-win')
    } else if ((cells[11].innerHTML === '🌸' && cells[13].innerHTML === '🌸' && cells[15].innerHTML === '🌸')) {
      gameStatus.innerHTML = 'Player One Wins'
      gridTwo.classList.add('player-one-win')
    } else if ((cells[9].innerHTML === '🌈' && cells[13].innerHTML === '🌈' && cells[17].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridTwo.classList.add('player-two-win')
    } else if ((cells[11].innerHTML === '🌈' && cells[13].innerHTML === '🌈' && cells[15].innerHTML === '🌈')) {
      gameStatus.innerHTML = 'Player Two Wins'
      gridTwo.classList.add('player-two-win')
    }
  // Check for draw
  else if ((cells[9].innerHTML !== '' && cells[10].innerHTML !== '' && cells[11].innerHTML !== '' 
    && cells[12].innerHTML !== '' && cells[13].innerHTML !== '' && cells[14].innerHTML !== '' 
    && cells[15].innerHTML !== '' && cells[16].innerHTML !== '' && cells[17].innerHTML !== '')) {
        gameStatus.innerHTML = `It's a draw`
        gridTwo.classList.add('draw')
  }
}
  // Function to direct grid available for the next move

// GRID THREE
function handleClickThree(event) {
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
  if ((cells[18].innerHTML === '🌸' && cells[19].innerHTML === '🌸' && cells[20].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridThree.classList.add('player-one-win')
  } else if ((cells[21].innerHTML === '🌸' && cells[22].innerHTML === '🌸' && cells[23].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridThree.classList.add('player-one-win')
  } else if ((cells[24].innerHTML === '🌸' && cells[25].innerHTML === '🌸' && cells[26].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridThree.classList.add('player-one-win')
  } else if ((cells[18].innerHTML === '🌈' && cells[19].innerHTML === '🌈' && cells[20].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridThree.classList.add('player-two-win')
  } else if ((cells[21].innerHTML === '🌈' && cells[22].innerHTML === '🌈' && cells[23].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridThree.classList.add('player-two-win')
  } else if ((cells[24].innerHTML === '🌈' && cells[25].innerHTML === '🌈' && cells[26].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridThree.classList.add('player-two-win')
  }
      //  Check for winner in columns
  else if ((cells[18].innerHTML === '🌸' && cells[21].innerHTML === '🌸' && cells[24].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridThree.classList.add('player-one-win')
  } else if ((cells[19].innerHTML === '🌸' && cells[22].innerHTML === '🌸' && cells[25].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridThree.classList.add('player-one-win')
  } else if ((cells[20].innerHTML === '🌸' && cells[23].innerHTML === '🌸' && cells[26].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridThree.classList.add('player-one-win')
  } else if ((cells[18].innerHTML === '🌈' && cells[21].innerHTML === '🌈' && cells[24].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridThree.classList.add('player-two-win')
  } else if ((cells[19].innerHTML === '🌈' && cells[22].innerHTML === '🌈' && cells[25].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridThree.classList.add('player-two-win')
  } else if ((cells[20].innerHTML === '🌈' && cells[23].innerHTML === '🌈' && cells[26].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridThree.classList.add('player-two-win')
  }
      // Check for winner in diagonals
  else if ((cells[18].innerHTML === '🌸' && cells[22].innerHTML === '🌸' && cells[26].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridThree.classList.add('player-one-win')
  } else if ((cells[20].innerHTML === '🌸' && cells[22].innerHTML === '🌸' && cells[24].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridThree.classList.add('player-one-win')
  } else if ((cells[18].innerHTML === '🌈' && cells[22].innerHTML === '🌈' && cells[26].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridThree.classList.add('player-two-win')
  } else if ((cells[20].innerHTML === '🌈' && cells[22].innerHTML === '🌈' && cells[24].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridThree.classList.add('player-two-win')
  }
    // Check for draw
  else if ((cells[18].innerHTML !== '' && cells[19].innerHTML !== '' && cells[20].innerHTML !== '' 
    && cells[21].innerHTML !== '' && cells[22].innerHTML !== '' && cells[23].innerHTML !== '' 
    && cells[24].innerHTML !== '' && cells[25].innerHTML !== '' && cells[26].innerHTML !== '')) {
      gameStatus.innerHTML = `It's a draw`
      gridThree.classList.add('draw')
  }
}

// GRID FOUR
function handleClickFour(event) {
  // Turn Taking
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
  if ((cells[27].innerHTML === '🌸' && cells[28].innerHTML === '🌸' && cells[29].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFour.classList.add('player-one-win')         
  } else if ((cells[30].innerHTML === '🌸' && cells[31].innerHTML === '🌸' && cells[32].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFour.classList.add('player-one-win')
  } else if ((cells[33].innerHTML === '🌸' && cells[34].innerHTML === '🌸' && cells[35].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFour.classList.add('player-one-win')
  } else if ((cells[27].innerHTML === '🌈' && cells[28].innerHTML === '🌈' && cells[29].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFour.classList.add('player-two-win')
  } else if ((cells[30].innerHTML === '🌈' && cells[31].innerHTML === '🌈' && cells[32].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFour.classList.add('player-two-win')
  } else if ((cells[33].innerHTML === '🌈' && cells[34].innerHTML === '🌈' && cells[35].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFour.classList.add('player-two-win')
  }
          //  Check for winner in columns
  if ((cells[27].innerHTML === '🌸' && cells[30].innerHTML === '🌸' && cells[33].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFour.classList.add('player-one-win')
  } else if ((cells[28].innerHTML === '🌸' && cells[31].innerHTML === '🌸' && cells[34].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFour.classList.add('player-one-win')
  } else if ((cells[29].innerHTML === '🌸' && cells[32].innerHTML === '🌸' && cells[35].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFour.classList.add('player-one-win')
  } else if ((cells[27].innerHTML === '🌈' && cells[30].innerHTML === '🌈' && cells[33].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFour.classList.add('player-two-win')
  } else if ((cells[28].innerHTML === '🌈' && cells[31].innerHTML === '🌈' && cells[34].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFour.classList.add('player-two-win')
  } else if ((cells[29].innerHTML === '🌈' && cells[32].innerHTML === '🌈' && cells[35].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFour.classList.add('player-two-win')
  }
          // Check for winner in diagonals
  if ((cells[27].innerHTML === '🌸' && cells[31].innerHTML === '🌸' && cells[35].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFour.classList.add('player-one-win')
  } else if ((cells[29].innerHTML === '🌸' && cells[31].innerHTML === '🌸' && cells[33].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFour.classList.add('player-one-win')
  } else if ((cells[27].innerHTML === '🌈' && cells[31].innerHTML === '🌈' && cells[35].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFour.classList.add('player-two-win')
  } else if ((cells[29].innerHTML === '🌈' && cells[31].innerHTML === '🌈' && cells[33].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFour.classList.add('player-two-win')
  }
        // Check for draw
  if ((cells[27].innerHTML !== '' && cells[28].innerHTML !== '' && cells[29].innerHTML !== '' 
    && cells[30].innerHTML !== '' && cells[31].innerHTML !== '' && cells[32].innerHTML !== '' 
    && cells[33].innerHTML !== '' && cells[34].innerHTML !== '' && cells[35].innerHTML !== '')) {
      gameStatus.innerHTML = `It's a draw`
      gridFour.classList.add('draw')
  }
}
// GRID FIVE
function handleClickFive(event) {
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
  if ((cells[36].innerHTML === '🌸' && cells[37].innerHTML === '🌸' && cells[38].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFive.classList.add('player-one-win')     
  } else if ((cells[39].innerHTML === '🌸' && cells[40].innerHTML === '🌸' && cells[41].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFive.classList.add('player-one-win')
  } else if ((cells[42].innerHTML === '🌸' && cells[43].innerHTML === '🌸' && cells[44].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFive.classList.add('player-one-win')
  } else if ((cells[36].innerHTML === '🌈' && cells[37].innerHTML === '🌈' && cells[38].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFive.classList.add('player-two-win')
  } else if ((cells[39].innerHTML === '🌈' && cells[40].innerHTML === '🌈' && cells[41].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFive.classList.add('player-two-win')
  } else if ((cells[42].innerHTML === '🌈' && cells[43].innerHTML === '🌈' && cells[44].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFive.classList.add('player-two-win')
  }
        //  Check for winner in columns
  if ((cells[36].innerHTML === '🌸' && cells[39].innerHTML === '🌸' && cells[42].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFive.classList.add('player-one-win')
  } else if ((cells[37].innerHTML === '🌸' && cells[40].innerHTML === '🌸' && cells[43].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFive.classList.add('player-one-win')
  } else if ((cells[38].innerHTML === '🌸' && cells[41].innerHTML === '🌸' && cells[44].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFive.classList.add('player-one-win')
  } else if ((cells[36].innerHTML === '🌈' && cells[39].innerHTML === '🌈' && cells[42].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFive.classList.add('player-two-win')
  } else if ((cells[37].innerHTML === '🌈' && cells[40].innerHTML === '🌈' && cells[43].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFive.classList.add('player-two-win')
  } else if ((cells[38].innerHTML === '🌈' && cells[41].innerHTML === '🌈' && cells[44].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFive.classList.add('player-two-win')
  }
        // Check for winner in diagonals
  if ((cells[36].innerHTML === '🌸' && cells[40].innerHTML === '🌸' && cells[44].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFive.classList.add('player-one-win')
  } else if ((cells[38].innerHTML === '🌸' && cells[40].innerHTML === '🌸' && cells[42].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridFive.classList.add('player-one-win')
  } else if ((cells[36].innerHTML === '🌈' && cells[40].innerHTML === '🌈' && cells[44].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFive.classList.add('player-two-win')
  } else if ((cells[38].innerHTML === '🌈' && cells[40].innerHTML === '🌈' && cells[42].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridFive.classList.add('player-two-win')
  }
      // Check for draw
  if ((cells[36].innerHTML !== '' && cells[37].innerHTML !== '' && cells[38].innerHTML !== '' 
    && cells[39].innerHTML !== '' && cells[40].innerHTML !== '' && cells[41].innerHTML !== '' 
    && cells[42].innerHTML !== '' && cells[43].innerHTML !== '' && cells[44].innerHTML !== '')) {
      gameStatus.innerHTML = `It's a draw`
      gridFive.classList.add('draw')
  }
}

// GRID SIX
function handleClickSix(event) {
  // Turn Taking
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
  if ((cells[45].innerHTML === '🌸' && cells[46].innerHTML === '🌸' && cells[47].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSix.classList.add('player-one-win')       
  } else if ((cells[48].innerHTML === '🌸' && cells[49].innerHTML === '🌸' && cells[50].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSix.classList.add('player-one-win')
  } else if ((cells[51].innerHTML === '🌸' && cells[52].innerHTML === '🌸' && cells[53].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSix.classList.add('player-one-win')
  } else if ((cells[45].innerHTML === '🌈' && cells[46].innerHTML === '🌈' && cells[47].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSix.classList.add('player-two-win')
  } else if ((cells[48].innerHTML === '🌈' && cells[49].innerHTML === '🌈' && cells[50].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSix.classList.add('player-two-win')
  } else if ((cells[51].innerHTML === '🌈' && cells[52].innerHTML === '🌈' && cells[53].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSix.classList.add('player-two-win')
  }
        //  Check for winner in columns
  if ((cells[45].innerHTML === '🌸' && cells[48].innerHTML === '🌸' && cells[51].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSix.classList.add('player-one-win')
  } else if ((cells[46].innerHTML === '🌸' && cells[49].innerHTML === '🌸' && cells[52].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSix.classList.add('player-one-win')
  } else if ((cells[47].innerHTML === '🌸' && cells[50].innerHTML === '🌸' && cells[53].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSix.classList.add('player-one-win')
  } else if ((cells[45].innerHTML === '🌈' && cells[48].innerHTML === '🌈' && cells[51].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSix.classList.add('player-two-win')
  } else if ((cells[46].innerHTML === '🌈' && cells[49].innerHTML === '🌈' && cells[52].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSix.classList.add('player-two-win')
  } else if ((cells[47].innerHTML === '🌈' && cells[50].innerHTML === '🌈' && cells[53].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSix.classList.add('player-two-win')
  }
        // Check for winner in diagonals
  if ((cells[45].innerHTML === '🌸' && cells[49].innerHTML === '🌸' && cells[53].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSix.classList.add('player-one-win')
  } else if ((cells[47].innerHTML === '🌸' && cells[49].innerHTML === '🌸' && cells[51].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSix.classList.add('player-one-win')
  } else if ((cells[45].innerHTML === '🌈' && cells[49].innerHTML === '🌈' && cells[53].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSix.classList.add('player-two-win')
  } else if ((cells[47].innerHTML === '🌈' && cells[49].innerHTML === '🌈' && cells[51].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSix.classList.add('player-two-win')
  }
      // Check for draw
  if ((cells[45].innerHTML !== '' && cells[46].innerHTML !== '' && cells[47].innerHTML !== '' 
    && cells[48].innerHTML !== '' && cells[49].innerHTML !== '' && cells[50].innerHTML !== '' 
    && cells[51].innerHTML !== '' && cells[52].innerHTML !== '' && cells[53].innerHTML !== '')) {
      gameStatus.innerHTML = `It's a draw`
      gridSix.classList.add('draw')
  }
}

// GRID SEVEN
function handleClickSeven(event) {
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
  if ((cells[54].innerHTML === '🌸' && cells[55].innerHTML === '🌸' && cells[56].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSeven.classList.add('player-one-win')     
  } else if ((cells[57].innerHTML === '🌸' && cells[58].innerHTML === '🌸' && cells[59].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSeven.classList.add('player-one-win')
  } else if ((cells[60].innerHTML === '🌸' && cells[61].innerHTML === '🌸' && cells[62].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSeven.classList.add('player-one-win')
  } else if ((cells[54].innerHTML === '🌈' && cells[55].innerHTML === '🌈' && cells[56].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSeven.classList.add('player-two-win')
  } else if ((cells[57].innerHTML === '🌈' && cells[58].innerHTML === '🌈' && cells[59].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSeven.classList.add('player-two-win')
  } else if ((cells[60].innerHTML === '🌈' && cells[61].innerHTML === '🌈' && cells[62].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSeven.classList.add('player-two-win')
  }
        //  Check for winner in columns
  if ((cells[54].innerHTML === '🌸' && cells[57].innerHTML === '🌸' && cells[60].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSeven.classList.add('player-one-win')
  } else if ((cells[55].innerHTML === '🌸' && cells[58].innerHTML === '🌸' && cells[61].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSeven.classList.add('player-one-win')
  } else if ((cells[56].innerHTML === '🌸' && cells[59].innerHTML === '🌸' && cells[62].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSeven.classList.add('player-one-win')
  } else if ((cells[54].innerHTML === '🌈' && cells[57].innerHTML === '🌈' && cells[60].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSeven.classList.add('player-two-win')
  } else if ((cells[55].innerHTML === '🌈' && cells[58].innerHTML === '🌈' && cells[61].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSeven.classList.add('player-two-win')
  } else if ((cells[56].innerHTML === '🌈' && cells[59].innerHTML === '🌈' && cells[62].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSeven.classList.add('player-two-win')
  }
        // Check for winner in diagonals
  if ((cells[54].innerHTML === '🌸' && cells[58].innerHTML === '🌸' && cells[62].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSeven.classList.add('player-one-win')
  } else if ((cells[56].innerHTML === '🌸' && cells[58].innerHTML === '🌸' && cells[60].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridSeven.classList.add('player-one-win')
  } else if ((cells[54].innerHTML === '🌈' && cells[58].innerHTML === '🌈' && cells[62].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSeven.classList.add('player-two-win')
  } else if ((cells[56].innerHTML === '🌈' && cells[58].innerHTML === '🌈' && cells[60].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridSeven.classList.add('player-two-win')
  }
      // Check for draw
  if ((cells[54].innerHTML !== '' && cells[55].innerHTML !== '' && cells[56].innerHTML !== '' 
    && cells[57].innerHTML !== '' && cells[58].innerHTML !== '' && cells[59].innerHTML !== '' 
    && cells[60].innerHTML !== '' && cells[61].innerHTML !== '' && cells[62].innerHTML !== '')) {
      gameStatus.innerHTML = `It's a draw`
      gridSeven.classList.add('draw')
  }
}

// GRID EIGHT
function handleClickEight(event) {
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
  if ((cells[63].innerHTML === '🌸' && cells[64].innerHTML === '🌸' && cells[65].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridEight.classList.add('player-one-win')     
  } else if ((cells[66].innerHTML === '🌸' && cells[67].innerHTML === '🌸' && cells[68].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridEight.classList.add('player-one-win')
  } else if ((cells[69].innerHTML === '🌸' && cells[70].innerHTML === '🌸' && cells[71].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridEight.classList.add('player-one-win')
  } else if ((cells[63].innerHTML === '🌈' && cells[64].innerHTML === '🌈' && cells[65].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridEight.classList.add('player-two-win')
  } else if ((cells[66].innerHTML === '🌈' && cells[67].innerHTML === '🌈' && cells[68].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridEight.classList.add('player-two-win')
  } else if ((cells[69].innerHTML === '🌈' && cells[70].innerHTML === '🌈' && cells[71].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridEight.classList.add('player-two-win')
  }
        //  Check for winner in columns
  if ((cells[63].innerHTML === '🌸' && cells[66].innerHTML === '🌸' && cells[69].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridEight.classList.add('player-one-win')
  } else if ((cells[64].innerHTML === '🌸' && cells[67].innerHTML === '🌸' && cells[70].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridEight.classList.add('player-one-win')
  } else if ((cells[65].innerHTML === '🌸' && cells[68].innerHTML === '🌸' && cells[71].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridEight.classList.add('player-one-win')
  } else if ((cells[63].innerHTML === '🌈' && cells[66].innerHTML === '🌈' && cells[69].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridEight.classList.add('player-two-win')
  } else if ((cells[64].innerHTML === '🌈' && cells[67].innerHTML === '🌈' && cells[70].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridEight.classList.add('player-two-win')
  } else if ((cells[65].innerHTML === '🌈' && cells[68].innerHTML === '🌈' && cells[71].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridEight.classList.add('player-two-win')
  }
        // Check for winner in diagonals
  if ((cells[63].innerHTML === '🌸' && cells[67].innerHTML === '🌸' && cells[71].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridEight.classList.add('player-one-win')
  } else if ((cells[65].innerHTML === '🌸' && cells[67].innerHTML === '🌸' && cells[69].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridEight.classList.add('player-one-win')
  } else if ((cells[63].innerHTML === '🌈' && cells[67].innerHTML === '🌈' && cells[71].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridEight.classList.add('player-two-win')
  } else if ((cells[65].innerHTML === '🌈' && cells[67].innerHTML === '🌈' && cells[69].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridEight.classList.add('player-two-win')
  }
      // Check for draw
  if ((cells[63].innerHTML !== '' && cells[64].innerHTML !== '' && cells[65].innerHTML !== '' 
    && cells[66].innerHTML !== '' && cells[67].innerHTML !== '' && cells[68].innerHTML !== '' 
    && cells[69].innerHTML !== '' && cells[70].innerHTML !== '' && cells[71].innerHTML !== '')) {
      gameStatus.innerHTML = `It's a draw`
      gridEight.classList.add('draw')
  }
}

// GRID NINE
function handleClickNine(event) {
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
  if ((cells[72].innerHTML === '🌸' && cells[73].innerHTML === '🌸' && cells[74].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridNine.classList.add('player-one-win')
  } else if ((cells[75].innerHTML === '🌸' && cells[76].innerHTML === '🌸' && cells[77].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridNine.classList.add('player-one-win')
  } else if ((cells[78].innerHTML === '🌸' && cells[79].innerHTML === '🌸' && cells[80].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridNine.classList.add('player-one-win')
  } else if ((cells[72].innerHTML === '🌈' && cells[73].innerHTML === '🌈' && cells[74].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridNine.classList.add('player-two-win')
  } else if ((cells[75].innerHTML === '🌈' && cells[76].innerHTML === '🌈' && cells[77].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridNine.classList.add('player-two-win')
  } else if ((cells[78].innerHTML === '🌈' && cells[79].innerHTML === '🌈' && cells[80].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridNine.classList.add('player-two-win')
  }
        //  Check for winner in columns
  if ((cells[72].innerHTML === '🌸' && cells[75].innerHTML === '🌸' && cells[78].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridNine.classList.add('player-one-win')
  } else if ((cells[73].innerHTML === '🌸' && cells[76].innerHTML === '🌸' && cells[79].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridNine.classList.add('player-one-win')
  } else if ((cells[74].innerHTML === '🌸' && cells[77].innerHTML === '🌸' && cells[80].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridNine.classList.add('player-one-win')
  } else if ((cells[72].innerHTML === '🌈' && cells[75].innerHTML === '🌈' && cells[78].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridNine.classList.add('player-two-win')
  } else if ((cells[73].innerHTML === '🌈' && cells[76].innerHTML === '🌈' && cells[79].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridNine.classList.add('player-two-win')
  } else if ((cells[74].innerHTML === '🌈' && cells[77].innerHTML === '🌈' && cells[80].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridNine.classList.add('player-two-win')
  }
        // Check for winner in diagonals
  if ((cells[72].innerHTML === '🌸' && cells[76].innerHTML === '🌸' && cells[80].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridNine.classList.add('player-one-win')
  } else if ((cells[74].innerHTML === '🌸' && cells[76].innerHTML === '🌸' && cells[78].innerHTML === '🌸')) {
    gameStatus.innerHTML = 'Player One Wins'
    gridNine.classList.add('player-one-win')
  } else if ((cells[72].innerHTML === '🌈' && cells[76].innerHTML === '🌈' && cells[80].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridNine.classList.add('player-two-win')
  } else if ((cells[74].innerHTML === '🌈' && cells[76].innerHTML === '🌈' && cells[78].innerHTML === '🌈')) {
    gameStatus.innerHTML = 'Player Two Wins'
    gridNine.classList.add('player-two-win')
  }
      // Check for draw
  if ((cells[72].innerHTML !== '' && cells[73].innerHTML !== '' && cells[74].innerHTML !== '' 
    && cells[75].innerHTML !== '' && cells[76].innerHTML !== '' && cells[77].innerHTML !== '' 
    && cells[78].innerHTML !== '' && cells[79].innerHTML !== '' && cells[80].innerHTML !== '')) {
      gameStatus.innerHTML = `It's a draw`
      gridNine.classList.add('draw')
  }
}
    // Function to direct grid available for the next move

//  Events

gridOne.addEventListener('click', handleClickOne)
gridTwo.addEventListener('click', handleClickTwo)
gridThree.addEventListener('click', handleClickThree)
gridFour.addEventListener('click', handleClickFour)
gridFive.addEventListener('click', handleClickFive)
gridSix.addEventListener('click', handleClickSix)
gridSeven.addEventListener('click', handleClickSeven)
gridEight.addEventListener('click', handleClickEight)
gridNine.addEventListener('click', handleClickNine)


