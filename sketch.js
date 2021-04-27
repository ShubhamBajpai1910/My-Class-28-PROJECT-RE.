
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine , myWorld;
var groundSprite;
var net1 , net2 , net3;
var paper;
var paper2;
var paper3;
var paper4 , paper5 , paper6;
var paper7;
var net4 , net5 , net6;
var net7;
var net8 , net9 , net10;


function preload()
{
	
}

function setup() {
	createCanvas(1280, 570);
	myEngine=Engine.create();
  myWorld=myEngine.world;

  
ball1=new Ball(150,400,50); 

ground1=new Ground(width/2,560,1600,10);

launcher1=new Launcher(ball1.body,{x:200,y:100});


 //paper=createSprite(150,530,50,50);
 //paper.shapeColor="blue";

 //paper2=createSprite(150,530,40,40);
 //paper2.shapeColor="midnightblue";

 //paper3=createSprite(150,515,10,10);
 //paper3.shapeColor="white";

 //paper4=createSprite(150,545,10,10);
 //paper4.shapeColor="white";

 //paper5=createSprite(165,530,10,10);
 //paper5.shapeColor="white";

 //paper6=createSprite(135,530,10,10);
 //paper6.shapeColor="white";

 //paper7=createSprite(150,530,5,5);
 //paper7.shapeColor="silver";


groundSprite=createSprite(width/2, 560, 2560,10);
groundSprite.shapeColor="cyan";

net1=new Dustbin(1000,545,200,20);

net2=new Dustbin(900,493,20,125);


net3=new Dustbin(1100,493,20,125);

net4=new Dustbin(1000,520,200,5);

net5=new Dustbin(1000,500,200,5);

net6=new Dustbin(1000,480,200,5);

net7=new Dustbin(1000,460,200,5);

net8=new Dustbin(950,500,5,75);

net9=new Dustbin(1000,500,5,75);

net10=new Dustbin(1050,500,5,75);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	
//function keyPressed(){
//	if (keyCode === UP_ARROW){
//		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:-85});
//	}
//}


}




function draw() {	
  background(0);

  Engine.update(myEngine);
 

//paper.display();
//paper2.display();
//paper3.display();
//paper4.display();
//paper5.display();
//paper6.display();
//paper7.display();

net1.display();
net2.display();
net3.display();
net4.display();
net5.display();
net6.display();
net7.display();
net8.display();
net9.display();
net10.display();
ball1.display();
ground1.display();
launcher1.display();

//function keyPressed(){
//	if (keyCode === UP_ARROW){
//		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:40,y:-13});
//	}

//	if (keyCode === DOWN_ARROW){
//		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:15,y:13});
//	}

	
}

function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher1.fly();
}

//keyPressed();
mouseDragged();
mouseReleased();




