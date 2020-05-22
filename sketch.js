let sld;
let btn;
let tggl;
let cPicker;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(32);
	sld = new Slider(start=0, end=255, value=32, 0, 0, 100, 10, null, "Background");
	btn = new Button(x=0, y=0, width=100, height=20, "Reset", resetValue);
	tggl = new ToggleButton(0,0,100,20,"Discrete", discretice);
	cPicker = new ColorPicker(0,0, 100, 10, 20);
	UI.tableWidth = 1;
	UI.tableHeight = 6;
	UI.distrubute();
}

function draw() {
	background(sld.value);
	UI.update();
	UI.draw();
	translate(width/2, height/2);
}

function resetValue() {
	sld.value = 32;
}

function discretice() {
	sld.step = (sld.step == null ? 20 : null);
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
