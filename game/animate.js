let ticks_per_sec = 25,
  skip_ticks = 1000 / ticks_per_sec,
  max_frameskip = 5;

let next_tick = getTickCount();
let loops;
let interpolation;

let game_is_running = true;

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

  while (game_is_running) {
    console.log("jsdfjhdfg");
    loops = 0;
    while (getTickCount() > next_tick && loops < max_frameskip) {
      updateGame();

      next_tick += skip_ticks;
      loops++;
    }

    interpolation = (getTickCount() + skip_ticks - next_tick) / (skip_ticks);
    displayGame(interpolation);
  }
}

function getTickCount() {
  var d = new Date();
  var n = d.getTime();
  return n;
}

function draw() {
  _context.clearRect(0, 0, _canvas.width, _canvas.height);
  _context.fillStyle = "black";
  _context.fillRect(0, 0, _canvas.width, _canvas.height);
  drawPlayer();
}

function drawPlayer() {
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

function displayGame(interpolation) {
  interpolation = 0;
  draw();
}

function updateGame() {
  movePlayer();
}