function Enemy(x, y, width, height) {
  Unit.call(this);
  Unit.apply(this, arguments);
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.maxVelocity = 10;
  this.health = 100;
  this.stamina = 100;
  this.regenerationRate = 1;
}

Enemy.prototype = Object.create(Unit.prototype);
Enemy.prototype.constructor = Enemy;