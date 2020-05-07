class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            length: 250,
            stiffness: 0.03
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
    var pointA = this.chain.bodyA.position;
  var pointB = this.chain.bodyB.position;
push(); 
  strokeWeight(8);
stroke("white"); 
    line(pointA.x,pointA.y,pointB.x,pointB.y); 
pop(); 
    }
}