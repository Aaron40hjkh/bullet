var bullet, wall, speed, weight
function setup() {
  createCanvas(1600,400);
  car = createSprite(50,250,50,50);
bullet.shapeColor = "white";

   
  
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = "blue";
  speed= random(55,90);
  weight = random(400,1500);
  bullet.velocityX = speed
}

function draw() {
  background("aquamarine"); 
 if(wall.x-bullet.x<bullet.width/2+wall.width/2){
 car.velocityX = 0;
 
 var deformation = 0.5*weight*speed*speed/22500
 if(deformation>180)  {
  bullet.shapeColor = "red"
 }
 if(deformation<180&&deformation>100){
  bullet.shapeColor = "yellow";




 }
 if(deformation<180)  {
  bullet.shapeColor = "green"
  }

 }
 
 drawSprites();
}


 


 






