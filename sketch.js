const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, cannon,ball,cannon2;
var angle = 0;
var A_letter_img,A_letter;
var B_letter_img,B_letter;
var C_letter_img,C_letter;
var H_letter_img,H_letter;
var H_letter_img_second,H_letter_second;
var O_letter_img,O_letter;
var O_letter_img_second,O_letter_second;
var water_img,water_question;


function preload() {
  A_letter_img = loadImage("alphabet1.png");
  B_letter_img = loadImage("alphabet2.png");
  C_letter_img = loadImage("alphabet3.png");
  H_letter_img = loadImage("alphabet8.png");
  H_letter_img_second = loadImage("alphabet8.png");
  O_letter_img = loadImage("alphabet15.png");
  O_letter_img_second = loadImage("alphabet15.png");
  water_img = loadImage("water.png")
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  A_letter = createSprite(width-200,height-120);
  A_letter.addImage("letterA",A_letter_img);
  A_letter.scale = 0.5;
  
  B_letter = createSprite(width-40,height-240);
  B_letter.addImage("letterB",B_letter_img);
  B_letter.scale = 0.5;

  C_letter = createSprite(width-40,height-540);
  C_letter.addImage("letterB",C_letter_img);
  C_letter.scale = 0.5;

  H_letter = createSprite(width-716,height-278);
  H_letter.addImage("letterH",H_letter_img);
  H_letter.scale = 0.5;

  H_letter_second = createSprite(width-716,height-378);
  H_letter_second.addImage("letterh",H_letter_img_second);
  H_letter_second.scale = 0.5;

  O_letter = createSprite(width-410,height-500);
  O_letter.addImage("letterO",O_letter_img);
  O_letter.scale = 0.5;

  O_letter_second = createSprite(width-410,height-550);
  O_letter_second.addImage("lettero",O_letter_img_second);
  O_letter_second.scale = 0.5;

  water_question= createSprite(100,70);
  water_question.addImage("water", water_img);
  water_question.scale = 0.5;
  
      ground = new Ground(width/2, height-30,width, 50); 
      cannon2 = new Cannon2(75,height-125,60,30);
      ball = new Ball(width/2,height-125,50,50);
  cannon = new Cannon(ball.body,cannon2.body);
  //ball.body.velocity.x = 3;
 // cannon2.debug = true;



  
}

function draw() {
  background(255);
  Engine.update(engine);
  ground.display();
  //cannon.display();
  cannon2.display();
  ball.display();
  water_question.display();
  H_letter.display();
  H_letter_second.display();
  A_letter.display();
  B_letter.display();
  C_letter.display();
  O_letter.display();
  O_letter_second.display();

  cannon.attach(ball.body);


  
}
