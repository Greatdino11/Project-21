var bullet, wall;
var speed, weight;
var damage;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet = createSprite(40,200,50,15);
  bullet.velocityX = speed;
  bullet.shapeColor = 'white';

  thickness = random(22,83);
}

function draw() {
  background(0,0,0);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

    if(damage>10){
      wall.shapeColor = color(225,0,0);
    }
    if(damage < 10){
      wall.shapeColor = color(0,225,0);
    }
  }
  drawSprites();
}

function hasCollided(bullet,wall){
    bullet.rightEdge = bullet.x + bullet.width;
    wall.leftEdge = wall.x;
    if(bullet.rightEdge>= wall.leftEdge){
      return true;
    }
    else{
      return false;
    }
}