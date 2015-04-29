var square;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    square = new Target();
}

function draw() {
    background(0);
    square.move();
    square.display();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}

function Target(){
    this.x = width/2;
    this.y = height/2;
    this.maxSpeed = 15;
    this.diameter = 50;
    this.variation = 0.20;
    this.Xspeed = 3;
    this.Yspeed = 3;

    this.move = function() {

        if (this.x > windowWidth - this.diameter) {
            //add slight variation
            this.Xspeed *= (1 + random(0, this.variation)) * -1;
            this.x = windowWidth - this.diameter - 1;
        }
        if (this.x < 0) {
            this.Xspeed *= (1 + random(0, this.variation)) * -1;
            this.x = 1;
        }
        if (this.y > windowHeight - this.diameter) {
            this.Yspeed *= (1 + random(0, this.variation)) * -1;
            this.y = windowHeight - this.diameter -1;
        }
        if (this.y < 0) {
            this.Yspeed *= (1 + random(0, this.variation)) * -1;
            this.y = 1;
        }

        if(this.Xspeed > this.maxSpeed) {
            this.Xspeed = this.maxSpeed;
        }
        if(this.Yspeed > this.maxSpeed) {
            this.Yspeed = this.maxSpeed;
        }
        this.x += this.Xspeed;
        this.y += this.Yspeed;
    };

    this.display = function() {
        rect(this.x, this.y, this.diameter, this.diameter);
    }
}
