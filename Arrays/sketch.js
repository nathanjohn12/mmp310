/* 
array example
week 7 MMP 310
*/
var body = []; //bodies

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = height - 50;
}

function draw() {
    background(51);

    for (let i = 0; i < body.length; i++) {
		drawBody(body[i][0], body[i][1],body[i][2]);
		body[i][1] += 2;
    }
    
}
for (let i = 0; i < body.length; i++) {
		let c = points[i][0] - width/2; // offset the drawing 
		let drawBody = points[i][1] - height/2; 
	}
    
function mousePressed() {
    let c = "#ffebba";
    if (mouseX > width/2){
        c = "#c67400";
    }
	body.push([mouseX, mouseY, c]);
   
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
    