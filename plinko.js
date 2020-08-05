class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
        }
        this.body = Bodies.circle(x, y, 10, options);
    World.add(world, this.body);
    this.radius = 10;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.radius, this.radius)
        pop();
    }
}