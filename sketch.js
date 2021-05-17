var Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events

var engine, world;

var ground;
var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;
function setup() {
createCanvas(500,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(260,790,520,20);
  //createSprite(400, 200, 50, 50);
  for(var r = 10; r <= 490; r = r+80){
    divisions.push(new Division(r,height-divisionHeight/2-10,10,divisionHeight ));
}
for (var j = 75; j <=width; j=j+50) {
   plinkos.push(new Plinko(j,75));
}

for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = 75; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

 for (var j = 50; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}

}
function draw() {
  background("green");  
  Engine.update(engine);
  ground.display();

  

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(0, 480), 10, 10));
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
for(var r=0; r<divisions.length; r++){
    divisions[r].display();
  }
}