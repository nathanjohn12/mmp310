/*
    spaceship class
*/

class Spaceship extends Entity {
    constructor() {
        super(width / 2, height - 200);
        this.size = 50;
    }
    display() {
        fill('green');
        triangle(
            this.x, this.y,
            this.x - this.size, this.y + this.size * 2,
            this.x + this.size, this.y + this.size * 2);

        fill('white');
        ellipse(this.x, this.y + this.size * 2, this.size);
    }
    controls() {
        if (keyIsDown(RIGHT_ARROW)) {
            this.speed.x = 5;
        } else if (keyIsDown(LEFT_ARROW)) {
             this.speed.x = -5;
        } else {
          this.speed.x = 0;
        }

        if (keyIsDown(UP_ARROW)) {
            this.y -= this.speed;
        }

        if (keyIsDown(DOWN_ARROW)) {
            this.y += this.speed;

        }
    }
}
