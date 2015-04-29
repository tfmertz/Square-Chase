function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    rect(width/2-25, height/2-25, 50, 50);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(0);
}
