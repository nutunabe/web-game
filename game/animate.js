let ticks_per_sec = 25;
let skip_ticks = 1000 / ticks_per_sec;
let max_frameskip = 5;

let next_tick = getTickCount();
let loops;
let interpolation;
let view_position;

let game_is_running = true;

let view_canvas;
let view_context;

let player;

window.onload = function () {
  document.getElementById("username").innerHTML = "ksdjvbdsfhbsd";

  view_canvas = document.getElementById("gameWindow");
  view_canvas.width = window.innerWidth;
  view_canvas.height = window.innerHeight;
  view_context = view_canvas.getContext("2d");

  console.log(view_canvas.width + " " + view_canvas.height);

  player = new Player(0, view_canvas.height - 100, 50, 100);

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

function getTickCount() {
  let date = new Date();
  let now = date.getTime();
  return now;
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
  view_position = player.x + (player.velocity * interpolation);
  // . . . 
}

function drawEnvironment() { // temp
  view_context.clearRect(0, 0, view_canvas.width, view_canvas.height);
  view_context.fillStyle = "black";
  view_context.fillRect(0, 0, view_canvas.width, view_canvas.height);
}

function drawPlayer() {
  view_context.strokeStyle = "yellow";
  view_context.strokeRect(view_position + 1, player.y + 1, player.width - 2, player.height - 2);
}
