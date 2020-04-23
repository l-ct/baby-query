var $ = function(selector){
    var nodes = document.querySelectorAll(selector)
    if(nodes.length === 1){
        return nodes[0];
    }
    return nodes;
}

