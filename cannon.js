class Cannon{
    constructor(bodyA,bodyB){

        var constraintoptions = {
       bodyA:bodyA,
       bodyB:bodyB,
    

        }
      //  this.body = Bodies.rectangle(75,height-125,60,30, options);
        this.cannon = Constraint.create(constraintoptions);
     /*   this.width = width;
        this.height = height;
        World.add(world, this.body);*/
        World.add(world,this.cannon);
    };

    attach(body){
        this.cannon.bodyA = body;
    }

    shoot(){
        this.cannon.bodyA = null;
    }


  /*  display(){
     //   var pos = this.body.position;

        push();
        fill(255);
       // translate(pos.x, pos.y);
        rotate(angle);
        //Create the shooter from which the cannonballs will get dispersed
        rect(0, 0, this.width, this.height);
        pop();
        fill(255);

        arc(70, 465, 90, 100, 180, 360);

        rect(20, height-85, 100, 20);
        rect(20, height-65, 100, 20);

 

    } */
}   
