function setup() {
    createCanvas(windowWidth, windowHeight);
    background(51);


    var columns = 8;
    var rows = 8;
    var w = width / columns; // column width
    var h = height / rows; // row height

    // nested for loop 
    for (let x = 0; x <= width; x += w) {
        for (let y = 0; y <= height; y += h) {

            // line(x1, y1, x2, y2);
            stroke(255);
            strokeWeight(2);
            var r = random(3);
            if (r > 2) {
                line(x + w, y, x + w, y + h);
            } else if (r > 1) {
                line(x, y, x + w, y + h);
            } else {
                line(x + w, y, x, y + h);
            }


            // triangle(x1, y1, x2, y2, x3, y3);
           
            
            var r2 = random(7);
//            fill('red');
            if (r2 < 2) {
                triangle(x - w, y, x - w, y + h, x, y);
            } else if (r > 3) {
                triangle(x, x, x - w, y + h);
            } else {
//                triangle(x - w, x, x - w, y - h);
            }

            // circle(x, y, r)
            stroke(455);
            strokeWeight(5);
            var r3 = random(4);
            if (r3 > 3) {
                circle(x - w, y + h, r + 5)
            }

        }
    }
}


function mouseClicked() {
	save('pattern-1.jpg');
}
