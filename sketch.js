var person;
var platform;
var hole = [];
var h;
var obstacle = [];
var keygame;

function setup() {
  createCanvas(600, 600);
  person = new Person();
  SidePerson = new SidePerson();
  for (h = 0; h < 100; h++) {
    hole[h] = round(random(10, 500));
  }
  for (h = 0; h < 50; h++) {
    obstacle[h] = round(random(1, 4));
  }
}

function keyPressed() {

  if (keygame === 1) {
    
    if (key === ' ' || keyCode === UP_ARROW) {
      var jump = createVector(0, -26);
      SidePerson.applyForce(jump);
    }
    
  } else if (keygame === 2) {

    if (key === ' ' || keyCode === UP_ARROW || key === 'w') {

      var jump2 = createVector(0, -20)
      person.applyForce(jump2);

    } else if (keyCode === LEFT_ARROW || key === 'a') {

      var left = createVector(-8, 0)
      person.applyForce(left);


    } else if (keyCode === RIGHT_ARROW || key === 'd') {

      var right = createVector(8, 0)
      person.applyForce(right);

    } else if (keyCode === DOWN_ARROW || key === 's') {

      var down = createVector(0, 150)
      person.applyForce(down);
    }
  }
}


var i = 0;
var scene = 1;
var buttonX;
var buttonY;
var buttonW;
var buttonH;
let img;
var firstTimeScene6 = 0;
var game;
var CPerson = 1;
var CRed = 242;
var CGreen = 166;
var CBlue = 2;
var scene10Counter = 0;
var msBeforeScene10 = 0;



draw = function() {

  //Logo
  if (scene === 1) {

    logo();

  } else if (scene === 2) {

    MainMenu();

  } else if (scene === 3) {

    Instruction();

  } else if (scene === 4) {

    Options();

  } else if (scene === 5) {

    StoryScene1();

  } else if (scene === 6) {

    //Ckeck to refesh Questions
    if (firstTimeScene6 === 0) {
      randomNumbers();
      firstTimeScene6++;
    }

    Question();

  } else if (scene === 7) {

    wrongScene();

  } else if (scene === 8) {

    rightScene();

  } else if (scene === 9) {
    
    DropDownScene();
    
  } else if (scene === 10) {
  
    if (scene10Counter === 0) {
       msBeforeScene10 = round(millis());
       scene10Counter++;
    }
    
    keygame = 2;
    GameDrop();

  } else if (scene === 11) {
    
    scene10Counter = 0;
    ChaseDown();
    
  } else if (scene === 12) {

    keygame = 1;
    SideGame();
    
  } else if (scene === 13) {

    EndMenu();

  } else if (scene === 14) {

    aboutUs();
    
  }
};