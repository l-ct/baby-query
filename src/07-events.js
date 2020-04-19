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
}