/*
	mmp 310 week 1
	interactive story
	characters sketch
	by nathan
*/
// global variables

var story = "Once upon a time, there were two friends named Bobby and Fred.";
var chapter = "day";

var itemClicked = "blackGuy";
var bgColor = "lightblue";

var whoToDestroy = "";

var sunX = 100;
var sunY = 100;
var sunSize = 100;
var storyX = 900;
var storyY = 50;

var winWidth = window.innerWidth;

var fredX = (winWidth / 2) - 300;
var fredY = 200;
var fredWidth = 200;

var bobbyY = 200;
var bobbyX = (winWidth / 2) + 300;
var bobbyWidth = 200;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = height - 50;
}

function draw() {
    background(bgColor);
    if(whoToDestroy !== 'fred') {
      drawBody(fredX, fredY, fredWidth, "#ffebba");
    }
    if (whoToDestroy !== 'bob') {
      drawBody(bobbyX, bobbyY, bobbyWidth, "#c67400");
    }
    // Sun
    drawSun();
    nextChapter();
}

function drawSun() {
  fill('gold');
  noStroke();
  ellipse(sunX, sunY, sunSize);
}

function mouseClicked () {
  if (chapter === "day") {
    fill('gold');
    noStroke();
    ellipse(sunX, sunY, sunSize);

    chapter = "evening";
    bgColor = "#FF8140";

  } else if (chapter === "evening") {
      fill('gold');
      noStroke();
      ellipse(sunX, sunY + 100, sunSize);
      // click on a character to eat it
      var fredDistance = dist(mouseX, mouseY, fredX, fredY);
      if (fredDistance < fredWidth / 2) {
        whoToDestroy = "bob";
        chapter = "night";
        bgColor = "darkblue";
      }
      var bobbyDistance = dist(mouseX, mouseY, bobbyX, bobbyY);
      if (bobbyDistance < bobbyWidth / 2) {
          whoToDestroy = "fred";
          chapter = "night";
          bgColor = "darkblue";
      }
    } else if (chapter === "night") {
      fill('#D8D8D8');
      noStroke();
      ellipse(sunX, sunY + 200, sunSize);
      chapter = 'reset';
    } else {
      chapter = 'day';
      whoToDestroy = '';
      bgColor = "lightblue";
      ellipse(sunX, sunY, sunSize);
    }
  return false;
}

function drawBody(x, y, width, color) {
    drawHead(x, y, width, color);
    drawLegs(x, y + 50);
}

function drawHead(x, y, width, color) {
    // left eye
    var leftEye = x - 20;
    // right eye
    var rightEye = x + 20;

    fill(color);
    ellipse(x, y, width); // head
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

function nextChapter() {
  if(chapter === 'day') {
    drawText('Once upon a time, there were two best friends named Fred and Bob');
  } else if (chapter === 'evening') {
    drawText('One day Fred killed Bobs mother');
  } else if (chapter === 'night') {
    drawText('Ooops, you killed ' + whoToDestroy);
  }
}
function drawText(words) {
  fill(0);
  text(words, storyX, storyY);
}
