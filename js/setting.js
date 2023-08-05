const slectsound = new Audio("./media/click.mp3");

// initialization of elemets
let settingdata = {
  speed: 4,
  playerimg: "../media/ishin.jpg",
  opponentimg: "../media/srushtinew.jpg",
};

// option selection
function selectPlayer(num, obj) {
  slectsound.play();
  let btns = document.querySelectorAll(".player .btn");
  btns.forEach((button) => {
    button.classList.remove("selected");
  });
  obj.classList.add("selected");

  let snakehead = document.getElementsByClassName("snakeHead");
  // update settingdata object value
  switch (num) {
    case 0:
      settingdata.playerimg = "../media/ishin.jpg";
      //   snakehead[0].style.backgroundImage = "";
      break;
    case 1:
      settingdata.playerimg = "../media/arhunt.jpg";
      //   snakehead[0].style.backgroundImage = ";
      break;
    case 2:
      settingdata.playerimg = "../media/aman.jpg";
      //   snakehead[0].style.backgroundImage = ";
      break;
  }
}
function selectLevel(num, obj) {
  slectsound.play();
  // selects or deselcts button
  let selected = document.querySelectorAll(".level .btn");
  selected.forEach((btn) => {
    btn.classList.remove("selected");
  });
  obj.classList.add("selected");
  // update settingdata object value
  switch (num) {
    case 0:
      settingdata.speed = 4;
      break;
    case 1:
      settingdata.speed = 5;
      break;
    case 2:
      settingdata.speed = 6;
      break;
  }
}

function selectOpponent(num, obj) {
  slectsound.play();
  let selected = document.querySelectorAll(".opponent .btn");
  selected.forEach((button) => {
    button.classList.remove("selected");
  });
  obj.classList.add("selected");

  let fooditem = document.getElementsByClassName("food");
  // update settingdata object value
  switch (num) {
    case 0:
      settingdata.opponentimg = "../media/srushtinew.jpg";
      //   fooditem[0].style.backgroundImage = "url('../media/srushtinew.jpg');";
      break;
    case 1:
      settingdata.opponentimg = "../media/devil.jpg";
      //   fooditem[0].style.backgroundImage = "url('../media/devil.jpg');";
      break;
  }
}
function changewindow() {
  localStorage.setItem("settingdata", JSON.stringify(settingdata));
  //   console.log("local storage updated", settingdata);
  document.location.href = "gamepage.html";
}
