var iss, issImg;
var bath;
var eat;
var working;
var gym2;
var move;
var sleep;
var brush;
var astronaut;
var sprite;
function preload(){
  issImg = loadImage("iss.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  working = loadAnimation("gym1.png", "gym2.png");
  gym2 = loadAnimation("gym11.png", "gym12.png");
  move = loadAnimation("move1.png", "move2.png");
  sleep = loadAnimation("sleep.png")
  brush = loadAnimation("brush.png");

}


function setup() {
  createCanvas(800,400);

  iss = createSprite(400, 200);
  iss.addImage("ISS_bground", issImg);
  iss.scale = 0.162;
  

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  drawSprites();
  
  fill("white");
  text("Instructions:",8, 10);
  text("Up Arrow = Brushing",10, 22);
  text("Down Arrow = Working out",10, 34);
  text("Left Arrow = Eating",10, 46);
  text("Right Arrow = Bathing",10, 58);
  text("M Key = Moving",10, 70);
  text("(Extra) G Key = Gravity;",10, 82);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut,velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", working);
    astronaut.changeAnimation("gymming")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut,velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut,velocityY = 0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing")
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut,velocityY = 0;
  }
  
  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 2;
    astronaut.velocityY = 3;
  }


}
