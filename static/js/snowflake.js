class Snowflake {
    constructor(x, y) {
        this.pos = {x: x, y: y};
        this.r = snowflakeSize;
        this.angle = 0;
        this.gravity = random(0.5, 2);
        this.seed = random(1);
    }

    show() {

        this.update();

        push();
        stroke(255);
        noFill(255);
        ellipseMode(CENTER);
        angleMode(DEGREES);        
        translate(this.pos.x, this.pos.y)
        ellipse(0, 0, this.r, this.r);
        rotate(this.angle);
        
        line(-this.r, 0, this.r, 0);
        line(0, -this.r, 0, this.r);
        rotate(45);
        line(-this.r, 0, this.r, 0);
        line(0, -this.r, 0, this.r);

        pop();
    }

    update() {
        this.pos.y += this.gravity;

        this.pos.x += noise(this.seed)*windFactor*windDir;
        this.seed += 0.01;
    }

}