const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var divisions = [];
var plinkos = [];
var particles = [];

var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  for(var divisionX = 0; divisionX <= innerWidth; divisionX = divisionX + 80){
    divisions.push(new Divisions(divisionX));
  }

  for(var plinkotype1 = 40; plinkotype1 <= width; plinkotype1 = plinkotype1 + 50){
    plinkos.push(new plinko(plinkotype1,75));
    plinkos.push(new plinko(plinkotype1,275));
  }

  for(var plinkotype2 = 10; plinkotype2 <= width; plinkotype2 = plinkotype2 + 50){
    plinkos.push(new plinko(plinkotype2,175));
    plinkos.push(new plinko(plinkotype2,375));
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  ground.display();

  for(var divisionDisplay = 0; divisionDisplay < divisions.length; divisionDisplay++){
    divisions[divisionDisplay].display();
  }

  for(var plinkoDisplay = 0; plinkoDisplay < plinkos.length; plinkoDisplay++){
    plinkos[plinkoDisplay].display();
  }

  if(frameCount%90 === 0){
    particles.push(new particle(random(width/2-180,width/2+180)));
  }

  for(var particleDisplay = 0; particleDisplay < particles.length; particleDisplay++){
    particles[particleDisplay].display();
  }
}