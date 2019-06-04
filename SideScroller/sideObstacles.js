var sideRectAndCheck = function(x, y, w, h) {
  
  rect(x, y, w, h,10);
    
  if (SidePerson.pos.y + SidePerson.height > y && SidePerson.pos.y < y + h && SidePerson.pos.x + SidePerson.width > x && SidePerson.pos.x < x + w) {

    hit--;
    ErrorEffect.setVolume(0.05);
    ErrorEffect.play();
  }
}

var SideCheckpoint = function(x, y, w, h){

  fill(0, 255, 0);
  rect(x, y, w, h);

  if (SidePerson.pos.x + SidePerson.width > x) {

    scene += 2;
    SidePerson.pos.x = 0;
    SidePerson.vel.x = 7; 
    hit = 100;
    
  }
}


h = 0;
var obticles = function() {
  //obticles
  for (var i = 1000; i < 60000; i = i + 900) {
    fill(CRed, CGreen, CBlue);

    if (obstacle[h] === 1) {
      
      sideRectAndCheck(i, height - 330, 150, 75, 15)
      sideRectAndCheck(i + 42, height - 630, 75, 330, 15)
      
    } else if (obstacle[h] === 2) {
      
      sideRectAndCheck(i, height - 150, 75, 150, 15);
      sideRectAndCheck(i, height - 600, 75, 150, 15);
      
    } else if (obstacle[h] === 3) {
      
      sideRectAndCheck(i, height - 225, 75, 225);
      
    } else if (obstacle[h] === 4) {

      sideRectAndCheck(i, height - 330, 83, 450, 15);
    }
    
           
    h++;
  }
  h = 0;
}
