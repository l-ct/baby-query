/*

Baby Query

provides (hopefully) helpful methods to a global $ object

*/
// function close on later file
// this is kinda hacky
(function(window, undefined){
    "use strict";
let $ = function(selector){
    let nodes = document.querySelectorAll(selector)
    if(nodes.length === 1){
        return nodes[0]
    }
    return nodes
}
// gaussian function from p5.js
$.gaussian = function(mean, sd){
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
$.mathMap = function (target, in_min, in_max, out_min, out_max) {
    return (target - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

$.capitalizeFirstLetter = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
$.addClass = function(el, className){
    this.classList.add(className);
};
// what about remove class?
$.remove = function(el){
    el.parentNode.removeChild(el);
};
$.append = function(el, content){
    el.innerHTML = el.innerHTML + content;
};
$.prepend = function(el, content){
    el.innerHTML = content + el.innerHTML;
};
$.css = function(el, property, value){
    if(value === undefined){
        return window.getComputedStyle(el)[property];
    }
    // takes a hyphenated property
    // and returns camelcased name
    // jQuery does it with RegEx
    property = property.toLowerCase().split('-').map(function(part, index){
        if(index !== 0)
            return part.charAt(0).toUpperCase() + part.substr(1)
        else
            return part
    }).join('')

    if(property in el.style)
        el.style[property] = value
    else
        console.warn(property, 'not a property')
    return el
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
    $[eventName] = function(el, callback){
        el.addEventListener(eventName, event => {
            callback(event, el);
        });
    };
});
$.getJSON = function(url, callback){
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

// returns a promise
$.fetchJSON = async function(url){
    let response = await fetch(url);
    return await response.json();
};

$.post = function(url, data){
    let request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // should I stringify???
    request.send(data);
}
    window.$ = $;
})(window);
