class paper
{
    constructo(){
        var options={
            isStatic:false,
            restitution:0.3,
            density:1.2,
            friction:0

        }
        this.x=x
        this.y=y
        this.r=r
        this.image=loadImage("paper.png")

       this.body=Bodies.rectangle(this.x,this.y,(this.r-20)/2,options)
       World.add(world,this.body)
       
    }
    display()
    {
        var pos=this.body.pos;
        push()
        translate(this.x,this.y)
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}