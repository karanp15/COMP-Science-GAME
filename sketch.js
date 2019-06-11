var person;
var platform;
var hole = [];
var h;
var obstacle = [];
var keygame;

function setup() {
  var canvas = createCanvas(600, 600);
  var Cx = (windowWidth - width) / 2;
  var Cy = (windowHeight - height) / 2;
  canvas.position(Cx, Cy);
  
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
      JumpEffects.setVolume(0.4);
      JumpEffects.play();

    }

  } else if (keygame === 2) {

    if (keyCode === LEFT_ARROW || key === 'a') {

      var left = createVector(-8, 0)
      person.applyForce(left);


    } else if (keyCode === RIGHT_ARROW || key === 'd') {

      var right = createVector(8, 0)
      person.applyForce(right);

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
var difficulty = 1;



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

    WarningRobotScene();

  } else if (scene === 7) {

    DropDownScene();
    
  } else if (scene === 8) {

    if (scene10Counter === 0) {
      msBeforeScene10 = round(millis());
      scene10Counter++;
    }

    keygame = 2;
    GameDrop();
    
  } else if (scene === 9) {

    TempScene();

  } else if (scene === 10) {

    RestartCautionScene();

  } else if (scene === 11) {

    scene10Counter = 0;
    //Ckeck to refesh Questions
    if (firstTimeScene6 === 0) {
      randomNumbers();
      firstTimeScene6++;
    }

    Question();

  } else if (scene === 12) {

    wrongScene();

  } else if (scene === 13) {

    rightScene();

  } else if (scene === 14) {

    JungleEncouragementScene();

  } else if (scene === 15) {

    ChaseDown();

  } else if (scene === 16) {

    keygame = 1;
    SideGame();

  } else if (scene === 17) {

    TempScene2();

  } else if (scene === 18) {

    RestartCautionScene();
    
  } else if (scene === 19) {

    scene10Counter = 0;
    //Ckeck to refesh Questions
    if (firstTimeScene6 === 0) {
      randomNumbers();
      firstTimeScene6++;
    }

    Question();

  } else if (scene === 20) {

    wrongScene();

  } else if (scene === 21) {

    rightScene();

  } else if (scene === 22) {

    EndMenu();

  } else if (scene === 23) {

    aboutUs();

  }
};