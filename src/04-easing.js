// https://gist.github.com/gre/1650294
// meant to be chained with one of the easing functions
Number.prototype.ease = function() {
	if(this >= 0 && this <= 1)
		return this
	else
		console.error(this, 'is not between 0 and 1');
}

// assumes Number is between 0 and 1
// accelerating from zero velocity
Number.prototype.inQuad = function() {
	return this*this;
};
// decelerating to zero velocity
Number.prototype.outQuad = function() {
	return this*(2-this);
};
// acceleration until halfway, then deceleration
Number.prototype.inOutQuad = function() {
	return this<.5 ? 2*this*this : -1+(4-2*this)*this;
};
// accelerating from zero velocity 
Number.prototype.inCubic = function() {
	return this*this*this;
};
// decelerating to zero velocity
Number.prototype.outCubic = function() {
	let t = this;
	return (--t)*t*t+1;
};
// acceleration until halfway, then deceleration
Number.prototype.inOutCubic = function() {
	return this<.5 ? 4*this*this*this : (this-1)*(2*this-2)*(2*this-2)+1;
};
// accelerating from zero velocity
Number.prototype.inQuart = function() {
	return this*this*this*this;
};
// decelerating to zero velocity
Number.prototype.outQuart = function() {
	let t = this;
	return 1-(--t)*t*t*t;
};
// acceleration until halfway, then deceleration
Number.prototype.inOutQuart = function() {
	let t = this;
	return t<.5 ? 8*t*t*t*t : 1-8*(--t)*t*t*t;
};
// accelerating from zero velocity
Number.prototype.inQuint = function() {
	return this*this*this*this*this;
};
// decelerating to zero velocity
Number.prototype.outQuint = function() {
	let t = this;
	return 1+(--t)*t*t*t*t;
};
// acceleration until halfway, then deceleration
Number.prototype.inOutQuint = function() {
	let t = this;
	return t<.5 ? 16*t*t*t*t*t : 1+16*(--t)*t*t*t*t;
};
