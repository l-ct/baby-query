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

