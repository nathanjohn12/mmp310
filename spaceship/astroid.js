/*
    asteroid class
*/

class Asteroid {
    constructor() {
        this.x = random(width);
        this.y = -100;
        this.size = Math.random() * (150 - 50) + 50;
        this.speed = {
            x: random(-1, 1),
            y: random(7)
        };
    }
    
    display() {
        fill(0);
        stroke(211,211,211);
        ellipse(this.x, this.y, this.size);
    }
    
    update() {
        this.x += this.speed.x * 5;
        this.y += this.speed.y * 5;
    }
    
    collide() {
        var d = dist(this.x, this.y, spaceship.x, spaceship.y);
        if (d < this.size / 2){
            textSize(50); 
            textAlign(CENTER, CENTER);
            fill('white'); 
            text("HAHA! You Died", width/2, height/2);
            noLoop();
            
        }
    }
}