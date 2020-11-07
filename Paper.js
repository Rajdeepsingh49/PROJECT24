class Paper{
    constructor(x,y,r){

        var ops={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1
        }
    

        this.x=x;
        this.y=y;
        this.r=r;
    
        this.body = Bodies.circle(this.x,this.y,this.r/2,ops);
        World.add(world,this.body);
    } 

    

display(){
    
    Paperpos = this.body.position;
    push();
    translate(Paperpos.x,Paperpos.y,);
    rectMode(CENTER);
    strokeWeight(3);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop();
   }
}