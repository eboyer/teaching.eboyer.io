$(".js-togglenav").on("click", function(e){
	e.preventDefault();
	$(this).next().slideToggle(200);
});	
