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
  if (true) {
    if (keys[39]) {
      direction = "right";
      console.log("right");
    } else if (keys[37]) {
      direction = "left";
      console.log("left");
    } else {
      direction = "";
    }

    if (keys[49] || keys[97]) {
      // attack . . .
    }
  }
}