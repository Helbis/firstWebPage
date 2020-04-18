const pink = "#f900cb";
const grey = [51, 51, 51];
const divID = "screen";
let cnv;
let radius = 200;

function setup(){
	cnv = createCanvas(400, 400);
	cnv.parent(divID);
	frameRate(30);
	
//	resizeCanvas(cnv.parent().offsetWidth, cnv.parent().offsetHeight);
	//noLoop();
}


function draw(){
	resizeCanvas(cnv.parent().offsetWidth, cnv.parent().offsetHeight);
	
	background(grey);
	cnv.style("width: 100%; height: 100%;");	
	cnv.style("padding: 0; margin: 0; border: 0;");
	//cnv.width = cnv.parent().offsetWidth;
	//cnv.height = cnv.parent().offsetHeight;
	//console.table({width, height});
	
	
	stroke(255, 0, 0);
	circle(0, 0, radius);
	circle(0, height, radius);
	circle(width, 0, radius);
	circle(width, height, radius);
}
