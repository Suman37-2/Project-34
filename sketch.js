const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var myEngine,myWorld;
var bgimg;

function preload() {
bgimg=loadImage("Bg.png");

}

function setup() {
createCanvas(1500, 800);
myEngine=Engine.create();
myWorld=myEngine.world;

gr=new Ground(750,500,1500,20);
hero=new Hero(550,400);
connector=new Fly(hero.body,{x:570,y:100});
mons=new Monster(1100,200);
setter=new Ground(300,280,20,150);
gr2=new Ground(1090,415,60,10);

b1=new Block(700,400,60,60);
b2=new Block(700,300,60,60);
b3=new Block(700,200,60,60);
b4=new Block(700,100,60,60);
b5=new Block(700,50,60,60);

b11=new Block(800,400,60,60);
b12=new Block(800,300,60,60);
b13=new Block(800,200,60,60);
b14=new Block(800,100,60,60);
b15=new Block(800,50,60,60);
b16=new Block(800,0,60,60);

b21=new Block(900,400,60,60);
b22=new Block(900,300,60,60);
b23=new Block(900,200,60,60);
b24=new Block(900,100,60,60);
b25=new Block(900,0,60,60);
}

function draw() {
background(bgimg);
Engine.update(myEngine);

gr.display();
hero.display();
mons.display();
connector.display();
push();
fill("#7CCBF2");
strokeWeight(0);
setter.display();
gr2.display();
pop();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();

b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();

b21.display();
b22.display();
b23.display();
b24.display();
b25.display();

}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});  
}
