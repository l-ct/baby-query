let v$ = function(s){
	// s for selector
	if(/^\./.test(s))
		// class
		return document.getElementsByClassName(s.substr(1));
  else if(/^#/.test(s))
    // id
		return document.getElementById(s.substr(1));
	else
		// element
		return document.getElementsByTagName(s);
	//missing query selector
};
