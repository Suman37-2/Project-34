class Ground{
constructor(x,y,width,height){
var options={
isStatic:true    
}
this.ground=Bodies.rectangle(x,y,width,height,options);
this.w=width;
this.h=height;
World.add(myWorld,this.ground);
}    

display(){
var pos=this.ground.position;
rectMode(CENTER);
rect(pos.x,pos.y,this.w,this.h);
}
}