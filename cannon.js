class Cannon{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    };

    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        if(keyIsDown(LEFT_ARROW)){
            angle -=1
        }
        if(keyIsDown(RIGHT_ARROW)){
            angle +=1
        }
        push();
        fill(255);
        translate(pos.x, pos.y);
        //rectMode(CENTER);
        rotate(angle);
        strokeWeight(2);
        //Create the shooter from which the cannonballs will get dispersed
        rect(0, 0, this.width, this.height);
        pop();
        
        fill(255);
        strokeWeight(2);
        //Create the semicircle above the two rectangles 
        arc(70, 465, 90, 90, 180, 360);

        //Create the two rectangles below the semicircle
        rect(20, height-85, 100, 20);
        rect(20, height-65, 100, 20);
    }
}
