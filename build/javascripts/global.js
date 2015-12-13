 /* <3 */


var eb = {};

eb.init = function() {
  eb.scrolling();
};

eb.scrolling = function() {
	$.localScroll({
		offset: -20
	});
}

$(function() { eb.init(); });
