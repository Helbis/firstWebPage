class Message{
	constructor(text, author){
		this.text = text;
		this.author = author;
		this.height = 0;
		this.y_pos = height - margin;
	}
	
	//Utility func
	toLowerCase(){ this.text = this.text.toLowerCase(); }

	update(dy){ this.y_pos += dy; }


	show(){
		if(this.author === "bot"){
			fill(pink);	
			textAlign(LEFT);
			text(this.text, x_bot, this.y_pos, msgWidth);
		}else if(this.author === "user"){
			let x_msg_user = width - margin - msgWidth;
			fill(pink);	
			textAlign(RIGHT);
			text(this.text, x_msg_user, this.y_pos, msgWidth);

		}else{
			console.log("Problem resolving this._author = " + this.author);
		}
	}
}
