const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;


function setup() {
  var canvas = createCanvas(480, 800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

  ground = new Ground (240,780,480,20);

  for (var k = 0; k<=width; k = k+80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))

  }

  for (var j = 40; j<=width; j= j+50){
    plinkos.push(new Plinko(j, 75));
  } 
  
  for (var j = 15; j<=width-10; j= j+50){
    plinkos.push(new Plinko(j, 175));
  } 

  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  ground.display();

  if (frameCount%60 === 0){
    particles.push(new Particles(random(width/2-10, width/2+10), 10, 10));
  }
  
  for (var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for (var k = 0; k< divisions.length; k++  ){
    divisions[k].display();
  }

  for (var k = 0; k< plinkos.length; k++  ){
    plinkos[k].display();
  }

  drawSprites();
}