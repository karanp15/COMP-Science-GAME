var k = 0;
var platform = function() {
  for (var i = 400; i < 18000; i = i + 250) {
    
    noStroke();
    rectAndCheck(100, i, hole[k], 10)
    rectAndCheck(hole[k] + 250, i, 500 - hole[k], 10);
    k++;    
    
  }

  checkpoint(100,18100,600,10,2);
  k = 0;
}

var rectAndCheck = function(x, y, w, h) {

  fill(CRed, CGreen, CBlue);
  rect(x, y, w, h);

  if (person.pos.y + 75 + person.height > y && person.pos.y + 75 < y + h && person.pos.x + 75 + person.width > x && person.pos.x + 75 < x + w) {

    person.vel.y *= 0;
    person.pos.y = y - 201;
    
  }

}

var checkpoint = function(x, y, w, h, sceneAdd){

  fill(0, 255, 0);
  rect(x, y, w, h);

  if (person.pos.y + 75 + person.height > y && person.pos.y + 75 < y + h && person.pos.x + 75 + person.width > x && person.pos.x + 75 < x + w) {

    scene += sceneAdd;
    restart += 1;
    person.pos.y = 0;
    
  }
}