class plinko{
	constructor(x,y){
		var options={
			isStatic:true,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}

		this.r=10;
        this.body=Bodies.circle(x,y,this.r/2,options);
		World.add(world, this.body);
	}

	display(){
		push();
		translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        noStroke();
		fill(255);
		ellipse(0,0,this.r, this.r);
		pop();		
	}
}