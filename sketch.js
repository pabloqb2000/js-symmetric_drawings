let nSymmetriesSld;
let thicknessSld;
let colorPicker;
let onlyRotateBtn;
let showLinesBtn;
let clearBtn;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(32);

	// Create UI elements
	nSymmetriesSld = new Slider(start=2, end=24, value=6, 0, 0, width/12, height/60, 1, "Symmetries", true, 0);
	thicknessSld = new Slider(start=1, end=30, value=3, 0, 0, width/12, height/60, null, "Thickness");
	colorPicker = new ColorPicker(0,0, width/12, height/60);
	onlyRotateBtn = new ToggleButton(0,0, width/12, height/30, "Only rotate");
	showLinesBtn = new ToggleButton(0,0, width/12, height/30, "Show lines");
	clearBtn = new Button(0,0, width/12, height/30, "Clear", clearFrame);

	// Start UI
	UI.tableWidth = 1;
	UI.tableHeight = 100;
	UI.distrubute();
	clearFrame();
}

function draw() {
	// Draw UI
	// Redraw the frame only in the UI part
	let w = nSymmetriesSld.getWidth() + UI.widthMargin*2 + width/32;
	fill(32);
	rect(0,0, w, height);
	stroke(100);
	strokeWeight(1);
	line(w, 0, w, height);
	UI.update();
	UI.draw();
	translate(width/2 + width/12, height/2);
	scale(1,-1);
}

function clearFrame() {
	background(32);
	if(showLinesBtn.active) {
		let r = createVector(width/2, height/2).mag();
		strokeWeight(1);
		stroke(128);
		for(let i = 0; i < nSymmetriesSld.value; i++) {
			line(0,0,);
		}
	}
}

function mouseDragged() {
	UI.mouseDragged();
}

function mousePressed() {
	UI.mouseClicked();
}

// function keyPressed() {
//   if(keyCode === 83){
//
//   }
// }
