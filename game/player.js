function Player(x, y, width, height) {
  Unit.call(this);
  Unit.apply(this, arguments);
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.acceleration = 0;
  this.maxVelocity = 15;
  this.health = 100;
  this.stamina = 100;
  this.regenerationRate = 2;
}

Player.prototype = Object.create(Unit.prototype);
Player.prototype.constructor = Player;