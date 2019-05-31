function Person() {
  this.pos = createVector(200, 250);
  this.vel = createVector(0, 0);
  //change value of X to 1 to get it moving
  this.acc = createVector(0, 0)
  this.width = 85;
  this.height = 125;
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    this.pos.x = constrain(this.pos.x, 0, 600);
    
  }
  this.display = function() {
    fill(CRed, CGreen, CBlue);
    rect(this.pos.x + 75, this.pos.y + 75, this.width, this.height, 5);
    
    if(CPerson === 1){
      image(BoxMan, this.pos.x + 63, this.pos.y + 65, 110, 145)
    }else if (CPerson === 2){
      image(TLady, this.pos.x + 63, this.pos.y + 65, 110, 145)
    }else if(CPerson === 3){
      image(NathanMan, this.pos.x + 63, this.pos.y + 65, 110, 145)
    }else if(CPerson === 4){
      image(KaranMan, this.pos.x + 53, this.pos.y + 65, 140, 145)
    }
  }
  this.edges = function() {
    
    if (this.pos.x < 30) {
      this.vel.x *= 0;
      this.pos.x = 30;
    }
    if (this.pos.x > width - 50) {
      this.vel.x *= 0;
      this.pos.x = width - 50;
    }
    
  }
}