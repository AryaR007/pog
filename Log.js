class Log extends Base
{
    constructor (x,y,width,height,angle)
{
    super(x,y,width,height,angle)
    this.image=loadImage("wood2.png")
    console.log(angle)
    Matter.Body.setAngle(this.body,angle)
        }
    }
        