$(function() {
	// Set up draggable containers
	$(".js-draggable").draggable({
		stack: ".js-draggable"
	});

	// Set up droppable area
	$(".js-droppable").droppable({
    accept: ".js-draggable",
    activeClass: "ui-state-hover",
    hoverClass: "ui-state-active",
    drop: function(event,ui) {
    	$(this).text("Dropped!");
    	$(this).addClass("ui-state-dropped");
    }
  });
});
