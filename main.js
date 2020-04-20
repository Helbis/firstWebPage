const pink = "#fa00cc";
const grey = [51, 51, 51];

const divID = "screen";
const radius = 200;
let cnv;
const fps = 2;


//Rivescript
let bot = new RiveScript();
bot.loadFile([
  "brain/shortcuts.rive",
  "brain/main.rive"
]).then(console.log("Loading successful")).catch(console.error);

function setup(){
	cnv = createCanvas(400, 400);
	cnv.parent(divID);
	frameRate(fps);
}


function draw(){
	background(grey);
	cnv.style("width: 100%; height: 100%;");	
	cnv.style("padding: 0; margin: 0; border: 0;");
	

}
