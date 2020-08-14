let keys = [];

window.addEventListener("keydown", function (e) {
  if (!keys[e.keyCode]) {
    if (e.keyCode == 37 || e.keyCode == 39) {
      keys[37] = keys[39] = false;
    }
    keys[e.keyCode] = true; //присвоение true элементу массива keys под индексом = коду клавиши
  }
});

window.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false; //присвоение false элементу массива keys под индексом = коду клавиши
});

function whatKey() {
  if (keys[37]) {
    player.velocity = -1 * player.maxVelocity;
  }
  else if (keys[39]) {
    player.velocity = player.maxVelocity;
  }
  else {
    player.velocity = 0;
  }

  if (keys[49] || keys[97]) {
    // attack . . .
  }

}
