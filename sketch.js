
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin, side1, side2, side3;

function preload()
{
	}

function setup() {
	createCanvas(800 , 550);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ground = new Rect(400, 500, 800, 10);
	paper = new ball(50, 498, 20);
	dustbin = new side(357, 210, 200, 10);
	side1 = new Rect(750, 490, 50, 10);
	side2 = new Rect(650 , 420, 10, 150);
	side3 = new Rect(780, 420, 10, 150);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  Engine.update(engine);
  side1.display();
  side2.display();
  side3.display();

  ground.display();
  paper.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body, paper.position,{x:100, y: -85});
	   
	 }
   }

