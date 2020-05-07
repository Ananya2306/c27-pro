const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,bar;
var chain;

/*function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}*/

function setup(){
    var canvas = createCanvas(800,550);
    engine = Engine.create();
    world = engine.world;

/*
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
log6 = new Log(230,180,80,PI/2);
    bird = new Bird(100,100);
    */


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
