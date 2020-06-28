class Divisions{
    constructor(x) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,640,10,280,options);
      this.width = 10;
      this.height = 280;
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(11,133,160);
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
