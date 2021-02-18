class Block{
    constructor(x,y,width,height){
    this.block=Bodies.rectangle(x,y,width,height);
    this.w=width;
    this.h=height;
    World.add(myWorld,this.block);
    }    
    
    display(){
    var pos=this.block.position;
    var ang=this.block.angle;

    push();
    fill("yellow");
    translate(pos.x,pos.y);
    rotate(ang);
    stroke("black");
    strokeWeight(3);
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
    }
    }