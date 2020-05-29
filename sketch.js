let nSymmetriesSld;
let thicknessSld;
let colorPicker;
let onlyRotateBtn;

let clearBtn;

let lastPoint;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(32);

	// Create UI elements
	nSymmetriesSld = new Slider(start=0, end=24, value=6, 0, 0, width/12, height/40, 1, "Symmetries", true, 0);
	thicknessSld = new Slider(start=1, end=40, value=3, 0, 0, width/12, height/40, null, "Thickness");
	colorPicker = new ColorPicker(0,0, width/12, height/20, null, "Color");
	onlyRotateBtn = new ToggleButton(0,0, width/8, height/20, "Only rotate", null, false);
	clearBtn = new Button(0,0, width/8, height/20, "Clear", clearFrame);

	// Start UI
	UI.tableWidth = 1;
	UI.tableHeight = 100;
	UI.distrubute();
	clearFrame();

	// Initial conditions
	lastPoint = null;
}

function draw() {
	// Draw UI
	// Redraw the frame only in the UI part
	let uiWidth = nSymmetriesSld.getWidth() + UI.widthMargin*2 + width/32;
	fill(32);
	noStroke();
	rect(0,0, uiWidth, height);
	// Sparator from UI
	stroke(100);
	strokeWeight(1);
	line(uiWidth, 0, uiWidth, height);
	UI.update();
	UI.draw();

	// If mouse is pressed draw the new line
	if(mouseIsPressed && lastPoint != null) {
		translate(width/2 + width/12, height/2);
		scale(1,-1);

		strokeWeight(thicknessSld.value);
		colorMode(HSL, 1);
		stroke(colorPicker.getColor());
		colorMode(RGB, 255);

		// Draw first line
		let newPoint = screen2Drawing(createVector(mouseX, mouseY));
		line(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);

		// Draw the copies of the lines
		let n = nSymmetriesSld.value;
		if(n > 0) {
			for(let i = 0; i < n; i++) {
				rotate(2*PI/n);
				line(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
				if(!onlyRotateBtn.active){
					line(lastPoint.x, -lastPoint.y, newPoint.x, -newPoint.y);
				}
			}
			
		}

		lastPoint = newPoint;
	} else if (mousePressed){
		lastPoint = screen2Drawing(createVector(mouseX, mouseY));
	} else {
		lastPoint = null;
	}
}

/** 
 * @param v Coordinates to convert from 
 * 
 * @return The given coordinates translated to the drawing coordinates
 */
function screen2Drawing(v){
	return createVector(v.x - width/2 - width/12, v.y*-1 + height/2);
}

function clearFrame() {
	background(32);
	lastPoint = null;
}

function mouseDragged() {
	UI.mouseDragged();
}

function mousePressed() {
	UI.mouseClicked();
}

function keyPressed() {
  if(keyCode === 82){ // R
	clearFrame();
  }
}
