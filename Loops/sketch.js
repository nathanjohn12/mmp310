/*
	mmp 310 week 4
	loop example with random
*/

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(80);
	rectMode(CENTER);
	noStroke();
	textAlign(100);
	
	// making a row of self portraits
	let faceSize = random(50, 50);
	let increment = faceSize;
	for (let x = 0; x <= width; x += increment) {
		
		let y = height/2 + random(-300, 300);
		
		faceSize = random(150, 150);
		
		let a = random(155);
		let b = random(200, 355);
		let c = random(455);
		fill(a, b, c);
		ellipse(x, y, faceSize); // face
		
		var randomChoice = random(4); // making random choices 
		if (randomChoice > 2) {
			fill('white');
		} else if (randomChoice > 1) {
			fill('black');
		} else {
			fill('blue');
		}
		
		let eyeSize = faceSize / 5;
		
		if (random(4) > 0.5) {
			ellipse(x + eyeSize, y - eyeSize, eyeSize); // left eye
			ellipse(x - eyeSize, y - eyeSize, eyeSize); // right eye
		} else {
			rect(x + eyeSize, y - eyeSize, eyeSize, eyeSize); // left eye
			rect(x - eyeSize, y - eyeSize, eyeSize, eyeSize); // right eye
		}
		
		fill('white');
		let mouthSize = faceSize / 2;
		rect(x, y + mouthSize / 2 + random(10), mouthSize, mouthSize / 4, mouthSize/8);
		
		
	}
	
}







