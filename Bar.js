class Bar {
    constructor(x, y,width,height) {
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        this.width = width;
        this.height = height;
      //  this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
          var pos = this.body.position;
      //  var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        // rotate(angle);
        rectMode(CENTER);
        strokeWeight(10);
        stroke("blue"); 
        fill("red"); 
        rect(0,0,this.width,this.height);
        pop();
      }
}