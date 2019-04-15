/*
    asteroid class
*/

class Asteroid extends Entity {
    constructor() {
        super(random(width), 100);
        this.speed.x = random(-1,1);
        this.speed.y =
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
        this.x += this.speed.x * 3;
        this.y += this.speed.y * 3;
    }
    
    
}