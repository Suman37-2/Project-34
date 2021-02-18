class Fly{
    constructor(bodyA,pointB){
       var options={
          stifness:3,
          length:200,
          bodyA:bodyA,
          pointB:pointB
       } 
       this.pointB=pointB;
       this.string=Constraint.create(options);
       World.add(myWorld,this.string);
    } 
 
    display(){
        var posA=this.string.bodyA.position;
        var posB=this.pointB;
        push();
        strokeWeight(0);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
    }
 }