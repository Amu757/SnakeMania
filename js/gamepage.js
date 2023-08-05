let inputDir = { x: 0, y: 0 };
const musicsound = new Audio("./media/music.mp3");
const eatsound = new Audio("./media/eat.mp3");
const gameoversound = new Audio("./media/gameover.mp3");
const bangsound = new Audio("./media/bang.mp3");
const movesound = new Audio("./media/move.mp3");

let gamesetting = JSON.parse(localStorage.getItem("settingdata"));
console.log("this is game data..", gamesetting);

// main logic starts here
let hiscoreBox = document.getElementById("hiscoreBox");
let speed = gamesetting.speed;
let score = 0;
let lastpainttime = 0;
let snakearr = [{ x: 11, y: 13 }];
let food = { x: 12, y: 7 };

musicsound.play();
let hiscore = localStorage.getItem("hiscore");
if (hiscore === null) {
  hiscoreval = 0;
  localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
} else {
  hiscoreval = JSON.parse(hiscore);
  hiscoreBox.innerHTML = "HiScore: " + hiscore;
}

window.requestAnimationFrame(main);
//game functions
function main(currenttime) {
  window.requestAnimationFrame(main);
  if ((currenttime - lastpainttime) / 1000 < 1 / speed) {
    return;
  }
  lastpainttime = currenttime;
  gameEngine();
}
function isColide(snake) {
  // if bump into snake
  for (let i = 1; i < snakearr.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      gameoversound.play();
      return true;
    }
  }
  // if bump into wall
  if (
    snake[0].x >= 15 ||
    snake[0].x <= 0 ||
    snake[0].y >= 15 ||
    snake[0].y <= 0
  ) {
    bangsound.play();
    gameoversound.play();
    return true;
  }
  return false;
}
function gameEngine() {
  // updating snake arr and food
  if (isColide(snakearr)) {
    inputDir = { x: 0, y: 0 };
    setTimeout(function () {
      alert(
        `Game Over ,Score is: ${score} and Hiscore is: ${hiscore} , Press any key to play again!`
      );
    }, 100); // Delay the alert prompt by 100 milliseconds
    snakearr = [{ x: 13, y: 14 }];
    musicsound.play();
    score = 0;
  }
  //if eaten the food
  if (snakearr[0].y === food.y && snakearr[0].x === food.x) {
    eatsound.play();
    score += 1;
    if (score > hiscoreval) {
      hiscoreval = score;
      localStorage.setItem("hiscore", JSON.stringify(hiscoreval));

      hiscoreBox.innerHTML = "HiScore: " + hiscoreval;
    }
    scoreBox.innerHTML = "Score: " + score;
    //adding body segment
    snakearr.unshift({
      x: snakearr[0].x + inputDir.x,
      y: snakearr[0].y + inputDir.y,
    });
    let a = 2;
    let b = 14;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
  }

  //moving snake
  for (let i = snakearr.length - 2; i >= 0; i--) {
    snakearr[i + 1] = { ...snakearr[i] };
  }

  snakearr[0].x += inputDir.x;
  snakearr[0].y += inputDir.y;

  // display snake
  let board = document.getElementById("board");
  board.innerHTML = "";
  console.log(board.innerHTML);
  snakearr.forEach((e, index) => {
    snakeElement = document.createElement("div");

    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;

    if (index === 0) {
      snakeElement.classList.add("snakeHead");
      snakeElement.style.backgroundImage = gamesetting.playerimg;
      console.log("img is updated : ");
    } else {
      snakeElement.classList.add("snakeBody");
    }
    board.appendChild(snakeElement);
  });

  // display food
  foodElement = document.createElement("div");

  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  // foodElement.style.backgroundImage = gamesetting.opponentimg;
  foodElement.style.backgroundImage = gamesetting.opponentimg;
  console.log(" updated !! : ");
  board.appendChild(foodElement);
}

// play music sound often
setTimeout(function () {
  musicsound.play();
}, 60000 * 1);
// key functions

window.addEventListener("keydown", (e) => {
  movesound.play();
  switch (e.key) {
    case "ArrowUp":
      if (inputDir.y !== 1) {
        // Prevent moving up if currently moving down
        inputDir.x = 0;
        inputDir.y = -1;
      }
      break;

    case "ArrowDown":
      if (inputDir.y !== -1) {
        // Prevent moving down if currently moving up
        inputDir.x = 0;
        inputDir.y = 1;
      }
      break;

    case "ArrowRight":
      if (inputDir.x !== -1) {
        // Prevent moving right if currently moving left
        inputDir.x = 1;
        inputDir.y = 0;
      }
      break;

    case "ArrowLeft":
      if (inputDir.x !== 1) {
        // Prevent moving left if currently moving right
        inputDir.x = -1;
        inputDir.y = 0;
      }
      break;
  }
});
// mobile key functions
const up = document.getElementById("btn1");
function changeDirection(key) {
  movesound.play();
  switch (key) {
    case "up":
      if (inputDir.y !== 1) {
        // Prevent moving up if currently moving down
        inputDir.x = 0;
        inputDir.y = -1;
      }
      break;

    case "down":
      if (inputDir.y !== -1) {
        // Prevent moving down if currently moving up
        inputDir.x = 0;
        inputDir.y = 1;
      }
      break;

    case "right":
      if (inputDir.x !== -1) {
        // Prevent moving right if currently moving left
        inputDir.x = 1;
        inputDir.y = 0;
      }
      break;

    case "left":
      if (inputDir.x !== 1) {
        // Prevent moving left if currently moving right
        inputDir.x = -1;
        inputDir.y = 0;
      }
      break;
  }
}
