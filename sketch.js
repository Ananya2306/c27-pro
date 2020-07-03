const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,bar;
var chain;

function setup(){
    var canvas = createCanvas(800,550);
    engine = Engine.create();
    world = engine.world;

   ball = new Ball (400,400,100);
   bar = new Bar(400,50, 300,40);
   chain = new Chain(bar.body, ball.body);
}

function draw(){
   background(0);
   Engine.update(engine);
    
   if(keyCode === 32){
     ball.MoveWithMouse();
   }
   strokeWeight(10);
stroke("yellow"); 
   fill(0) 
   textSize(30);
    text("Press space to move the ball",30,500);
   text("PRESS ENTER TO LEAVE THE Ball", 100,450);


 
    chain.display();
    
   ball.display();
   bar.display();
}
