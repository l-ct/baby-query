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
