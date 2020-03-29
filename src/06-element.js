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
