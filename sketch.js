
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var iron;
function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer(500,500,100,20);
	plane = new Plane(400,700,4000,20);
	stone = new Stone(500,450,50,50);
    rubber = new Rubber(300,500,40);
	iron = new Heavy(600,500,100,100);

	sand1 = new Sand(300, 400, 1);
	sand2 = new Sand(400, 400, 1);
	sand3 = new Sand(500, 400, 1);
	sand4 = new Sand(600, 400, 1);
	sand5 = new Sand(700, 400, 1);
	sand6 = new Sand(800, 400, 1);
	sand7 = new Sand(400, 200, 1);
	sand8 = new Sand(700, 300, 1);

	Engine.run(engine);
  
}


function draw() {
  background("skyblue");
  //Engine.update(engine);


  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  iron.display();
 

  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();

  
}



