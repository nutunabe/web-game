let
  _canvas,
  _context,
  _width,
  _height,
  player;

window.onload = function () {
  this.console.log("hi");

  _width = window.innerWidth;
  _height = window.innerHeight;
  _canvas = document.getElementById("gameWindow");
  _context = _canvas.getContext("2d");
  _context.canvas.width = _width;
  _context.canvas.height = _height;


  player = new Player(0, _height - 100, 50, 100);

  this.console.log(player.x);
  this.console.log(player.y);
  this.console.log(player.width);
  this.console.log(player.height);

  //вызов этой функции
  animation();
}

//ФУНКЦИЯ ОЧИСТКИ ЭКРАНА И ВЫЗОВА ШАГА АНИМАЦИИ
function animation() {
  draw();

  requestAnimationFrame(animation); //вызов функции animation() при первой возможности
}

function draw() {
  _context.clearRect(0, 0, _canvas.width, _canvas.height);
  _context.fillStyle = "black";
  _context.fillRect(0, 0, _canvas.width, _canvas.height);
  drawPlayer();
}

function drawPlayer() {
  movePlayer();
  _context.strokeStyle = "yellow";
  _context.strokeRect(player.x + 1, player.y + 1, player.width - 2, player.height - 2);
}

function movePlayer() {
  whatKey();
  if (direction == "left") {
    player.x -= 1;
  } else if (direction == "right") {
    player.x += 1;
  } else {

  }
}


//========================================================

// function animate({
//   duration,
//   draw,
//   timing
// }) {

//   let start = performance.now();

//   requestAnimationFrame(function animate(time) {
//     // timeFraction изменяется от 0 до 1
//     let timeFraction = (time - start) / duration;
//     if (timeFraction > 1) timeFraction = 1;

//     // вычисление текущего состояния анимации
//     let progress = timing(timeFraction);

//     draw(progress); // отрисовать её

//     if (timeFraction < 1) {
//       requestAnimationFrame(animate);
//     }

//   });
//}