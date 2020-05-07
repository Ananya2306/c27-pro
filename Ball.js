class Ball {
    constructor(x, y,radius) {
        this.body = Bodies.circle(x,y,radius);
        this.radius = radius;
      //  this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      MoveWithMouse(){
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
   
     }
   
     LeaveMouse(){
        this.body.position.x = xpos;
        this.body.position.y = ypos;
        xpos = this.body.position.x;
        ypos = this.body.position.y;
   
     }
   
     display() {
       var pos = this.body.position;
           push();
           translate(pos.x,pos.y);
            strokeWeight(10);
           stroke("pink"); 
           fill("purple");
           ellipse(0,0,this.radius);
           pop();
       }
      
     };
/*
      display(){
          var pos = this.body.position;
      //  var angle = this.body.angle;
        push();
      //  translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        fill("blue"); 
        ellipse(pos.x, pos.y,this.radius);
        pop();
      }
}
*/