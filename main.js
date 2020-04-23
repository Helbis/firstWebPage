const pink = "#fa00cc";
const grey = [51, 51, 51];
const fps = 10;
const divID = "box2";

//For Message class
const margin = 30;
const x_bot = margin;
let x_user; 
let msgWidth; 


let cnv;				//Canvas
let input;				//User input message
let messages = [];		//Message array
let bot = new Bot();	//Bot to talk to

let dy = 0;


const chat = () => {
	console.log(input.value());

	let tempMSG = new Message(input.value(), "user");
	console.log("Bot says: " + bot.reply(tempMSG));
}

const scrolling = (event) => {
	

	dy += event.deltaY;
}


function setup(){
	cnv = createCanvas(400, 400);
	cnv.parent(divID);
	frameRate(fps);

	button = select("#send");
	input = select("#input");
	
	//button.mousePressed(chat);
	cnv.mouseWheel(scrolling);
	
	x_user = 0.3 * width;
	msgWidth = width * 0.7;
}


function draw(){
	background(grey);
	cnv.style("width: 100%; height: 100%;");	
	cnv.style("padding: 0; margin: 0; border: 0;");
	
	//Show messages on the screen
	//for(let msg of messages){
	//	msg.show();
	//}	

	//Test
	const x1 = 30;
	const y1 = 50;
	const x2 = 200;
	const y2 = 70;

	fill(pink);
	rect(x1, y1 + dy, x2, y2);
	textSize(12);
	textAlign(LEFT, CENTER);

	let s = 'The quick brown fox jumped over the lazy dog.';
	fill(grey);
	text(s, x1, y1 + dy, x2, y2);		
}
