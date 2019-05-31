//Images

function preload() {
  Jungle1 = loadImage('images/jungle.jpg');
  Jungle2 = loadImage('images/Jungle-1.png');
  Treasure = loadImage('images/treasure.jpg');
  Rex = loadImage('images/rex.png');
  Keys = loadImage('images/keys.png');
  Night = loadImage('images/night.jpg');
  CheckMark = loadImage('images/checkMark.png');
  Thanks = loadImage('images/YouDidIt.png');
  Question1 = loadImage('images/question.jpg');
  NathanMan = loadImage('images/NathanMan.png');
  KaranMan = loadImage('images/KaranMan.png');
  BoxMan = loadImage('images/BoxMan.png');
  TLady = loadImage('images/triangle lady.png');
  jungleDrop = loadImage('images/jungleDrop.jpg');
  jungleDrop2 = loadImage('images/jungleDrop2.jpg');
  jungleRun = loadImage('images/jungleRun.jpg');
  jungleRun2 = loadImage('images/jungleRun2.jpg');
  chaseDown = loadImage('images/ChaseDown.jpg');
  DropDown = loadImage('images/DropDown.jpg');
}

//button object

var button = function(buttonX, buttonY, buttonW, buttonH, color, sceneAdd) {
  fill(color);
  if (mouseIsPressed && buttonY < mouseY && buttonY + buttonH > mouseY && buttonX < mouseX && buttonX + buttonW > mouseX) {
    scene += sceneAdd;
  }
  rect(buttonX, buttonY, buttonW, buttonH, 5); // the button  
}

var Cbutton = function(buttonX, buttonY, buttonW, buttonH, CAdd) {
  
  if (mouseIsPressed && buttonY < mouseY && buttonY + buttonH > mouseY && buttonX < mouseX && buttonX + buttonW > mouseX) {
    CPerson = CAdd;
  }
  fill(51);
  rect(buttonX, buttonY, buttonW, buttonH, 5); // the button  
}

var ColorButton = function(buttonX, buttonY, buttonW, buttonH, R,G,B) {
  
  if (mouseIsPressed && buttonY < mouseY && buttonY + buttonH > mouseY && buttonX < mouseX && buttonX + buttonW > mouseX) {
    CRed = R;
    CGreen = G;
    CBlue = B;
  }
  fill(R,G,B);
  rect(buttonX, buttonY, buttonW, buttonH, 5); // the button  
}


//Question Scene objects

var Qbutton = function(buttonX, buttonY, buttonW, buttonH, color, check) {
  fill(color);
  if (mouseIsPressed && buttonY < mouseY && buttonY + buttonH > mouseY && buttonX < mouseX && buttonX + buttonW > mouseX) {
    if (check === 1) {
      fill(255, 170, 0);
      textSize(40);
      scene += 2;
      //right
    } else {
      fill(255, 0, 0);
      textSize(40);
      scene++;
      //wrong
    }
  }
  rect(buttonX, buttonY, buttonW, buttonH, 5); // the button  
}

var answer = function(add) {

  if (z4 == 1) {
    que = "What is " + n1a + " + " + n2a + "?";
    return n1a + n2a + add;

  } else if (z4 == 2) {
    que = "What is " + n1s + " - " + n2s + "?";
    return n1s - n2s - add;

  } else if (z4 == 3) {
    que = "What is " + n1m + " x " + n2m + "?";
    return n1m * n2m + add;
  }
}

var randomNumbers = function() {
  n1a = round(random(1, 100));
  n2a = round(random(1, 100));

  n1s = round(random(8, 100));
  n2s = round(random(8, 100));
  if (n1s < n2s) {
    var temp;
    temp = n1s;
    n1s = n2s;
    n2s = temp;
  }

  n1m = round(random(3, 7));
  n2m = round(random(3, 7));


  z1 = round(random(1, 8));
  z2 = round(random(1, 8));
  if (z1 === z2) {
    z1 += 2;
  }
  z3 = round(random(1, 3));
  z4 = round(random(1, 3));
}

