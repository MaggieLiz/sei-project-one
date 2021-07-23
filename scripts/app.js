// Ultimate Tic Tac TouchEvent
// A play button should start the game 

// A two player game. Players alternate placing their marker in a cell in the table. The objective is to get three markers in a row in each small game. If you've gotten three mini-games in a row, the game is won. If no player can get three in a row and the cells are all filled, it's a draw.

// DOM Variables
const newGameBtn = document.querySelector('.new-game')
const gameStatus = document.querySelector('#game-status')
const mainGridContainer = document.querySelector('.main-grid')
const audio = document.querySelector('#audio')
const winnerList = document.querySelector('.winner-list')
const rulesBtn = document.querySelector('.rules-btn')
const rules = document.querySelector('#rules')

// Game Variables
const width = 3
const miniGridCellCount = width * width
const cells = []
const playerOne = '🦔'
const playerTwo = '🦋'
const mainGrid = []

let currentPlayer = playerOne
let winner = playerOne
let winners = []

// Functions
// function to use local storage to remember winner list
if (localStorage) {
  winList = JSON.parse(localStorage.getItem('winList')) || []
  console.log(winList)
  winner = document.createElement('li')
    winner.innerHTML = winList
    winnerList.insertBefore(winner, winnerList.firstChild)
}

// Function to show or hide rules
function showRules() {
  rules.classList.toggle('show-rules')
}

// function to create grid and move it to the page
function createGameGrid() {
  for (let i = 0; i < 9; i++) {
    miniGrid = document.createElement('div')
    miniGrid.setAttribute('class', 'mini-'+ i)
    miniGrid.classList.add('mini-grid', 'open')
    mainGrid.push(miniGrid)
    mainGridContainer.appendChild(miniGrid)
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div')
      cell.setAttribute('value', i)
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

const allMiniGrids = [gridOne, gridTwo, gridThree, gridFour, gridFive, gridSix, gridSeven, gridEight, gridNine]

// function to check for inactive cell
// function checkInactiveCell(event) {
  // if (event.target.classList.contains('inactive-cell')) {
  //   console.log('inactive cell clicked')
  // }
//   console.log('event.')
// }


// function to establish turn taking
function takeTurns() {
  
  if ((currentPlayer === playerOne && event.target.innerHTML === '')) {
      event.target.innerHTML = '🦔'
      gameStatus.innerHTML = 'Go, Player Two!'
      currentPlayer = playerTwo
      audio.src = './sounds/zapsplat_magic_wand_ping_001_12529.mp3'
      audio.play()
      event.target.classList.add('inactive-cell')
      allMiniGrids.forEach(miniGrid => {
        miniGrid.classList.remove('inactive-grid', 'active-grid')
  })
  } else if ((currentPlayer === playerTwo && event.target.innerHTML === '')) {
      event.target.innerHTML = '🦋'
      gameStatus.innerHTML = 'Go, Player One!'
      currentPlayer = playerOne
      audio.src = './sounds/zapsplat_magic_wand_ping_004_12532.mp3'
      audio.play()
      event.target.classList.add('inactive-cell')
      allMiniGrids.forEach(miniGrid => {
        miniGrid.classList.remove('inactive-grid', 'active-grid')
  })
  } else {
    return window.alert('invalid move')
  }
}

// function to set new game when New Game Button is pressed
function handleNewGame() {
  currentPlayer = playerOne
  cells.forEach(cell => {
    cell.innerHTML = ''
    cell.classList.remove('inactive-cell')
  })
  allMiniGrids.forEach(miniGrid => {
    miniGrid.classList.remove('inactive-grid', 'active-grid', 'closed', 'player-one-win', 'player-two-win', 'draw', 'game-end')
    miniGrid.classList.add('open')
  })
  gameStatus.innerHTML = '🦔 Go, Player One! 🦔'
}

function gameEnd() {
  allMiniGrids.forEach(miniGrid => {
    miniGrid.classList.add('game-end')
    })
}

// Function to register Player One Win
// function playerOneGameWin() {
//   gameStatus.innerHTML = '🦔🦔🦔🦔 Player One Wins! 🦔🦔🦔🦔'     
//   audio.src = './sounds/zapsplat_magic_wand_spell_appear_twinkle_003_12541.mp3'
//   audio.play()
//   function listWinner() {
//     winner = document.createElement('li')
//     winner.innerHTML = 'Player One 🦔'
//     winnerList.insertBefore(winner, winnerList.firstChild)
//     winners.push('Player One 🦔')
//   }
//   listWinner()
//   gameEnd()
// }
// // function to register Player Two win
// function playerTwoGameWin() {
//   gameStatus.innerHTML = '🦋🦋🦋🦋 Player Two Wins! 🦋🦋🦋🦋'
//   audio.src = './sounds/zapsplat_magic_wand_spell_appear_twinkle_003_12541.mp3'
//   audio.play()
//   function listWinner() {
//     winner = document.createElement('li')
//     winner.innerHTML = 'Player Two 🦋'
//     winnerList.insertBefore(winner, winnerList.firstChild)
//     winners.push('Player Two 🦋')
//   }
//   listWinner()
//   gameEnd()
// }
function playerGameWin(player) {
  const gameWinner = player === 'player one' ? '🦔 Player One' : '🦋 Player Two'
  gameStatus.innerHTML = `${gameWinner} Wins!!`
  audio.src = './sounds/zapsplat_magic_wand_spell_appear_twinkle_003_12541.mp3'
  audio.play()
  function listWinner(player) {
    winner = document.createElement('li')
    winner.innerHTML = gameWinner
    winnerList.insertBefore(winner, winnerList.firstChild)
    winners.push(gameWinner)
    if (localStorage) {
      localStorage.setItem('winList', JSON.stringify(winners))
        }
  } 
  listWinner(player)
}

// functions for win in a minigrid by player one
function playerOneGridOneWin() {
  gridOne.classList.add('player-one-win', 'closed')
  gridOne.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerOneGridTwoWin() {
  gridTwo.classList.add('player-one-win', 'closed')
  gridTwo.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerOneGridThreeWin() {
  gridThree.classList.add('player-one-win', 'closed')
  gridThree.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerOneGridFourWin() {
  gridFour.classList.add('player-one-win', 'closed')
  gridFour.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerOneGridFiveWin() {
  gridFive.classList.add('player-one-win', 'closed')
  gridFive.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerOneGridSixWin() {
  gridSix.classList.add('player-one-win', 'closed')
  gridSix.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerOneGridSevenWin() {
  gridSeven.classList.add('player-one-win', 'closed')
  gridSeven.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerOneGridEightWin() {
  gridEight.classList.add('player-one-win', 'closed')
  gridEight.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerOneGridNineWin() {
  gridNine.classList.add('player-one-win', 'closed')
  gridNine.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}

// functions for win in a minigrid by player two
function playerTwoGridOneWin() {
  gridOne.classList.add('player-two-win', 'closed')
  gridOne.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerTwoGridTwoWin() {
  gridTwo.classList.add('player-two-win', 'closed')
  gridTwo.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerTwoGridThreeWin() {
  gridThree.classList.add('player-two-win', 'closed')
  gridThree.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerTwoGridFourWin() {
  gridFour.classList.add('player-two-win', 'closed')
  gridFour.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerTwoGridFiveWin() {
  gridFive.classList.add('player-two-win', 'closed')
  gridFive.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerTwoGridSixWin() {
  gridSix.classList.add('player-two-win', 'closed')
  gridSix.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerTwoGridSevenWin() {
  gridSeven.classList.add('player-two-win', 'closed')
  gridSeven.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerTwoGridEightWin() {
  gridEight.classList.add('player-two-win', 'closed')
  gridEight.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}
function playerTwoGridNineWin() {
  gridNine.classList.add('player-two-win', 'closed')
  gridNine.classList.remove('open')
  audio.src = './sounds/zapsplat_magic_wand_whoosh_burst_002_12547.mp3'
  audio.play()
}

// Function to check for GAME end with win or draw
function gameEndCheck() {
  // Check for GAME winner in rows
  if ((gridOne.classList.contains('player-one-win') && gridTwo.classList.contains('player-one-win') &&
    gridThree.classList.contains('player-one-win'))) {
      playerGameWin('player one')
    } else if ((gridFour.classList.contains('player-one-win') && gridFive.classList.contains('player-one-win') &&
    gridSix.classList.contains('player-one-win'))) {
      playerGameWin('player one')
    } else if ((gridSeven.classList.contains('player-one-win') && gridEight.classList.contains('player-one-win') &&
    gridNine.classList.contains('player-one-win'))) {
      playerGameWin('player one')
    } else if ((gridOne.classList.contains('player-two-win') && gridTwo.classList.contains('player-two-win') &&
    gridThree.classList.contains('player-two-win'))) {
      playerGameWin('player two')
    } else if ((gridFour.classList.contains('player-two-win') && gridFive.classList.contains('player-two-win') &&
    gridSix.classList.contains('player-two-win'))) {
      playerGameWin('player two')
    } else if ((gridSeven.classList.contains('player-two-win') && gridEight.classList.contains('player-two-win') &&
    gridNine.classList.contains('player-two-win'))) {
      playerGameWin('player two')
    }
    // check for GAME winner in columns
  else if ((gridOne.classList.contains('player-one-win') && gridFour.classList.contains('player-one-win') &&
    gridSeven.classList.contains('player-one-win'))) {
      playerGameWin('player one')
    } else if ((gridTwo.classList.contains('player-one-win') && gridFive.classList.contains('player-one-win') &&
    gridEight.classList.contains('player-one-win'))) {
      playerGameWin('player one')
    } else if ((gridThree.classList.contains('player-one-win') && gridSix.classList.contains('player-one-win') &&
    gridNine.classList.contains('player-one-win'))) {
      playerGameWin('player one')
    } else if ((gridOne.classList.contains('player-two-win') && gridFour.classList.contains('player-two-win') &&
    gridSeven.classList.contains('player-two-win'))) {
      playerGameWin('player two')
    } else if ((gridTwo.classList.contains('player-two-win') && gridFive.classList.contains('player-two-win') &&
    gridEight.classList.contains('player-two-win'))) {
      playerGameWin('player two')
    } else if ((gridThree.classList.contains('player-two-win') && gridSix.classList.contains('player-two-win') &&
    gridNine.classList.contains('player-two-win'))) {
      playerGameWin('player two')    
    }
    // check for Game winner in diagonals
  else if ((gridOne.classList.contains('player-one-win') && gridFive.classList.contains('player-one-win') &&
    gridNine.classList.contains('player-one-win'))) {
      playerGameWin('player one')
    } else if ((gridThree.classList.contains('player-one-win') && gridFive.classList.contains('player-one-win') &&
    gridSeven.classList.contains('player-one-win'))) {
      playerGameWin('player one')
    } else if ((gridOne.classList.contains('player-two-win') && gridFive.classList.contains('player-two-win') &&
    gridNine.classList.contains('player-two-win'))) {
      playerGameWin('player two')
    } else if ((gridThree.classList.contains('player-two-win') && gridFive.classList.contains('player-two-win') &&
    gridSeven.classList.contains('player-two-win'))) {
      playerGameWin('player two')
  }
  // check for GAME draw
  else if ((gridOne.classList.contains('closed') && gridTwo.classList.contains('closed') &&
    gridThree.classList.contains('closed') && gridFour.classList.contains('closed') &&
    gridFive.classList.contains('closed') && gridSix.classList.contains('closed') && 
    gridSeven.classList.contains('closed') && gridEight.classList.contains('closed') && 
    gridNine.classList.contains('closed'))) {
      gameStatus.innerHTML = `Game Over. It's a draw.`
      audio.src = './sounds/zapsplat_magic_wand_spell_appear_twinkle_003_12541.mp3'
      audio.play()
      gameEnd()
  }
  // function to use local storage to maintain winner history list
}
function moveToNextGrid() {
  
  let newValue = parseFloat(event.target.getAttribute('value'))
  
  if ((newValue === 0 && gridOne.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if ((newValue === 1 && gridTwo.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if ((newValue === 2 && gridThree.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if ((newValue === 3 && gridFour.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if ((newValue === 4 && gridFive.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if ((newValue === 5 && gridSix.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if ((newValue === 6 && gridSeven.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if ((newValue === 7 && gridEight.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if ((newValue === 8 && gridNine.classList.contains('closed'))) {
    const openGrids = allMiniGrids.filter(miniGrid => {
      return miniGrid.classList.contains('open')
    })
    openGrids.forEach(openGrid => {
      openGrid.classList.add('active-grid')
    })
  } else if (newValue === 0) {
    gridOne.classList.add('active-grid')
    gridTwo.classList.add('inactive-grid')
    gridThree.classList.add('inactive-grid')
    gridFour.classList.add('inactive-grid')
    gridFive.classList.add('inactive-grid')
    gridSix.classList.add('inactive-grid')
    gridSeven.classList.add('inactive-grid')
    gridEight.classList.add('inactive-grid')
    gridNine.classList.add('inactive-grid')
  } else if (newValue === 1) {
    gridOne.classList.add('inactive-grid')
    gridTwo.classList.add('active-grid')
    gridThree.classList.add('inactive-grid')
    gridFour.classList.add('inactive-grid')
    gridFive.classList.add('inactive-grid')
    gridSix.classList.add('inactive-grid')
    gridSeven.classList.add('inactive-grid')
    gridEight.classList.add('inactive-grid')
    gridNine.classList.add('inactive-grid')
  } else if (newValue === 2) {
    gridOne.classList.add('inactive-grid')
    gridTwo.classList.add('inactive-grid')
    gridThree.classList.add('active-grid')
    gridFour.classList.add('inactive-grid')
    gridFive.classList.add('inactive-grid')
    gridSix.classList.add('inactive-grid')
    gridSeven.classList.add('inactive-grid')
    gridEight.classList.add('inactive-grid')
    gridNine.classList.add('inactive-grid')
  } else if (newValue === 3) {
    gridOne.classList.add('inactive-grid')
    gridTwo.classList.add('inactive-grid')
    gridThree.classList.add('inactive-grid')
    gridFour.classList.add('active-grid')
    gridFive.classList.add('inactive-grid')
    gridSix.classList.add('inactive-grid')
    gridSeven.classList.add('inactive-grid')
    gridEight.classList.add('inactive-grid')
    gridNine.classList.add('inactive-grid')
  }  else if (newValue === 4) {
    gridOne.classList.add('inactive-grid')
    gridTwo.classList.add('inactive-grid')
    gridThree.classList.add('inactive-grid')
    gridFour.classList.add('inactive-grid')
    gridFive.classList.add('active-grid')
    gridSix.classList.add('inactive-grid')
    gridSeven.classList.add('inactive-grid')
    gridEight.classList.add('inactive-grid')
    gridNine.classList.add('inactive-grid')
  } else if (newValue === 5) {
    gridOne.classList.add('inactive-grid')
    gridTwo.classList.add('inactive-grid')
    gridThree.classList.add('inactive-grid')
    gridFour.classList.add('inactive-grid')
    gridFive.classList.add('inactive-grid')
    gridSix.classList.add('active-grid')
    gridSeven.classList.add('inactive-grid')
    gridEight.classList.add('inactive-grid')
    gridNine.classList.add('inactive-grid')
  } else if (newValue === 6) {
    gridOne.classList.add('inactive-grid')
    gridTwo.classList.add('inactive-grid')
    gridThree.classList.add('inactive-grid')
    gridFour.classList.add('inactive-grid')
    gridFive.classList.add('inactive-grid')
    gridSix.classList.add('inactive-grid')
    gridSeven.classList.add('active-grid')
    gridEight.classList.add('inactive-grid')
    gridNine.classList.add('inactive-grid')
  } else if (newValue === 7) {
    gridOne.classList.add('inactive-grid')
    gridTwo.classList.add('inactive-grid')
    gridThree.classList.add('inactive-grid')
    gridFour.classList.add('inactive-grid')
    gridFive.classList.add('inactive-grid')
    gridSix.classList.add('inactive-grid')
    gridSeven.classList.add('inactive-grid')
    gridEight.classList.add('active-grid')
    gridNine.classList.add('inactive-grid')
  } else if (newValue === 8) {
    gridOne.classList.add('inactive-grid')
    gridTwo.classList.add('inactive-grid')
    gridThree.classList.add('inactive-grid')
    gridFour.classList.add('inactive-grid')
    gridFive.classList.add('inactive-grid')
    gridSix.classList.add('inactive-grid')
    gridSeven.classList.add('inactive-grid')
    gridEight.classList.add('inactive-grid')
    gridNine.classList.add('active-grid')
  } 
}

// GRID ONE
function handleClickOne(event) {
  takeTurns()
  // check for winner in miniGrid ROWS
  if ((cells[0].innerHTML === '🦔' && cells[1].innerHTML === '🦔' && cells[2].innerHTML === '🦔')) {
    playerOneGridOneWin()
    } else if ((cells[3].innerHTML === '🦔' && cells[4].innerHTML === '🦔' && cells[5].innerHTML === '🦔')) {
      playerOneGridOneWin()
    } else if ((cells[6].innerHTML === '🦔' && cells[7].innerHTML === '🦔' && cells[8].innerHTML === '🦔')) {
      playerOneGridOneWin()
    } else if ((cells[0].innerHTML === '🦋' && cells[1].innerHTML === '🦋' && cells[2].innerHTML === '🦋')) {
      playerTwoGridOneWin()
    } else if ((cells[3].innerHTML === '🦋' && cells[4].innerHTML === '🦋' && cells[5].innerHTML === '🦋')) {
      playerTwoGridOneWin()
    } else if ((cells[6].innerHTML === '🦋' && cells[7].innerHTML === '🦋' && cells[8].innerHTML === '🦋')) {
      playerTwoGridOneWin()
    }
    //  Check for winner in miniGrid columns
  else if ((cells[0].innerHTML === '🦔' && cells[3].innerHTML === '🦔' && cells[6].innerHTML === '🦔')) {
      playerOneGridOneWin()
    } else if ((cells[1].innerHTML === '🦔' && cells[4].innerHTML === '🦔' && cells[7].innerHTML === '🦔')) {
      playerOneGridOneWin()
    } else if ((cells[2].innerHTML === '🦔' && cells[5].innerHTML === '🦔' && cells[8].innerHTML === '🦔')) {
      playerOneGridOneWin()
    } else if ((cells[0].innerHTML === '🦋' && cells[3].innerHTML === '🦋' && cells[6].innerHTML === '🦋')) {
      playerTwoGridOneWin()
    } else if ((cells[1].innerHTML === '🦋' && cells[4].innerHTML === '🦋' && cells[7].innerHTML === '🦋')) {
      playerTwoGridOneWin()
    } else if ((cells[2].innerHTML === '🦋' && cells[5].innerHTML === '🦋' && cells[8].innerHTML === '🦋')) {
      playerTwoGridOneWin()
    }
  
    // Check for winner in miniGrid diagonals
  else if ((cells[0].innerHTML === '🦔' && cells[4].innerHTML === '🦔' && cells[8].innerHTML === '🦔')) {
    playerOneGridOneWin()
    } else if ((cells[2].innerHTML === '🦔' && cells[4].innerHTML === '🦔' && cells[6].innerHTML === '🦔')) {
      playerOneGridOneWin()
    } else if ((cells[0].innerHTML === '🦋' && cells[4].innerHTML === '🦋' && cells[8].innerHTML === '🦋')) {
      playerTwoGridOneWin()
    } else if ((cells[2].innerHTML === '🦋' && cells[4].innerHTML === '🦋' && cells[6].innerHTML === '🦋')) {
      playerTwoGridOneWin()
    }
  // Check for miniGrid draw
  else if ((cells[0].innerHTML !== '' && cells[1].innerHTML !== '' && cells[2].innerHTML !== '' 
    && cells[3].innerHTML !== '' && cells[4].innerHTML !== '' && cells[5].innerHTML !== '' 
    && cells[6].innerHTML !== '' && cells[7].innerHTML !== '' && cells[8].innerHTML !== '')) {
        gridOne.classList.add('draw', 'closed')
        gridOne.classList.remove('open')
      }
  gameEndCheck()
  moveToNextGrid()
}



// GRID TWO
function handleClickTwo(event) {
  takeTurns()
  // check for winner in ROWS
  if ((cells[9].innerHTML === '🦔' && cells[10].innerHTML === '🦔' && cells[11].innerHTML === '🦔')) {
    playerOneGridTwoWin()  
    } else if ((cells[12].innerHTML === '🦔' && cells[13].innerHTML === '🦔' && cells[14].innerHTML === '🦔')) {
      playerOneGridTwoWin()
    } else if ((cells[15].innerHTML === '🦔' && cells[16].innerHTML === '🦔' && cells[17].innerHTML === '🦔')) {
      playerOneGridTwoWin()
    } else if ((cells[9].innerHTML === '🦋' && cells[10].innerHTML === '🦋' && cells[11].innerHTML === '🦋')) {
      playerTwoGridTwoWin()
    } else if ((cells[12].innerHTML === '🦋' && cells[13].innerHTML === '🦋' && cells[14].innerHTML === '🦋')) {
      playerTwoGridTwoWin()
    } else if ((cells[15].innerHTML === '🦋' && cells[16].innerHTML === '🦋' && cells[17].innerHTML === '🦋')) {
      playerTwoGridTwoWin()
    }
    //  Check for winner in columns
  if ((cells[9].innerHTML === '🦔' && cells[12].innerHTML === '🦔' && cells[15].innerHTML === '🦔')) {
    playerOneGridTwoWin()
    } else if ((cells[10].innerHTML === '🦔' && cells[13].innerHTML === '🦔' && cells[16].innerHTML === '🦔')) {
      playerOneGridTwoWin()
    } else if ((cells[11].innerHTML === '🦔' && cells[14].innerHTML === '🦔' && cells[17].innerHTML === '🦔')) {
      playerOneGridTwoWin()
    } else if ((cells[9].innerHTML === '🦋' && cells[12].innerHTML === '🦋' && cells[15].innerHTML === '🦋')) {
      playerTwoGridTwoWin()
    } else if ((cells[10].innerHTML === '🦋' && cells[13].innerHTML === '🦋' && cells[16].innerHTML === '🦋')) {
      playerTwoGridTwoWin()
    } else if ((cells[11].innerHTML === '🦋' && cells[14].innerHTML === '🦋' && cells[17].innerHTML === '🦋')) {
      playerTwoGridTwoWin()
    }
    // Check for winner in diagonals
  else if ((cells[9].innerHTML === '🦔' && cells[13].innerHTML === '🦔' && cells[17].innerHTML === '🦔')) {
    playerOneGridTwoWin()
    } else if ((cells[11].innerHTML === '🦔' && cells[13].innerHTML === '🦔' && cells[15].innerHTML === '🦔')) {
      playerOneGridTwoWin()
    } else if ((cells[9].innerHTML === '🦋' && cells[13].innerHTML === '🦋' && cells[17].innerHTML === '🦋')) {
      playerTwoGridTwoWin()
    } else if ((cells[11].innerHTML === '🦋' && cells[13].innerHTML === '🦋' && cells[15].innerHTML === '🦋')) {
      playerTwoGridTwoWin()
    }
  // Check for draw
  else if ((cells[9].innerHTML !== '' && cells[10].innerHTML !== '' && cells[11].innerHTML !== '' 
    && cells[12].innerHTML !== '' && cells[13].innerHTML !== '' && cells[14].innerHTML !== '' 
    && cells[15].innerHTML !== '' && cells[16].innerHTML !== '' && cells[17].innerHTML !== '')) {
        gridTwo.classList.add('draw', 'closed')
        gridTwo.classList.remove('open')
  }
  gameEndCheck()
  moveToNextGrid()
}
  
// GRID THREE
function handleClickThree(event) {
  takeTurns()
    // check for winner in ROWS
  if ((cells[18].innerHTML === '🦔' && cells[19].innerHTML === '🦔' && cells[20].innerHTML === '🦔')) {
    playerOneGridThreeWin()
  } else if ((cells[21].innerHTML === '🦔' && cells[22].innerHTML === '🦔' && cells[23].innerHTML === '🦔')) {
    playerOneGridThreeWin()
  } else if ((cells[24].innerHTML === '🦔' && cells[25].innerHTML === '🦔' && cells[26].innerHTML === '🦔')) {
    playerOneGridThreeWin()
  } else if ((cells[18].innerHTML === '🦋' && cells[19].innerHTML === '🦋' && cells[20].innerHTML === '🦋')) {
    playerTwoGridThreeWin()
  } else if ((cells[21].innerHTML === '🦋' && cells[22].innerHTML === '🦋' && cells[23].innerHTML === '🦋')) {
    playerTwoGridThreeWin()
  } else if ((cells[24].innerHTML === '🦋' && cells[25].innerHTML === '🦋' && cells[26].innerHTML === '🦋')) {
    playerTwoGridThreeWin()
  }
      //  Check for winner in columns
  else if ((cells[18].innerHTML === '🦔' && cells[21].innerHTML === '🦔' && cells[24].innerHTML === '🦔')) {
    playerOneGridThreeWin()
  } else if ((cells[19].innerHTML === '🦔' && cells[22].innerHTML === '🦔' && cells[25].innerHTML === '🦔')) {
    playerOneGridThreeWin()
  } else if ((cells[20].innerHTML === '🦔' && cells[23].innerHTML === '🦔' && cells[26].innerHTML === '🦔')) {
    playerOneGridThreeWin()
  } else if ((cells[18].innerHTML === '🦋' && cells[21].innerHTML === '🦋' && cells[24].innerHTML === '🦋')) {
    playerTwoGridThreeWin()
  } else if ((cells[19].innerHTML === '🦋' && cells[22].innerHTML === '🦋' && cells[25].innerHTML === '🦋')) {
    playerTwoGridThreeWin()
  } else if ((cells[20].innerHTML === '🦋' && cells[23].innerHTML === '🦋' && cells[26].innerHTML === '🦋')) {
    playerTwoGridThreeWin()
  }
      // Check for winner in diagonals
  else if ((cells[18].innerHTML === '🦔' && cells[22].innerHTML === '🦔' && cells[26].innerHTML === '🦔')) {
    playerOneGridThreeWin()
  } else if ((cells[20].innerHTML === '🦔' && cells[22].innerHTML === '🦔' && cells[24].innerHTML === '🦔')) {
    playerOneGridThreeWin()
  } else if ((cells[18].innerHTML === '🦋' && cells[22].innerHTML === '🦋' && cells[26].innerHTML === '🦋')) {
    playerTwoGridThreeWin()
  } else if ((cells[20].innerHTML === '🦋' && cells[22].innerHTML === '🦋' && cells[24].innerHTML === '🦋')) {
    playerTwoGridThreeWin()
  }
    // Check for draw
  else if ((cells[18].innerHTML !== '' && cells[19].innerHTML !== '' && cells[20].innerHTML !== '' 
    && cells[21].innerHTML !== '' && cells[22].innerHTML !== '' && cells[23].innerHTML !== '' 
    && cells[24].innerHTML !== '' && cells[25].innerHTML !== '' && cells[26].innerHTML !== '')) {
      gridThree.classList.add('draw', 'closed')
      gridThree.classList.remove('open')
  }
// Function to check for GAME winner 
  gameEndCheck()
  moveToNextGrid()
}

// GRID FOUR
function handleClickFour(event) {
  takeTurns()
        // check for winner in ROWS
  if ((cells[27].innerHTML === '🦔' && cells[28].innerHTML === '🦔' && cells[29].innerHTML === '🦔')) {
    playerOneGridFourWin()
  } else if ((cells[30].innerHTML === '🦔' && cells[31].innerHTML === '🦔' && cells[32].innerHTML === '🦔')) {
    playerOneGridFourWin()
  } else if ((cells[33].innerHTML === '🦔' && cells[34].innerHTML === '🦔' && cells[35].innerHTML === '🦔')) {
    playerOneGridFourWin()
  } else if ((cells[27].innerHTML === '🦋' && cells[28].innerHTML === '🦋' && cells[29].innerHTML === '🦋')) {
    playerTwoGridFourWin()
  } else if ((cells[30].innerHTML === '🦋' && cells[31].innerHTML === '🦋' && cells[32].innerHTML === '🦋')) {
    playerTwoGridFourWin()
  } else if ((cells[33].innerHTML === '🦋' && cells[34].innerHTML === '🦋' && cells[35].innerHTML === '🦋')) {
    playerTwoGridFourWin()
  }
          //  Check for winner in columns
  if ((cells[27].innerHTML === '🦔' && cells[30].innerHTML === '🦔' && cells[33].innerHTML === '🦔')) {
    playerOneGridFourWin()
  } else if ((cells[28].innerHTML === '🦔' && cells[31].innerHTML === '🦔' && cells[34].innerHTML === '🦔')) {
    playerOneGridFourWin()
  } else if ((cells[29].innerHTML === '🦔' && cells[32].innerHTML === '🦔' && cells[35].innerHTML === '🦔')) {
    playerOneGridFourWin()
  } else if ((cells[27].innerHTML === '🦋' && cells[30].innerHTML === '🦋' && cells[33].innerHTML === '🦋')) {
    playerTwoGridFourWin()
  } else if ((cells[28].innerHTML === '🦋' && cells[31].innerHTML === '🦋' && cells[34].innerHTML === '🦋')) {
    playerTwoGridFourWin()
  } else if ((cells[29].innerHTML === '🦋' && cells[32].innerHTML === '🦋' && cells[35].innerHTML === '🦋')) {
    playerTwoGridFourWin()
  }
          // Check for winner in diagonals
  if ((cells[27].innerHTML === '🦔' && cells[31].innerHTML === '🦔' && cells[35].innerHTML === '🦔')) {
    playerOneGridFourWin()
  } else if ((cells[29].innerHTML === '🦔' && cells[31].innerHTML === '🦔' && cells[33].innerHTML === '🦔')) {
    playerOneGridFourWin()
  } else if ((cells[27].innerHTML === '🦋' && cells[31].innerHTML === '🦋' && cells[35].innerHTML === '🦋')) {
    playerTwoGridFourWin()
  } else if ((cells[29].innerHTML === '🦋' && cells[31].innerHTML === '🦋' && cells[33].innerHTML === '🦋')) {
    playerTwoGridFourWin()
  }
        // Check for draw
  if ((cells[27].innerHTML !== '' && cells[28].innerHTML !== '' && cells[29].innerHTML !== '' 
    && cells[30].innerHTML !== '' && cells[31].innerHTML !== '' && cells[32].innerHTML !== '' 
    && cells[33].innerHTML !== '' && cells[34].innerHTML !== '' && cells[35].innerHTML !== '')) {
      gridFour.classList.add('draw', 'closed')
      gridFour.classList.remove('open')
  }
  gameEndCheck()
  moveToNextGrid()
}

// GRID FIVE
function handleClickFive(event) {
  takeTurns()
      // check for winner in ROWS
  if ((cells[36].innerHTML === '🦔' && cells[37].innerHTML === '🦔' && cells[38].innerHTML === '🦔')) {
    playerOneGridFiveWin()   
  } else if ((cells[39].innerHTML === '🦔' && cells[40].innerHTML === '🦔' && cells[41].innerHTML === '🦔')) {
    playerOneGridFiveWin()    
  } else if ((cells[42].innerHTML === '🦔' && cells[43].innerHTML === '🦔' && cells[44].innerHTML === '🦔')) {
    playerOneGridFiveWin()    
  } else if ((cells[36].innerHTML === '🦋' && cells[37].innerHTML === '🦋' && cells[38].innerHTML === '🦋')) {
    playerTwoGridFiveWin()  
  } else if ((cells[39].innerHTML === '🦋' && cells[40].innerHTML === '🦋' && cells[41].innerHTML === '🦋')) {
    playerTwoGridFiveWin()  
  } else if ((cells[42].innerHTML === '🦋' && cells[43].innerHTML === '🦋' && cells[44].innerHTML === '🦋')) {
    playerTwoGridFiveWin()
  }
        //  Check for winner in columns
  if ((cells[36].innerHTML === '🦔' && cells[39].innerHTML === '🦔' && cells[42].innerHTML === '🦔')) {
    playerOneGridFiveWin()     
  } else if ((cells[37].innerHTML === '🦔' && cells[40].innerHTML === '🦔' && cells[43].innerHTML === '🦔')) {
    playerOneGridFiveWin()     
  } else if ((cells[38].innerHTML === '🦔' && cells[41].innerHTML === '🦔' && cells[44].innerHTML === '🦔')) {
    playerOneGridFiveWin()    
  } else if ((cells[36].innerHTML === '🦋' && cells[39].innerHTML === '🦋' && cells[42].innerHTML === '🦋')) {
    playerTwoGridFiveWin()  
  } else if ((cells[37].innerHTML === '🦋' && cells[40].innerHTML === '🦋' && cells[43].innerHTML === '🦋')) {
    playerTwoGridFiveWin() 
  } else if ((cells[38].innerHTML === '🦋' && cells[41].innerHTML === '🦋' && cells[44].innerHTML === '🦋')) {
    playerTwoGridFiveWin()  
  }
        // Check for winner in diagonals
  if ((cells[36].innerHTML === '🦔' && cells[40].innerHTML === '🦔' && cells[44].innerHTML === '🦔')) {
    playerOneGridFiveWin()     
  } else if ((cells[38].innerHTML === '🦔' && cells[40].innerHTML === '🦔' && cells[42].innerHTML === '🦔')) {
    playerOneGridFiveWin()     
  } else if ((cells[36].innerHTML === '🦋' && cells[40].innerHTML === '🦋' && cells[44].innerHTML === '🦋')) {
    playerTwoGridFiveWin()  
  } else if ((cells[38].innerHTML === '🦋' && cells[40].innerHTML === '🦋' && cells[42].innerHTML === '🦋')) {
    playerTwoGridFiveWin() 
  }
      // Check for draw
  if ((cells[36].innerHTML !== '' && cells[37].innerHTML !== '' && cells[38].innerHTML !== '' 
    && cells[39].innerHTML !== '' && cells[40].innerHTML !== '' && cells[41].innerHTML !== '' 
    && cells[42].innerHTML !== '' && cells[43].innerHTML !== '' && cells[44].innerHTML !== '')) {
      gridFive.classList.add('draw', 'closed')
      gridFive.classList.remove('open')  
  }
  gameEndCheck()
  moveToNextGrid()
}

// GRID SIX
function handleClickSix(event) {
  takeTurns()
      // check for winner in ROWS
  if ((cells[45].innerHTML === '🦔' && cells[46].innerHTML === '🦔' && cells[47].innerHTML === '🦔')) {
    playerOneGridSixWin()   
  } else if ((cells[48].innerHTML === '🦔' && cells[49].innerHTML === '🦔' && cells[50].innerHTML === '🦔')) {
    playerOneGridSixWin()   
  } else if ((cells[51].innerHTML === '🦔' && cells[52].innerHTML === '🦔' && cells[53].innerHTML === '🦔')) {
    playerOneGridSixWin() 
  } else if ((cells[45].innerHTML === '🦋' && cells[46].innerHTML === '🦋' && cells[47].innerHTML === '🦋')) {
    playerTwoGridSixWin() 
  } else if ((cells[48].innerHTML === '🦋' && cells[49].innerHTML === '🦋' && cells[50].innerHTML === '🦋')) {
    playerTwoGridSixWin()
  } else if ((cells[51].innerHTML === '🦋' && cells[52].innerHTML === '🦋' && cells[53].innerHTML === '🦋')) {
    playerTwoGridSixWin()
  }
        //  Check for winner in columns
  if ((cells[45].innerHTML === '🦔' && cells[48].innerHTML === '🦔' && cells[51].innerHTML === '🦔')) {
    playerOneGridSixWin() 
  } else if ((cells[46].innerHTML === '🦔' && cells[49].innerHTML === '🦔' && cells[52].innerHTML === '🦔')) {
    playerOneGridSixWin() 
  } else if ((cells[47].innerHTML === '🦔' && cells[50].innerHTML === '🦔' && cells[53].innerHTML === '🦔')) {
    playerOneGridSixWin()  
  } else if ((cells[45].innerHTML === '🦋' && cells[48].innerHTML === '🦋' && cells[51].innerHTML === '🦋')) {
    playerTwoGridSixWin() 
  } else if ((cells[46].innerHTML === '🦋' && cells[49].innerHTML === '🦋' && cells[52].innerHTML === '🦋')) {
    playerTwoGridSixWin()
  } else if ((cells[47].innerHTML === '🦋' && cells[50].innerHTML === '🦋' && cells[53].innerHTML === '🦋')) {
    playerTwoGridSixWin() 
  }
        // Check for winner in diagonals
  if ((cells[45].innerHTML === '🦔' && cells[49].innerHTML === '🦔' && cells[53].innerHTML === '🦔')) {
    playerOneGridSixWin() 
  } else if ((cells[47].innerHTML === '🦔' && cells[49].innerHTML === '🦔' && cells[51].innerHTML === '🦔')) {
    playerOneGridSixWin() 
  } else if ((cells[45].innerHTML === '🦋' && cells[49].innerHTML === '🦋' && cells[53].innerHTML === '🦋')) {
    playerTwoGridSixWin() 
  } else if ((cells[47].innerHTML === '🦋' && cells[49].innerHTML === '🦋' && cells[51].innerHTML === '🦋')) {
    playerTwoGridSixWin() 
  }
      // Check for draw
  if ((cells[45].innerHTML !== '' && cells[46].innerHTML !== '' && cells[47].innerHTML !== '' 
    && cells[48].innerHTML !== '' && cells[49].innerHTML !== '' && cells[50].innerHTML !== '' 
    && cells[51].innerHTML !== '' && cells[52].innerHTML !== '' && cells[53].innerHTML !== '')) {
      gridSix.classList.add('draw', 'closed')
      gridSix.classList.remove('open') 
  }
  gameEndCheck()
  moveToNextGrid()
}

// GRID SEVEN
function handleClickSeven(event) {
  takeTurns()
      // check for winner in ROWS
  if ((cells[54].innerHTML === '🦔' && cells[55].innerHTML === '🦔' && cells[56].innerHTML === '🦔')) {
    playerOneGridSevenWin()
  } else if ((cells[57].innerHTML === '🦔' && cells[58].innerHTML === '🦔' && cells[59].innerHTML === '🦔')) {
    playerOneGridSevenWin()
  } else if ((cells[60].innerHTML === '🦔' && cells[61].innerHTML === '🦔' && cells[62].innerHTML === '🦔')) {
    playerOneGridSevenWin()
  } else if ((cells[54].innerHTML === '🦋' && cells[55].innerHTML === '🦋' && cells[56].innerHTML === '🦋')) {
    playerTwoGridSevenWin() 
  } else if ((cells[57].innerHTML === '🦋' && cells[58].innerHTML === '🦋' && cells[59].innerHTML === '🦋')) {
    playerTwoGridSevenWin()
  } else if ((cells[60].innerHTML === '🦋' && cells[61].innerHTML === '🦋' && cells[62].innerHTML === '🦋')) {
    playerTwoGridSevenWin() 
  }
        //  Check for winner in columns
  if ((cells[54].innerHTML === '🦔' && cells[57].innerHTML === '🦔' && cells[60].innerHTML === '🦔')) {
    playerOneGridSevenWin()
  } else if ((cells[55].innerHTML === '🦔' && cells[58].innerHTML === '🦔' && cells[61].innerHTML === '🦔')) {
    playerOneGridSevenWin()
  } else if ((cells[56].innerHTML === '🦔' && cells[59].innerHTML === '🦔' && cells[62].innerHTML === '🦔')) {
    playerOneGridSevenWin()
  } else if ((cells[54].innerHTML === '🦋' && cells[57].innerHTML === '🦋' && cells[60].innerHTML === '🦋')) {
    playerTwoGridSevenWin() 
  } else if ((cells[55].innerHTML === '🦋' && cells[58].innerHTML === '🦋' && cells[61].innerHTML === '🦋')) {
    playerTwoGridSevenWin() 
  } else if ((cells[56].innerHTML === '🦋' && cells[59].innerHTML === '🦋' && cells[62].innerHTML === '🦋')) {
    playerTwoGridSevenWin() 
  }
        // Check for winner in diagonals
  if ((cells[54].innerHTML === '🦔' && cells[58].innerHTML === '🦔' && cells[62].innerHTML === '🦔')) {
    playerOneGridSevenWin()
  } else if ((cells[56].innerHTML === '🦔' && cells[58].innerHTML === '🦔' && cells[60].innerHTML === '🦔')) {
    playerOneGridSevenWin()
  } else if ((cells[54].innerHTML === '🦋' && cells[58].innerHTML === '🦋' && cells[62].innerHTML === '🦋')) {
    playerTwoGridSevenWin()
  } else if ((cells[56].innerHTML === '🦋' && cells[58].innerHTML === '🦋' && cells[60].innerHTML === '🦋')) {
    playerTwoGridSevenWin() 
  }
      // Check for draw
  if ((cells[54].innerHTML !== '' && cells[55].innerHTML !== '' && cells[56].innerHTML !== '' 
    && cells[57].innerHTML !== '' && cells[58].innerHTML !== '' && cells[59].innerHTML !== '' 
    && cells[60].innerHTML !== '' && cells[61].innerHTML !== '' && cells[62].innerHTML !== '')) {
      gridSeven.classList.add('draw', 'closed')
      gridSeven.classList.remove('open') 
  }
  gameEndCheck()
  moveToNextGrid()
}

// GRID EIGHT
function handleClickEight(event) {
  takeTurns()
      // check for winner in ROWS
  if ((cells[63].innerHTML === '🦔' && cells[64].innerHTML === '🦔' && cells[65].innerHTML === '🦔')) {
    playerOneGridEightWin()    
  } else if ((cells[66].innerHTML === '🦔' && cells[67].innerHTML === '🦔' && cells[68].innerHTML === '🦔')) {
    playerOneGridEightWin()   
  } else if ((cells[69].innerHTML === '🦔' && cells[70].innerHTML === '🦔' && cells[71].innerHTML === '🦔')) {
    playerOneGridEightWin()   
  } else if ((cells[63].innerHTML === '🦋' && cells[64].innerHTML === '🦋' && cells[65].innerHTML === '🦋')) {
    playerTwoGridEightWin()    
  } else if ((cells[66].innerHTML === '🦋' && cells[67].innerHTML === '🦋' && cells[68].innerHTML === '🦋')) {
    playerTwoGridEightWin()    
  } else if ((cells[69].innerHTML === '🦋' && cells[70].innerHTML === '🦋' && cells[71].innerHTML === '🦋')) {
    playerTwoGridEightWin()    
  }
        //  Check for winner in columns
  if ((cells[63].innerHTML === '🦔' && cells[66].innerHTML === '🦔' && cells[69].innerHTML === '🦔')) {
    playerOneGridEightWin()   
  } else if ((cells[64].innerHTML === '🦔' && cells[67].innerHTML === '🦔' && cells[70].innerHTML === '🦔')) {
    playerOneGridEightWin()   
  } else if ((cells[65].innerHTML === '🦔' && cells[68].innerHTML === '🦔' && cells[71].innerHTML === '🦔')) {
    playerOneGridEightWin()   
  } else if ((cells[63].innerHTML === '🦋' && cells[66].innerHTML === '🦋' && cells[69].innerHTML === '🦋')) {
    playerTwoGridEightWin()    
  } else if ((cells[64].innerHTML === '🦋' && cells[67].innerHTML === '🦋' && cells[70].innerHTML === '🦋')) {
    playerTwoGridEightWin()    
  } else if ((cells[65].innerHTML === '🦋' && cells[68].innerHTML === '🦋' && cells[71].innerHTML === '🦋')) {
    playerTwoGridEightWin()   
  }
        // Check for winner in diagonals
  if ((cells[63].innerHTML === '🦔' && cells[67].innerHTML === '🦔' && cells[71].innerHTML === '🦔')) {
    playerOneGridEightWin()   
  } else if ((cells[65].innerHTML === '🦔' && cells[67].innerHTML === '🦔' && cells[69].innerHTML === '🦔')) {
    playerOneGridEightWin()   
  } else if ((cells[63].innerHTML === '🦋' && cells[67].innerHTML === '🦋' && cells[71].innerHTML === '🦋')) {
    playerTwoGridEightWin()   
  } else if ((cells[65].innerHTML === '🦋' && cells[67].innerHTML === '🦋' && cells[69].innerHTML === '🦋')) {
    playerTwoGridEightWin()   
  }
      // Check for draw
  if ((cells[63].innerHTML !== '' && cells[64].innerHTML !== '' && cells[65].innerHTML !== '' 
    && cells[66].innerHTML !== '' && cells[67].innerHTML !== '' && cells[68].innerHTML !== '' 
    && cells[69].innerHTML !== '' && cells[70].innerHTML !== '' && cells[71].innerHTML !== '')) {
      gridEight.classList.add('draw', 'closed')
      gridEight.classList.remove('open')    
  }
  gameEndCheck()
  moveToNextGrid()
}

// GRID NINE
function handleClickNine(event) {
  takeTurns()
      // check for winner in ROWS
  if ((cells[72].innerHTML === '🦔' && cells[73].innerHTML === '🦔' && cells[74].innerHTML === '🦔')) {
    playerOneGridNineWin()   
  } else if ((cells[75].innerHTML === '🦔' && cells[76].innerHTML === '🦔' && cells[77].innerHTML === '🦔')) {
    playerOneGridNineWin()  
  } else if ((cells[78].innerHTML === '🦔' && cells[79].innerHTML === '🦔' && cells[80].innerHTML === '🦔')) {
    playerOneGridNineWin() 
  } else if ((cells[72].innerHTML === '🦋' && cells[73].innerHTML === '🦋' && cells[74].innerHTML === '🦋')) {
    playerTwoGridNineWin()
  } else if ((cells[75].innerHTML === '🦋' && cells[76].innerHTML === '🦋' && cells[77].innerHTML === '🦋')) {
    playerTwoGridNineWin()
  } else if ((cells[78].innerHTML === '🦋' && cells[79].innerHTML === '🦋' && cells[80].innerHTML === '🦋')) {
    playerTwoGridNineWin()
  }
        //  Check for winner in columns
  if ((cells[72].innerHTML === '🦔' && cells[75].innerHTML === '🦔' && cells[78].innerHTML === '🦔')) {
    playerOneGridNineWin() 
  } else if ((cells[73].innerHTML === '🦔' && cells[76].innerHTML === '🦔' && cells[79].innerHTML === '🦔')) {
    playerOneGridNineWin()  
  } else if ((cells[74].innerHTML === '🦔' && cells[77].innerHTML === '🦔' && cells[80].innerHTML === '🦔')) {
    playerOneGridNineWin() 
  } else if ((cells[72].innerHTML === '🦋' && cells[75].innerHTML === '🦋' && cells[78].innerHTML === '🦋')) {
    playerTwoGridNineWin()
  } else if ((cells[73].innerHTML === '🦋' && cells[76].innerHTML === '🦋' && cells[79].innerHTML === '🦋')) {
    playerTwoGridNineWin()
  } else if ((cells[74].innerHTML === '🦋' && cells[77].innerHTML === '🦋' && cells[80].innerHTML === '🦋')) {
    playerTwoGridNineWin()
  }
        // Check for winner in diagonals
  if ((cells[72].innerHTML === '🦔' && cells[76].innerHTML === '🦔' && cells[80].innerHTML === '🦔')) {
    playerOneGridNineWin() 
  } else if ((cells[74].innerHTML === '🦔' && cells[76].innerHTML === '🦔' && cells[78].innerHTML === '🦔')) {
    playerOneGridNineWin()  
  } else if ((cells[72].innerHTML === '🦋' && cells[76].innerHTML === '🦋' && cells[80].innerHTML === '🦋')) {
    playerTwoGridNineWin()
  } else if ((cells[74].innerHTML === '🦋' && cells[76].innerHTML === '🦋' && cells[78].innerHTML === '🦋')) {
    playerTwoGridNineWin()
  }
      // Check for draw
  if ((cells[72].innerHTML !== '' && cells[73].innerHTML !== '' && cells[74].innerHTML !== '' 
    && cells[75].innerHTML !== '' && cells[76].innerHTML !== '' && cells[77].innerHTML !== '' 
    && cells[78].innerHTML !== '' && cells[79].innerHTML !== '' && cells[80].innerHTML !== '')) {
      gridNine.classList.add('draw', 'closed')
      gridNine.classList.remove('open')
  }
  gameEndCheck()
  moveToNextGrid()
}

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

newGameBtn.addEventListener('click', handleNewGame)
rulesBtn.addEventListener('click', showRules)

