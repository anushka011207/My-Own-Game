const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Const = Matter.Constraint;
var engine, world,ground;
var testsubject;
var img, test2;
var testConstraint;
var testGround;


function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  testsubject = new Weapon(200, 300, 20, 20, 0.5);
  test2 = new Player(200, 300, 10, 100);
  testConstraint = new Constraint(testsubject.body, test2.body);
  ground = new Ground(400,390,800,20);
}

function draw() {
  background(0, 0, 0);
  Engine.update(engine);
  testsubject.display();
  test2.display();
  ground.display();
  drawSprites();
}

// function keyPressed() {
//   if (keyCode === LEFT_ARROW) {
//     testsubject.left();
//   }
//   if (keyCode === UP_ARROW) {
//     testsubject.up();
//   }
//   if (keyCode === RIGHT_ARROW) {
//     testsubject.right();
//   }
//   if (keyCode === DOWN_ARROW) {
//     testsubject.down();
//   }
// }
function keyTyped() {
  if (key === "a") {
    test2.left();
  }
  if (key === "w") {
    test2.up();
  }
  if (key === "d") {
    test2.right();
  }
  if (key === "x") {
    test2.down();
  }
}