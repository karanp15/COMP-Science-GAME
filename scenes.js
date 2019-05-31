//logo scene

var logo = function() {

  push();
  translate(100, 100);
  if (i < -2.3) {
    translate(400, 440);
    rotate(HALF_PI / 0.5);
    scene++;
  } else {
    i -= 0.018;
  }
  translate((i + 1) - i * 200, (i + 1) - i * 200 + 20);
  scale(i + 1);

  textStyle(BOLD);
  background(i * 70, i * -45, 250);
  textSize(55);
  fill(i * 150, i * -195, 190);
  text("B", 184, 145);
  text("N", 184, 285);
  text("A", 119, 220);
  text("K", 249, 220);
  fill(i * 150, i * -195, 190);
  text("The", 149, 86);
  text("Xplorers", 100, 356);

  //lines
  strokeWeight(10);
  stroke(i * 150, i * -195, 190);
  line(99, 99, 299, 299);
  line(299, 99, 99, 299);
  pop();

  //text
  textSize(60);
  fill(i * 150, i * -195, 190);
  text("Developed by:", 117, 67);

}

//Main Menu

var MainMenu = function() {

  image(Jungle1, 0, 0, 600, 600);
  fill(300);
  textSize(45);
  textStyle(BOLD);
  text('THE LOST JUNGLE BANK', 25, 150);
  noStroke();

  //Instruction
  button(80, 250, 200, 75, 255, 1);
  textSize(35);
  fill(79, 193, 34);
  text("Instruction", 90, 300);

  //Options
  button(320, 250, 200, 75, 255, 2);
  textSize(37);
  fill(79, 193, 34);
  text("Options", 350, 300);

  //Play
  button(120, 350, 350, 100, 255, 3);
  textSize(80);
  fill(79, 193, 34);
  text("Play", 220, 430);

}

//Instruction scene

var Instruction = function() {

  background(70);
  fill(100, 309, 178)
  textSize(50)
  text("INSTRUCTIONS", 110, 100);
  fill(100, 309, 178);
  textSize(20);
  text(" - To Play The Lost Jungle Bank You First Need To Pick A Character. After That You Will Start Playing.", 60, 190, 500, 200);
  text(" - To Move You Will Press The Arrow  Keys And Space Bar To Jump", 60, 250, 500, 200);
  text(" - After That You Know The Basics, Just Rember Dont Let Rex Catch You!", 60, 450, 500, 200);
  image(Keys, 50, 300, 500, 150)
  button(380, 500, 200, 75, 200, -1);
  textSize(70);
  fill(60);
  text("Back", 400, 560);

}

//Options scene

var Options = function() {
  //pictures
  background(0);

  textSize(100);
  text('OPTIONS', 65, 100)

  fill(100);
  rect(-100, 110, 10000, 10);

  textSize(25);
  fill(249, 223, 52);
  text('CHOSE YOUR CHARACTER AND COLOR!', 55, 150)

  //Character Option
  Cbutton(50, 165, 185, 50, 1);
  Cbutton(35, 225, 215, 50, 2);
  Cbutton(-10, -10, 20, 20, 3);
  Cbutton(590, -10, 20, 20, 4);


  //color option

  ColorButton(320, 200, 75, 75, 242, 166, 2);
  ColorButton(410, 200, 75, 75, 255, 53, 191);
  ColorButton(500, 200, 75, 75, 0, 20, 150);
  ColorButton(320, 290, 75, 75, 0, 255, 255);
  ColorButton(410, 290, 75, 75, 63, 232, 37);
  ColorButton(500, 290, 75, 75, 200, 50, 0);

  fill(CRed, CGreen, CBlue);
  rect(25, 290, 280, 290, 15);
  if (CPerson === 2)
    image(TLady, 30, 290, 280, 280);
  else if (CPerson === 1)
    image(BoxMan, 10, 270, 330, 330);
  else if (CPerson === 3)
    image(NathanMan, 10, 270, 330, 330);
  else if (CPerson === 4)
    image(KaranMan, 10, 270, 330, 330);

  fill(120, 237, 233);
  textSize(30);
  text('Box-Man!', 70, 200)
  text('Triangle Girl!', 50, 260)

  //buttons
  button(380, 500, 200, 75, 0, -1);
  textSize(70);
  fill(255);
  text("Back", 400, 560);
}

//StoryScene1

var StoryScene1 = function() {

  background(153, 255, 102);
  image(Jungle2, -200, -20, 1000, 650);
  textStyle(BOLD);
  textSize(35);
  button(380, 500, 200, 65, 255, 1);
  textSize(40);
  fill(0);
  text("LETS GO!", 390, 550);

}

//Question Scene

var option = [];
var n1a, n2a, n1s, n2s, n1m, n2m, i, j, z, t;
var que = "";


var Question = function() {

  image(Question1, 0, 0, 600, 600);

  if (z3 == 1)
    Qbutton(85, 240, 85, 50, 255, 1);
  else
    Qbutton(85, 240, 85, 50, 255);

  if (z3 == 2)
    Qbutton(255, 240, 85, 50, 255, 1);
  else
    Qbutton(255, 240, 85, 50, 255);

  if (z3 == 3)
    Qbutton(425, 240, 85, 50, 255, 1);
  else
    Qbutton(425, 240, 85, 50, 255);

  fill(255);


  var l = 1;
  for (var k = 0; k < 3; k++) {
    if (k === z3 - 1) {
      option[k] = answer(0);
    } else {
      if (l == 1) {
        option[k] = answer(z1);
        l++;
      } else {
        option[k] = answer(z2);
      }
    }

  }

  textSize(60);
  fill(255);
  text(que, 80, 140)
  textSize(20);
  fill(51);
  text(option[0], 120, 270)
  text(option[1], 290, 270)
  text(option[2], 460, 270)
}

//Right scene

var rightScene = function() {

  firstTimeScene6 = 0;
  background(45, 216, 51);
  button(110, 485, 400, 75, 255, 1);
  fill(255, 255, 255);
  textSize(75);
  text("Good Job!", 120, 100)
  image(CheckMark, 190, 160);
  fill(45, 216, 51);
  text("CONTINUE", 110, 550);


}

//Wrong scene

var wrongScene = function() {

  background(255, 0, 0);
  button(110, 500, 400, 75, 255, -1);
  textSize(70);
  fill(255, 0, 0);
  text("TRY AGAIN", 110, 560);
  fill(255);
  text("SORRY", 180, 90);
  textSize(450);
  fill(255);
  text("X", 160, 440);

}

//DropDown

var DropDownScene = function() {
  image(DropDown, 0, 0, 600, 620);
  button(380, 400, 200, 75, 255, 1);

  if (CPerson === 2)
    image(TLady, 30, 290, 280, 280);
  else if (CPerson === 1)
    image(BoxMan, 10, 270, 330, 330);
  else if (CPerson === 3)
    image(NathanMan, 10, 210, 400, 400);
  else if (CPerson === 4)
    image(KaranMan, 10, 210, 400, 400);
  
  textSize(70);
  fill(0);
  text("Next", 400, 460);
}

//Chase Down
var ChaseDown = function() {

  image(chaseDown, -220, -70, 1050, 850);
  button(380, 500, 200, 75, 255, 1);
  textSize(70);
  fill(0);
  text("Next", 400, 560);

}

//End Menu

var EndMenu = function() {

  background(70);
  image(Thanks, -220, -70, 1050, 850);
  fill(255);
  textSize(100)
  textStyle(BOLD);
  button(40, 470, 290, 65, 355, 1);
  textSize(30);
  fill(0);
  text("KEEP ON GOING!", 60, 515);

  button(280, 100, 280, 65, 255, -11);
  textSize(48);
  fill(0);
  text("Play Again!", 290, 150);

}

//About us

var aboutUs = function() {

  background(51);
  image(Night, 0, 0, 600, 600);
  textSize(50)
  fill(255);
  text("All About Us", 160, 100);
  fill(255);
  textSize(30);
  text(" - Created by the intelligent mind of Karan Patel & Nathan Mask", 60, 150, 500, 200);
  text(" - Thanks to the creative duos Bentley & Alicia", 60, 250, 500, 200);
  text(" - ICS20 Final project Started: April, 10, 2019  Finished: June, 15, 2019", 60, 350, 500, 200);
  button(380, 500, 200, 75, 200, -1);
  textSize(70);
  fill(60);
  text("Back", 400, 560);

}