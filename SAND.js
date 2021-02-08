class Sand {
    constructor(x, y, radius) {
      var options ={
          'restitution':2.5,
          'friction':1.8,
          'density':1
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }