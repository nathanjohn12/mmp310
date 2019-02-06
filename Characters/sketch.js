/*
	mmp 310 week 1
	interactive story
	characters sketch
	by nathan
*/
// global variables

var story = "Once upon a time, there was an basketball and a soccerball.";

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = height - 50;
}

function draw() {
    var personX = 200;
    var personY = 200;
    background(50);

    // Draw a new head
    drawBody(personX, personY, "#ffebba");
    drawBody(personX + 400, personY, "#c67400");
}

function drawBody(x, y, color) {
    drawHead(x, y, color);
    drawLegs(x, y + 50);
}

function drawHead(x, y, color) {
    // left eye
    var leftEye = x - 20;
    // right eye
    var rightEye = x + 20;

    fill(color);
    ellipse(x, y, 100); // head
    stroke(10);
    fill("black");
    ellipse(leftEye, y, 10); // left eye
    ellipse(rightEye, y, 10); // right eye
}

function drawLegs(x, y) {
    fill("black");
    stroke(10);
    // Body
    line(x, y, x, y + 250);

    // Left Arm
    line(x - 100, y + 100, x, y + 50);

    // Right Arm
    line(x + 100, y + 100, x, y + 50);

    // Left leg
    line(x, y + 250, x + 100, y + 390);

    // Left leg
    line(x, y + 250, x - 100, y + 390);
}