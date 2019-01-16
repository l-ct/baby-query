Node.prototype.vAddClass = function(className){
	this.classList.add(className);
};
// what about remove class?
Node.prototype.vRemove = function(){
	this.parentNode.removeChild(this);
};
Node.prototype.vAppend = function(elements){
	this.innerHTML = this.innerHTML + elements;
};
Node.prototype.vPrepend = function(elements){
	this.innerHTML = elements + this.innerHTML;
};
Node.prototype.vCss = function(property, value){
	if(value === undefined){
		return window.getComputedStyle(this)[property];
	}
	// takes a hyphenated property
	// and returns camelcased name
	// jQuery does it with RegEx
	property = property.toLowerCase().split('-').map(function(part, index){
		if(index !== 0)
			return part.charAt(0).toUpperCase() + part.substr(1);
		else
			return part;
	}).join('');

	if(property in this.style)
		this.style[property] = value;
	else
		console.warn(property, 'not a property')
	return this;
};
