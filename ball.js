class ball  {
    constructor(x,y)   {
        var options = {
            isStatic: false,
            restitution: 0,
            density: 1.2,
            friction: 0.5
        }
        this.body = Bodies.circle(x,y,23,options);
    
        this.image = loadImage("sprites/paper.png");
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,0,0,80,70);
            pop();
        }

}
