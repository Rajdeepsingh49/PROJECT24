class Ground{
    constructor(x,y,width,height){
        var ops = {
            isStatic:true
          }
        
        

        this.body = Bodies.rectangle(x,y,width,height,ops);
        World.add(world,this.body);

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
      
    }  



display(){
    Groundpos = this.body.position;
    rectMode(CENTER);
    fill("White");
    strokeWeight(3);
    rect(Groundpos.x,Groundpos.y,this.width,this.height);
    
   }

}
