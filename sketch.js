var square;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    square = new Target();
}

function draw() {

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
    this.diameter = random(10,30);
    this.speed = 5;

    this.move = function() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    };

    this.display = function() {
        rect(this.x, this.y, this.diameter, this.diameter);
    }
}
