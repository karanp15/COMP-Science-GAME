var counter = 0;

var timer = function() {

  var millisecond = round(millis()) - counter;
  textSize(20);

  var runningM = round(70 + (msBeforeScene10/1000) - (millisecond / 1000));
  
  if (runningM < 0) {
    scene++;
    counter = 0;
    person.pos.x = 200;
  }
  
  textSize(40);
  fill(255);
  text("Time Left: " + runningM, 200, person.pos.y + 570);

}
