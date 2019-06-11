var SidePerson;
var k = 0;
var hit = 100;

var healthBar = function() {
  textSize(40);


  if (difficulty === 4) {
    
    if (hit < 99) {
      scene++;
      hit = 100;
      SidePerson.pos.x = 0;
      SidePerson.vel.x = 7;
    }
    
  } else{
    
    if (hit < 0) {
      scene++;
      hit = 100;
      SidePerson.pos.x = 0;
      SidePerson.vel.x = 7;
    }    
    
  }

  text(hit, SidePerson.pos.x + 245, 50);
  fill(51);
  rect(SidePerson.pos.x + 320, 15, 260, 40);
  fill(255, 0, 0);
  rect(SidePerson.pos.x + 323, 20, hit * 2.5, 30);

}

var SideGame = function() {

  background(91, 144, 229);
  translate(-SidePerson.pos.x, 0);
  var gravity = createVector(0, 1.2);
  SidePerson.applyForce(gravity);


  for (var j = 0; j < 60000; j += 2400) {
    image(jungleRun, j, 0, 2400, 600);
  }

  SidePerson.update();
  SidePerson.edges();
  SidePerson.display();

  if (k === 0) {
    obticles();
    SideCheckpoint(40000, 0, 100, 600)
  }

  healthBar();

}