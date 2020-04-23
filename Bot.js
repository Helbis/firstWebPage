class Bot{
	constructor(){
		this._brain = {
			//Push up
			"[push|press].?up.?" : ["Do 100 of them everyday!"],

			//Bodyrow
			"[bodyweight.?row.?|australian pull.?up.?]" : ["Great to build your lats for pullups!"],

			//Pull up
			"[pull.?up.?]" : ["Pull ups are one of the hardest standard exercise, aren't they?"],



			//Greetings
			"h[ello|ey|owdy|i]" : ["Hello", "Hey", "Howdy", "Hi"],

			//Goodbyes
			"[[good]?[bye]]|[see [y[ou|a]]]" : ["Goodbye", "See you later"],

			//Affirmation
			"y[up|es|eah]" : ["I think so too ;)"],
			
			//Negation
			"n[o|ah]" : ["So we disagree, I can respect that"]
		};
	}

	preReply(msg){
		msg.toLowerCase();
	}

	reply(msg){
		let msg = this.preReply(msg);
			print(msg);
		let result = false;	
		const keys = Object.keys(this._brain);

		for(let i=0; i<keys.length; i++){
			let rgx = new RegExp(keys[i]);

			if(rgx.text(msg.text)){
				//It matched with something
				//Reply in some way

				let temp = this._brain[keys[i]];
				result = temp[Math.floor(Math.random() * temp.length)];
				break;
			}
		}	
		
		if(!result){
			return new Message("I don't understand that", "bot");
		}else{
			return new Message(result, "bot");
		}	
	}
}
