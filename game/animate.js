let ticks_per_sec = 25,
  skip_ticks = 1000 / ticks_per_sec,
  max_frameskip = 5;

let next_tick = getTickCount();
let loops;
let interpolation;

let game_is_running = true;
let view_position;

let
  _canvas,
  _context,
  _width,
  _height,
  player,
  speed = 0;

window.onload = function () {
  _width = window.innerWidth;
  _height = window.innerHeight;
  _canvas = document.getElementById("gameWindow");
  _context = _canvas.getContext("2d");
  _context.canvas.width = _width;
  _context.canvas.height = _height;

  player = new Player(0, _height - 100, 50, 100);

  update();
}

function update() {
  loops = 0;

  while (getTickCount() > next_tick && loops < max_frameskip) {
  updateGame();

    next_tick += skip_ticks;
    loops++;
  }

  interpolation = (getTickCount() + skip_ticks - next_tick) / (skip_ticks);
  displayGame(interpolation);
  requestAnimationFrame(update);
}

function movePlayer() {
  whatKey();

  player.x += player.velocity;
}

function updateGame() {
  movePlayer();
  // . . . 
}

function displayGame(interpolation) {
  drawEnvironment();
  drawPlayer();
  interpolation = 0;
  view_position = player.x + (player.velocity * interpolation);
  // . . . 
}

function drawEnvironment() {
  _context.clearRect(0, 0, _canvas.width, _canvas.height);
  _context.fillStyle = "black";
  _context.fillRect(0, 0, _canvas.width, _canvas.height);
}

function drawPlayer() {
  _context.strokeStyle = "yellow";
  _context.strokeRect(view_position + 1, player.y + 1, player.width - 2, player.height - 2);
}

function getTickCount() {
  var d = new Date();
  var n = d.getTime();
  return n;
}
