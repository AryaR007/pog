class Base
{
    constructor (x,y,width,height,angle)
    {
        var options ={
            restitution:0.8,friction:1,density:1
            }
            this.body=Bodies.rectangle(x,y,width,height,options)
            World.add(world,this.body)
            this.width=width;
            this.image=loadImage("base.png")
            this.height=height;
           
    }
    display() {
        var angle=this.body.angle
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(angle)
        imageMode(CENTER)
        image (this.image,0,0,this.width,this.height)
        pop()



    }
}