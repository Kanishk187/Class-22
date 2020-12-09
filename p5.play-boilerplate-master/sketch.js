const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,Ball,Ground;



function setup() {
  var canvas= createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  var Ball_options={
  
  restitution:1.0

  }
  Ball=Bodies.circle(200,100,20,Ball_options);
  World.add(world,Ball);
  var Ground_options={

  isStatic:true

  }
  Ground=Bodies.rectangle(200,390,200,20,Ground_options);
  World.add(world,Ground);
}

function draw() {
  background("lightblue"); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(Ground.position.x,Ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(Ball.position.x,Ball.position.y,20,20)
  drawSprites();
}