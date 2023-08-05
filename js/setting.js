const slectsound = new Audio("./media/click.mp3");

// initialization of elemets
let settingdata = {
  speed: 4,
  playerimg: 'url("../media/ishin.jpg")',
  opponentimg: 'url("../media/srushti.jpg")',
};

// option selection
function selectPlayer(num, obj) {
  slectsound.play();
  let btns = document.querySelectorAll(".player .btn");
  btns.forEach((button) => {
    button.classList.remove("selected");
  });
  obj.classList.add("selected");

  // update settingdata object value
  switch (num) {
    case 0:
      settingdata.playerimg = 'url("../media/ishin.jpg")';
      //   snakehead[0].style.backgroundImage = "";
      break;
    case 1:
      settingdata.playerimg = 'url("../media/arhunt.jpg")';
      //   snakehead[0].style.backgroundImage = ";
      break;
    case 2:
      settingdata.playerimg = 'url("../media/aman.jpg")';
      // snakehead[0].style.backgroundImage = playerimg;
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

  // update settingdata object value
  switch (num) {
    case 0:
      console.log("clicked strushti");
      settingdata.opponentimg = 'url("../media/srushti.jpg")';
      //   fooditem[0].style.backgroundImage = "url('../media/srushti.jpg');";
      break;
    case 1:
      console.log("devil clicked");
      settingdata.opponentimg = 'url("../media/devil.jpg")';
      //   fooditem[0].style.backgroundImage = "url('../media/devil.jpg');";
      break;
  }
}
function changewindow() {
  localStorage.setItem("settingdata", JSON.stringify(settingdata));
  // console.log("local storage updated", settingdata);
  document.location.href = "gamepage.html";
}
