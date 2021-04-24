// these are important const because they are what basically run matter js;
const World=Matter.World
const Engine=Matter.Engine
const Bodies=Matter.Bodies
// the vars
var world,engine
var Box1,Box2,Box3,Box4,Box5
var floor,log1,log2,log3,log4
var bird
var pig1,pig2
var bg
function preload()
{
  bg=loadImage("bg.png")
}





function setup()

{
  createCanvas(1200,400)
  // this is hpw to imply and make engines and world;
  engine=Engine.create()
  world=engine.world
 Box1=new Box (700,320,70,70)
 Box2=new Box (920,320,70,70)
 Box3=new Box (700,240,70,70)
 Box4=new Box (920,240,70,70)
 Box5=new Box (810,160,70,70)
 floor=new Floor(600,390,1202,20)
 log1=new Log(810,180,300,20,PI/2)
log2=new Log (810,260,300,20,PI/2)
 log3=new Log (760,120,150,20,PI/7)
 log4=new Log (870,120,150,20,-PI/7)
  bird=new Angrybird (200,50,50,50)
  pig1=new Pig (810,350,50,50)
  pig2=new Pig (810,220,50,50)
}


  


function draw()
{
  // this is where we display our ball, update our engine, and display our ground;
  background(bg)
  Engine.update(engine)
 
  Box1.display()
  Box2.display()
  Box3.display()
  Box4.display()
  Box5.display()
  floor.display()
  log1.display()
  log2.display()
 log3.display()
  log4.display()
  bird.display()
  pig1.display()
  pig2.display()

}






