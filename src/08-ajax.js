$.getJSON = function(url, callback){
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

$.post = function(url, data){
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    // should I stringify???
    request.send(data);
}

