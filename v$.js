/*

Vanilla Query

v$ adds jQuery-esque methods directly to
HTMLcollections, NodeLists, Nodes, and JS's data types
so that what is returned is Vanilla JS

*/
// function close on later file
// this is kinda hacky
(function(window, undefined){
	"use strict";
// Math is not a constructor
// gaussian function from p5.js
Math.vGaussian = function(mean, sd){
	let y1, x1, x2, w;
	do {
		x1 = (Math.random() * 2) - 1;
		x2 = (Math.random() * 2) - 1;
		w = x1 * x1 + x2 * x2;
	} while (w >= 1);
	w = Math.sqrt(-2 * Math.log(w) / w);
	y1 = x1 * w;
	let m = mean || 0;
	let s = sd || 1;
	return y1 * s + m;
};

// returns random integer inclusive of min and max
// if only one argument then between argument and 0
Math.vRandomInt = function(min, max){
	if(max === undefined){
		max = min;
		min = 0;
	}
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

// syntatictic sugar
Number.prototype.abs = function(){
	return Math.abs(this);
}

Number.prototype.map = function (in_min, in_max, out_min, out_max) {
	return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};



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
let v$ = function(s){
	// s for selector
	if(/^\./.test(s))
		// class
		return document.getElementsByClassName(s.substr(1));
  else if(/^#/.test(s))
    // id
		return document.getElementById(s.substr(1));
	else
		// element
		return document.getElementsByTagName(s);
	//missing query selector
};
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
// syntactic sugar for
// browser events
[
	'abort',
	'beforeinput',
	'blur',
	'click',
	'compositionstart',
	'compositionupdate',
	'compositionend',
	'dblclick',
	'error',
	'focus',
	'focusin',
	'focusout',
	'input',
	'keydown',
	'keypress',
	'keyup',
	'load',
	'mousedown',
	'mouseenter',
	'mouseleave',
	'mousemove',
	'mouseout',
	'mouseover',
	'mouseup',
	'resize',
	'scroll',
	'select',
	'unload',
	'wheel'
].forEach(function(eventName){
	// vM for vanilla-method
	let vM = 'v' + eventName.charAt(0).toUpperCase() + eventName.substr(1);
	window[vM] = Node.prototype[vM] = function(callback){
    // this may not transpile correctly
		this.addEventListener(eventName, eventObj => {
			callback(eventObj, this);
		});
	};
	HTMLCollection.prototype[vM] = function(callback){
		for(let i = 0; i<this.length; i++){
      // this[i] may not transpile correctly
			this[i].addEventListener(eventName, eventObj => {
				callback(eventObj, this[i]);
			});
		}
		return this;
	};
});
// assumes getting JSON
v$.get = function(url, callback){
	let request = new XMLHttpRequest();
	request.onload = function() {
		if (this.status >= 200 && this.status < 400) {
			callback(JSON.parse(this.response), this);
		} else {
			console.error('getJson request failed', this);
		}
	};
	request.onerror = function() {
		console.error('connection error', this);
	};
	request.open('GET', url);
	request.send();
};
v$.post = function(url, data){
	let request = new XMLHttpRequest();
	request.open('POST', url);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	// should I stringify???
	request.send(data);
}
// can't deep copy for any array structure

// https://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript-and-de-duplicate-items
Array.prototype.vUnique = function() {
    let a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }
    return a;
};

Array.prototype.vShuffle = function(){
  let a = this.concat();
	let j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
};


// though all these functions are available in lo-dash ...	window.v$ = v$;
})(window);
