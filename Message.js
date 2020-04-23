class Message{
	constructor(text, author){
		this._text = text;
		this._author = author;
		this._height = 0;
		this._y_pos = Message.margin;
	}
	
	get author(){ return this._author; }
	set author(temp){ this._author = temp; }

	get text(){ return this._text; }
	set text(temp){	this._text = temp; }

	get length(){ return this._text.length; }

	get height(){ return this._height; }
	set height(temp){ this._height = temp; }
	calcHeight(){ this._height = ceil((this.length * textSize()) / (msgWidth)); }

	get y_pos(){ return this._y_pos; }
	set y_pos(other=0){ 
		
		if(other === 0){
			this._y_pos = margin;
		}else{
			this._y_pos = other.y_pos + other.height + margin; 
		}
	}

	//Utility func
	toLowerCase(){ this._text.toLowerCase; }

	update(dy){ this._y_pos += dy; }


	show(){
		if(this._author === "bot"){
			fill(pink);
			rect(Message.x_bot, this.y_pos, msgWidth, this.height);
	
			fill(grey);	
			textAlign(LEFT, CENTER);
			text(this.text, x_bot, this.y_pos, msgWidth);
		}else if(this._author === "user"){
			let x_msg_user = width - margin - msgWidth;

			fill(grey);
			rect(x_msg_user, this.y_pos, msgWidth, this.height);
	
			fill(pink);	
			textAlign(LEFT, CENTER);
			text(this.text, x_msg_user, this.y_pos, msgWidth);

		}else{
			console.log("Problem resolving this._author = " + this._author);
		}
	}
}
