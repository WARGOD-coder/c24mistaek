class Iron {
    constructor(x,y){
        var options = {
            'density':0.8,
            'friction': 3,
            'restitution':30
          };
        this.body=Bodies.rectangle(x,y,55,100,options)
        this.width=55
        this.height=100
        World.add(world, this.body);
    }

display(){
    var pos = this.body.position;
 

    push();
    translate(pos.x, pos.y);
    strokeWeight(3);
    stroke('white')
    fill('purple')
    rectMode(CENTER)
    rect(0, 0, this.width, this.height);
    pop();
  };
}