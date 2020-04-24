const pink = "#fa00cc";
const grey = [51, 51, 51];
const fps = 30;
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

const chat = () => {

	const tempMSG = new Message(input.value(), "user");
	const response = bot.reply(tempMSG);

	messages.push(tempMSG);
	messages.push(response);

	const last = messages[messages.length - 1];
	last.y_pos = height - last.height - margin;
	
	for(let i=messages.length-2; i>=0; i--){
		messages[i].y_pos = messages[i+1].y_pos - messages[i].height - margin;
	//	console.table({"prev" : messages[i+1], "curr" : messages[i]});
	}

}

const scrolling = (event) => {
	for(let msg of messages){
		msg.update(event.deltaY * 4);
	}
}


function setup(){
	cnv = createCanvas(400, 400);
	cnv.parent(divID);
	frameRate(fps);

	button = select("#send");
	input = select("#input");
	
	cnv.mouseWheel(scrolling);
	
	x_user = 0.3 * width;
	msgWidth = width * 0.7;
}


function draw(){
	background(grey);
	cnv.style("width: 100%; height: 100%;");	
	cnv.style("padding: 0; margin: 0; border: 0;");
	
	//Show messages on the screen
	for(let msg of messages){
		msg.show();
	}	
}
