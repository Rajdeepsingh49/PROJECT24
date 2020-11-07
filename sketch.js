
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,Paperpos;
var ground,Groundpos;
var box1Sprite,box2Sprite,box3Sprite,box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	box1Sprite=createSprite(630,570,200,10);
	box1Sprite.shapeColor=color("red");

	box2Sprite=createSprite(535,530,10,80);
	box2Sprite.shapeColor=color("red");

	box3Sprite=createSprite(725,530,10,80);
	box3Sprite.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
	paper = new Paper(100,350,40);
	ground = new Ground(600,580,1200,10);
	
	 
	box1 = Bodies.rectangle(630,570,200,15,{isStatic:true});
	World.add(world, box1);

	

	box2 = Bodies.rectangle(535,530,10,80,{isStatic:true});
	World.add(world, box2);

	

	box3 = Bodies.rectangle(725,530,10,80,{isStatic:true});
	World.add(world, box3);


	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-35});

	}
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  paper.display();
  ground.display();
  drawSprites();
 
}



