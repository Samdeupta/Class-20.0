var fixed,moving

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(300,200,40,40);
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
}

function draw() {
  background("black");

  moving.x = World.mouseX;
  moving.y = World.mouseY;
  
  if(fixed.x - moving.x < fixed.width/2 + moving.width/2 && 
     moving.x - fixed.x < moving.width/2 + fixed.width/2 &&
     fixed.y - moving.y < fixed.height/2 + moving.height/2 &&
     moving.y - fixed.y < moving.height/2 + fixed.height/2){
  fixed.shapeColor = "red";
  moving.shapeColor = "red";
  } else{
  fixed.shapeColor = "green";
  moving.shapeColor = "green";
  }


  drawSprites();
}