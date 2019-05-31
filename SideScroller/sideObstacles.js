var sideRectAndCheck = function(x, y, w, h) {
  
  rect(x, y, w, h,10);
    
  if (SidePerson.pos.y + SidePerson.height > y && SidePerson.pos.y < y + h && SidePerson.pos.x + SidePerson.width > x && SidePerson.pos.x < x + w) {

    hit--;
  }
}

/*
var SideCheckpoint = function(x, y, w, h){

  fill(0, 255, 0);
  rect(x, y, w, h);

  if (SidePerson.pos.x + SidePerson.width > x) {

    scene++;
    
  }
}
*/

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
    
    sideCheckpoint(2000,0,60,600)
    
    h++;
  }
  h = 0;
}

var sideCheckpoint = function(x, y, w, h){

  fill(0, 255, 0);
  rect(x, y, w, h);

  if (person.pos.y + 75 + person.height > y && person.pos.y + 75 < y + h && person.pos.x + 75 + person.width > x && person.pos.x + 75 < x + w) {

    scene++;
    
  }
}