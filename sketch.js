var fixed,moving;






function setup() {
 var Canvas= createCanvas(1200,800);
  fixed=createSprite(200,200,150,70);
  moving=createSprite(250,300,150,70);
  fixed.shapeColor="green";
  moving.shapeColor="green";
}

function draw() {
  background(0);
  moving.x=World.mouseX;
  moving.y=World.mouseY; 
  if(moving.x-fixed.x<=fixed.width/2+moving.width/2&& fixed.x-moving.x<=fixed.width/2+moving.width/2&&
    moving.y-fixed.y<=fixed.height/2+moving.height/2&& fixed.y-moving.y<=fixed.height/2+moving.height/2  ){
    moving.shapeColor="red";
    fixed.shapeColor="red";
  }
  else{
    moving.shapeColor="green";
    fixed.shapeColor="green";
  }
  drawSprites();
}