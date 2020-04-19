// gaussian function from p5.js
$.gaussian = function(mean, sd){
    var y1, x1, x2, w;
    do {
        x1 = (Math.random() * 2) - 1;
        x2 = (Math.random() * 2) - 1;
        w = x1 * x1 + x2 * x2;
    } while (w >= 1);
    w = Math.sqrt(-2 * Math.log(w) / w);
    y1 = x1 * w;
    var m = mean || 0;
    var s = sd || 1;
    return y1 * s + m;
};

// returns random integer inclusive of min and max
// if only one argument then between argument and 0
$.randomInt = function(min, max){
    if(max === undefined){
        max = min;
        min = 0;
    }
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// not to be confused with array.map
$.mathMap = function (target, inMin, inMax, outMin, outMax) {
    return (target - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
};
