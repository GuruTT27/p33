const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload(){

  bgi = loadImage("snow1.jpg");
  ball_img = loadImage("snowball.png");
  girl1_img = loadImage("girl.png");
  boy1_img = loadImage("boy.png");
  
}

function setup() {
  createCanvas(1440,789);

  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);

   groundMain = new Ground();
   h1 = new houseOne (210,400,900,800);
   h2 = new houseTwo (1300,300,900,800);
   h3 = new houseThree (700,375,400,300);

   girl1 = Bodies.circle(950,600,1);

   boy1 = new boy (300,600,500,500);

   ball = Bodies.circle(1050,620,1);
   World.add(world,ball);

   slingShot = new Slingshot(this.ball,{x:1000,y:600});
   
}

function draw() {
  background(bgi); 

  Engine.update(engine);

  fill("black");
  textSize(20);
  text("Drag The Snowball To Throw It.",50,40);

  fill("black");
  textSize(20);
  text("And also Press Space To Bring it back to its original Position.",876,40);

  h1.display();
  h2.display();
  h3.display();
  boy1.display();
  //slingShot.display();

  imageMode(CENTER)
  image(girl1_img ,girl1.position.x,girl1.position.y,500,500);
  image(ball_img ,ball.position.x,ball.position.y,100,100);

  // drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }

  function mouseReleased(){
    slingShot.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(this.ball, {x: 1000 , y: 600});
       slingShot.attach(this.ball);
       
    }
}