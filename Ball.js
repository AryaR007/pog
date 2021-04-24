class Ball
{
    constructor (x,y,radius)
    {
     var  BallOptions ={
         restitution:1
        }
        // this is where we basically add the body;
        this.body=Bodies.circle(x,y,radius,BallOptions)
        World.add(world,this.body)
        this.radius=radius
    }
    display()
    {
        // this is where we give the radius and etc... fr the ball, and we also give push and pop to avoid a couple errors.
        push () 
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
        pop ()
    }

}
