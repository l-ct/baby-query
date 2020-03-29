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
