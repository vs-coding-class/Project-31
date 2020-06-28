class Ground{
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(width/2,790,480,20,options);
      this.width = 480;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(11,133,160);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
