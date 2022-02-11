class Box{
    constructor(x,y,width,height){

   this.option=
    {
        isStatic:true,
        restitution:0
    }

    this.width=width;
    this.height=height;

    this.body=Bodies.rectangle(x,y,width,height,this.option);
    World.add(world,this.body);

    
    }
    
    display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    stroke("white")
    fill("red");
    rect(0,0,this.width,this.height);
    pop();
    }
    }