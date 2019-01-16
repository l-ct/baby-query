
// https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
// this might not work on non-live NodeLists...
HTMLCollection.prototype.vShuffle = function(){
	for (let i=this.length-1; i >= 0; i--) {
		this[i].parentNode.appendChild(
			this[Math.random() * i | 0]
		);
	}
}

// this one is dicey!
HTMLCollection.prototype.vEach = function(callback){
	for(let i=0; i<this.length; i++){
		callback(this[i], i, this);
	}
};
HTMLCollection.prototype.vRemove = function(){
	for(let i = this.length - 1; i>=0; i--){
		this[i].vRemove();
	}
	return this;
};
HTMLCollection.prototype.vAppend = function(content){
	for(let i=0; i<this.length; i++){
		this[i].vAppend(content);
	}
	return this;
};
HTMLCollection.prototype.vPrepend = function(content){
	for(let i=0; i<this.length; i++){
		this[i].vPrepend(content);
	}
	return this;
};
HTMLCollection.prototype.vCss = function(property, value){
	for(let i=0; i<this.length; i++){
		this[i].vCss(property, value)
	}
	return this;
};
