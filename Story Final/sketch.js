/*
	mmp 310 week 1
	interactive story
	characters sketch
	by nathan
*/
// global variables

var story = "Once upon a time, there were two friends named Bobby and Fred.Click on one to see how they met.";
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
var bobby = null;
var fred = null;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(20);
    textAlign(CENTER, CENTER);
    storyX = width / 2;
    storyY = height - 50;
    bobby = new Person(bobbyX, bobbyY, "#c67400");
    fred = new Person(fredX, fredY, "#ffebba");
}

function draw() {
    background(bgColor);
    if (whoToDestroy !== 'fred') {
        fred.display()
    }
    if (whoToDestroy !== 'bob') {
        bobby.display();
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

function mouseClicked() {
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



function nextChapter() {
    if (chapter === 'day') {
        drawText('Once upon a time, there were two best friends named Fred and Bob.Click on one to see how they met.');
    } else if (chapter === 'evening') {
        drawText('One day Fred and Bob get in an argument about who had better programming skills and they both said some hurtful things.Click on one to see how it ends.');
    } else if (chapter === 'night') {
        drawText('Ooops, you killed ' + whoToDestroy);
    }
}

function drawText(words) {
    fill(0);
    textAlign(CENTER, CENTER);
    text(words, width / 4, height - 95, width / 2);
}
