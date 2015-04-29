var square;
var score = 0;
var timer = 30;
var gameOver = false;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    square = new Target();
    textSize(32);
    setInterval(myTimer, 1000);
}

function myTimer() {
    if( timer > 0) {
        timer -= 1;
    } else {
        gameOver = true;
    }
}

function draw() {

    if(!gameOver) {
        background(0);
        square.move();
        square.display();
        text("score: " + score, 50, windowHeight - 50);
        text("Timer: " + timer, windowWidth - 200, windowHeight - 50);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
    textSize(32);
    square.display();
    text("score: " + score, 50, windowHeight - 50);
    text("Timer: " + timer, windowWidth - 150, windowHeight - 50);
}

function Target(){
    this.x = width/2;
    this.y = height/2;
    this.maxSpeed = 15;
    this.diameter = 50;
    this.variation = 0.01;
    var randNumX = random(-1, 1);
    var randNumY = random(-1, 1);

    this.Xvelocity = (randNumX == 0) ? 1 : randNumX;
    this.Yvelocity = (randNumY == 0) ? 1 : randNumY;
    this.acceleration;

    this.move = function() {

        //prevents the box from going off the screen
        if (this.x > windowWidth - this.diameter) {
            //add slight variation
            this.Xvelocity *= -1;
            this.x = windowWidth - this.diameter - 1;
        }
        if (this.x < 0) {
            this.Xvelocity *= -1;
            this.x = 1;
        }
        if (this.y > windowHeight - this.diameter) {
            this.Yvelocity *= -1;
            this.y = windowHeight - this.diameter -1;
        }
        if (this.y < 0) {
            this.Yvelocity *= -1;
            this.y = 1;
        }

        //checks if the mouse is inside the box
        //gives points if it is
        if (mouseX >= this.x && mouseX <= this.x + this.diameter && mouseY >= this.y && mouseY <= this.y + this.diameter ) {
            this.Xvelocity *= (1 + random(0, this.variation));
            this.Yvelocity *= (1 + random(0, this.variation));
            score++;
        }

        //caps the velocity at maxSpeed
        if(this.Xvelocity > this.maxSpeed) {
            this.Xvelocity = this.maxSpeed;
        }
        if(this.Yvelocity > this.maxSpeed) {
            this.Yvelocity = this.maxSpeed;
        }
        this.x += this.Xvelocity;
        this.y += this.Yvelocity;
    };

    this.display = function() {
        rect(this.x, this.y, this.diameter, this.diameter);
    }
}
