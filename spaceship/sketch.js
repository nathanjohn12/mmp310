/*
	mmp 310 week 9
	spaceship game
*/

var spaceship = { 
	x: 0, 
	y: 200,
	size: 50,
	speed: 5,
    
	display: function () {
         fill('green');
		triangle(
			this.x, this.y, 
			this.x - this.size, this.y + this.size * 2, 
			this.x + this.size, this.y + this.size * 2);
            
            fill('white');
        ellipse(this.x, this.y + this.size * 2, this.size);
        
		
	},
    
    
    
    
    
	update: function () {
		if (keyIsDown(RIGHT_ARROW)) {
			this.x += this.speed;
		}
	
		if (keyIsDown(LEFT_ARROW)) {
			this.x -= this.speed;
		}
        
        if (keyIsDown(UP_ARROW)){
            this.y -=this.speed;
        }
        
        if (keyIsDown(DOWN_ARROW)){
            this.y +=this.speed;
        }
	}
};

var asteroids = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
}

function draw() {
    
    if (random(100) < 90){
       background(100); 
    }
	
    
    //adds random asteroid
    if (random(100) > 99) {
        //create an asteroid
        asteroids.push(new Asteroid());
    }
	
	spaceship.display();
	spaceship.update();
    
    for (let i = 0; i < asteroids.length; i++){
        asteroids[i].display();
        asteroids[i].update();
        asteroids[i].collide();
    }
}






