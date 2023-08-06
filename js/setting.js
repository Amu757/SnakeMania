const slectsound = new Audio("../media/click.mp3");

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
      break;
    case 1:
      settingdata.playerimg = 'url("../media/arhunt.jpg")';
      break;
    case 2:
      settingdata.playerimg = 'url("../media/aman.jpg")';
      break;
    case 3:
      settingdata.playerimg = 'url("../media/shubham.jpg")';
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
  console.log(obj);
  // update settingdata object value
  switch (num) {
    case 0:
      settingdata.opponentimg = 'url("../media/srushti.jpg")';
      break;
    case 1:
      settingdata.opponentimg = 'url("../media/reena.jpg")';
      break;
    case 2:
      settingdata.opponentimg = 'url("../media/pallavi.jpg")';
      break;
    case 3:
      settingdata.opponentimg = 'url("../media/rachana.jpg")';
      break;
    case 4:
      settingdata.opponentimg = 'url("../media/devil.jpg")';
      break;
  }
}
function changewindow() {
  localStorage.setItem("settingdata", JSON.stringify(settingdata));
  // console.log("local storage updated", settingdata);
  document.location.href = "gamepage.html";
}
