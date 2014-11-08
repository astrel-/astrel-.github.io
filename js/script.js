function myFunction(s) {
	var el = document.getElementsByClassName("main");
	for (var i = el.length - 1; i >= 0; i--) {
		el[i].hidden = true;
	};
	el[s].hidden = false;
}