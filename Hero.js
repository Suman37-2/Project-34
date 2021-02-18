class Hero{
    constructor(x,y){
    var options={
    density:1   
    }
    this.body=Bodies.rectangle(x,y,150,120,options);
    this.w=150;
    this.h=120;
    this.i=loadImage("Superhero-01.png");
    World.add(myWorld,this.body);
    }    
    
    display(){
    var pos=this.body.position;
    push();
    fill("white");
    imageMode(CENTER);
    image(this.i,pos.x,pos.y,this.w,this.h);
    pop();
    }
    }