
var restart = 1;

var GameDrop = function() {
  
  if(restart === 2){
    person.pos.x = 200;
    person.pos.y = 250;
    restart++;
  }
  
  background(10, 31, 63);
  fill(255, 255, 255);
  
  translate(-300, 0);
  var gravity = createVector(0, 1.2);
  person.applyForce(gravity);
  translate(200, -person.pos.y);
  
  for(var j = 0; j < 12600; j +=1800){
    image(jungleDrop,100,j,600,1800);
  }
  for(j = 12600; j < 20000; j +=1800){
    image(jungleDrop2,100,j,600,1800);
  }
  
  person.update();
  person.edges();
  person.display();
  platform(); 
 
  timer();
  
  fill(255, 0, 0);
  textSize(50);
   
  
}