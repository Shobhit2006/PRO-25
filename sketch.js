const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let paperObject, dustbin, ground;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(180, 640);

	dustbin = new Dustbin(1200, 645);

	ground = new Ground(width / 2, height - 30);

	Engine.run(engine);

}

function draw() {
	background(0,150,225);

	paperObject.display();
	ground.display();
	dustbin.display();

	drawSprites();
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		
		Body.applyForce(paperObject.body, paperObject.body.position, { x: 245, y: -340 });
	}
}
