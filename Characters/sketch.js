/*
	mmp 310 week 1
	interactive story
	characters sketch
	by nathan
*/
// global variables

var story = "Once upon a time, there was an basketball and a soccerball.";
var currentSetting = "day";

var itemClicked = "blackGuy";
var bgColor = "lightblue";

var sunX = 100;
var sunY = 100;
var sunSize = 100;
var storyX = 900;
var storyY = 50;


function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = height - 50;
}

function draw() {
    var fredX = window.windowWidth / 2 - 300;
    var bobbyX = window.windowWidth / 2 + 300;

    var fredY = 200;
    var bobbyY = 200;

    background(bgColor);

    // Fred
    drawBody(fredX, fredY, "#ffebba");
    // Bobby
    drawBody(bobbyX, bobbyY, "#c67400");

    if (currentSetting == "day") {
  		fill('gold');
  		noStroke();
  		ellipse(sunX, sunY, sunSize);

  		// to change the scene
  		if (mouseIsPressed) {
  			currentSetting = "evening";
  			bgColor = "mediumslateblue";
  		}

    	} else if (currentSetting == "evening") {
    		fill('orange');
    		noStroke();
    		ellipse(sunX, sunY + 100, sunSize);

    		// click on a character to eat it
    		if (mouseIsPressed) {
    			var fredDistance = dist(mouseX, mouseY, fredX, fredY);
          console.log(`${fredDistance} ${fredDistance/2}`)
    			if (fredDistance <= (fredDistance / 2)) {
    				personSelected = "Fred";
    				currentSetting = "night";
    				bgColor = "darkblue";
    			}
    		}

    	} else if (currentSetting == "night") {
    		fill('crimson');
    		noStroke();
    		ellipse(sunX, sunY + 200, sunSize);
    }
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


function drawText(text) {
  text(text, storyX, storyY);
}
