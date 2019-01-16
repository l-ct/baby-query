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



