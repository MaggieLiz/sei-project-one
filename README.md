# sei-project-one
SEI Project One
Ultimate Tic-Tac-Toe by Maggie Ward

Overview

This was my first project as part of the Software Engineering Immersive program at General Assembly. We were tasked with choosing a game from a curated list and building a version of that game. Ultimate Tic-Tac-Toe is a twist on the classic children's game. Instead of game play in one 3x3 grid, you play in nine 3x3 grids with each turn determining the next player's grid options.

![](https://lh5.googleusercontent.com/Sdpb98eOtuwPYtHIO7r7bfSrQ8zQgCl9jhxkoUkY99BpXwQNRGpBo4pGtU7jtwBRufAEvXf40NaWrR70C1ZpROgjlymSQxlw49yHu6DyV1114CcZ2FtCINB3R9sHovnfgcHOeeGA=s0)

In the progress of the game, when player 2 places their butterfly token on the bottom-middle grid space it forces player 1 to now play in the bottom-middle grid.

![](https://lh5.googleusercontent.com/Eu4ZxEczZJADWi5X8X2B6CcwaYllp751AWjd0P-JaiZ5NlAZImCd9zGrRt3Tli5IMWUc-iSCsAGeHyG-UkMEW5aQrIQIvhI_H-9c86xk888-08TUrHm-D2t7y-wnL4Nea1RSIj-Y=s0)

When a grid is either won by a player or results in a draw, that grid is closed. The game ends when a player has won three grids in a line or there is an overall draw of the large grid.

Deployment

The game has been deployed with GitHub Pages and is available [here](https://maggieliz.github.io/sei-project-one/).

Brief

The challenge was to build a JavaScript grid game in one week. I was required to build a game that is playable for two players on the same device, taking turns to make their moves. I needed to display the winner when the game was over. Stretch goals were to make the game design responsive and have a single layer mode with the computer attempting reasonable moves.

Technologies Used

-   HTML5

-   CSS3   

-   JavaScript

-   GitHub

Process

Planning

I began the planning stage with a wireframe for the page itself and by thinking through my strategy for building the game. I planned to first make a typical tic-tac-toe game that functioned as it ought with determining a win or draw. Then I planned to adapt that original game into a multi-game.

The Build

I used a for-loop to create the initial grid and its cells. I added turn-taking and then logic to check for a win or draw. Once this game was functioning as expected I expanded the for-loop to create nine grids with nine cells each. Now I needed to write controls to determine where a player could place their next token. Much of this logic was fairly repetitive and likely presents an opportunity to refactor.

![](https://lh5.googleusercontent.com/uMHoDOPc3pKsl8aRPPNeQnjXhexJ2tisZ1FAe3eOhObhYTtFKRXlRI0LljL1AGfhTP8L1iY29_f7dxFuLe4QIIr-0fYLD02K8fyCW_fmdOYEFNTsfOyFsNxsGIHzfnTl27LDh7DO=s0)

I used CSS classes to force the game action. For example, depending on the cell played in a given grid the corresponding grid would receive an "open" class and the other grids would have a class of "closed." The "closed" class includes "pointer-events: none" to prevent players from trying to place a token in a closed grid.![](https://lh5.googleusercontent.com/XJZVOAeG1kZq_FFQY4FfNhL-D69xAdMVmkmds_OWK5RCT5c05rmPk_Vp9p3ToFd0vOZIxy9UYhENGnZWTY0n32kx1WL5RAwnHogDud2e0n2bpQ4mI3vTqjj9v0qkexVUtqUy4JD7=s0)

I added logic to find win/draw conditions in each grid and in the game as a whole. This code was again very repetitive and probably is another opportunity for major refactoring.

![](https://lh5.googleusercontent.com/PX36pXyBiSIlSD-vfafRtWvCUP9hu7pk68E-JYzvB59rTrqpaVO45ZozcXEVzg-V8_gdhVpVgsCffCa6wsEln3e1MIUe6OxPiZkoRdoz2gABn6r_Z7I9aj28vQT0R23M9FS2CnpX=s0)

This game easily lends itself to play on a smaller screen compared to many of the other grid-game options because it uses pointer events instead of arrow-key play. So, I made the game design responsive and it can be played on phones in addition to larger screen displays.

Known Bugs

When the game is over, due to a win or draw, the game grid has a "game-end" class applied to each grid that should prevent players from placing another token. This stopped working correctly after I resolved the problem of players clicking on a cell that already had a token.

I also was not able to get the local storage to hold more than one winner at a time.

Challenges

Implementing local storage was a struggle. I had a difficult time getting the information I wanted to print to the screen and ended up having to settle for only storing the most recent winner. I would like to be able to update local storage to return an array of winners.

There was a bug with a player attempting to place a token in a cell that was already occupied. I attempted unsuccessfully to solve this by applying classes to the occupied cells. I would work at it and then set it aside to work on other problems, returning to try and solve it again. Eventually, I asked for help and worked through it with a TA who helped me to find a solution. We settled on the final "} else {" shown below that returned a window alert to the player prompting them to choose an unoccupied cell.

![](https://lh5.googleusercontent.com/blJXe2gTy_CxV6cYYmhXk3As4oOjGh-iyNIV4Ww33WbFRRqfifzG59m2CpactTyWkmmRvTblrU9WH3qIOzdKOXgN3wrst_u_Pi0279Fg1kBEJdBeeomqdLkhuR7av2n0d7SljOOM=s0)

A more general challenge I faced in this project was simply grappling with the size and organization. I was able to refactor to the point of cutting the lines of code in half, but it's still fairly unwieldy. I expect this will begin to feel more natural.

Wins

I am overall very proud of this first project. My time management was successful and I never felt too far behind. I enjoyed mapping out the steps logically and solving the problems that occurred.

Future Improvements

-   Correct the "game-end" bug described above.

-   Update Recent Winners local storage to reflect an array instead of only one object.

-   Add a computer player.

-   Add the ability to choose your own token.

-   Allow users to turn off sound effects.

-   Refactor repetitive code.

Key Learnings

Making this game for my first project was a fun and tangible way to demonstrate how much I learned in my first few weeks of class. I finished this project with a practical understanding of DOM manipulation and the JavaScript call stack.