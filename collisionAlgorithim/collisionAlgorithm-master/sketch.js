var fixedRect, movingRect;
var controlBox1, controlBox2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  controlBox1 = createSprite(100, 100, 50, 50)
  controlBox1.shapeColor = "green"
  controlBox2 = createSprite (600, 100, 40, 50)
  controlBox2.shapeColor = "green"
  fixedRect.velocityY = -5
  controlBox2.velocityY = 5
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(fixedRect, controlBox2);
  if (isTouching(movingRect, controlBox1))
  {
    movingRect.shapeColor = "red";
    controlBox1.shapeColor = "red";
  }
   else {
    movingRect.shapeColor = "green";
    controlBox1.shapeColor = "green";
  }
  drawSprites();
}

