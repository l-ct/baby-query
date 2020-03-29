let $ = function(selector){
    let nodes = document.querySelectorAll(selector)
    if(nodes.length === 1){
        return nodes[0]
    }
    return nodes
}
