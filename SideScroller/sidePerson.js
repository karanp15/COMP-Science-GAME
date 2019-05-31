function SidePerson() {
  this.pos = createVector(50, 200);
  this.vel = createVector(9, 0);
  this.acc = createVector(0, 0);
  this.background = createVector(0, 0);
  this.width = 75;
  this.height = 150;
  
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }
  this.display = function() {

    noStroke();
    fill(CRed, CGreen, CBlue);
    rect(this.pos.x + 50, this.pos.y, this.width, this.height,10); //Head
    
    if(CPerson === 1){
      image(BoxMan, this.pos.x + 40, this.pos.y + 10,100, 145)
    }else if (CPerson === 2){
      image(TLady, this.pos.x + 40, this.pos.y + 10, 110, 145)
    }else if(CPerson === 3){
      image(NathanMan, this.pos.x + 40, this.pos.y + 10,100, 145)
    }else if(CPerson === 4){
      image(KaranMan, this.pos.x + 25, this.pos.y -10,130, 165)
    }

  }
  this.edges = function() {
    if (this.pos.y > height - this.height) {
      this.vel.y *= 0;
      this.pos.y = height - this.height;
    }

    if (this.pos.y < -200) {
      this.pos.y = -200;
    }
  }
}