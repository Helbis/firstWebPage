class Message{
	constructor(text, author){
		this._text = text;
		this._author = author;
	}
	
	get author(){
		return this._author;
	}
	set author(temp){
		this._author = temp;
	}

	get text(){
		return this._text;
	}
	set text(temp){
		this._text = temp;
	}

	toLowerCase(){
		this._text.toLowerCase;
	}	
}
