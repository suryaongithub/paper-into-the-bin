
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4,box5,box6;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(700,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1=new Box(350,390,700,20);
	box2=new Box(350,335,10,100);
	box3=new Box(450,335,10,100);
	box4=new Box(10,200,20,400);
	box5=new Box(690,200,20,400);
	box6=new Box(350,10,700,20);


	ball=Bodies.circle(50,200,15,{restitution:0.})
	World.add(world,ball);

	Engine.run(engine);
  
	ellipseMode(RADIUS);
	console.log(ball);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();

	ellipse(ball.position.x,ball.position.y,15);

	if(keyDown("UP_ARROW"))
	{
		force();
	}
	
	
  drawSprites();;
 
}
function force ()
{
	Body.applyForce(ball,{x:0,y:0},{x:0.013,y:-0.013});
}



