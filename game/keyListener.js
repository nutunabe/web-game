let
  keys = [],
  direction;

/*================================================*/

window.addEventListener("keydown", function (e) {
  keys[e.keyCode] = true; //присвоение true элементу массива keys под индексом = коду клавиши
});

window.addEventListener("keyup", function (e) {
  keys[e.keyCode] = false; //присвоение false элементу массива keys под индексом = коду клавиши
});

function whatKey() {
  if (keys[39]) {
    direction = "right";
    player.velocity = player.maxVelocity;
  } else if (keys[37]) {
    direction = "left";
    player.velocity = -1 * player.maxVelocity;
  } else {
    direction = "";
    player.velocity = 0;
  }

  if (keys[49] || keys[97]) {
    // attack . . .
  }

}
