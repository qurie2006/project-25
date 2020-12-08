class side{
    constructor(x, y, width, height){
   var options = {
       'isStatic': true,
       'restitution': 0.3,
       'density': 1.2,
       'friction': 0.5
   }
   this.body = Bodies.rectangle(x, y, width, height, options);
   this.width = width;
   this.height = height;
   this.image = loadImage("sprites/dustbin.png");
   World.add(world, this.body)
   }
   display(){
    push();
    var pos = this.body.position;
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,pos.x, pos.y, 150, 150);
    pop();
   }
   }