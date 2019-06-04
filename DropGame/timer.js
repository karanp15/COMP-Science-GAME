var counter = 0;
var runningM;

var timer = function() {

  var millisecond = round(millis()) - counter;
  textSize(20);

  if(difficulty === 1){
    runningM = round(100 + (msBeforeScene10/1000) - (millisecond / 1000));
  } else if (difficulty === 2){
    runningM = round(85 + (msBeforeScene10/1000) - (millisecond / 1000));
  }else if (difficulty === 3){
    runningM = round(70 + (msBeforeScene10/1000) - (millisecond / 1000));
  }
  
  if (runningM < 0) {
    scene += 1;
    counter = 0;
    person.pos.y = 200;
    scene10Counter = 0;

  }
  
  textSize(40);
  fill(255);
  text("Time Left: " + runningM, 200, person.pos.y + 570);

}