class particle{
	constructor(x){
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}

		this.r=30;
        this.body=Bodies.circle(x,10,this.r/2,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
		World.add(world, this.body);
	}

	display(){
		push();
		translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        noStroke();
		fill(this.color);
		ellipse(0,0,this.r, this.r);
		pop();		
	}
}