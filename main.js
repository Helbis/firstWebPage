const pink = "#fa00cc";
const grey = [51, 51, 51];
const fps = 2;
const divID = "screen";

let cnv;
let bot;
let button; 
let input; 


const chat = function(){
	console.log(input.value());
}


function setup(){
	cnv = createCanvas(400, 400);
	cnv.parent(divID);
	frameRate(fps);

	bot = new Bot();
	button = select("#send");
	input = select("#input");
	
	button.mousePressed(chat);

}


function draw(){
	background(grey);
	cnv.style("width: 100%; height: 100%;");	
	cnv.style("padding: 0; margin: 0; border: 0;");
	
	
}
