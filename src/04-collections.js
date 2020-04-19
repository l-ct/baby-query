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

