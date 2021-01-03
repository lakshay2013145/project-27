
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	targetball= new Ball(200,200,20,20)
	ball1= new Ball(400,200,20)
	chain1= new Chain(ball1.body,{x:400,y:110})
	chain2=new Chain(targetball.body,{x:420,y:111})
	ball2=new Ball(600,200,20,20)
	chain3=new Chain(ball2.body,{x:460,y:113})
	ball3=new Ball(800,200,20,20);
	chain4=new Chain(ball3.body,{x:520,y:117})
}


function draw() {
	Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  rect(500,100,250,20);
 ball1.display()
 
 chain1.display(); 
 targetball.display();
 chain2.display();
 ball2.display();
 chain3.display();
 ball3.display();
 chain4.display();
}
function mouseDragged(){
    Matter.Body.setPosition(targetball.body, {x: mouseX , y: mouseY});
}


