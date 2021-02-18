class Monster{
    constructor(x,y){
    var options={
    density:1,
    isStatic:false,
    friction:3 
    }
    this.body=Bodies.rectangle(x,y,150,120,options);
    this.w=150;
    this.h=120;
    this.i=loadImage("Monster-01.png");
    World.add(myWorld,this.body);
    }    

    
    display(){
    var pos=this.body.position;
    var ang=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(ang);
    imageMode(CENTER);
    image(this.i,0,0,this.w,this.h);
    pop();
    }
    }