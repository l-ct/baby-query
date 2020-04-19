/*

Baby Query

provides (hopefully) helpful methods to a global $ object

*/

// function close on later file
// this is kinda hacky
(function(window, undefined){
    "use strict";
var $ = function(selector){
    var nodes = document.querySelectorAll(selector)
    if(nodes.length === 1){
        return nodes[0]
    }
    return nodes
}
$.each = function(els, iterator){
    if(length in els){
        for(var i=0; i<els.length; i++)
            iterator(els[i], i, els);
    } else {
        console.warn(els, 'not a list or collection');
        iterator(els, 0, els);
    }
};

$.eachRight = function(els, iterator){
    if(length in els){
        for(var i=els.length-1; i>=0; i--)
            iterator(els[i], i, els);
    } else {
        // not sure what the point of the warning is
        // function could be so much simpler
        console.warn(els, 'not a list or collection');
        iterator(els, 0, els);
    }
};

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
$.capitalizeFirstLetter = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};
// takes a hyphenated property
// and returns camelcased name
// will return same property name if already camelcase
$.hyphenToCamelCase = function(str) {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
};
$.addClass = function(el, className){
    this.classList.add(className);
};
$.removeClass = function(el, className){
    this.classList.remove(className);
};

$.remove = function(el){
    el.parentNode.removeChild(el);
};
$.append = function(el, content){
    el.innerHTML += content;
};
$.prepend = function(el, content){
    el.innerHTML = content + el.innerHTML;
};

$.css = function(el, property, value){
    if(value === undefined)
        return window.getComputedStyle(el)[property];
    property = $.hyphenToCamelCase(property);
    if(property in el.style)
        el.style[property] = value
    else
        console.warn(property, 'not a property');
};

$.attr = function(el, attr, value){
    if(!value)
        return el.getAttribute(attr);
    else
        return el.setAttribute(attr, value);
};

$.unwrap = function (el){
    var parent = el.parentNode;
    // move all children out of the element
    while (el.firstChild)
        parent.insertBefore(el.firstChild, el);
    // remove the empty element
    parent.removeChild(el);
};

var events = [
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
];
for(var i=0; i<events.length; i++){
    $[events[i]] = function(el, callback){
        el.addEventListener(events[i], function(event){
            callback(event, el);
        });
    };
}$.getJSON = function(url, callback){
    var request = new XMLHttpRequest();
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

// // returns a promise
// $.fetchJSON = async function(url){
//     var response = await fetch(url);
//     return await response.json();
// };

$.post = function(url, data){
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // should I stringify???
    request.send(data);
}
    window.$ = $;
})(window);
