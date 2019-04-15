/*
	mmp 310 week 9
	spaceship game
*/

var spaceship;
var asteroids = [];
var lasers = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    spaceship = new Spaceship();
}

//add lasers
function keyPressed() {
    if (key == ' ') {
       lasers.push(new Laser()); 
    }
}

function draw() {

    if (random(100) < 90) {
        background(100);
    }

    //adds random asteroid
    if (random(100) > 99) {
        //create an asteroid
        asteroids.push(new Asteroid());
    }

    spaceship.display();
    spaceship.update();
    spaceship.controls();

    for (let i = 0; i < asteroids.length; i++) {
        asteroids[i].display();
        asteroids[i].update();

        //collision with spaceship
        if (asteroids[i].collide(spaceship)) {
            textSize(50); 
            textAlign(CENTER, CENTER);
            fill('white'); 
            text("HAHA! You Died", width/2, height/2);
            noLoop();
        }

        //detect all lasers
        for (let j = 0; j < lasers.length; j++) {
            if (asteroids[i].collide(lasers[j])) {
                asteroids[i].died = true;
                lasers[j].died = true;
            }
        }
    }




    for (let i = 0; i < lasers.length; i++) {
        lasers[i].display();
        lasers[i].update();
    }

    //clean up dead asteriods and lasers
    for (let i = 0; i < asteroids.length; i++) {
        if (asteroids[i].died) {
            asteroids[i].remove(asteroids);
        }
    }

    for (let i = 0; i < lasers.length; i++) {
        if (lasers[i].died) {
            lasers[i].remove(lasers);
        }
    }
}
