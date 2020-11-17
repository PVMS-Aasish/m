const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
 var polygon , slingshot;

function setup() {
  createCanvas(800,400); 

  engine = Engine.create();
  world = engine.world;

  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);
 polygon = Bodies.circle(50,200,20);
 Worldld.add(world,polygon);
  slingshot=new SlingShot(Polygon.body,{x:200,y:100});
}

function draw() {
  background(255,255,255);  

  box8.display();
  box9.display(); 
  box10.display(); 
  box11.display(); 
  box12.display(); 
  box13.display(); 
  box14.display(); 
  box15.display(); 
  box16.display(); 
  polygon.display();
  slingshot.display;













  drawSprites();
}