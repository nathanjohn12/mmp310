/* 
NBA rookies Data Vis
mmp 310 week 8
*/

var rookies;
function preload() {
	rookies = loadTable('rookies.csv', 'csv', 'header');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	textSize(50);
	textAlign(LEFT, CENTER);
	noStroke();
}

function draw() {
	background(61);
	
	for (let i = 0; i < rookies.getRowCount(); i++) {
		let ast = rookies.get(i, 'ASTper', fill('blue'));
		let min = rookies.get(i, 'MPper');
        let pts = rookies.get(i, '3Pmadeper')
		let x = map(min, 0, 36, 0, width);
		let y = map(ast, 0, 8, height, 0);
        let p = map(pts, 0, 170, width, 0);
		
		fill('');
		if (dist(x, y, mouseX, mouseY) < 5) {
			let player = rookies.getString(i, 'Player').split('\\')[0];
			text(player, 100, 200)
            fill('green');
			text(ast, 100, 250)
            fill('red');
			text(min, 100, 300);
			fill('blue');	
		}
		ellipse(x, y, 10);
	}
}
